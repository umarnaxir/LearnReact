import React from 'react'

function User({name, phone, email}) {
  return (
    <div>
       <h2>User Component</h2> 
       <hr></hr>
       <h3>Name: {name}</h3>
       <h3>Phone No: {phone}</h3>
       <h3>Email ID: {email}</h3>
       <hr></hr>
    </div>
  )
}

export default User