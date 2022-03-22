import React from 'react';
import './feed.css';
import HeaderFeed from './header-feed';
import Navigation from '../../Navigation'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import DataStore from '../../dataStore';
import { Link, } from 'react-router-dom';



function Feed() {
    //ส่วนนำข้อมูลสินค้าใน DataStore.js มาแแสดงส่วนของสินค้าทั้งหมด
    let boxStore =
        DataStore.map((item, e) => {
            console.log(item.id);
            return (
                <Link to="/DetailProduct" params={{ testvalue: item.id }}>
                    <img src={item.Image} alt="new" width={'100%'} style={{ marginBottom: '2%', }} />
                </Link >
            )
        });

    //ส่วนนำข้อมูลสินค้าใน DataStore.js มาแแสดงส่วนของยอดนิยม
    let popular =
        DataStore.map((item, e) => {
            console.log(item.id);
            return (
                <img src={item.Image} alt="new" width={'200px'} style={{ marginBottom: '2%', marginRight: 4 }} />
            )
        });



    return (
        <div style={styles.container}>
            <Navigation />
            <HeaderFeed />
            <div className='YourStyle'>
                <div >
                    <div style={styles.containerTextPopular}>
                        <label style={styles.fontPopular}>ยอดนิยม</label>
                        <label style={styles.fontOther}>ดูเพิ่มเติม<KeyboardDoubleArrowRightIcon width={20} /></label>
                    </div>

                    <div class="scrollmenu" >
                        <div>
                            {popular}
                        </div>
                    </div>
                </div>
            </div>



            <div className='YourStyle'>
                <div style={styles.containerTextYourStyle}>
                    <div>
                        <label style={styles.textYourStyle} >สไตล์ของคุณ</label>
                    </div>
                    <Link to="/DetailProduct">
                        <div>
                            <label className='font' style={styles.textUpdateStyle}>อัพเดทขนาดและสไตล์ของคุณที่นี่</label>
                        </div>
                    </Link>
                </div>

                <table style={{ margin: 'auto', }}>
                    <tr >
                        <td>
                            <div style={styles.containerTableStyle}>
                                {boxStore}
                            </div>
                        </td>
                    </tr>
                </table>
            </div>


            
        </div>
    )
}

const styles = {
    container: {
        maxWidth: '760px',
        margin: 'auto',
        backgroundColor: '#eeeeee',
        paddingTop: 60,
        minHeight: '100vh',
        paddingBottom: '5vh'
    },
    containerTextPopular: {
        borderColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        height: 30,
    },
    centerHeader: {
        margin: 'auto',
    },
    fontPopular: {
        fontWeight: 'bold',
        fontSize: 14,
        paddingLeft: '3%'
    },
    fontOther: {
        fontWeight: 'normal',
        fontSize: 12,
        paddingRight: '3%'
    },
    containerTextYourStyle: {
        height: '4rem',
        paddingTop: 5
    },
    textYourStyle: {
        paddingLeft: '2%',
        fontWeight: 'bold',
        fontSize: 14
    },
    textUpdateStyle: {
        color: '#35bdb4'
    },
    containerTableStyle: {
        gridTemplateColumns: "repeat(3,33%)",
        display: "grid",
        justifyContent: 'space-between',
    }
}


export default Feed
