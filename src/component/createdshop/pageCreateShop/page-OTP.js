import React from 'react'
import Cancel from '../../../img/cancel.png'
import { Link } from 'react-router-dom';

function PageOTP() {
    return (

        <div style={{ maxWidth: '760px', marginBottom: '3rem', minHeight: '10vh', alignItems: 'stretch', backgroundColor: 'white', display: 'flex', }}>
            <div style={{ width: '100%', margin: 'auto', height: '100%', display: 'flex', }}>
                <div style={{ padding: '15px 20px', position: 'absolute' }}>
                    <Link to="/">
                        <img src={Cancel} alt="" width={25} />
                    </Link>
                </div>
                <div style={{ width: '100%', margin: 'auto', height: '100%', paddingTop: '10rem' }}>

                    <div style={{ width: '80%', margin: 'auto', textAlign: 'center', }}>
                        <label style={{ color: '#35bdb4', fontSize: 18, fontWeight: 'bold' }}>ยืนยันหมายเลขโทรศัพท์เพื่อเปิดใช้งานร้านค้าของคุณ</label>
                    </div>
                    <div style={{ width: '80%', margin: 'auto', textAlign: 'center', }}>
                        <label style={{ color: 'black', fontSize: 12, fontWeight: 'normal' }}>ส่งข้อความถึง 0965465462 แก้ไข</label>
                    </div>

                    <div style={{ width: '90%', margin: 'auto', paddingTop: 50 }}>
                        <input type="text" name="name" style={styles.input} />
                    </div>

                    <div style={{ width: 100, margin: 'auto', paddingTop: 50 }}>
                        <Link to="/InsertProduct">
                            <button type="submit" style={styles.sunmit} to="/Feed">ยืนยัน</button>
                        </Link>

                    </div>
                    <div style={{ width: '80%', margin: 'auto', textAlign: 'center', }}>
                        <label style={{ color: 'black', fontSize: 12, fontWeight: 'normal' }}>(RED:NRE, OTPExpire in 04:51)</label>
                    </div>



                </div>



            </div>
        </div>



    )
}

const styles = {
    input: {
        width: '100%',
        height: 35,
        borderColor: '#eeeeee',
        borderWidth: 0,
        backgroundColor: '#eeeeee',
        borderRadius: 5,
        textAlign: 'center',
        outline: 'none'
    },

    sunmit: {
        borderColor: '#35bdb4',
        borderWidth: 0,
        width: '100%',
        height: 35,
        backgroundColor: '#35bdb4',
        borderRadius: 10,
        textAlign: 'center',
        outline: 'none',
        color: 'white'
    }
}

export default PageOTP
