import React from 'react'
import FooterWallet from './footer-wallet'
import HeaderWallet from './header-wallet'

function Wallet() {
    return (
        <>
            <HeaderWallet />
            <div style={styles.container}>
                <div style={styles.containerBoxText}>
                    <label style={styles.fontText}>0 รายการ</label>
                    <label style={styles.fontTextBlack}>จาก</label>
                    <label style={styles.fontText}>0 ร้าน</label>
                </div>
                <div style={styles.containerBoxTextSpace}>
                    <div style={{ margin: 'auto' }}>
                        <label style={styles.fontTextSpace}>กระเป๋าของคุณว่างเปล่า</label>
                    </div>
                </div>
            </div>
            <FooterWallet />
        </>

    )
}
const styles = {
    container: {
        maxWidth: '760px',
        margin: 'auto',
        backgroundColor: 'white',
        paddingTop: 70,
        height: '100vh'
    },
    containerBoxText: {
        display: 'flex',
        justifyContent: 'center'
    },
    fontText: {
        fontSize: 14,
        color: '#35bdb4'
    },
    fontTextBlack: {
        fontSize: 14,
        color: '#000000',
        marginLeft: 2,
        marginRight: 2,
    },
    containerBoxTextSpace: {
        display: 'flex',
        justifyContent: 'center',
        height: '50%',
        margin: 'auto',
    },
    fontTextSpace: {
        fontSize: 12,
        color: '#000000',


    },
}

export default Wallet
