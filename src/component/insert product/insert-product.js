import React from 'react'
import Cancel from '../../img/cancel.png'
import { Link } from 'react-router-dom';


function InsertProduct() {
    return (

        <div style={{ maxWidth: '760px', margin: 'auto', minHeight: '100vh', alignItems: 'stretch', backgroundColor: 'white', }}>
            <div style={{ width: '100%', margin: 'auto', height: '100%', display: 'flex', }}>
                <div style={{ padding: '15px 20px', position: 'absolute' }}>
                    <Link to="/Feed">
                        <img src={Cancel} alt="" width={25} />
                    </Link>
                </div>
                <div style={{ width: '100%', margin: 'auto', height: '100%', paddingTop: '2rem', }}>
                    <div style={{ width: '80%', margin: 'auto', textAlign: 'center', paddingTop: '0rem' }}>
                        <label style={{ color: '#000000', fontSize: 20, fontWeight: 'normal' }}>เพิ่มสินค้า</label >
                    </div>

                    <div style={{ width: '100%', marginTop: '5rem', border: "1p solid #eeeeee", margin: 'auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', margin: 'auto', marginTop: 5, marginBottom: 5 }}>
                            <label
                                style={{
                                    color: 'black',
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    paddingLeft: '3%'
                                }}>
                                ชื่อสินค้า<label style={{ color: 'red', fontSize: 4, fontWeight: 'normal' }}>*</label>
                            </label>
                            <input type="text" name="name" style={styles.input} />
                        </div>
                    </div>

                    <div style={{ width: '100%', marginTop: -0.5, border: "1px solid #eeeeee", margin: 'auto' }}>
                        <div style={{ width: '100%', margin: 'auto', marginTop: 5, marginBottom: 5 }}>
                            <label
                                style={{
                                    color: 'black',
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    paddingLeft: '3%'
                                }}>
                                รายละเอียดสินค้า
                            </label>
                            <div style={{ margin: 'auto', width: '100%', display: 'flex', justifyContent: 'center', }}>
                                <textarea
                                    style={{
                                        width: '94.5%',
                                        border: 'white',
                                        outline: 'none',
                                        fontSize:14
                                    }}
                                    rows={5}
                                    cols={5}
                                    placeholder="รายละเอียดสินค้า"
                                    
                                />
                            </div>

                        </div>
                    </div>
                    <div style={{ width: '100%', marginTop: -0.5, border: "1px solid #eeeeee", margin: 'auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', margin: 'auto', marginTop: 5, marginBottom: 5 }}>
                            <label
                                style={{
                                    color: 'black',
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    paddingLeft: '3%'
                                }}>
                                # แท็ก สินค้า
                            </label>
                            <input type="text" name="name" style={styles.input} />
                        </div>
                    </div>
                    <div style={{ width: '100%', marginTop: -0.5, border: "1px solid #eeeeee", margin: 'auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', margin: 'auto', marginTop: 5, marginBottom: 5 }}>
                            <label
                                style={{
                                    color: 'black',
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    paddingLeft: '3%'
                                }}>
                                ประเภท<label style={{ color: 'red', fontSize: 15, fontWeight: 'normal' }}>*</label>
                            </label>
                            <input type="text" name="name" style={styles.input} />
                        </div>
                    </div>
                    <div style={{ width: '100%', marginTop: -0.5, border: "1px solid #eeeeee", margin: 'auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', margin: 'auto', marginTop: 5, marginBottom: 5 }}>
                            <label
                                style={{
                                    color: 'black',
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    paddingLeft: '3%'
                                }}>
                                ขนาด<label style={{ color: 'red', fontSize: 15, fontWeight: 'normal' }}>*</label>
                            </label>
                            <input type="text" name="name" style={styles.input} />
                        </div>
                    </div>
                    <div style={{ width: '100%', marginTop: -0.5, border: "1px solid #eeeeee", margin: 'auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', margin: 'auto', marginTop: 5, marginBottom: 5 }}>
                            <label
                                style={{
                                    color: 'black',
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    paddingLeft: '3%'
                                }}>
                                แบรนด์
                            </label>
                            <input type="text" name="name" style={styles.input} />
                        </div>
                    </div>
                    <div style={{ width: '100%', marginTop: -0.5, border: "1px solid #eeeeee", margin: 'auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', margin: 'auto', marginTop: 5, marginBottom: 5 }}>
                            <label
                                style={{
                                    color: 'black',
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    paddingLeft: '3%'
                                }}>
                               สไตล์
                            </label>
                            <input type="text" name="name" style={styles.input} />
                        </div>
                    </div>
                    <div style={{ width: '100%', marginTop: -0.5, border: "1px solid #eeeeee", margin: 'auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', margin: 'auto', marginTop: 5, marginBottom: 5 }}>
                            <label
                                style={{
                                    color: 'black',
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    paddingLeft: '3%'
                                }}>
                               สี
                            </label>
                            <input type="text" name="name" style={styles.input} />
                        </div>
                    </div>
                    <div style={{ width: '100%', marginTop: -0.5, border: "1px solid #eeeeee", margin: 'auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', margin: 'auto', marginTop: 5, marginBottom: 5 }}>
                            <label
                                style={{
                                    color: 'black',
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    paddingLeft: '3%'
                                }}>
                                บริการขนส่ง<label style={{ color: 'red', fontSize: 15, fontWeight: 'normal' }}>*</label>
                            </label>
                            <input type="text" name="name" style={styles.input} />
                        </div>
                    </div>
                    <div style={{ width: '100%', marginTop: -0.5, border: "1px solid #eeeeee", margin: 'auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', margin: 'auto', marginTop: 5, marginBottom: 5 }}>
                            <label
                                style={{
                                    color: 'black',
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    paddingLeft: '3%'
                                }}>
                                ราคาสินค้า<label style={{ color: 'red', fontSize: 15, fontWeight: 'normal' }}>*</label>
                            </label>
                            <input type="text" name="name" style={styles.input} placeholder="บาท" />
                        </div>
                    </div>


                </div>
            </div>
        </div>


    )
}


const styles = {
    input: {
        width: '25%',
        height: 30,
        borderColor: '#eeeeee',
        borderWidth: 0,
        backgroundColor: '#eeeeee',
        borderRadius: 5,
        textAlign: 'left',
        marginLeft: 5,
        outline: 'none',
        fontSize:12
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
export default InsertProduct
