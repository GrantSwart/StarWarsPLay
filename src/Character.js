import React from "react";

const Character = ({ people }) => {
  return (
    <div>
      <center>
        <h1>Star Wars List</h1>
      </center>
      {people.map((contact) => (
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Name: {contact.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Character;
