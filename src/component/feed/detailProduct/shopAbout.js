import React from 'react';
import '../feed.css';
import DataStore from '../../../dataStore';
import { Link } from 'react-router-dom';
import ProfilePic from '../../../img/profile-pic.jpeg';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/material/styles';


// const labels = {
//     0.5: 'Useless',
//     1: 'Useless+',
//     1.5: 'Poor',
//     2: 'Poor+',
//     2.5: 'Ok',
//     3: 'Ok+',
//     3.5: 'Good',
//     4: 'Good+',
//     4.5: 'Excellent',
//     5: 'Excellent+',
// };

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#35bdb4',
    },
    '& .MuiRating-iconHover': {
        color: '#35bdb4',
    },
});

function Feed(props) {
    const valueStar = 4.5;
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
                <div style={{ height: '40px', paddingTop: 0 }}>
                    <div>
                        <label style={{ paddingLeft: '4%', fontWeight: 'bold', fontSize: 14 }} >ข้อมูลเพิ่มเติมเกี่ยวกับผู้ขาย</label>
                    </div>

                </div>
                <div style={{ height: '180px', paddingTop: 10 }}>
                    <div>
                        <div style={{ border: 10 }}>
                            <div style={{ width: '90%', margin: 'auto' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                                    <div style={{ display: 'flex' }}>
                                        <Avatar alt="Cindy Baker" src={ProfilePic} sx={{ width: 50, height: 50 }} />
                                        <div style={{ paddingLeft: '1rem', textAlign: 'left' }}>
                                            <div>
                                                <label style={styles.font}>Ice Rittikhai</label>
                                            </div>
                                            <div>
                                                <label style={styles.fontDeteil}>@icerittikhai</label>
                                            </div>
                                            <div>
                                                <Box
                                                    sx={{
                                                        width: 50,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}
                                                >

                                                    <StyledRating
                                                        name="customized-color"
                                                        value={valueStar}
                                                        precision={0.5}
                                                        icon={<StarIcon fontSize="inherit" />}
                                                        emptyIcon={<StarIcon fontSize="inherit" />}
                                                        readOnly
                                                        size="small"
                                                    />
                                                    {/* <Box sx={{ ml: 2 }}>{labels[valueStar]}</Box> */}
                                                </Box>
                                                <label style={styles.fontDeteil}>(0)</label>
                                            </div>

                                        </div>

                                    </div>



                                </div>


                            </div>
                        </div>

                    </div>
                    <div style={{ height: '40px', paddingTop: 0 }}>
                        <div style={{ width: '90%', margin: 'auto' }}>
                            <label style={styles.fontDeteil}>Used like new 🎀 | please feel free to contact for more details and photos ka 💗</label>
                        </div>
                    </div>
                    <div style={{ height: '40px', paddingTop: 0 }}>
                        <div style={{ width: '90%', margin: 'auto' }}>
                            <label style={styles.fontDeteil}>แท็ก
                                #adamsexyeve
                                #blue
                                #beachvibe
                                #jumpsuit</label>
                        </div>
                    </div>
                    <div style={{ height: '40px', paddingTop: 0 }}>
                        <div style={{ width: '90%', margin: 'auto' }}>
                            <label style={styles.font}>บางทีรายการ</label>
                        </div>
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
const styles = {

    container: {
        width: '80%',
        margin: 'auto',
        backgroundColor: 'white',
        paddingTop: 60,
        height: '10%',
    },

    boxCard: {
        boxShadow: "0 0 3px 2px #eeeeee", /* the shadow */
        width: '100%',
        height: 30,
        margin: 'auto',
        backgroundColor: '#fbfbfb',
        borderRadius: 15,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
    },
    well: {
        width: '100%',
        height: 20,
        margin: 'auto',
        borderRadius: 15,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
    },

    font: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    fontDeteil: {
        fontSize: 12,
        fontWeight: 'normal'

    },
    Imgprofile: {
        borderRadius: 50,
    }

};
export default Feed
