import React, { useState, useEffect } from "react";

import Head from "next/head";
import Bluebar from "../../components/bluebar";
import NavigBar from "../../components/navigbar";
import ElementTitle from "../../components/elementtitle";
import YearLine from "../../components/yearline";
import ElementTimeline from "../../components/elementtimeline";
import Positioning from "../../components/positioning";
import ElementPatterns from "../../components/elementpatterns";
import CodeIdentifiers from "../../components/codeidentifiers";
import elements, { bing } from "../../data/elements"; // elements - google elements, bing - bing elements

export async function getStaticProps(context) {
  const elname = context.params.elname;
  var element_google = Object.entries(elements).find((object) => {
    return object[0] == elname && object[1].engine == "G";
  });
  var element_bing = Object.entries(bing).find((object) => {
    return object[0] == elname && object[1].engine == "B";
  });
  return {
    props: {
      element_google: element_google ? element_google[1] : null,
      element_bing: element_bing ? element_bing[1] : null,
    }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const paths = Object.entries(elements).map((elm) => {
    return { params: { elname: elm[0] } };
  });

  Object.entries(bing).map((elm) => {
    paths.push({ params: { elname: elm[0] } });
  });

  return {
    paths,
    fallback: false, // return 404 when inexistent
  };
}

export default function ElementPage({ element_google, element_bing }) {
  const [element, setElement] = useState(
    element_google ? element_google : element_bing
  );
  const [engine, setEngine] = useState(element_google ? "G" : "B");
  useEffect(() => {
    engine == "G" ? setElement(element_google) : setElement(element_bing);
  }, [engine]);

  const changeEngine = () => {
    engine == "G" ? setEngine("B") : setEngine("G");
  };

  //const router = useRouter();
  //const { elname } = router.query;
  // var element_temp = Object.entries(elements).find((object) => {
  //   return object[0] == elname;
  // });
  //var element = elements.null;
  //investigate and probabily change to getStaticProps
  // if (element_temp !== undefined) {
  //   element = element_temp[1];
  // }

  return (
    <div>
      <Head>
        <title>SERP Evolution</title>
        <meta
          name="A study on the evolution of user interfaces"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Bluebar />
      <NavigBar pagename="Elements" />
      <div className="container mt-3 mb-3">
        <div className="d-flex flex-column align-items-center">
          <div className="element-engine">
            <img
              src={"../assets/" + (engine == "G" ? "google" : "bing") + ".png"}
            />
          </div>
          <ElementTitle title={element.name} type={element.type} />
          <button
            onClick={changeEngine}
            type="button"
            className="btn btn-light mb-2"
            disabled={element_google && element_bing ? false : true}
          >
            {element_google && element_bing
              ? "Change engine"
              : "Exclusive element"}
          </button>
        </div>
        <div className="sectiontitle">Presence timeline</div>
        <YearLine present={element.presence} />

        <div className="row mt-4">
          <div className="col-12 col-lg-6">
            <div className="sectiontitle">Evolution</div>
            <ElementTimeline serpelement={element} />
          </div>
          <div className="col-12 col-lg-6">
            <div className="sectiontitle">Positioning</div>
            <Positioning
              shortname={element.shortname}
              engine={element.engine}
              available={element.positioning}
            />
            <div className="sectiontitle mt-4">HTML Identifiers</div>
            <CodeIdentifiers identifiers={element.identifiers} />
            <div className="sectiontitle mt-4">Design Patterns</div>
            <ElementPatterns elm_patterns={element.patterns} />
          </div>
        </div>
      </div>
    </div>
  );
}
