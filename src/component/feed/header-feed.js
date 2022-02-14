import React from 'react';
import Logo from'../../img/logo.svg'
import Notification from'../../img/notification.png'
import Shopbag from'../../img/shop-bag.png'



const HeaderFeed = (props) => {
  return (
    <div style={{width:'100%'}}>
      <nav className="navbar fixed-top " role="HeaderFeed" >
        <div style={{padding:'15px 20px',}}>
          <img src={Notification} alt="" width={20} />
          
        </div>
        <div style={{margin:'auto',}}>
          <img src={Logo} alt="" width={110} />
        </div>
        <div style={{padding:'15px 20px'}}>
          <img src={Shopbag} alt="" width={20} />
        </div>
      </nav>
     
    </div>
  )
};

export default HeaderFeed;