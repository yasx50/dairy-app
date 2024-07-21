import React from "react";
import Headera from "../Headera";
import Product_items from "./Product_items";
import Footer from "../Footer";
// import cow from '../images/milk.jpeg'
import cow_milk from "../../images/cow_milk.jpg";
import buffalo_milk from "../../images/buffalo_milk.jpeg";
import curd from "../../images/curd.jpg";
import cow_curd from "../../images/cow_curd.jpeg";
import cow_ghee from "../../images/cow_ghee.jpg";
import buffalo_ghee from "../../images/buffalo_ghee.jpeg";

const Product = () => {
  return (
    <div>
      <Headera />
      <div className="flex space-between flex-wrap">
      <Product_items name=' Fresh Cow Milk' rate='65' image={cow_milk} liter_kg='Liter'/>
    <Product_items name='Fresh Buffalo Milk' rate='75' image={buffalo_milk} liter_kg='Liter'/>
    <Product_items name='Curd' rate='125' image={curd} liter_kg='Kg'/>
    <Product_items name='Cow Curd' rate='100' image={cow_curd} liter_kg='Kg'/>
    <Product_items name='Cow Ghee' rate='1200' image={cow_ghee} liter_kg='Kg'/>
    <Product_items name='Buffalo Ghee' rate='1500' image={buffalo_ghee} liter_kg='Kg'/>
      </div> 

      <Footer />
    </div>
  );
};

export default Product;
