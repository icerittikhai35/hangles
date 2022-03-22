import React from 'react'
import Bookmark from '../../../img/bookmark.png'
import Heart from '../../../img/heart.png'
import Comment from '../../../img/comment.png'
import CommentSP from '../../../img/commentSP.png'
import Navigation from '../../../Navigation'
import Back from '../../../img/back.png'
import More from '../../../img/more.png'
import { Link, useParams } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import ProfilePic from '../../../img/profile-pic.jpeg'
import ShopAbout from './shopAbout'

function DetailProduct() {
    const { testvalue } = useParams();
    console.log(testvalue);


    return (

        <div style={styles.container}>
            <Navigation />
            {/* ------------------------------แถบHeader--------------------------------- */}
            <div style={styles.divHeader}>
                <nav style={styles.navHeader}>
                    <div style={{ padding: '15px 20px' }}>
                        <Link to="/">
                            <img src={Back} alt="" width={20} />
                        </Link>
                    </div>
                    <div style={{ margin: 'auto', width: '100%' }}>
                        <div style={{ display: 'flex' }}>
                            <Avatar alt="Cindy Baker" src={ProfilePic} sx={{ width: 35, height: 35 }} style={{ marginTop: '1%', }} />
                            <div style={{ paddingLeft: '2%' }}>
                                <div>
                                    <lable style={{ fontWeight: 'bold', fontSize: 14 }}>Test</lable>
                                </div>
                                <div >
                                    <lable style={{ fontWeight: 'normal', fontSize: 14, }}>dsdfskdflksdfksdfikjshd</lable>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div style={{ padding: '15px 20px' }}>
                        <img src={More} alt="" width={18} />
                    </div>
                </nav>

            </div>

            {/* ------------------------------รูปภาพและรายละเอียดสินค้า--------------------------------- */}

            <div style={styles.containerDetail}>
                <div style={styles.divImgProduct}>
                    <img src={"https://tubtimbeautyplus.com/wp-content/uploads/2020/06/030.jpg"} alt="" width={'100%'} height={'100%'} />
                </div>

                <div style={styles.divPriceProduct}>
                    <div style={{ width: '42%', margin: 'auto' }}>
                        <label style={{ fontWeight: 'bold', fontSize: 14 }} >ราคา 100. ฿</label>
                    </div>
                    <div style={{ width: '42%', margin: 'auto', justifyContent: 'right', display: 'flex' }}>
                        <button type="submit" style={styles.sunmit} >เพิ่มในกระเป๋า</button>
                    </div>
                </div>

                <div style={styles.divDetailProduct}>
                    <div style={{ width: '42%', margin: 'auto', }}>
                        <div style={{ maxWidth: '15vh', display: 'flex', justifyContent: 'space-between', }}>
                            <div style={{ width: '50%', height: 28, backgroundColor: '#e2e2e2', borderRadius: 15, paddingLeft: 10 }}>
                                <img src={Heart} alt="" width={20} />
                                <label style={{ fontWeight: 'bold', fontSize: 14, paddingLeft: 2 }} >0</label>
                            </div>
                            <div >
                                <img src={CommentSP} alt="" width={20} />
                            </div>
                            <div >
                                <img src={Comment} alt="" width={20} />
                            </div>
                        </div>
                    </div>

                    <div style={{ width: '42%', margin: 'auto', justifyContent: 'right', display: 'flex' }}>
                        <img src={Bookmark} alt="" width={20} />
                    </div>

                </div>

                <div >
                    <div style={{ width: '90%', margin: 'auto' }}>
                        <label style={{ fontWeight: 'bold', fontSize: 10 }} >0 อื่นๆที่ชอบ</label>
                    </div>
                </div>
                <div >
                    <div style={{ width: '90%', margin: 'auto' }}>
                        <label style={{ fontWeight: 'bold', fontSize: 14 }} >lemon_sojuu - crimson t-shirt อก 42"</label>
                    </div>
                    <div style={{ width: '90%', margin: 'auto' }}>
                        <label style={{ fontWeight: 'normal', fontSize: 14 }} >ความยาว 28"</label>
                    </div>
                    <div style={{ width: '90%', margin: 'auto' }}>
                        <label style={{ fontWeight: 'normal', fontSize: 14, color: '#e2e2e2' }} >ดูความคิดเห็น.....</label>
                    </div>

                </div>

                <div style={{ display: 'flex', width: '90%', margin: 'auto', justifyContent: 'space-between' }}>
                    <div>
                        <label style={{ fontWeight: 'normal', fontSize: 14, color: '#000000' }} >ขนาด L</label>
                    </div>
                    <div>
                        <label style={{ fontWeight: 'normal', fontSize: 12, color: '#000000' }} >8 เดือนต่อมา</label>
                    </div>

                </div>
                <div style={{ display: 'flex', width: '100%', margin: 'auto', justifyContent: 'space-between' }}>
                    <ShopAbout />
                </div>


            </div>


        </div>


    )
}


const styles = {
    container: {
        maxWidth: '760px',
        margin: 'auto',
        height: '100%',
        backgroundColor: '#ffffff',
    },
    divHeader: {
        width: '100%',
    },
    navHeader: {
        display: 'flex',
        height: '6%'
    },
    containerDetail: {
        width: '100%',
        margin: 'auto',

    },
    divImgProduct: {
        width: '100%',
        margin: 'auto',
    },
    divPriceProduct: {
        width: '100%',
        margin: 'auto',
        height: '5vh',
        display: 'flex',
        border: '1px solid #eee'
    },
    divDetailProduct: {
        width: '100%',
        margin: 'auto',
        height: '5vh',
        display: 'flex',
        paddingTop: 5,
    },

    sunmit: {
        borderColor: '#35bdb4',
        borderWidth: 0,
        width: '35%',
        height: 25,
        backgroundColor: '#35bdb4',
        borderRadius: 5,
        textAlign: 'center',
        outline: 'none',
        color: 'white',
        fontSize: 15
    }
}
export default DetailProduct
