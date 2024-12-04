import React from 'react'
import { memo } from 'react'

export const Small = ({counter}) => {
  
  console.log('Me volvi a generar')

  return (
    <small>{counter}</small>
  )
}
