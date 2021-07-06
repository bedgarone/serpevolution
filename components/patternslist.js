export default function PatternsList({ patterns }) {
  return (
    <div className="d-flex flex-wrap">
      {patterns.sort().map((pat, key) => {
        const css_image = "url(./" + pat[1].css_image + ")";
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
