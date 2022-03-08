import React from 'react';
import './feed.css';
import HeaderFeed from './header-feed';
import Navigation from '../../Navigation'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import DataStore from '../../dataStore';
import { Link } from 'react-router-dom';


function Feed() {
    let boxStore =
        DataStore.map((item, e) => {
            console.log(item.id);
            return (
                <Link to="/DetailProduct">
                    <img src={item.Image} alt="new" width={'100%'} style={{ marginBottom: '2%', }} />
                </Link>
            )

        });
    let popular =
        DataStore.map((item, e) => {
            console.log(item.id);
            return (
                <Link to="/DetailProduct" >
                    <img src={item.Image} alt="new" width={'200px'} style={{ marginBottom: '2%', marginRight: 4 }} />
                </Link>
            )

        });





    return (
        <div style={{ maxWidth: '760px', margin: 'auto', backgroundColor: '#eeeeee', paddingTop: 60, minHeight: '100vh', paddingBottom: '5vh' }}>
            <Navigation />
            <HeaderFeed />
            <div className='YourStyle'>
                <div >
                    <div style={{ borderColor: 'white', display: 'flex', justifyContent: 'space-between', height: 30 }}>
                        <label style={{ fontWeight: 'bold', fontSize: 14, paddingLeft: '3%' }}>ยอดนิยม</label>
                        <label style={{ fontWeight: 'normal', fontSize: 12, paddingRight: '3%' }}>ดูเพิ่มเติม<KeyboardDoubleArrowRightIcon width={20} /></label>
                    </div>

                    <div class="scrollmenu">
                        <div>
                            {popular}
                        </div>
                    </div>
                </div>
            </div>
            <div className='YourStyle'>
                <div style={{ height: '4rem', paddingTop: 5 }}>
                    <div> <label style={{ paddingLeft: '2%', fontWeight: 'bold', fontSize: 14 }} >สไตล์ของคุณ</label></div>
                    <Link to="/DetailProduct">
                        <div> <label className='font' style={{ color: '#35bdb4' }}>อัพเดทขนาดและสไตล์ของคุณที่นี่</label></div>
                    </Link>
                </div>

                <table style={{ margin: 'auto', }}>
                    <tr >
                        <td>
                            <div style={{
                                gridTemplateColumns: "repeat(3,33%)",

                                display: "grid",
                                justifyContent: 'space-between',

                            }}>
                                {boxStore}
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Feed
