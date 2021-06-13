import React from "react";

const YearLine = ({ present }) => {
  let years = [];
  for (let i = 2000; i < 2021; i++) {
    years.push(i);
  }
  return (
    <>
      <div className="sectiontitle">Presence timeline</div>
      <div className="d-flex yearline">
        {years.map((element, key) => {
          return (
            <button
              className={
                "btn " +
                (present.find((year) => year == element)
                  ? "btn-secondary"
                  : "btn-link") +
                " yearbtn"
              }
              key={key}
            >
              {element}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default YearLine;
