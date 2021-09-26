import { useState } from "react";

export default function GetState(){
  const[count,setCount] = useState(0);

  return (
    <>
    <p>Вы кликнули {count} разззз</p>
    <button onClick={()=> setCount(count+1)}>Жмякни на меня</button>
    </>
  )
}

// import {useState} from "react"
// import {useEffect} from "react"

// function CountDown() {
//   const [num, setNum] = useState(3)
//   useEffect(() => {
//       setTimeout(() => {
//           if (num > 0) {
//               setNum(num => num -= 1)
//           }
//           else{
//               setNum('Время вышло!')
//           }
//       }, 1000)
//   })

//   return (
//       <div>{num}</div>
//   )
// }

// export default CountDown