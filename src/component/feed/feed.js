import React from 'react'
import './feed.css';
import HeaderFeed from './header-feed'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

function Feed() {
    return (
        <div style={{ maxWidth: '760px', margin: 'auto', backgroundColor: 'white', paddingTop: 70, minHeight: '100vh' }}>
            <HeaderFeed />
            <div className='YourStyle'>
                <div >
                    <div style={{ borderColor: 'white', display: 'flex', justifyContent: 'space-between',height:30 }}>
                        <label style={{ fontWeight: 'bold', fontSize: 12,paddingLeft:'3%' }}>ผู้ชาย</label>
                        <label style={{ fontWeight: 'bold', fontSize: 12,paddingRight:'3%' }}>ดูเพิ่มเติม<KeyboardDoubleArrowRightIcon /></label>
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

                <table style={{ margin: 'auto' }}>
                    <tr >
                        <td><img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'100%'} /></td>
                        <td><img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'100%'} /></td>
                        <td><img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'100%'} /></td>
                    </tr>
                    <tr >
                        <td><img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'100%'} /></td>
                        <td><img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'100%'} /></td>
                        <td><img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'100%'} /></td>
                    </tr>
                    <tr >
                        <td><img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'100%'} /></td>
                        <td><img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'100%'} /></td>
                        <td><img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'100%'} /></td>
                    </tr>
                    <tr >
                        <td><img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'100%'} /></td>
                        <td><img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'100%'} /></td>
                        <td><img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'100%'} /></td>
                    </tr>
                    <tr >
                        <td><img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'100%'} /></td>
                        <td><img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'100%'} /></td>
                        <td><img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'100%'} /></td>
                    </tr>
                    <tr >
                        <td><img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'100%'} /></td>
                        <td><img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'100%'} /></td>
                        <td><img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'100%'} /></td>
                    </tr>

                </table>
            </div>
        </div>
    )
}

export default Feed
