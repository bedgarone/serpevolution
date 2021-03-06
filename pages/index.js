import Head from "next/head";
import Bluebar from "../components/bluebar";
import NavigBar from "../components/navigbar";
import Link from "next/link";

export default function Home() {
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
      <NavigBar pagename="Home" />
      <div className="container mt-3 mb-3">
        <div className="row mt-4">
          <div className="col-12">
            <div className="index-container flex-wrap">
              <Link href="/elements">
                <div className="index-item d-flex">
                  <div className="index-image">
                    <img src="/serpevolution/assets/index/elements.png" />
                  </div>
                  <div className="d-flex flex-column index-text">
                    <div className="index-title">Elements</div>
                    <div className="index-subtitle">
                      Explore the different SERP elements
                    </div>
                    <div className="index-description">
                      Each element page consists of an year line with the
                      presence of this element and a timeline with screenshots,
                      both over time. In adition, it is possible to see the
                      positioning of this element in SERP, a list of HTML
                      identifiers and a list of applied design patterns. Click
                      on a pattern/year to navigate to its respective page.
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/patterns">
                <div className="index-item d-flex">
                  <div className="index-image">
                    <img src="/serpevolution/assets/index/patterns.png" />
                  </div>
                  <div className="d-flex flex-column">
                    <div className="index-title">Design Patterns</div>
                    <div className="index-subtitle">
                      Learn the different design patterns used in SERP
                    </div>
                    <div className="index-description">
                      Each pattern page provides a description, gallery and all
                      the elements, by search engine, where the respective
                      pattern is applied.
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/timeline/2010">
                <div className="index-item d-flex">
                  <div className="index-image">
                    <img src="/serpevolution/assets/index/year.png" />
                  </div>
                  <div className="d-flex flex-column">
                    <div className="index-title">Year Comparison</div>
                    <div className="index-subtitle">
                      Compare the existance of SERP elements by year
                    </div>
                    <div className="index-description">
                      Each year in this timeline contains a list of existing
                      elements per search engine. Elements are highlighted if
                      they were launched in the respective year as "First Time".
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/timeline">
                <div className="index-item d-flex">
                  <div className="index-image">
                    <img src="/serpevolution/assets/index/timeline.png" />
                  </div>
                  <div className="d-flex flex-column">
                    <div className="index-title">Overall Timeline</div>
                    <div className="index-subtitle">
                      Compare in time the main changes occured in both SERP
                    </div>
                    <div className="index-description">
                      Two timelines side by side are presented with the main
                      changes ocurred in SERP. It is possible to filter this
                      events by element introduction or navigation items.
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/layout">
                <div className="index-item d-flex">
                  <div className="index-image">
                    <img src="/serpevolution/assets/index/layout.png" />
                  </div>
                  <div className="d-flex flex-column">
                    <div className="index-title">Layout Evolution</div>
                    <div className="index-subtitle">
                      Compare SERP layout for major categories
                    </div>
                    <div className="index-description">
                      SERP consists of various elements and components that were
                      divided into categories. All the elements of each category
                      were combined and colored to analyse the overall layout
                      produced in SERP. Each category page compares both search
                      engines and, for each, presents the image result and an
                      animated GIF to provide an evolutionary context.
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/design">
                <div className="index-item d-flex">
                  <div className="index-image">
                    <img src="/serpevolution/assets/index/design.png" />
                  </div>
                  <div className="d-flex flex-column">
                    <div className="index-title">Design Evolution</div>
                    <div className="index-subtitle">
                      Analyse how SERP interface design evolved
                    </div>
                    <div className="index-description">
                      This section consists of screenshot timelines to assess
                      how the entire interface evolved over time. Identity,
                      search statistics and navigation sections of the interface
                      have also a dedicated timeline.
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
