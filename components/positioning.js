export default function Positioning({ shortname, engine, available }) {
  if (!available) {
    return <p>No positioning results due to lack of considerable presences.</p>;
  } else {
    return (
      <div className="centered-containter">
        <img className="positioning model" src="../assets/test_serptop.png" />
        <img
          className="positioning result"
          src={"../assets/elements/" + engine + "/" + shortname + "/pos.png"}
        />
      </div>
    );
  }
}
