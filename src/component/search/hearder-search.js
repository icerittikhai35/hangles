import React from 'react';
import Shopbag from '../../img/shop-bag.png'
import { Link } from "react-router-dom";


const HeaderSearch = (props) => {
    return (
        <div >
            <nav className="navbar fixed-top  fixed-top " role="HeaderSearch" >
                <div style={{ paddingLeft: '3%', width: '90%' }}>
                    <input type="text" class="form-control" id="inputPassword" placeholder="ค้นหา" ></input>
                </div>
                <div style={{ paddingRight: '3%' }}>
                    <Link to="/Wallet">
                        <img src={Shopbag} alt="" width={20} />
                    </Link>
                </div>
            </nav>

        </div>
    )
};

export default HeaderSearch;