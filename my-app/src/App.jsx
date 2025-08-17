import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
      <Student />
      <Devloper />
    </>
  )
}

function Person() {
  const age = 25;
  const money = 2000;
  const person = { name: 'abid', age: 12 }
  return (
    <>
      <h3>I am a person with age: {age} and money: {money}</h3>
      <h3>I am {person.name} with {age}</h3>
    </>
  )
}

function Student() {
  return (
    <div className='student'>
      <h3>This is student</h3>
      <p>Name:</p>
      <p>Age:</p>
    </div>
  )
}

function Devloper() {
  const devloperstyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px',
  }
  return (
    <div style={devloperstyle}>
      <h3>Go to Dhaka</h3>
      <p>Dhaka is a beautiful city</p>
    </div>
  )
}

export default App

