import { useEffect, useState } from 'react'
import './Frients.css'
import Allfriends from './Allfriend'
export default function Myfriends(){
    const[friends,setFriends]= useState([])
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res =>res.json())
      .then(data =>setFriends(data))
  },[])

    return(
        <div className='box'>
          <h3>Friends:{friends.length}</h3>
         {
            friends.map(friend =><Allfriends key={friend.id} friend={friend}  />)
         }


        <button className='bookingbtn'>Booking Now </button>
        </div>

        
    )
}