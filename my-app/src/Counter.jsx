import { useState } from "react";

export default function Counter(){
const[count,setCount]=useState(0);

const handleAdd = ()  =>{
    const newCount = count + 1;
    setCount(newCount)
}
const handleReduse = () =>{
    const  newCount = count -1;
    setCount(newCount)
}


return(
    <div className="">
        <h3>Counter:{count}</h3>
        <button onClick={handleAdd} className="book">Add</button>
        <button onClick={handleReduse} className="book">Reduse</button>
    </div>
)
}