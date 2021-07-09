import Head from "next/head";
import Bluebar from "../components/bluebar";
import NavigBar from "../components/navigbar";
import PatternsList from "../components/patternslist";
import patterns from "../data/patterns";

export default function Patterns() {
  const valid_patterns = Object.entries(patterns).filter((elm) => {
    return elm[1].name !== "";
  });
  return (
    <div>
      <Head>
        <title>SERP Evolution - Design Patterns</title>
        <meta
          name="A study on the evolution of user interfaces"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Bluebar />
      <NavigBar pagename="Patterns" />
      <div className="container mt-3 mb-3">
        <div className="col-12">
          <div className="main-title text-center">Design Patterns</div>
          <div className="sectiontitle">Patterns List</div>
          <PatternsList patterns={valid_patterns} />
        </div>
      </div>
    </div>
  );
}