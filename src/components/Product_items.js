import React from 'react'
import { useState } from 'react'

const Product_items = (props) => {

  const  [first, setfirst] = useState(0)
  const incrementer =  ()=>{
    let a=first+1
    setfirst(a)

  }
  return (
    <div className='bg-slate-200 inline-block rounded-3xl w-[23rem] mt-[2rem] ml-[2.5rem] h-[rem] '>
      <div className=''>
      <img className=' m-4    justify-center rounded-2xl max-w-[20rem] max-h-[11rem] mx-auto' src={props.image} alt=""/>

      </div>

      <h1 className='text-black bg-white text-center '> Fresh &nbsp; {props.animal} &nbsp;&nbsp;Milk <span className='ml-[9rem]'>{props.rate}₹&nbsp;&nbsp; Liter</span></h1>

<div className='flex justify-end '>
  <div className='bg-blue-400 rounded-md m-4 w-[6rem] h-[2rem] inline-block text-center'>{first} liters </div>
<button className='bg-blue-400 rounded-md m-4 w-[6rem] h-[2rem] inline-block' onClick={incrementer}>Add </button>
<button className='bg-blue-400 rounded-md m-4 w-[6rem] h-[2rem] inline-block'>Add to Car</button>
</div>      
    </div>
  )
}

export default Product_items
