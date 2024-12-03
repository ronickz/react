import React, { useRef } from 'react'

export const FocusScreen = () => {

  const inputRef = useRef()

  const onClick = () => {
    console.log(inputRef.current.select())
  }

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input type="text" className='form-control' ref={inputRef} />

        <button className='btn btn-danger mt-3' onClick={()=>onClick()}>Set Focus</button>
    
    </>
  )
}
