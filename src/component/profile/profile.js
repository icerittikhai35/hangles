import React from 'react'
import { Tabs, Tab, } from "@material-ui/core";
import HeaderProfile from './header-profile'

function Profile() {


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div style={{ width: '48rem', margin: 'auto', backgroundColor: 'white', paddingTop: 0 }}>
            <HeaderProfile />
            <div style={{ width: '48rem', margin: 'auto', backgroundColor: 'white', paddingTop: 90 }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    style={{ margin: 'auto', width: '100%', alignItem: 'center' }}
                    TabIndicatorProps={{
                        style: { background: "#35bdb4", height: "2px", top: "40px" }
                    }}
                >
                    <Tab label="ร้านค้า" value={0} style={{ flex: 1 }} />
                    <Tab label="ร้านค้า" value={1} style={{ flex: 1 }} />
                    <Tab label="รีวิว" value={2} style={{ flex: 1 }} />
                    <Tab label="รีวิว" value={3} style={{ flex: 1 }} />
                </Tabs>


            </div>
        </div>
    )
}

export default Profile
