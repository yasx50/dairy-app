import React from 'react';
import cow from '../images/cow.jpg'

const Sec1 = () => {
  return (
 
    
    <section className=" mt-10  border-black p-2 w-[100%] h-[25rem]">
        <div className="">
        <img
        className="  w-full h-full object-cover "
        src={cow}
        alt="this is cow image"
      />
 
      <div className="  flex ">
        <h1 className="text-black">
          <p className="absolute ml-[10rem]  text-2xl">
            <b>Sobhnath Dairy Farm:</b> Established in 1980, Sobhnath Dairy Farm
            has been dedicated to providing high-quality dairy products for over
            four decades. <br />
            Renowned for our commitment to purity and freshness, we offer a
            range of milk and dairy products that are trusted by families and
            businesses alike. <br />Experience the taste of tradition with
            Sobhnath Dairy Farm.
          </p>
        </h1>
      </div>
        </div>
      
    </section>
  
      
   
  )
}

export default Sec1
