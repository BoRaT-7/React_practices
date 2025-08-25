import { useEffect, useState } from "react";

export default function Countries() {
    const [countries,setcountryes] = useState ([]);
    useEffect(()=>{
     fetch('https://restcountries.com/v3.1/all')
     .then(res => res.json())
     .then(data =>setcountryes(data));
    },[])
  return (
    <div>
      <h3>Good Country:{countries.length}</h3>
    </div>
  );
}
