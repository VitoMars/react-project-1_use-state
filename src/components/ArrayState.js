import React, { useState } from "react";
import { data } from "../data";

const ArrayState = () => {
  const [people, setPeople] = useState(data);

  const deletePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <React.Fragment>
      {people.map((people) => {
        const { id, name } = people;
        return (
          <div key={id} className="item shadow">
            <h5>{name}</h5>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => deletePerson(id)}
            >
              Elimina
            </button>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ArrayState;
