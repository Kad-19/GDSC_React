import React from "react";

const myObjects = [
  {
    name: "john",
    year: 49,
  },
  {
    name: "doe",
    year: 45,
  },
  {
    name: "Kalkidan",
    year: 34,
  },
  {
    name: "Berhane",
    year: 76,
  },
  {
    name: "Hawoltu",
    year: 56,
  },
  {
    name: "Edom",
    year: 23,
  },
  {
    name: "Getenet",
    year: 12,
  },
  {
    name: "Abebe",
    year: 82,
  },
  {
    name: "Balcha",
    year: 78,
  },
  {
    name: "Asebe",
    year: 18,
  },

];

const Members = () => {
  return (
    <div>
        <h2>Name : Year</h2>
      <ol>
        {myObjects.map((person) => (
          <li>
            {person.name} : {person.year}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Members;
