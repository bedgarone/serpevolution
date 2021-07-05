export default function ElementBannersSmall({ elements, year }) {
  if (year == undefined) {
    year == 1000; //never will match First Time
  }
  return (
    <div className="wrap-container">
      {elements.map((elm, key) => {
        return (
          <a href={"../elements/" + elm[1].shortname} key={key}>
            <div className={"element-box " + elm[1].type}>
              <div className="element-name">{elm[1].name}</div>
              {year == elm[1].presence[0] ? (
                <div className="element-introduction">First Time</div>
              ) : null}
            </div>
          </a>
        );
      })}
    </div>
  );
}
