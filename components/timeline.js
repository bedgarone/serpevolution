export default function Timeline({ serpelement }) {
  return (
    <ul className="timeline centered-containter">
      {serpelement.evolution.map((element, key) => {
        const year = element.substring(0, 4);
        return (
          <li key={key}>
            <span className="badge rounded-pill bg-secondary timeline-year">
              {year}
            </span>
            <div className="timeline-image">
              <img
                src={
                  "../assets/elements/" +
                  serpelement.engine +
                  "/" +
                  serpelement.shortname +
                  "/" +
                  element
                }
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
