export default function ElementBanners({ elements }) {
  return (
    <div className="wrap-container">
      {elements.map((elm, key) => {
        return (
          <div className="id-box" key={key}>
            <div className="id-code">{elm[1].name}</div>
          </div>
        );
      })}
    </div>
  );
}
