import React from "react";

function StudentList() {
  const students = [
    { name: "Umar", email: "umar@gmail.com", contact: 9876554321 },
    { name: "Khalid", email: "khalid@gmail.com", contact: 12234567890 },
    { name: "Owais", email: "owais@gmail.com", contact: 7890654321 },
    { name: "OTL", email: "otl@gmail.com", contact: 9875632568 },
  ];

  return (
    <div>
      <h4>Student List</h4>

      <table border={5}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {students.map((data) => (
            <tr>
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
