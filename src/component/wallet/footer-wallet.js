import React from 'react';
import { Link } from 'react-router-dom';
import Ticket from '../../img/ticket.png'
import DubleArrow from '../../img/right-arrow.png'


const FooterWallet = (props) => {
    return (
        <div >
            <div className="footerWallet fixed-bottom ">
                <Link to="/Feed" >
                    <div style={{ width: '100%', margin: 'auto', height: '40px', }}>
                        <div style={{ width: '97%', display: 'flex', margin: 'auto', justifyContent: 'space-between', height: '30px', }}>
                            <div style={{ marginTop: 8, paddingLeft: 10 }}>
                                <img src={Ticket} alt="" width={'20vh'} />
                                <label style={{ color: 'black', fontSize: 14, fontWeight: 'bold', paddingLeft: 10 }}> Hangles Voucher  </label>
                            </div>
                            <div style={{ marginTop: 8 }}>
                                <label style={{ color: 'black', fontSize: 14 }}> เลือก  <img src={DubleArrow} alt="" width={8} color={'black'} /></label>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '100%', margin: 'auto', height: '40px', boxShadow: '0px 0px 0px 1px #d9d9d9 ' }}>
                        <div style={{ width: '97%', display: 'flex', margin: 'auto', justifyContent: 'space-between', height: '30px', }}>
                            <div style={{ marginTop: 8 }}>
                                <label style={{ color: 'black', fontSize: 14, fontWeight: 'bold', paddingLeft: 10 }}> Hangles Voucher  </label>
                            </div>
                            <div style={{ marginTop: 8 }}>
                                <label style={{ color: 'black', fontSize: 14 }}>0.00 ฿</label>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '100%', margin: 'auto', height: '40px', }}>
                        <div style={{ width: '97%', display: 'flex', margin: 'auto', justifyContent: 'space-between', height: '30px', }}>
                            <div style={{ marginTop: 8 }}>
                                <label style={{ color: 'black', fontSize: 14, fontWeight: 'bold', paddingLeft: 10 }}>ส่วนลดทั้งหมด</label>
                            </div>
                            <div style={{ marginTop: 8 }}>
                                <label style={{ color: 'black', fontSize: 14 }}>-0.00 ฿</label>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '100%', margin: 'auto', height: '40px', boxShadow: '0px 0px 0px 1px #d9d9d9 ' }}>
                        <div style={{ width: '97%', display: 'flex', margin: 'auto', justifyContent: 'space-between', height: '30px', }}>
                            <div style={{ marginTop: 8 }}>
                                <label style={{ color: 'black', fontSize: 14, fontWeight: 'bold', paddingLeft: 10 }}> ผลรวม  </label>
                            </div>
                            <div style={{ marginTop: 8 }}>
                                <label style={{ color: 'black', fontSize: 14 }}>0.00 ฿</label>
                            </div>
                        </div>
                    </div>

                    <div style={{ margin: 'auto', width: '20vh', paddingTop: 20, paddingBottom: 20,}}>
                        <button type="submit" style={styles.sunmit} to="/">ชำระเงิน</button>
                    </div>
                </Link>
            </div>

        </div>
    )
};
const styles = {

    sunmit: {
        borderColor: '#35bdb4',
        borderWidth: 0,
        minWidth: '20vh',
        height: '40px',
        backgroundColor: '#35bdb4',
        borderRadius: 10,
        textAlign: 'center',
        outline: 'none',
        color: 'white'
    },

}

export default FooterWallet;