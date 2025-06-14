import React from 'react';
function ArrayProps() {
  const user = {
    name: "Umar",
    skills: ["React", "Node.js", "Python"]
  };

  return <UserCard user={user} />;
}

function UserCard({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <ul>
        {user.skills.map((skill, index) => <li key={index}>{skill}</li>)}
      </ul>
    </div>
  );
}
export default ArrayProps;