import React from 'react'
import './search.css'
import HeaderSearch from './hearder-search'
import Navigation from '../../Navigation'

function Search() {
    return (
        <div style={{ maxWidth: '760px', margin: 'auto', backgroundColor: 'white', paddingTop: 70, minHeight: '100vh' }}>
            <Navigation />
            <HeaderSearch />
            <div >
                <div >
                    <div style={{ width: '100%', height: 30, paddingLeft: 10 }}>
                        <label style={{ fontWeight: 'bold', fontSize: 12, }}>ผู้ชาย</label>
                    </div>
                    <div class="scrollmenu" >

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjlGT9OdwsXZQ9SWR_EWVoMoggpqVBwzlgA&usqp=CAU" alt="new" width={'20%'} />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjlGT9OdwsXZQ9SWR_EWVoMoggpqVBwzlgA&usqp=CAU" alt="new" width={'20%'} />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjlGT9OdwsXZQ9SWR_EWVoMoggpqVBwzlgA&usqp=CAU" alt="new" width={'20%'} />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjlGT9OdwsXZQ9SWR_EWVoMoggpqVBwzlgA&usqp=CAU" alt="new" width={'20%'} />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjlGT9OdwsXZQ9SWR_EWVoMoggpqVBwzlgA&usqp=CAU" alt="new" width={'20%'} />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjlGT9OdwsXZQ9SWR_EWVoMoggpqVBwzlgA&usqp=CAU" alt="new" width={'20%'} />

                    </div>
                </div>
                <div >
                    <div style={{ width: '100%', height: 30, paddingLeft: 10 }}>
                        <label style={{ fontWeight: 'bold', fontSize: 12, }}>ผู้ชาย</label>
                    </div>
                    <div class="scrollmenu">
                        <img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'20%'} />
                        <img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'20%'} />
                        <img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'20%'} />
                        <img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'20%'} />
                        <img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'20%'} />
                        <img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'20%'} />
                        <img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'20%'} />


                    </div>
                </div>
                <div >
                    <div style={{ width: '100%', height: 30, paddingLeft: 10, }}>
                        <label style={{ fontWeight: 'bold', fontSize: 12, }}>ผู้ชาย</label>
                    </div>
                    <div class="scrollmenu">
                        <img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'20%'} />
                        <img src="https://a.lnwfile.com/snzt77.jpg" alt="new" width={'20%'} />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Search
