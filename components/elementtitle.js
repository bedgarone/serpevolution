export default function ElementTitle({ title, type }) {
  return (
    <div className="elementtitlerow">
      <div className={"elementtitle " + type}>{title}</div>
    </div>
  );
}
