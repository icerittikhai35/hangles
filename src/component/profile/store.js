import React from 'react';
import ProfilePic from '../../img/profile-pic.jpeg'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/material/styles';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#35bdb4',
    },
    '& .MuiRating-iconHover': {
        color: '#35bdb4',
    },
});
const Store = (props) => {
    const valueStar = 4.5;
    return (
        <div>
            <div style={{ border: 10 }}>
                <div style={{ width: '100%', margin: 'auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <div style={{ display: 'flex' }}>
                            <Avatar alt="Cindy Baker" src={ProfilePic} sx={{ width: 100, height: 100 }} />
                            <div style={{ paddingLeft: '1rem', textAlign: 'center' }}>
                                <h6>0</h6>
                                <h6>โพสต์</h6>
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
                            </div>

                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <h6>0</h6>
                            <h6>ผู้ติดตาม</h6>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <h6>0</h6>
                            <h6>กำลังติดตาม</h6>
                        </div>

                    </div>

                    <div >
                        <div >
                            <div>
                                <a style={styles.font}>Ice Rittikhai</a>
                            </div>
                            <div>
                                <a style={styles.fontDeteil}>@icerittikhai</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}; 
const styles = {

    container: {
        width: '48rem',
        margin: 'auto',
        backgroundColor: 'white',
        paddingTop: 60,
        height: '100%'
    },

    boxCard: {
        boxShadow: "0 0 3px 2px #eeeeee", /* the shadow */
        width: '100%',
        height: 100,
        margin: 'auto',
        backgroundColor: '#fbfbfb',
        borderRadius: 15,
        justifyContent: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    well: {
        width: '100%',
        height: 100,
        margin: 'auto',
        borderRadius: 15,
        justifyContent: 'center',
        display: 'flex',
        justifyContent: 'center',
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
        borderRadius: 200,
    }

};
export default Store;