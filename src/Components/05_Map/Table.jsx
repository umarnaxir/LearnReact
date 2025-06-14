import React from "react";

function StudentList() {
  const students = [
    { name: "Umar", email: "umar@gmail.com", contact: 9999988888, },
    { name: "Khalid", email: "khalid@gmail.com", contact: 9999988888 },
    { name: "Owais", email: "owais@gmail.com", contact: 9999988888 },
    { name: "OTL", email: "otl@gmail.com", contact: 9999988888 },
  ];

  return (
    <div>
      <h4>Student List</h4>

      <table border={5}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email ID</th>
            <th>Phone NO</th>
          </tr>
        </thead>
        <tbody>
          {students.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


// <p>Name:{Data.name},Email:{Data.email},Contact No:{Data.contact}</p>

export default StudentList;
