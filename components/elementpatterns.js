import patterns from "../data/patterns";

export default function ElementPatterns({ elm_patterns }) {
  return (
    <div className="d-flex flex-column">
      {elm_patterns.map((element, key) => {
        {
          var pat = Object.entries(patterns).find((object) => {
            return object[0] == element;
          });
        }
        return (
          <div
            className="applied-pattern d-flex"
            style={{
              backgroundImage: pat[1].css_image,
              backgroundSize: "cover",
            }}
            key={key}
          >
            {pat[1].name}
          </div>
        );
      })}
    </div>
  );
}
