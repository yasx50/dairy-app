import React from 'react'
import Profile from './Profile';
import Cart1 from './Cart1';
import Order_history from './Order_history';
import Help from './Help';

const Profile_items = () => {
  return (
    <div>
      <Profile name='Yadav Yash' number= '8668267011' address='sobhnath dairy farm kulgaon badlapur rameshwadi west 421503'/>
      <Cart1/>
      <Order_history/>
      <Help/>
       
      
    </div>
  )
}

export default Profile_items
