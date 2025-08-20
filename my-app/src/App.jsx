import { useState } from 'react'
import './App.css'
import Tool from './tool'
import BookStore from './Books'

function App() {
  return (
    <>
      <h1>Vite + React</h1>

      <Tool task="learn react" isdone={true}></Tool>

      <Person />
      <Person />

      {/* Dynamic Students */}
      <Student name="Abid" age={20} />
      <Student name="Rahim" age={22} />

      {/* Dynamic Developers */}
      <Devloper classroom="1" grades={5.00} />
      <Devloper classroom="2" grades={4.75} />
    </>
  )
}

function Person() {
  const age = 25
  const money = 2000
  const person = { name: 'Abid', age: 12 }
  return (
    <>
      <h3>I am a person with age: {age} and money: {money}</h3>
      <h3>I am {person.name} with {person.age}</h3>
    </>
  )
}

function Student({ name, age }) {
  return (
    <div className='student' style={{ margin: '10px', padding: '10px', border: '1px solid blue', borderRadius: '10px' }}>
      <h3>Student Info:</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}

function Devloper({ classroom, grades }) {
  const devloperstyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px',
  }
  return (
    <div style={devloperstyle}>
      <h3>Class: {classroom}</h3>
      <p>Grades: {grades}</p>
      <p>Dhaka is a beautiful city</p>
    </div>
  )
}

export default App
