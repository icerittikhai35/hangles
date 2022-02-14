import React from 'react';
import Notification from '../../img/notification.png'
import Shopbag from '../../img/shop-bag.png'
import Setting from '../../img/settings.png'
import Back from '../../img/back.png'


const HeaderProfile = (props) => {
    return (
        <div >
            <nav className="navbar fixed-top  " role="HeaderFeed" style={{ borderColor: 'white', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ paddingLeft: '3%', width: '10%', display: 'flex', justifyContent: 'space-between' }}>
                    <img src={Back} alt="" width={20} />
                    <img src={Notification} alt="" width={20} />
                </div>
                <div style={{ paddingRight: '3%', width: '10%', display: 'flex', justifyContent: 'space-between' }}>
                    <img src={Shopbag} alt="" width={20} />
                    <img src={Setting} alt="" width={20} />
                </div>

            </nav>

        </div>
    )
};

export default HeaderProfile;