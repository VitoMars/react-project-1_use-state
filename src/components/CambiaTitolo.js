import React, { useState } from "react";

const CambiaTitolo = () => {
  const [titolo, setTitolo] = useState("Hello World!");
  const cambiaTitolo = () => {
    if (titolo === "Hello World!") {
      setTitolo("React Magic!");
    } else {
      setTitolo("Hello World!");
    }
  };

  return (
    <div className="text-center">
      <h2>{titolo}</h2>
      <button
        type="button"
        className="btn btn-info shadow my-3"
        onClick={cambiaTitolo}
      >
        Cambiami
      </button>
    </div>
  );
};

export default CambiaTitolo;
