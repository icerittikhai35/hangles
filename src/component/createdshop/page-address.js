import React from 'react'
import ProfilePic from '../../img/profile-pic.jpeg'
import Avatar from '@mui/material/Avatar';
import Cancel from '../../img/cancel.png'
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

function PageAdressShop() {
    return (

        <div style={{ maxWidth: '760px', margin: 'auto',  minHeight: '10vh', alignItems: 'stretch', backgroundColor: 'white', display: 'flex', }}>
            <div style={{ width: '100%', margin: 'auto', height: '100%', display: 'flex', }}>
                <div style={{ padding: '15px 20px', position: 'absolute' }}>
                    <Link to="/Feed">
                        <img src={Cancel} alt="" width={25} />
                    </Link>
                </div>
                <div style={{ width: '100%', margin: 'auto', height: '100%', paddingTop: '2rem' , }}>
                    <div style={{ width: 100, margin: 'auto', paddingTop: 0 }}>
                        <Avatar alt="Cindy Baker" src={ProfilePic} sx={{ width: 100, height: 100, backgroundColor: '#eeeeee' }} />
                    </div>
                    <div style={{ width: '80%', margin: 'auto', textAlign: 'center', paddingTop: '2rem' }}>
                        <label style={{ color: '#35bdb4', fontSize: 20, fontWeight: 'bold' }}>เพิ่มสถานที่เกี่ยวกับร้านของคุณ</label >
                    </div>
                    <div style={{ width: '80%', margin: 'auto', textAlign: 'center', }}>
                        <label style={{ color: 'black', fontSize: 12, fontWeight: 'normal' }}>โปรดระบุตำแหน่งและสถานที่ให้กับผู้ใช้</label>
                    </div>

                    <div style={{ width: '90%', margin: 'auto', paddingTop: 15,}}>
                        <TextField
                            id="standard-full-width"
                            style={{ margin: 0, textAlign: 'center' }}
                            placeholder="ชื่อ-นามสกุล"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <div style={{ width: '90%', margin: 'auto', paddingTop: 15,}}>
                        <TextField
                            id="standard-full-width"
                            style={{ margin: 0, textAlign: 'center' }}
                            placeholder="หมายเลขโทรศัพท์"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <div style={{ width: '90%', margin: 'auto', paddingTop: 15,}}>
                        <TextField
                            id="standard-full-width"
                            style={{ margin: 0, textAlign: 'center' }}
                            placeholder="ที่อยู่"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <div style={{ width: '90%', margin: 'auto', paddingTop: 15,}}>
                        <TextField
                            id="standard-full-width"
                            style={{ margin: 0, textAlign: 'center' }}
                            placeholder="รหัสไปรษณีย์"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <div style={{ width: '90%', margin: 'auto', paddingTop: 15,}}>
                        <TextField
                            id="standard-full-width"
                            style={{ margin: 0, textAlign: 'center' }}
                            placeholder="จังหวัด"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <div style={{ width: '90%', margin: 'auto', paddingTop: 15,marginBottom:30}}>
                        <TextField
                            id="standard-full-width"
                            style={{ margin: 0, textAlign: 'center' }}
                            placeholder="แขวง / ตำบล"
                            fullWidth
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


export default PageAdressShop
