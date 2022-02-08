import React from 'react'
import { Tabs, Tab, } from "@material-ui/core";
import HeaderChat from './header-chat'



function Chat() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div style={{ width: '48rem', margin: 'auto', backgroundColor: 'white', paddingTop: 90 }}>
            <HeaderChat />

            <Tabs
                value={value}
                onChange={handleChange}
                style={{ margin: 'auto', width: '100%', alignItem: 'center' }}
                TabIndicatorProps={{
                    style: { background: "#35bdb4", height: "2px", top: "40px" }
                }}
            >
                <Tab label="ผู้ซื้อ" value={0} style={{ flex: 1 }} />
                <Tab label="ผู้ขาย" value={1} style={{ flex: 1 }} />
                <Tab label="ผู้ขาย" value={2} style={{ flex: 1 }} />
                <Tab label="ผู้ขาย" value={3} style={{ flex: 1 }} />
            </Tabs>


        </div>
    )
}

export default Chat
