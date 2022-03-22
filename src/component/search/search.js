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
                    <div style={{ width: '100%', height: 25, paddingLeft: 15 }}>
                        <label style={{ fontWeight: 'bold', fontSize: 15, }}>ผู้ชาย</label>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div class="scrollmenu" style={{overflowX:'hidden'}}>
                            <img src="https://inwfile.com/s-ca/z1w2c7.jpg" alt="new" width={'25%'} style={styles.imgStyle} />
                            <img src="https://mrmakershop.com/wp-content/uploads/2018/10/Lp.021-%E0%B8%81%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%81%E0%B8%87%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B8%B2%E0%B8%A7%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%8A%E0%B8%B2%E0%B8%A2-uncle-pants-%E0%B8%AA%E0%B8%B5-honey-brown-1-1-800x800.jpg" alt="new" width={'25%'} style={styles.imgStyle} />
                            <img src="https://fl.lnwfile.com/_/fl/_raw/4j/e9/v3.jpg" alt="new" width={'25%'} style={styles.imgStyle} />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeZ-eGykt3HS6uhWjY8vSDkGfGjzfB71sjaw&usqp=CAU" alt="new" width={'25%'} style={styles.imgStyle} />
                            <img src="https://fp.lnwfile.com/_/fp/_raw/q5/e5/ls.jpg" alt="new" width={'25%'} style={styles.imgStyle} />
                            <img src="https://sp-trade.se/wp-content/uploads/2018/09/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%8A%E0%B8%B2%E0%B8%A2-%E0%B8%A5%E0%B8%B3%E0%B8%A5%E0%B8%AD%E0%B8%87-%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%81%E0%B8%B3%E0%B8%A1%E0%B8%B0%E0%B8%AB%E0%B8%A2%E0%B8%B5%E0%B9%88-20.jpg" alt="new" width={'25%'} style={styles.imgStyle} />

                        </div>
                    </div>
                </div>
                <div >
                    <div style={{ width: '100%', height: 25, paddingLeft: 10 }}>
                        <label style={{ fontWeight: 'bold', fontSize: 15, }}>ผู้หญิง</label>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div class="scrollmenu" style={{overflowX:'hidden'}}>
                            <img src="https://cf.shopee.co.th/file/3e86d925fabdb05edf0a80edae5073c3" alt="new" width={'25%'} style={styles.imgStyle} />
                            <img src="https://f.btwcdn.com/store-38848/product/1919be50-69c3-3610-8752-5d412854ef8e.jpg" alt="new" width={'25%'} style={styles.imgStyle} />
                            <img src="https://cf.shopee.co.th/file/d67715a9ec03572df0dc38113139385c" alt="new" width={'25%'} style={styles.imgStyle} />
                            <img src="https://th-test-11.slatic.net/p/aa659d0b5d21b6d77114093796f88d4b.jpg" alt="new" width={'25%'} style={styles.imgStyle} />
                            <img src="https://c.lnwfile.com/erkgbw.jpg" alt="new" width={'25%'} style={styles.imgStyle} />
                            <img src="https://cf.shopee.co.th/file/f222bb999a65d4dab3b05188e704daa5" alt="new" width={'25%'} style={styles.imgStyle} />

                        </div>
                    </div>
                </div>
                <div >
                    <div style={{ width: '100%', height: 25, paddingLeft: 10, }}>
                        <label style={{ fontWeight: 'bold', fontSize: 12, }}>ผู้ชาย</label>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <div class="scrollmenu">
                            <img src="https://inwfile.com/s-a/hlheok.jpg" alt="new" width={'25%'} style={{ marginBottom: '2%', marginRight: 6 }} />
                            <img src="https://inwfile.com/s-a/uvt8pi.jpg" alt="new" width={'25%'} style={styles.imgStyle} />

                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

const styles = {
    imgStyle: {
        marginBottom: '2%',
        paddingLeft: 5
    },
}


export default Search
