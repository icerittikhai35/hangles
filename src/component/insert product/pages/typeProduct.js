import React from 'react'
import Cancel from '../../../img/cancel.png';
import { Link } from 'react-router-dom';


function TypeProduct() {
    return (

        <div style={{ maxWidth: '760px', margin: 'auto', minHeight: '100vh', alignItems: 'stretch', backgroundColor: 'white', }}>
            <div style={{ width: '100%', margin: 'auto', height: '100%', display: 'flex', }}>
                <div style={{ padding: '15px 20px', position: 'absolute' }}>
                    <Link to="/">
                        <img src={Cancel} alt="" width={25} />
                    </Link>
                </div>
                <div style={{ width: '100%', margin: 'auto', height: '100%', paddingTop: '1rem', }}>
                    <div style={{ width: '80%', margin: 'auto', textAlign: 'center', paddingTop: '0rem' }}>
                        <label style={{ color: '#000000', fontSize: 18, fontWeight: 'normal' }}>เพิ่มสินค้า</label >
                    </div>
                    <div style={{ width: '80%', margin: 'auto', paddingTop: '2rem', display: 'flex', justifyContent: 'space-around' }}>
                        <div style={styles.boxImage}>
                        </div>
                        <div style={styles.boxImage}>
                        </div>
                        <div style={styles.boxImage}>
                        </div>
                        <div style={styles.boxImage}>
                        </div>
                        <div style={styles.boxImage}>
                        </div>

                    </div>
                    <div style={{ width: '80%', margin: 'auto', textAlign: 'center', paddingTop: '0.5rem', }}>
                        <Link to="/InsertProduct">
                            <button type="file" style={styles.sunmit} to="/Feed">+อัพโหลดรูปภาพหลายรูปภาพ</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>


    )
}


const styles = {
    input: {
        width: '20vh',
        height: 25,
        borderColor: '#eeeeee',
        borderWidth: 0,
        backgroundColor: '#eeeeee',
        borderRadius: 5,
        textAlign: 'left',
        marginLeft: 5,
        outline: 'none',
        fontSize: 12
    },

    sunmit: {
        borderColor: '#35bdb4',
        borderWidth: 0,
        maxWidth: '30vh',
        height: 40,
        backgroundColor: '#35bdb4',
        borderRadius: 10,
        textAlign: 'center',
        outline: 'none',
        color: 'white'
    },
    buttonSave: {
        borderColor: '#35bdb4',
        borderWidth: 0,
        maxWidth: '150px',
        height: 40,
        backgroundColor: '#35bdb4',
        borderRadius: 10,
        textAlign: 'center',
        outline: 'none',
        color: 'white',
    },
    buttonSaveDraft: {
        borderColor: '#000000',
        borderWidth: 1,
        maxWidth: '150px',
        height: 40,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        textAlign: 'center',
        outline: 'none',
        color: 'black'
    },
    boxImage: {
        width: 120,
        height: 130,
        backgroundColor: '#eeeeee'
    },

    divBox: {
        width: '100%',
        marginTop: -0.5,
        border: "1px solid #eeeeee",
        margin: 'auto'
    },

    divInBox: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        margin: 'auto',
        marginTop: 5,
        marginBottom: 5
    }
}
export default TypeProduct
