export default function Timeline() {
  return (
    <ul className="timeline centered-containter">
      <li>
        <span className="badge rounded-pill bg-secondary timeline-year">
          2009
        </span>
        <div className="timeline-image">
          <img src="/assets/G20090302084358-1_manual.png" />
        </div>
        <p>How is it already 9:00? Just how???</p>
      </li>
      <li>
        <span className="badge rounded-pill bg-secondary timeline-year">
          2013
        </span>
        <div className="timeline-image">
          <img src="/assets/G20131030144752_1.png" />
        </div>
        <p>Few more minutes of sleep won't do anyone any harm..</p>
      </li>
      <li>
        <span className="badge rounded-pill bg-secondary timeline-year">
          2019
        </span>
        <div className="timeline-image">
          <img src="/assets/G20190702093457_1.png" />
        </div>
        <p>Get up </p>
      </li>
    </ul>
  );
}
