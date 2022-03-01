import React from 'react'
import ProfilePic from '../../../img/profile-pic.jpeg'
import Avatar from '@mui/material/Avatar';
import Cancel from '../../../img/cancel.png'
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

function PageNameShop() {
    return (

        <div style={{ maxWidth: '760px', margin: 'auto', minHeight: '10vh', alignItems: 'stretch', backgroundColor: 'white', display: 'flex', }}>
            <div style={{ width: '100%', margin: 'auto', height: '100%', display: 'flex', }}>
                <div style={{ padding: '15px 20px', position: 'absolute' }}>
                    <Link to="/">
                        <img src={Cancel} alt="" width={25} />
                    </Link>
                </div>
                <div style={{ width: '100%', margin: 'auto', height: '100%', paddingTop: '1rem' }}>
                    <div style={{ width: 300, margin: 'auto', textAlign: 'center', }}>
                        <label style={{ color: '#35bdb4', fontSize: 20, fontWeight: 'bold' }}>เพิ่มชื่อที่เเสดง</label>
                    </div>
                    <div style={{ width: 300, margin: 'auto', textAlign: 'center', }}>
                        <label style={{ color: 'black', fontSize: 12, fontWeight: 'normal' }}>ตั้งชื่อร้านของคุณให้โดดเด่น</label>
                    </div>
                    <div style={{ width: 180, margin: 'auto', marginTop: 20 }}>
                        <Avatar alt="Cindy Baker" src={ProfilePic} sx={{ width: 180, height: 180, backgroundColor: '#eeeeee' }} />
                    </div>
                    <div style={{ width: '90%', margin: 'auto', paddingTop: 69, }}>
                        <TextField
                            id="standard-full-width"
                            label="ชื่อที่แสดง"
                            style={{ margin: 0 }}
                            placeholder="Wirte a paragraph or text in here"
                            fullWidth
                            color="red"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>



                </div>
            </div>
        </div>


    )
}


export default PageNameShop
