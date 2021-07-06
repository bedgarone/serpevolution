import Head from "next/head";
import Bluebar from "../components/bluebar";
import NavigBar from "../components/navigbar";
import Timeline from "../components/timeline";

import interfaces_evol from "../data/interfaces";

export default function VisualEvolution() {
  return (
    <div>
      <Head>
        <title>SERP Evolution - Overall Interfaces Design</title>
        <meta
          name="A study on the evolution of user interfaces"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Bluebar />
      <NavigBar />
      <div className="container mt-3 mb-3">
        <div className="row mt-4">
          <div className="main-title text-center">Overall Inteface Design</div>
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column align-items-center">
              <div className="element-engine">
                <img src={"./assets/google.png"} />
              </div>
            </div>
            <Timeline entries={interfaces_evol.google} path="interfaces/G" />
          </div>
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column align-items-center">
              <div className="element-engine">
                <img src={"./assets/bing.png"} />
              </div>
            </div>
            <Timeline entries={interfaces_evol.bing} path="interfaces/B" />
          </div>
        </div>
      </div>
    </div>
  );
}
