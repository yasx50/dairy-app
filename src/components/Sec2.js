import React from "react";

export default function Sec2() {
  return (
   <div>
     <section className=" absolute mt-[40rem] p-2 w-full h-auto  bg-slate-600 text-white ">
      <div>
        <p className="text-4xl  mt-5 ml-20 "><b>Opening Hours</b></p>
        <p className="mb-4 ml-20 my-10 text-xl">
          Welcome to Sobhnath Dairy Farm, your trusted source for fresh and
          high-quality dairy products. We are proud to serve you <b>24/7</b>,
          ensuring that you always have access to the best dairy products
          whenever you need them.
        </p>
        <p className="mb-4 ml-20 my-10 text-xl">
          Our dedicated team is available to assist you during our special
          operational hours:
        </p>
        <ul className="list-disc list-inside mb-4 ml-20 my-10 text-xl">
          <li><strong>Morning:</strong> 6:00 AM - 9:00 AM</li>
          <li><strong>Evening:</strong> 5:00 PM - 9:00 PM</li>
        </ul>

        <p className="mb-4 ml-20 my-10 text-xl">
          During these times, you can experience our exceptional customer
          service, whether you're picking up fresh milk, delicious cheese, or
          any of our other premium dairy offerings.
        </p>
        <p className="ml-20 my-10 text-xl">
          Visit Sobhnath Dairy Farm anytime, day or night, and taste the
          difference that freshness and quality make!
        </p>
      </div>
    </section>
   </div>
  );
}
