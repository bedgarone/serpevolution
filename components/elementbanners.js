export default function ElementBanners({ elements }) {
  return (
    <div className="wrap-container">
      {elements.map((elm, key) => {
        var elm_image =
          "./assets/elements/" +
          elm[1].engine +
          "/" +
          elm[1].shortname +
          "/" +
          elm[1].evolution[elm[1].evolution.length - 1];
        return (
          <a href={"./elements/" + elm[1].shortname}>
            <div className={"element-box " + elm[1].type} key={key}>
              <div className="element-name">{elm[1].name}</div>
              <img src={elm_image} />
            </div>
          </a>
        );
      })}
    </div>
  );
}
