import React from 'react'
import { useState } from 'react'

const Product_items = (props) => {

  // test
 

  

  const  [first, setfirst] = useState(0)
  const incrementer =  ()=>{
    let a=first+1
    setfirst(a)

  }
  const decrementer =  ()=>{
    if(first===0){
      let b=first
      setfirst(b)

    }
    else{ 
      let a=first-1
    setfirst(a)
    }
    

  }
  return (
    <div className='bg-slate-200 inline-block rounded-3xl w-[23rem] mt-[2rem] ml-[4rem] h-[rem] '>
      <div className=''>
      <img className=' m-4    justify-center rounded-2xl max-w-[20rem] max-h-[11rem] mx-auto' src={props.image} alt=""/>

      </div>

      <h1 className='text-black bg-white text-center '> {props.name} <span className='ml-[9rem]'>{props.rate}₹&nbsp;&nbsp;{props.liter_kg} </span></h1>

<div className='flex justify-end '>
  <div className='bg-blue-400 rounded-md m-4 w-[6rem] h-[2rem] inline-block text-center'>{first} {} </div>
<button className='bg-blue-400 rounded-md m-4 w-[3rem] h-[2rem] inline-block' onClick={incrementer}>+ </button>
<button className='bg-blue-400 rounded-md m-4 ml-1 w-[3rem] h-[2rem] inline-block' onClick={decrementer}>- </button>
<button className='bg-blue-400 rounded-md m-4 w-[6rem] h-[2rem] inline-block'>Add to Cart</button>
</div>      
    </div>
  )
}

export default Product_items
