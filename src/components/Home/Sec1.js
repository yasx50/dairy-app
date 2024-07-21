import React from "react";
import cow from "../../images/cow.jpg";

const Sec1 = () => {
  return (
    <section className="relative mt-10 w-full h-[25rem]">
      {/* Image */}
      <img className="w-full h-full object-cover" src={cow} alt="Cow" />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <h1 className="text-white">
            <p className="ml-[10rem] mt-[4rem] text-2xl">
              <b>Sobhnath Dairy Farm:</b> Established in 1980, Sobhnath Dairy
              Farm has been dedicated to providing high-quality dairy products
              for over four decades. <br />
              Renowned for our commitment to purity and freshness, we offer a
              range of milk and dairy products that are trusted by families and
              businesses alike. <br />
              Experience the taste of tradition with Sobhnath Dairy Farm.
            </p>
          </h1>
      </div>
    </section>
  );
};

export default Sec1;
