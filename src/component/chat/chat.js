import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HeaderChat from './header-chat';
import Navigation from '../../Navigation'

function Chat(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            hidden={value !== index}
            id={`Chat-${index}`}
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

Chat.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function allProps(index) {
    return {
        id: `tab-${index}`,
        'aria-controls': `Chat-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div style={{ maxWidth: '760px', margin: 'auto', backgroundColor: 'white', paddingTop: 70, minHeight: '100vh' }}>
            <Navigation />
            <HeaderChat />
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
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
                <Chat value={value} index={0}>
                    <input type="text" class="form-control" id="inputPassword" placeholder="ค้นหา" ></input>
                </Chat>
                <Chat value={value} index={1}>
                    <input type="text" class="form-control" id="inputPassword" placeholder="ค้นหา" ></input>
                </Chat>

            </Box>
        </div>
    );
}