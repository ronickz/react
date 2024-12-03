import React from 'react'
import { useCounter } from '../hooks/useCounter'
import { Small } from './Small'

export const Memorize = () => {

  const {counter,increment} = useCounter()

  return (

    <>
        <h1>Counter: <Small counter={counter}/></h1>
        <hr />

        <button className='btn btn-primary' onClick={()=>increment()}>+1</button>
    </>


  )
}
