import React from "react";

function Person(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <h3>Gender: {props.gender}</h3>
      <div>
        Homeworld: <img src={props.homeworld} alt={props.homeworld} />
      </div>
    </div>
  );
}

export default Person;
