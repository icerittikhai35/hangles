import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Buyer from './buyer';
import Vendor from './vendor';
import Navigation from '../../../Navigation';
import HeaderSetting from './header-setting'


function Setting(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            hidden={value !== index}
            id={`Setting-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

Setting.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function allProps(index) {
    return {
        id: `tab-${index}`,
        'aria-controls': `Setting-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div style={styles.container}>
            <Navigation />
            <HeaderSetting />
            <Box sx={{ width: '100%', }}>
                <Box sx={{ borderBottom: 1, borderColor: 'white' }}>
                    <Tabs value={value} onChange={handleChange}
                        aria-label="basic tabs example"
                        TabIndicatorProps={{ style: { background: '#35bdb4' } }}
                        textColor="inherit"
                        variant="fullWidth"
                    >
                        <Tab label="ผู้ซื้อ" {...allProps(0)} />
                        <Tab label="ผู้ขาย" {...allProps(1)} />
                    </Tabs>
                </Box>
                {/* หน้าร้านค้า แก้ไขที่ store.js */}
                <Setting value={value} index={0}>
                    <Buyer />
                </Setting>


                {/* หน้าร้านค้า แก้ไขที่ review.js */}
                <Setting value={value} index={1}>
                    <Vendor />
                </Setting>

            </Box>


        </div >
    );

}
const styles = {

    container: {
        maxWidth: '760px',
        margin: 'auto',
        backgroundColor: 'white',
        paddingTop: 145,
        minHeight: '100vh'
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
        alignItems: 'center',
    },
    well: {
        width: '100%',
        height: 100,
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
    ImgSetting: {
        borderRadius: 200,
    }

};