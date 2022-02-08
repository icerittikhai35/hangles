import React from 'react';
import Logo from '../../img/logo.svg'
import Notification from '../../img/notification.png'
import Shopbag from '../../img/shop-bag.png'
import Setting from '../../img/settings.png'
import Back from '../../img/back.png'


const HeaderProfile = (props) => {
    return (
        <div >
            <nav className="navbar fixed-top  fixed-top " role="HeaderFeed" >
                <div style={{ padding: '15px 20px', }}>
                    <img src={Back} alt="" width={20} />
                    <img src={Notification} alt="" width={20} />

                </div>

                <div style={{ padding: '15px 20px' }}>
                    <img src={Shopbag} alt="" width={20} />
                    <img src={Setting} alt="" width={20} />
                </div>
            </nav>

        </div>
    )
};

export default HeaderProfile;