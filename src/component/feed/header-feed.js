import React from 'react';
import Logo from '../../img/logo.svg'
import Notification from '../../img/notification.png'
import Shopbag from '../../img/shop-bag.png'
import { Link } from "react-router-dom";



const HeaderFeed = (props) => {
  return (
    <div style={{ width: '100%' }}>
      <nav className="navbar fixed-top "  >
        <div style={{ padding: '10px 20px', }}>
          <Link to="/Notifications">
            <img src={Notification} alt="" width={20} />
          </Link>
        </div>
        <div style={{ margin: 'auto', }}>
          <img src={Logo} alt="" width={110} />
        </div>
        <div style={{ padding: '15px 20px' }}>
          <Link to="/Wallet">
            <img src={Shopbag} alt="" width={20} />
          </Link>
        </div>
      </nav>

    </div>
  )
};

export default HeaderFeed;