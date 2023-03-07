import React, { useState } from "react";

const StateObject = () => {
  const [person, setPerson] = useState({
    name: "Dario",
    age: 24,
    saluto: "Ciao",
  });

  const cambiaEta = (eta) => {
    setPerson({
      ...person,
      age: eta + 1,
      saluto: "Ciao ho fatto gli anni",
    });
  };

  return (
    <div className="item shadow">
      <div className="text-left">
        <h5>{person.name}</h5>
        <h5>{person.age}</h5>
        <h6>{person.saluto}</h6>
      </div>
      <button className="btn btn-primary" onClick={() => cambiaEta(person.age)}>
        Aumenta l'età
      </button>
    </div>
  );
};

export default StateObject;
