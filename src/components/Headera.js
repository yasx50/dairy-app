import React from "react";
import mahadev from "../images/mahadev-logo.jpg";
import { BrowserRouter as Router, Link } from "react-router-dom";


export default function Headera() {
  return (
    <div>
      <header className="flex bg-blue-400 h-[4rem] border-2 ">
        <div className="mt-[10px] ml-[4rem] text-2xl border-1 w-[30rem]">
          <ul className="flex border-1 w-[35rem]">
            <li>
              <img
                className="h-[40px] flex border-2"
                src={mahadev}
                alt="mahadev "
              />
            </li>
            <li>
              <p className="ml-5 border-1">Sobhnath Dairy Farm</p>
            </li>
          </ul>
        </div>

        <nav className="flex  mt-[10px] ml-[9rem] w-[50%] h-[2.5rem] border-1">
          <ul className="flex gap-9 text-2xl items-center">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined">home</span>
              {/* <a href="index.html">Home</a> */}
              <Link to="/">Home</Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined">inventory_2</span>
              {/* <a href="products.html">Products</a> */}
              <Link to="/Product">Products</Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined">
                person_raised_hand
              </span>
              {/* <a href="services.html">Services</a> */}
              <Link to="/Service">Service</Link>
            </li>
            {/* <li className="flex items-center gap-2">
              <span className="material-symbols-outlined">call</span>
              {/* <a href="contact.html">Contact</a> */}
              {/* <Link to="/Contact">Contact</Link>
            </li> */} 
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined">Person</span>
              {/* <a href="contact.html">Contact</a> */}
              <Link to="/Profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
