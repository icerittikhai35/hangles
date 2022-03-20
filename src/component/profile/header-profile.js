import React from 'react';
import Notification from '../../img/notification.png'
import Shopbag from '../../img/shop-bag.png'
import Setting from '../../img/settings.png'
import Back from '../../img/back.png'
import { Link } from 'react-router-dom';


const HeaderProfile = (props) => {
    return (
        <div >
            <nav className="navbar fixed-top  " style={{ borderColor: 'white', justifyContent: 'space-between', width: '100%' }}>
                <div style={{ paddingLeft: '3%', width: '10%', display: 'flex', justifyContent: 'space-between' }}>
                    <Link to="/">
                        <img src={Back} alt="" width={20} />
                    </Link>
                    <Link to="/Notifications">
                        <img src={Notification} alt="" width={20} />
                    </Link>
                </div>
                <div style={{ paddingRight: '3%', width: '11%', display: 'flex', justifyContent: 'space-between', }}>
                    <Link to="/Wallet">
                        <img src={Shopbag} alt="" width={20} />
                    </Link>
                    <Link to="/Setting">
                        <img src={Setting} alt="" width={20} />
                    </Link>
                </div>

            </nav>

        </div>
    )
};

export default HeaderProfile;