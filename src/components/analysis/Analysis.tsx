import React from 'react'
import CardOne from './CardOne'
import CardTwo from './CardTwo'
import CardThree from './CardThree'
import CardFour from './CardFour'

export default function Analysis() {
  return (
    <div className='desktop:w-[40%] w-full grid tab:grid-cols-2 grid-cols-1 gap-4'>
      <CardOne />
      <CardTwo />
      <CardThree />
      <CardFour />
    </div>
  )
}
