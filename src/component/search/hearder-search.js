import React from 'react';
import Logo from '../../img/logo.svg'
import Notification from '../../img/notification.png'
import Shopbag from '../../img/shop-bag.png'



const HeaderSearch = (props) => {
    return (
        <div >
            <nav className="navbar fixed-top  fixed-top " role="HeaderSearch" >
                <div style={{ paddingLeft: '3%', width: '90%' }}>
                    <input type="text" class="form-control" id="inputPassword" placeholder="ค้นหา" ></input>
                </div>
                <div style={{  paddingRight: '3%' }}>
                    <img src={Shopbag} alt="" width={20} />
                </div>
            </nav>

        </div>
    )
};

export default HeaderSearch;