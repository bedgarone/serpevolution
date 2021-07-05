import React from "react";

const YearLine = ({ present }) => {
  let years = [];
  for (let i = 2000; i < 2021; i++) {
    years.push(i);
  }
  return (
    <>
      <div className="d-flex yearline">
        {years.map((element, key) => {
          return (
            <a href={"/serpevolution/timeline/" + element} key={key}>
              <button
                className={
                  "btn " +
                  (present.find((year) => year == element)
                    ? "btn-secondary"
                    : "btn-link") +
                  " yearbtn"
                }
              >
                {element}
              </button>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default YearLine;
