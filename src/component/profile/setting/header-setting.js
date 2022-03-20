import React from 'react';
import Notification from '../../../img/notification.png'
import Avatar from '@mui/material/Avatar';
import Back from '../../../img/back.png'
import ProfilePic from '../../../img/profile-pic.jpeg'
import Circle from '../../../img/circle.png'
import { Link } from 'react-router-dom';


const HeaderSetting = (props) => {

    return (
        <div >
            <nav className="navbar fixed-top  " style={{ height: '140px' }}>
                <div
                    style={{
                        borderColor: 'white', display: 'flex', justifyContent: 'space-between', width: '100%'
                    }}>
                    <div style={{ paddingLeft: '3%', }}>
                        <Link to='/'>
                            <img src={Back} alt="" width={20} />
                        </Link>
                    </div>
                    <div style={{ paddingศำดะ: '3%' }}>
                        <label style={{ fontSize: 16, fontWeight: 'bold' }}>ผู้ซื้อ</label>
                    </div>
                    <div style={{ paddingRight: '3%', }}>
                        <Link to='/Notifications'>
                            <img src={Notification} alt="" width={20} />
                        </Link>
                    </div>
                </div>
                <div style={{ justifyContent: 'space-between', width: '93%', height: '50px', margin: 'auto', paddingBottom: 80 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '50px', paddingTop: 10 }}>
                        <div style={{ display: 'flex', }}>
                            <Avatar alt="Cindy Baker" src={ProfilePic} sx={{ width: 60, height: 60 }} />
                            <div style={{ paddingLeft: '10%', width: '200px', height: 60, margin: 'auto' }}>
                                <div>
                                    <label style={{ fontSize: 16, fontWeight: 'bold' }}>Testshopp</label>
                                </div>
                                <div>
                                    <label style={{ fontSize: 16, fontWeight: 'normal' }}>ผู้ติดตาม 0</label>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingTop: 10 }}>
                            <div style={{ justifyContent: 'flex-end', display: 'flex', }}>
                                <img src={Circle} alt="" width={15} />
                            </div>
                            <div>
                                <label style={{ fontSize: 16, fontWeight: 'bold' }}>กำลังติดตาม 0</label>
                            </div>
                        </div>
                    </div>
                </div>


            </nav>

        </div>
    )
};

export default HeaderSetting;