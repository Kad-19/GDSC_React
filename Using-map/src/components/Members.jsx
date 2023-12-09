import React from "react";

const myObjects = [
  {
    name: "john",
    year: 4,
  },
  {
    name: "doe",
    year: 3,
  },
  {
    name: "Abe",
    year: 8,
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
