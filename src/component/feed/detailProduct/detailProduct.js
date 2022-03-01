import React from 'react'
import HeaderdetailProduct from './HeaderdetailProduct'


function DetailProduct() {
    return (

        <div style={{ maxWidth: '760px', margin: 'auto', height: '100vh', alignItems: 'stretch', backgroundColor: '#ffffff', display: 'flex', }}>
            <HeaderdetailProduct />
            <div style={{ width: 500, margin: 'auto', height: '100%', display: 'flex', paddingTop: '55vh' }}>

                <div style={{ width: 300, margin: 'auto', textAlign: 'center', }}>
                    <label style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>สร้างและตั้งร้านค้าของคุณ</label>
                </div>
            </div>
        </div>


    )
}

export default DetailProduct
