import React from "react";
import user from "../images/user_icon.png";

const Profile = (props) => {
  return (
    <div>
      
      <div className="h-[15rem] border-2 m-3 flex">
        
          <button className="bg-slate-500 h-[2rem] w-[7rem] ml-[89%] mt-[12rem] absolute">Edit</button>
        <img
          src={user}
          className="border-black border-1 ml-[10rem]"
          alt="user image"
        />


        <div className="">
          <div className="w-[50rem] h-[2rem] m-[2rem] border-black border-1 ">
            Name : {props.name}
          </div>
          <div className="w-[50rem] h-[2rem] m-[2rem] border-black border-1 ">
            Mobile Number : {props.number}{" "}
          </div>
          <div className="w-[50rem] h-[2rem] m-[2rem] border-black border-1 ">
            Address : {props.address}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
