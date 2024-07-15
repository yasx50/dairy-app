import React from 'react';
import cow from '../images/cow.jpg';

const Sec1 = () => {
  return (
    <section className="relative mt-10 w-full h-[25rem]">
      {/* Image */}
      <img className="w-full h-full object-cover" src={cow} alt="Cow" />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
        
      </div>
    </section>
  );
};

export default Sec1;
