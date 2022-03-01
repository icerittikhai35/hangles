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
            return (
                <Link to="/DetailProduct">
                    <img src={item.Image} alt="new" width={'100%'} style={{ marginBottom: '2%', }} />
                </Link>
            )
        });


    return (
        <div style={{ maxWidth: '760px', margin: 'auto', backgroundColor: 'white', paddingTop: 70, minHeight: '100vh', paddingBottom: '5vh' }}>
            <Navigation />
            <HeaderFeed />
            <div className='YourStyle'>
                <div >
                    <div style={{ borderColor: 'white', display: 'flex', justifyContent: 'space-between', height: 30 }}>
                        <label style={{ fontWeight: 'bold', fontSize: 12, paddingLeft: '3%' }}>ยอดนิยม</label>
                        <label style={{ fontWeight: 'bold', fontSize: 12, paddingRight: '3%' }}>ดูเพิ่มเติม<KeyboardDoubleArrowRightIcon /></label>
                    </div>

                    <div class="scrollmenu">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjlGT9OdwsXZQ9SWR_EWVoMoggpqVBwzlgA&usqp=CAU" alt="new" width={'20%'} />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjlGT9OdwsXZQ9SWR_EWVoMoggpqVBwzlgA&usqp=CAU" alt="new" width={'20%'} />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjlGT9OdwsXZQ9SWR_EWVoMoggpqVBwzlgA&usqp=CAU" alt="new" width={'20%'} />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjlGT9OdwsXZQ9SWR_EWVoMoggpqVBwzlgA&usqp=CAU" alt="new" width={'20%'} />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjlGT9OdwsXZQ9SWR_EWVoMoggpqVBwzlgA&usqp=CAU" alt="new" width={'20%'} />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjlGT9OdwsXZQ9SWR_EWVoMoggpqVBwzlgA&usqp=CAU" alt="new" width={'20%'} />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjlGT9OdwsXZQ9SWR_EWVoMoggpqVBwzlgA&usqp=CAU" alt="new" width={'20%'} />
                    </div>
                </div>
            </div>
            <div className='YourStyle'>
                <div style={{ height: '4rem', paddingTop: 5 }}>
                    <div> <label style={{ paddingLeft: '2%', fontWeight: 'bold', fontSize: 14 }} >สไตล์ของคุณ</label></div>
                    <div> <label className='font'>อัพเดทขนาดและสไตล์ของคุณที่นี่</label></div>
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
