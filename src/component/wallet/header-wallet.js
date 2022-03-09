import React from 'react';
import { Link } from 'react-router-dom';
import Back from '../../img/back.png'


const HeaderWallet = (props) => {
    return (
        <div >
            <nav className="navbar fixed-top " style={{ borderColor: '#EBEBEB', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ paddingLeft: '3%', width: '10%', display: 'flex', justifyContent: 'space-between' }}>
                    <Link to="/">
                        <img src={Back} alt="" width={20} />
                    </Link>

                </div>
                <div style={{ margin: 'auto', width: '8rem', }}>
                    <lable style={{ paddingLeft: '2%', fontWeight: 'bold', fontSize: 16 }} >กระเป๋า</lable>
                </div>

            </nav>

        </div>
    )
};

export default HeaderWallet;