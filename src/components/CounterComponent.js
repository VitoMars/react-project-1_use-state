import React, { useState } from "react";

const CounterComponent = () => {
  const [contatore, setContatore] = useState(0);

  const aumenta = () => {
    setContatore(contatore + 1);
  };

  const diminuisci = () => {
    setContatore(contatore - 1);
  };

  const reset = () => {
    setContatore(0);
  };

  return (
    <div className="item shadow rounded">
      <h3>{contatore}</h3>
      <div className="d-flex">
        <button className="btn btn-info m-2" onClick={diminuisci}>
          -
        </button>
        <button className="btn btn-info m-2" onClick={aumenta}>
          +
        </button>
      </div>
      <button className="btn btn-danger my-2" onClick={reset}>
        Resetta
      </button>
    </div>
  );
};

export default CounterComponent;
