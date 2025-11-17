import React, { useState } from 'react'

 
const arrWork = () => {
  setUsers((prevUsers) => {
    return [...prevUsers, 40]
  })
  return (
    <div>
      <h1>Users: {users.join(", ")}</h1>
      <h1>Value of user is {username}</h1>
      <h1>value of a is {a}</h1>
      <button onClick={changeA}>Click</button>
    </div>
  )
}


export default App