import React from 'react';
import Right from '../../../img/right-chevron.png'

function Vendor(params) {

    return (
        <div >


            <div style={{ display: 'flex', justifyContent: 'space-between', height: '5vh' }}>
                <div>
                    <label style={{ fontSize: 18, fontWeight: 'bold' }}>การขายของฉัน</label>
                </div>
                <div>
                    <img src={Right} alt="" width={15} />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', height: '5vh' }}>
                <div>
                    <label style={{ fontSize: 16, fontWeight: 'normal' }}>สินค้าของฉัน</label>
                </div>
                <div>
                    <img src={Right} alt="" width={15} />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', height: '5vh' }}>
                <div>
                    <label style={{ fontSize: 16, fontWeight: 'normal' }}>รายได้ของฉัน</label>
                </div>
                <div>
                    <img src={Right} alt="" width={15} />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', height: '5vh' }}>
                <div>
                    <label style={{ fontSize: 16, fontWeight: 'normal' }}>บัญชีธนาคาร</label>
                </div>
                <div>
                    <img src={Right} alt="" width={15} />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', height: '5vh', }}>
                <div>
                    <label style={{ fontSize: 16, fontWeight: 'normal' }}>Seller Balance</label>
                </div>
                <div>
                    <img src={Right} alt="" width={15} />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', height: '5vh' }}>
                <div>
                    <label style={{ fontSize: 16, fontWeight: 'normal' }}>การจัดส่งของฉัน</label>
                </div>
                <div>
                    <img src={Right} alt="" width={15} />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', height: '5vh' }}>
                <div>
                    <label style={{ fontSize: 16, fontWeight: 'normal' }}>ที่อยู่คลัง</label>
                </div>
                <div>
                    <img src={Right} alt="" width={15} />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', height: '5vh' }}>
                <div>
                    <label style={{ fontSize: 16, fontWeight: 'normal' }}>การตั้งค่าผู้ขาย</label>
                </div>
                <div>
                    <img src={Right} alt="" width={15} />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', height: '5vh' }}>
                <div>
                    <label style={{ fontSize: 16, fontWeight: 'normal' }}>ยืนยันคำขอ</label>
                </div>
                <div>
                    <img src={Right} alt="" width={15} />
                </div>
            </div>

            {/* โปรโมชั่น */}

            <div style={{ paddingTop: 15 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', height: '5vh', width: '100%', }}>
                    <div>
                        <label style={{ fontSize: 18, fontWeight: 'bold' }}>โปรโมชั่น</label>
                    </div>
                    <div>
                        <img src={Right} alt="" width={15} />
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', height: '5vh' }}>
                    <div>
                        <label style={{ fontSize: 16, fontWeight: 'normal' }}>เรียกใช้โปรโมชั่น</label>
                    </div>
                    <div>
                        <img src={Right} alt="" width={15} />
                    </div>
                </div>
            </div>

            {/* สนับสนุน */}

            <div style={{ paddingTop: 15,paddingBottom:50 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', height: '5vh', width: '100%', }}>
                    <div>
                        <label style={{ fontSize: 18, fontWeight: 'bold' }}>สนับสนุน</label>
                    </div>
                    <div>
                        <img src={Right} alt="" width={15} />
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', height: '5vh' }}>
                    <div>
                        <label style={{ fontSize: 16, fontWeight: 'normal' }}>ศูนย์ช่วยเหลือ</label>
                    </div>
                    <div>
                        <img src={Right} alt="" width={15} />
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', height: '5vh' }}>
                    <div>
                        <label style={{ fontSize: 16, fontWeight: 'normal' }}>นโยบาย</label>
                    </div>
                    <div>
                        <img src={Right} alt="" width={15} />
                    </div>
                </div>
            </div>


        </div>
    )
};

export default Vendor;