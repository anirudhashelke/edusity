// import React, { useEffect, useState } from 'react'

// const Counter = () => {
//     const [count,setCount]=useState(1)
//     useEffect(()=>{
//     const interval=    setInterval(()=>{
//             setCount(previous=>(previous < 10 ? previous + 1:1))
//         },1000)
//         return ()=> clearInterval(interval);
//     },[]);

    
//     // const [count, setCount] = useState(1);

//     // useEffect(() => {
//     // //   if (count > 10) return;
  
//     //   const interval = setInterval(() => {
//     //     setCount(prevCount => {
//     //       if (prevCount >= 10) {
//     //         clearInterval(interval);
//     //         return prevCount;
//     //       }
//     //       return prevCount + 1;
//     //     });
//     //   }, 1000);
  
//     //   return () => clearInterval(interval);
//     // }, [count]);
  

//   return (
//     <div className='my-5'>
//         <h1>{count}</h1>
//     </div>
//   )
// }

// export default Counter