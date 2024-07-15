import React from 'react';
import milkman from '../images/Milkman.jpg'

const Service_items = () => {
  return (
    <div>
    
    <h1>Free home Delivery</h1>
    <div className='border-black'>
        <img src={milkman}  className=' rounded-3xl w-[20rem] h-[15rem]' alt="" />
      
    </div>
    </div>
  )
}

export default Service_items
