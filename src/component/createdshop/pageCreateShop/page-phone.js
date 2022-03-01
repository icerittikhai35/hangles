import React from 'react'
import ProfilePic from '../../../img/profile-pic.jpeg'
import Avatar from '@mui/material/Avatar';
import Cancel from '../../../img/cancel.png'
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

function PagePhone() {
    return (

        <div style={{ maxWidth: '760px', marginBottom: '3rem', minHeight: '10vh', alignItems: 'stretch', backgroundColor: 'white', display: 'flex', }}>
            <div style={{ width: '100%', margin: 'auto', height: '100%', display: 'flex', }}>
                <div style={{ padding: '15px 20px', position: 'absolute' }}>
                    <Link to="/">
                        <img src={Cancel} alt="" width={25} />
                    </Link>
                </div>
                <div style={{ width: '100%', margin: 'auto', height: '100%', paddingTop: '2rem' }}>
                    <div style={{ width: 100, margin: 'auto', paddingTop: '5rem' }}>
                        <Avatar alt="Cindy Baker" src={ProfilePic} sx={{ width: 100, height: 100, backgroundColor: '#eeeeee' }} />
                    </div>
                    <div style={{ width: '80%', margin: 'auto', textAlign: 'center', paddingTop: 50 }}>
                        <label style={{ color: '#35bdb4', fontSize: 18, fontWeight: 'bold' }}>สวัสดี Ritthikai Khantharit.</label>
                    </div>
                    <div style={{ width: '80%', margin: 'auto', textAlign: 'center', paddingTop: 0 }}>
                        <label style={{ color: '#35bdb4', fontSize: 18, fontWeight: 'bold' }}>หมายเลขโทรศัพท์ของคุณคืออะไร.</label>
                    </div>
                    <div style={{ width: '80%', margin: 'auto', textAlign: 'center', }}>
                        <label style={{ color: 'black', fontSize: 12, fontWeight: 'normal' }}>เราจะส่งรหัสยืนยันเพื่อยืนยันตัวตนของคุณ</label>
                    </div>

                    <div style={{ width: '30%', paddingLeft: '3%', paddingTop: 60 }}>
                        <label style={{ color: 'black', fontSize: 12, fontWeight: 'normal' }}>หมายเลขโทรศัพท์<label style={{ color: 'red', fontSize: 15, fontWeight: 'normal' }}>*</label></label>
                    </div>
                    <div style={{ width: '100%', margin: 'auto', paddingTop: 0, display: 'flex' }}>


                        <div style={{ width: '30%', margin: 'auto', paddingTop: 0, }}>
                            <TextField
                                id="standard-full-width"
                                style={{ margin: 0, }}
                                placeholder="+66"
                                fullWidth
                                textAlign="right"
                                color="red"
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div style={{ width: '60%', margin: 'auto', paddingTop: 0, }}>
                            <TextField
                                id="standard-full-width"

                                style={{ margin: 0 }}
                                placeholder="08X-XXXXXXX"
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
        </div>


    )
}


export default PagePhone
