import React, { useState, useEffect } from "react";

const initialPeople = [
  { id: "1", name: "Wajahat", age: 23 },
  { id: "2", name: "Imran", age: 24 },
  { id: "3", name: "Owais", age: 25 },
  { id: "4", name: "Umar", age: 26 },
];

function CombineAge() {
  const [people, setPeople] = useState(initialPeople);
  const [totalAge, setTotalAge] = useState(0);

  useEffect(() => {
    let sum = 0;
    for (let person of people) {
      sum += Number(person.age);
    }
    setTotalAge(sum);
  }, [people]);

  const handleAgeChange = (e, id) => {
    const updatedPeople = people.map((person) =>
      person.id === id ? { ...person, age: Number(e.target.value) } : person
    );
    setPeople(updatedPeople);
  };

  return (
    <div>
      <h2>Total Combined Age: {totalAge}</h2>
      {people.map((person) => (
        <div key={person.id}>
          <label>{person.name}'s Age: </label>
          <input
            type="number"
            value={person.age}
            onChange={(e) => handleAgeChange(e, person.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default CombineAge;
