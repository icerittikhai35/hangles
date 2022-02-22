import React from 'react'
import ProfilePic from '../../../img/profile-pic.jpeg'
import Avatar from '@mui/material/Avatar';
import Cancel from '../../../img/cancel.png'
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

function PageMapShop() {
    return (

        <div style={{ maxWidth: '760px', margin: 'auto', minHeight: '10vh', alignItems: 'stretch', backgroundColor: 'white', display: 'flex', }}>
            <div style={{ width: '100%', margin: 'auto', height: '100%', display: 'flex', }}>
                <div style={{ padding: '15px 20px', position: 'absolute' }}>
                    <Link to="/Feed">
                        <img src={Cancel} alt="" width={25} />
                    </Link>
                </div>
                <div style={{ width: '100%', margin: 'auto', height: '100%', paddingTop: '2rem' }}>
                    <div style={{ width: 100, margin: 'auto', paddingTop: '5rem' }}>
                        <Avatar alt="Cindy Baker" src={ProfilePic} sx={{ width: 100, height: 100, backgroundColor: '#eeeeee' }} />
                    </div>
                    <div style={{ width: '80%', margin: 'auto', textAlign: 'center', paddingTop: 50 }}>
                        <label style={{ color: '#35bdb4', fontSize: 20, fontWeight: 'bold' }}>เพิ่มสถานที่เกี่ยวกับร้านของคุณ</label>
                    </div>
                    <div style={{ width: '80%', margin: 'auto', textAlign: 'center', }}>
                        <label style={{ color: 'black', fontSize: 12, fontWeight: 'normal' }}>โปรดระบุตำแหน่งและสถานที่ให้กับผู้ใช้</label>
                    </div>

                    <div style={{ width: '90%', margin: 'auto', paddingTop: 45, }}>
                        <TextField
                            id="standard-full-width"
                            style={{ margin: 0, textAlign: 'center' }}
                            placeholder="Location"
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


export default PageMapShop
