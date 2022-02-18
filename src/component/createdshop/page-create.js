import React from 'react'
import background4500 from '../../img/4500.jpg'
import Cancel from '../../img/cancel.png'
import { Link } from 'react-router-dom';

function PageCreate() {
    return (

        <div style={{ maxWidth: '760px', margin: 'auto',  height: '80vh', alignItems: 'stretch', backgroundColor: '#ffffff', display: 'flex',  }}>
            <div style={{ width: '100%', margin: 'auto', height: '100%', display: 'flex', backgroundImage: `url(${background4500})`, }}>
                <div style={{ padding: '15px 20px',position:'absolute' }}>
                    <Link to="/Feed">
                        <img src={Cancel} alt="" width={25} />
                    </Link>
                </div>
                <div style={{ width: 500, margin: 'auto', height: '100%', display: 'flex', paddingTop: '55vh' }}>

                    <div style={{ width: 300, margin: 'auto', textAlign: 'center', }}>
                        <label style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>สร้างและตั้งร้านค้าของคุณ</label>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default PageCreate
