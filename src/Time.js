import {useState} from "react"

export default function GetState(){
  const[date, setDate] = useState(new Date());
  setInterval(() => {
    setDate(new Date());
  }, 1000);
  return(
    <>
    <p>Время действовать! {date.toLocaleTimeString()}</p>
    </>
  )
}

// import React, {useState, useEffect} from "react";

//  function CountDown (){
//   const[num, setNum] = useState(5);
//   useEffect(()=> {

//     setTimeout(() => {
//       if(num>0){
//         setNum(prev => prev -= 1)
//       }else{
//         setNum('Время вышло!')
//       }
//     }, 1000);
//   });
//     return(
      
//     <div>{num}</div>
    
//   )
// }

// export default  CountDown 