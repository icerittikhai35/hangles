import React from 'react';
import { Link } from 'react-router-dom';
import Back from '../../img/back.png'


const HeaderNotifications = (props) => {
    return (
        <div >
            <nav className="navbar fixed-top  " role="HeaderFeed" style={{ borderColor: '#EBEBEB', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ paddingLeft: '3%', width: '10%', display: 'flex', justifyContent: 'space-between' }}>
                    <Link to="/Feed">
                        <img src={Back} alt="" width={20} />
                    </Link>

                </div>
                <div style={{ margin: 'auto', width: '8rem', }}>
                    <a style={{ paddingLeft: '2%', fontWeight: 'bold', fontSize: 16 }} >การแจ้งเตือน</a>
                </div>

            </nav>

        </div>
    )
};

export default HeaderNotifications;