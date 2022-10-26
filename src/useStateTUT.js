import React, { useState } from 'react'
import './App.css'

export default function UseStateTUT() {

  const [count, setcount] = useState(0);
  return (
    <>
    <div className='body1'>
     <p className='counter'>{count}</p>
     <p>through useStateTUT</p>
     <div className='func'>
        <button onClick={()=>{setcount(count+1)}} >increment_By_1</button>
        <button onClick={()=>{setcount(count-1)}} >decrement_By_1</button>
        <button onClick={()=>{setcount(count*2)}} >Multiply_By_2</button>
        <button onClick={()=>{setcount(0)}} >reset</button>
     </div>
    </div>
    </>
  )
}
