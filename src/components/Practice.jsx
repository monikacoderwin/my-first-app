// #1 Program for wish
// import React from 'react'

// const Practice = () => {
// let currDate= new Date().getHours();
// let greeting="";
// if (currDate>1 && currDate<12){
//   greeting="Good Morning"
// }else if(currDate>12&&currDate<20){
//     greeting="Good Afternoon"
// }else if(currDate>20 && currDate<24){
//     greeting="Good Night"
// }

//   return (<>
//     <h1>Hello sir, 😄{greeting} </h1>
//     </>)
// }

// export default Practice

// #2 Counter program using usestate
// import React from 'react';
// import { useState } from 'react';

// const Practice=()=>{
//   const[count,setCount]=useState(0);
//   const UpdateCount=()=>{
//     setCount(count+1);
//   }
// return(
//   <>
//   <h1> {count}</h1>
//   <button onClick={UpdateCount}>Click me</button>
//   </>
// )
// }
// export default Practice
// #3 get current time on button click
// import React, { useState } from 'react'

// const Practice=()=>{
//   let newTime= new Date().toLocaleTimeString();
//   const [time, setTime]=useState(newTime);
 
//   const GetTime=()=>{
//   newTime= new Date().toLocaleTimeString();
//   setTime(newTime);


//   };
//   return(<>
//   <h1>{time}</h1>
//   <button onClick={GetTime}>Get Time</button>
//   </>)
// }
// export default Practice

// import React, { useState } from 'react'

// const Practice=()=>{
//   let time=new Date().toLocaleTimeString();
//    const [ctime, setCtime]=useState(time);

//    const updateTime=()=>{
//     setCtime(ctime)
//    }
//    setInterval(updateTime, 1000);

//   return (<>
//   <h1>{ctime}</h1>
//   </>)
// }
// export default Practice
// 
// # Display name in heading on button click
// import { useState, React} from "react"; 

// const Practice=()=>{
// const [name,setName]=useState('');
// const [fullName, setFullName]= useState('');

//   const inputEvent=(e)=>{
//      setName(e.target.value)
//   }

//   const setHeading=()=>{
//     setFullName(name);
//   } 
//   return(<>
//        <h1>Hello,{fullName} </h1>
//        <input type='text' placeholder="Enter your name" onChange={inputEvent}/>
//        <button onClick={setHeading}>Submit</button>
//     </>)
// }
// export default Practice

// #form with 2 input field and display values of both field in heading
// import {useState,React} from 'react'

// const Practice=()=>{
//     const [firstname,setFirstname]=useState('');
//     const [lastname,setLastname]=useState('');
//     const [fullName,setFullName]= useState(['']);

//     const inputEvent=(e)=>{
//         setFirstname(e.target.value)
//     }
//     const inputEventTwo=(e)=>{
//         setLastname(e.target.value)
//     }
//     const Submit=(e)=>{
//         e.preventDefault();
//         setFullName(`${firstname}  ${lastname}`)
//     }

//     return(<>
//     <form onSubmit={Submit}>
//         <div>
//             <h1>Hello {fullName}</h1>
//             <input  type='text' placeholder='Enter first Name' value={firstname} onChange={inputEvent} />
//             <input type='text' placeholder='Enter Last name' value={lastname} onChange={inputEventTwo}/>
//             <button>Submit</button>
//         </div>
//     </form>
    
//     </>)
// }
// export default Practice

// #form with multiple input fields without any hooks
// import React, { useState } from 'react'
// import { number } from 'yup'

// const Practice=()=>{
//     const [fullName, setFullName]=useState[{
//         fname:'',
//         lname:'',
//         email:'',
//         number:''
// }]
// const inputEvent=(e)=>{
// const name=e.target.name
// const value=e.target.value
// setFullName((prevValue)=>{
//     if(name==='fname'){
// return{    
//         fname:value,
//         lname:prevValue.lname,
//         email:prevValue.email,
//         number:prevValue.number
//     }}
// else if(name==='lname'){
// return   {
//         fname:prevValue.fname,
//         lname:value,
//         email:prevValue.email,
//         number:prevValue.number
// }}
// else if(name==='email'){
// return   {
//         fname:prevValue.fname,
//         lname:prevValue.lname,
//         email:value,
//         number:prevValue.number
// }}
// else if(name==='number'){
// return   {
//         fname:prevValue.fname,
//         lname:prevValue.lname,
//         email:prevValue.email,
//         number:value
// }}}
// )}



// const Submit=(e)=>{
//     e.preventDefault();
    
//     return(<>
//     <form onSubmit={Submit}>
//     <h1>Hello {fullName.fname} {fullName.lname} </h1>
//     <p>{fullName.email}</p>
//     <input type='text' placeholder='enter name' name='fname' value={fullName.fname} onChange= {inputEvent} />
//     <input type='text' placeholder='enter last name '  name='lname' value={fullName.lname} onChange= {inputEvent}/>
//     <input type='email' placeholder='enter email' name='email' value={fullName.email} onChange= {inputEvent} />
//     <input type='number' placeholder='enter number' name='number' value={fullName.number} onChange= {inputEvent} />
//     <button>Submit</button>
//     </form>
//     </>)
// }
// }
// export default Practice

// #TodoList

// import {useState,React} from 'react'

// const Practice=()=>{
//     const [list,setList]=useState('');
//     const [itemlist,setItemlist]=useState([]);

// const inputEvent=(e)=>{
//    setList(e.target.value);
// }
// const onSubmit=()=>{
//     setItemlist((oldval)=>{
//         return [...oldval, list]
//     })
//     setItemlist("")
// }
// const deleteItem=(id)=>{
//     console.log('deleted');
//   setItemlist((oldval)=>{
//     return oldval.filter((arrElem,index)=>{
//       return  index!==id;
//     })
// })
// }
//     return(<>
//     <div>
//         <input type='text' placeholder='Enter items' onChange={inputEvent}/>
//         <button onClick={onSubmit}>Add</button>
//         <ol>
//            { itemlist.map( (itemval,index) => {
//                return (<>
//                <li>key={index} id={index} {itemval}</li>
//                <button onclick={deleteItem}>Delete</button>
//                </>)
//             })}
//             </ol>
//     </div>
//     </>)
// }
// export default Practice

// #counter program with if else condition
// import React, { useState } from 'react'

// const Practice=()=>{
//     const [count,setCount]= useState(10);

// const increment=()=>{
//     setCount(count+1)
// }

// const decrement=()=>{
//     if(count<=0){
//         alert("Enter positive number");
//         }
//         else{
//     setCount(count-1)
// }}
//     return(<>
//     <h1>{count}</h1>
//     <button onClick={increment}>Increement</button>
// <button onClick={decrement}>Decrement</button>    </>)
// }
// export default Practice

// 


import React from 'react'
import { useState,useEffect } from 'react';


const Practice=()=>{
const [num,setNum]=useState(0);

useEffect=(()=>{
    document.title=`I am clicked ${num} times`
})



    return(<>
    <button onClick={()=>{
        setNum(num+1);
    }}>Click me {num}</button>
    
    </>)

}
export default Practice