import { useState } from 'react';
import './square.styles.css'

interface Props{
  value: string,
  onSquareClick: ()=> void
}

function Square({value, onSquareClick}: Props) {

  return (
    <button 
      className='square'
      onClick={onSquareClick}
    >{value}</button>
  )
}

export default Square