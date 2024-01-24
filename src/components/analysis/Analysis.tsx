import React from 'react'
import CardOne from './CardOne'
import CardTwo from './CardTwo'
import CardThree from './CardThree'
import CardFour from './CardFour'

export default function Analysis() {
  return (
    <div className='w-[40%] grid grid-cols-2 gap-4'>
      <CardOne />
      <CardTwo />
      <CardThree />
      <CardFour />
    </div>
  )
}
