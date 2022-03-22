import React from 'react'
import Cancel from '../../../img/cancel.png'
import { Link } from 'react-router-dom';


function PageCreate() {
    return (

        <div style={styles.container}>
            <div style={styles.backgroundBox}>
                <div style={{ padding: '15px 20px', position: 'absolute' }}>
                    <Link to="/">
                        <img src={Cancel} alt="" width={25} />
                    </Link>
                </div>
                <div style={styles.DivText}>

                    <div style={{ margin: 'auto', textAlign: 'center', }}>
                        <label style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>สร้างและตั้งร้านค้าของคุณ</label>
                    </div>
                </div>
            </div>
        </div>


    )
}

const styles = {
    container: {
        maxWidth: '760p',
        margin: 'auto',
        height: '90vh',
        backgroundColor: '#ffffff',
        display: 'flex',
    },
    backgroundBox: {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${"https://images.unsplash.com/photo-1595065666634-4725aa7e8379?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMGZhc2hpb258ZW58MHx8MHx8&w=1000&q=80"} )`,
        backgroundSize: 'cover',
    },
    DivText: {
        width: '100%',
        margin: 'auto',
        height: '100%',
        display: 'flex',
        paddingTop: '55vh',
    }

}

export default PageCreate
