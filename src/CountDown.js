import React, {useState, useEffect} from 'react';

export default function CountDown(){
  const[num,setNum] = useState(5)
  useEffect(()=> {
    setTimeout(() => {
      num>0?setNum(num => num -= 1):setNum("Время вышло!")
    }, 1000);
  })
  return(
    <div>{num}</div>
  )
}

//Через if 
// import React, {useState, useEffect} from 'react';

// function CountDown() {
//   const [num, setNum] = useState(3)
//   useEffect(() => {
//       setTimeout(() => {
//           if (num > 0) {
//               setNum(prev => prev -= 1)
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


