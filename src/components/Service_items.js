import React from "react";
import milkman from "../images/Milkman.jpg";
import gau from "../images/gau_shala.jpg";

const Service_items = () => {
  return (
    //
    <div>
      <div className="border-black border-2 mt-4 p-4 h-[23rem]">
        <h1 className="border-black border-1 h-[2rem] w-auto flex items-center justify-center mb-4 text-3xl text-orange-500">
          Free Home Delivery
        </h1>
        <div className="flex">
          <img
            src={milkman}
            className="rounded-3xl w-[20rem] h-[15rem] mr-4"
            alt=""
          />
          <h2 className="text-center flex flex-col justify-center text-xl h-[20rem] border-black border-1 text-blue-800 p-4">
            Enjoy the convenience of Sobhnath Dairy Farm's free home delivery
            service. Our fresh and high-quality dairy products are now just a
            doorstep away. We prioritize purity and freshness, ensuring you
            receive the best every time. With easy ordering and prompt delivery,
            we make it effortless to experience the taste of tradition. Trust
            Shobhnath Dairy Farm to bring farm-fresh goodness straight to your
            home.
            <div className="mt-4">
              <b>Locations of Delivery:</b> <br />
              1. Rameshwadi
              <br />
              2. Sanewadi
              <br />
              3. Hendrapada
            </div>
          </h2>
        </div>
      </div>

      {/* second starts here */}
    </div>
  );
};

export default Service_items;
