import React from "react";

const Character = ({ people }) => {
  return (
    <div>
      <center>
        <h1>Star Wars List</h1>
      </center>
      {people.map((contact) => (
        <div>
          <div>
            <h3>Name: {contact.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Character;
