/* eslint-disable react/jsx-key */
//import { useState } from 'react';
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'



function App() {
const [users,setusers]= useState([])
const [name,setName] = useState()
const[age,setAge] = useState()

  useEffect(()=> {
    axios.get('http://localhost:3001/getUsers')
    .then((users)=> {
      console.log(users)
      setusers(users.data)

    }).catch(err => console.log(err))

  } , [])
   
  const Submit = ()=>{
    axios.post('http://localhost:3001/createUser', {name , age })
    .then((users)=> {
      console.log(users)
      

    }).catch(err => console.log(err))


  }
  return (
    
    <div className='center'>
      <h2>First MERN (Mongo, Express ,React, Node) App</h2>
      {
        users.map(user => {
          return <div>
            {/* <h3>{user.name}</h3>
            <h3>{user.age}</h3> */}
            <h3>{user.name}</h3>
            <h3>{user.age}</h3>
          </div>
        })
      }
    <br />
    <input type="text" onChange={(e) => setName(e.target.value)} />
    <input type="text" onChange={(e) => setAge(e.target.value)} />
    <button onClick={Submit}>Create User</button>
    </div>
  )
}

export default App
