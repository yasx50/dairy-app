import React from "react";
import milkman from "../images/Milkman.jpg";
import gau from "../images/gau_shala.jpg";

const Service_items = () => {
  return (
    //
    <div>
      <div className="border-black border-2 mt-[3rem]  ">
        <h1 className=" border-2  justify-center w-auto  text-center mt-4 text-3xl text-orange-500">
          Free Home Delivery
        </h1>
        <div className="flex">
          <img
            src={milkman}
            className="rounded-3xl w-[25rem] h-[20rem] mr-4"
            alt=""
          />
          <h2 className="text-center  justify-center text-xl h-[20rem] border-black border-1 text-blue-800 p-4">
            Enjoy the convenience of Sobhnath Dairy Farm's free home delivery
            service. Our fresh and high-quality dairy products are now just a
            doorstep away. We prioritize purity and freshness, ensuring you
            receive the best every time. With easy ordering and prompt delivery,
            we make it effortless to experience the taste of tradition. Trust
            Shobhnath Dairy Farm to bring farm-fresh goodness straight to your
            home.
          </h2>
            <div className="mt-[12rem] w-[50rem] h-[8rem]  border-2">
              <b>Locations of Delivery:</b> <br />
              1. Rameshwadi
              <br />
              2. Sanewadi
              <br />
              3. Hendrapada
            </div>
        </div>
      </div>

      {/* second starts here */}

      <div className=" h-[25rem] border-black border-2 mt-[3rem] fle">
        <h1 className="text-3xl text-center mt-4 text-orange-500 border-2">Gau seva</h1>
        <div className="flex">
        <img
          src={gau}
          className="w-[25rem] h-[20rem] "
          alt="image of gau shala"
        />
        <h1 className="text-xl m-[4rem] text-blue-800">
        <b>Gau Mata Ki Seva:</b> Embrace the sacred tradition of serving and caring for cows, revered as Gau Mata. Our dedicated service ensures the well-being of these gentle beings, providing them with shelter, nourishment, and love. Experience the joy and spiritual fulfillment that comes from nurturing Gau Mata. Join us in preserving this age-old practice and fostering a compassionate bond with these divine creatures. Be a part of our mission to protect and honor Gau Mata.
        </h1>
        </div>
      </div>
    </div>
  );
};

export default Service_items;
