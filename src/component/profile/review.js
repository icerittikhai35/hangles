import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/material/styles';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

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
            <div style={styles.boxCard}>
                <div style={{ width: '95%', margin: 'auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <h1>0</h1>
                        </div>
                        <div>
                            <a style={styles.font}>0 รีวิว<KeyboardDoubleArrowRightIcon /></a>
                        </div>
                    </div>

                    <div >
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
                            <Box sx={{ ml: 2 }}>{labels[valueStar]}</Box>
                        </Box>


                    </div>
                </div>
            </div>
            <div style={styles.well}>
                <h7>ยังไม่มีความคิดเห็น</h7>
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