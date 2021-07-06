import patterns from "../data/patterns";

export default function ElementPatterns({ elm_patterns }) {
  if (!elm_patterns.length) {
    return <p>There are no patterns applied to this element.</p>;
  } else {
    return (
      <div className="d-flex flex-wrap">
        {elm_patterns.map((element, key) => {
          {
            var pat = Object.entries(patterns).find((object) => {
              return object[0] == element;
            });
          }
          const css_image = "url(../" + pat[1].css_image + ")";
          return (
            <a href={"/serpevolution/patterns/" + pat[1].shortname} key={key}>
              <div
                className="applied-pattern d-flex"
                style={{
                  backgroundImage: css_image,
                  backgroundSize: "cover",
                }}
              >
                {pat[1].name}
              </div>
            </a>
          );
        })}
      </div>
    );
  }
}
