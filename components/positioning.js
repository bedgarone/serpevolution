export default function Positioning({ shortname, engine }) {
  return (
    <div className="centered-containter">
      <img className="positioning model" src="../assets/test_serptop.png" />
      <img
        className="positioning"
        src={"../assets/elements/" + engine + "/" + shortname + "/pos.png"}
      />
    </div>
  );
}
