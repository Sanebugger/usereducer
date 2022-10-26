//https://codeburst.io/redux-reducers-are-coffee-makers-8a78dd8bb7a0
//https://adhithiravi.medium.com/what-is-the-usereducer-hook-6274af633541
import React, { useReducer, useState } from 'react'
import './App.css'

const initialState = 0;
const reducer = (state,action) =>{
  if (action.type === 'increment') {
    return state+1;
  }
  if (action.type === 'decrement') {
    return state-1;
  }
  if (action.type === 'multiplicate') {
    return state*2;
  }
  if (action.type === 'reset') {
    return 0;
  }
}

export default function UseReducerTUT() {

  // const [count, setcount] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    <div className='body2'>
     <p className='counter'>{state}</p>
     <p >through useReducerTUT</p>
     <div className='func'>
        <button onClick={()=>dispatch({type:'increment'})} >increment_By_1</button>
        <button onClick={()=>dispatch({type:'decrement'})} >decrement_By_1</button>
        <button onClick={()=>dispatch({type:'multiplicate'})} >Multiply_By_2</button>
        <button onClick={()=>dispatch({type:'reset'})} >reset</button>
     </div>
    </div>
    </>
  )
}
