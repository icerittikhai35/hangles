import React from 'react';
import Logo from '../../img/logo.svg'
import Notification from '../../img/notification.png'
import Shopbag from '../../img/shop-bag.png'
import { Link } from "react-router-dom";



const HeaderFeed = (props) => {
  return (
    <div style={styles.container}>
      <nav className="navbar fixed-top "  >
        <div style={styles.LeftRightHeader}>
          <Link to="/Notifications">
            <img src={Notification} alt="" width={20} />
          </Link>
        </div>
        <div style={styles.centerHeader}>
          <img src={Logo} alt="" width={110} />
        </div>
        <div style={styles.LeftRightHeader}>
          <Link to="/Wallet">
            <img src={Shopbag} alt="" width={20} />
          </Link>
        </div>
      </nav>

    </div>
  )
};

const styles = {
  container: {
    width: '100%'
  },
  LeftRightHeader: {
    padding: '10px 20px',
  },
  centerHeader: {
    margin: 'auto',
  },
}

export default HeaderFeed;