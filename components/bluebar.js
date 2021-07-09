import Image from "next/image";

export default function Bluebar() {
  return (
    <div className="topBar">
      <div className="titleRow d-flex flex-row">
        <div>Web</div>
        <div className="searchWord d-flex flex-row">
          <div style={{ color: "#fff" }}>S</div>
          <div style={{ color: "#EA4335" }}>e</div>
          <div style={{ color: "#FBBC05" }}>a</div>
          <div style={{ color: "#fff" }}>r</div>
          <div style={{ color: "#34A853" }}>c</div>
          <div style={{ color: "#EA4335" }}>h</div>
        </div>
        <div>Engines</div>
      </div>
      <div className="queryBar d-flex flex-row">
        <div>A study on the evolution of user interfaces</div>
        <img src="/serpevolution/assets/cross-search.png" alt="search" />
      </div>
    </div>
  );
}
