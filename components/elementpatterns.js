export default function ElementPatterns() {
  return (
    <div className="d-flex flex-column">
      <div
        className="applied-pattern d-flex"
        style={{
          backgroundImage: "url(../assets/patterns/mtabs.png)",
          backgroundSize: "cover",
        }}
      >
        Module Tabs
      </div>
      <div
        className="applied-pattern d-flex"
        style={{
          backgroundImage: "url(../assets/patterns/news.png)",
          backgroundSize: "cover",
        }}
      >
        News Stream
      </div>
    </div>
  );
}
