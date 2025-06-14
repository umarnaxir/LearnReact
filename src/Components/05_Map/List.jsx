import React from 'react';

function StudentList() {
  const students = [
    { id: 1, name: 'Umar', age: 21 },
    { id: 2, name: 'Furqan', age: 20 },
    { id: 3, name: 'Sami', age: 22 }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h3>🎓 Student List</h3>
      {students.map((student) => (
        <div key={student.id} style={{ marginBottom: "10px" }}>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default StudentList;
