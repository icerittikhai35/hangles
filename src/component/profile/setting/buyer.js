import React from 'react';
import Right from '../../../img/right-chevron.png'
import DataStore from '../../../dataStore';

function Buyer(params) {
    let popular =
        DataStore.map((item, e) => {
            console.log(item.id);
            return (
                <img src={item.Image} alt="new" width={'150px'} style={{ marginBottom: '2%', marginRight: 1 }} />
            )
        });
    return (
        <div >
            <div style={styles.divStyle}>
                <div>
                    <label style={{ fontSize: 18, fontWeight: 'bold' }}>การซื้อของฉัน</label>
                </div>
                <div>
                    <img src={Right} alt="" width={15} />
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', height: '25vh' }}>

                <div style={{ width: '100%', }}>
                    <div style={{ height: '30px', }}>
                        <label style={{ fontSize: 14, fontWeight: 'normal' }}>ดูเมื่อเร็วๆนี้</label>
                    </div>
                    <div class="scrollmenu">
                        <div>
                            {popular}
                        </div>
                    </div>
                </div>
            </div>

            <div style={styles.divStyle}>
                <div>
                    <label style={styles.fontStyle}>บันทึกไว้</label>
                </div>
                <div>
                    <img src={Right} alt="" width={15} />
                </div>
            </div>
            <div style={styles.divStyle}>
                <div>
                    <label style={styles.fontStyle}>บันทึกไว้</label>
                </div>
                <div>
                    <img src={Right} alt="" width={15} />
                </div>
            </div>
            <div style={styles.divStyle}>
                <div>
                    <label style={styles.fontStyle}>สิ่งที่ฉันถูกใจ</label>
                </div>
                <div>
                    <img src={Right} alt="" width={15} />
                </div>
            </div>
            <div style={styles.divStyle}>
                <div>
                    <label style={styles.fontStyle}>การตั้งค่าบัญชีผู้ซื้อ</label>
                </div>
                <div>
                    <img src={Right} alt="" width={15} />
                </div>
            </div>
            <div style={styles.divStyle}>
                <div>
                    <label style={styles.fontStyle}>เชื่อมต่อกับ line notify</label>
                </div>
                <div>
                    <img src={Right} alt="" width={15} />
                </div>
            </div>
            <div style={styles.divStyle}>
                <div>
                    <label style={styles.fontStyle}>ศูนย์ช่วยเหลือ</label>
                </div>
                <div>
                    <img src={Right} alt="" width={15} />
                </div>
            </div>
            <div style={styles.divStyle}>
                <div>
                    <label style={styles.fontStyle}>บทความ</label>
                </div>
                <div>
                    <img src={Right} alt="" width={15} />
                </div>
            </div>
            <div style={styles.divStyle}>
                <div>
                    <label style={styles.fontStyle}>นโยบาย</label>
                </div>
                <div>
                    <img src={Right} alt="" width={15} />
                </div>
            </div>


        </div>
    )
};

const styles = {

    divStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '5vh'
    },
    fontStyle: {
        fontSize: 16,
        fontWeight: 'normal'
    },


};

export default Buyer; 