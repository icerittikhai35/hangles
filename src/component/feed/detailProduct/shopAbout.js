import React from 'react';
import '../feed.css';
import DataStore from '../../../dataStore';
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


    return (
        <div style={{ maxWidth: '760px', margin: 'auto', backgroundColor: '#eeeeee', minHeight: '100vh', paddingBottom: '5vh', boxShadow: "0 0 3px 2px #eeeeee", borderTopRadius: 50 }}>


            <div className='YourStyle'>
                <div style={{ height: '4rem', paddingTop: 5 }}>
                    <div>
                        <label style={{ paddingLeft: '2%', fontWeight: 'bold', fontSize: 14 }} >ข้อมูลเพิ่มเติมเกี่ยวกับผู้ขาย</label>
                    </div>
                    <div>
                        <label className='font' style={{ color: '#35bdb4' }}>ส่งต่อเสื้อผ้าสภาพดี</label>
                    </div>
                </div>
                <div style={{ height: '4rem', paddingTop: 5 }}>
                    <div>
                        <label style={{ paddingLeft: '2%', fontWeight: 'bold', fontSize: 14 }} >ข้อมูลเพิ่มเติมเกี่ยวกับผู้ขาย</label>
                    </div>
                    <div>
                        <label className='font' style={{ color: '#35bdb4' }}>ส่งต่อเสื้อผ้าสภาพดี</label>
                    </div>
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
