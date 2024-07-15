import React from 'react'
import Headera from "./Headera";
import Product_items from "./Product_items";
import Footer from './Footer';
import cow from '../images/milk.jpeg'
import cow_milk from '../images/cow_milk.jpg'
import buffalo_milk from '../images/buffalo_milk.jpeg'



const Product = () => {
  return (
    <div>
        <Headera/>
    <Product_items animal='Cow' rate='65' image={cow_milk}/>
    <Product_items animal='Buffalo' rate='75' image={buffalo_milk}/>
    <Product_items animal='Buffalo' rate='75' image={buffalo_milk}/>
    <Product_items animal='Buffalo' rate='75' image={buffalo_milk}/>
    <Product_items animal='Buffalo' rate='75' image={buffalo_milk}/>
    <Product_items animal='Buffalo' rate='75' image={buffalo_milk}/>
    <Footer/>
      
    </div>
  )
}

export default Product
