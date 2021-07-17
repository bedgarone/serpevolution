export default function Timeline({ entries, path }) {
  return (
    <ul className="timeline centered-containter design-timeline">
      {entries.map((element, key) => {
        const year = element.substring(0, 4);
        return (
          <li key={key}>
            <span className="badge rounded-pill bg-secondary timeline-year">
              {year}
            </span>
            <div className="timeline-image interface">
              <img src={"./assets/" + path + "/" + element} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
