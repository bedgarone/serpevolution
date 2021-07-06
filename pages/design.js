import React, { useState } from "react";

import Head from "next/head";
import Bluebar from "../components/bluebar";
import NavigBar from "../components/navigbar";
import Timeline from "../components/timeline";

import interfaces_evol, {
  logo_evol,
  statistics_evol,
  navigation_evol,
} from "../data/interfaces";

export function dynamicTimeline(category, engine) {
  const entries_engine =
    engine == "G"
      ? [
          interfaces_evol.google,
          logo_evol.google,
          statistics_evol.google,
          navigation_evol.google,
        ]
      : [
          interfaces_evol.bing,
          logo_evol.bing,
          statistics_evol.bing,
          navigation_evol.bing,
        ];

  switch (category) {
    case "o":
      return (
        <Timeline entries={entries_engine[0]} path={"interfaces/" + engine} />
      );

    case "i":
      return (
        <Timeline entries={entries_engine[1]} path={"identity/" + engine} />
      );

    case "s":
      return (
        <Timeline
          entries={entries_engine[2]}
          path={"searchstatistics/" + engine}
        />
      );
    case "n":
      return (
        <Timeline entries={entries_engine[3]} path={"navigation/" + engine} />
      );

    default:
      break;
  }
}

export default function Design() {
  const [category, setCategory] = useState("o");
  const categories = [
    ["Overall Interfaces", "#5388ad", "o"],
    ["Identity", "#e10b0b", "i"],
    ["Search Statistics", "#b8b8b8", "s"],
    ["Navigation & User Inputs", "#e6952d", "n"],
  ];

  var cat_selected = categories.find((cat) => {
    return cat[2] == category;
  });

  return (
    <div>
      <Head>
        <title>SERP Evolution - Design</title>
        <meta
          name="A study on the evolution of user interfaces"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Bluebar />
      <NavigBar pagename="Design" />
      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="main-title text-center">Design</div>
          <div className="col-12 d-flex justify-content-center align-items-center flex-wrap mt-3 mb-2">
            {categories.map((cat) => {
              return (
                <div
                  className={
                    "category-badge " + (category == cat[2] ? "selected" : "")
                  }
                  style={{ backgroundColor: cat[1] }}
                  onClick={() => setCategory(cat[2])}
                >
                  {cat[0]}
                </div>
              );
            })}
          </div>
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column align-items-center">
              <div className="element-engine">
                <img src={"./assets/google.png"} />
              </div>
            </div>
            {dynamicTimeline(category, "G")}
          </div>
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column align-items-center">
              <div className="element-engine">
                <img src={"./assets/bing.png"} />
              </div>
            </div>
            {dynamicTimeline(category, "B")}
          </div>
        </div>
      </div>
    </div>
  );
}
