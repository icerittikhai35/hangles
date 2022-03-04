import React from 'react';
import Back from '../../../img/back.png'
import More from '../../../img/more.png'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import ProfilePic from '../../../img/profile-pic.jpeg'

const HeaderdetailProduct = () => {
    return (
        <div style={{ width: '100%' ,backgroundColor:'red',margin:'auto'}}>
            <nav className="navbar" >
                <div style={{ padding: '15px 20px' }}>
                    <Link to="/">
                        <img src={Back} alt="" width={20} />
                    </Link>
                </div>
                <div style={{ margin: 'auto',width:'70%'}}>
                    <div style={{ display: 'flex' }}>
                        <Avatar alt="Cindy Baker" src={ProfilePic} sx={{ width: 35, height: 35 }} style={{ marginTop: '1%', }} />
                        <div style={{ paddingLeft: '2%' }}>
                            <div>
                                <lable style={{ fontWeight: 'bold', fontSize: 14 }}>Test</lable>
                            </div>
                            <div >
                                <lable style={{ fontWeight: 'normal', fontSize: 14, }}>dsdfskdflksdfksdfikjshd</lable>
                            </div>
                        </div>

                    </div>
                </div>
                <div style={{ padding: '15px 20px' }}>
                    <img src={More} alt="" width={15} />
                </div>
            </nav>

        </div>
    )
};


export default HeaderdetailProduct;
