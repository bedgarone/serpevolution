export default function CodeIdentifiers({ identifiers }) {
  if (!identifiers.length) {
    return <p>There are no code identifiers for this element.</p>;
  } else {
    return (
      <div className="ids-container">
        {identifiers.map((ident, key) => {
          return (
            <div className="id-box" key={key}>
              <div className="id-code">{ident[0]}</div>
              <div className="id-years">{ident[1]}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
