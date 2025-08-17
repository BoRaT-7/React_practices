import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>

      
    </>
  )
}

function Person() {
  const age = 25;
  const money = 2000;
  const person ={name:'abid', age:12}
  return  ( 
  <>
   <h3>I am a person with age: {age} and money: {money}</h3>
   <h3>I am {person.name} with {age}</h3>
   </>
   )

}

export default App
