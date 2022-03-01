import React from 'react';
import Cancel from '../../../img/cancel.png';
import True from '../../../img/true-e-logistics.jpg';
import Ninjavan from '../../../img/ninjavan.png';
import FlashExpress from '../../../img/flash.png';
import JandT from '../../../img/j&t.png';
import Thaipost from '../../../img/thaipost.png';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';


function PageLogisticShop() {
    return (

        <div style={{ maxWidth: '760px', margin: 'auto', minHeight: '10vh', alignItems: 'stretch', backgroundColor: 'white', display: 'flex', }}>
            <div style={{ width: '100%', margin: 'auto', height: '100%', display: 'flex', }}>
                <div style={{ padding: '15px 20px', position: 'absolute' }}>
                    <Link to="/">
                        <img src={Cancel} alt="" width={25} />
                    </Link>
                </div>
                <div style={{ width: '100%', margin: 'auto', height: '100%', paddingTop: '2rem', }}>
                    <div style={{ width: '80%', textAlign: 'left', paddingTop: '2rem', padding: '20px' }}>
                        <label style={{ color: 'black', fontSize: 12, fontWeight: 'normal' }}>โปรดเลือกตัวเลือกการจัดส่งที่คุณต้องการสำหรับร้านค้าของคุณ</label>
                    </div>

                    <div style={{ width: '100%', height: '110px', paddingTop: 15, backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{display:'flex'}}>
                            <div style={{ paddingLeft: '20px', }}>
                                <img src={True} alt="" width={75} />
                            </div>
                            <div style={{ paddingLeft: '20px',}}>
                                <div style={{ height: 20 }}>
                                    <label style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>True e-Logistics</label>
                                </div>
                                <div style={{ height: 20 }}>
                                    <label style={{ color: '#35bdb4', fontSize: 12, fontWeight: 'bold' }}>ขนส่งเข้ามารับสินค้า</label>
                                </div>
                                <div style={{ height: 20 }}>
                                    <label style={{ color: 'black', fontSize: 12, fontWeight: 'normal' }}>(จัดส่งเฉพาะ กทม. และปริมณฑลเท่านั้น)</label>
                                </div>
                                <div style={{ height: 20 }}>
                                    <label style={{ color: 'black', fontSize: 12, fontWeight: 'normal' }}>Policy</label>
                                </div>
                            </div>
                        </div>
                        <div style={{paddingRight:'20px'}}>
                            <SwitchUnstyled component={Root} defaultChecked={false}  />
                        </div>
                    </div>

                    <div style={{ width: '100%', height: '110px', paddingTop: 15, backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{display:'flex'}}>
                            <div style={{ paddingLeft: '20px', }}>
                                <img src={Ninjavan} alt="" width={75} />
                            </div>
                            <div style={{ paddingLeft: '20px',}}>
                                <div style={{ height: 20 }}>
                                    <label style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>True e-Logistics</label>
                                </div>
                                <div style={{ height: 20 }}>
                                    <label style={{ color: '#35bdb4', fontSize: 12, fontWeight: 'bold' }}>ขนส่งเข้ามารับสินค้า</label>
                                </div>
                                <div style={{ height: 20 }}>
                                    <label style={{ color: 'black', fontSize: 12, fontWeight: 'normal' }}>(จัดส่งเฉพาะ กทม. และปริมณฑลเท่านั้น)</label>
                                </div>
                                <div style={{ height: 20 }}>
                                    <label style={{ color: 'black', fontSize: 12, fontWeight: 'normal' }}>Policy</label>
                                </div>
                            </div>
                        </div>
                        <div style={{paddingRight:'20px'}}>
                            <SwitchUnstyled component={Root} defaultChecked={false}  />
                        </div>
                    </div>

                    <div style={{ width: '100%', height: '110px', paddingTop: 15, backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{display:'flex'}}>
                            <div style={{ paddingLeft: '20px', }}>
                                <img src={FlashExpress} alt="" width={75} />
                            </div>
                            <div style={{ paddingLeft: '20px',}}>
                                <div style={{ height: 20 }}>
                                    <label style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>True e-Logistics</label>
                                </div>
                                <div style={{ height: 20 }}>
                                    <label style={{ color: '#35bdb4', fontSize: 12, fontWeight: 'bold' }}>ขนส่งเข้ามารับสินค้า</label>
                                </div>
                                <div style={{ height: 20 }}>
                                    <label style={{ color: 'black', fontSize: 12, fontWeight: 'normal' }}>(จัดส่งเฉพาะ กทม. และปริมณฑลเท่านั้น)</label>
                                </div>
                                <div style={{ height: 20 }}>
                                    <label style={{ color: 'black', fontSize: 12, fontWeight: 'normal' }}>Policy</label>
                                </div>
                            </div>
                        </div>
                        <div style={{paddingRight:'20px'}}>
                            <SwitchUnstyled component={Root} defaultChecked={false}  />
                        </div>
                    </div>

                    <div style={{ width: '100%', height: '110px', paddingTop: 15, backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{display:'flex'}}>
                            <div style={{ paddingLeft: '20px', }}>
                                <img src={JandT} alt="" width={75} />
                            </div>
                            <div style={{ paddingLeft: '20px',}}>
                                <div style={{ height: 20 }}>
                                    <label style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>True e-Logistics</label>
                                </div>
                                <div style={{ height: 20 }}>
                                    <label style={{ color: '#35bdb4', fontSize: 12, fontWeight: 'bold' }}>ขนส่งเข้ามารับสินค้า</label>
                                </div>
                                <div style={{ height: 20 }}>
                                    <label style={{ color: 'black', fontSize: 12, fontWeight: 'normal' }}>(จัดส่งเฉพาะ กทม. และปริมณฑลเท่านั้น)</label>
                                </div>
                                <div style={{ height: 20 }}>
                                    <label style={{ color: 'black', fontSize: 12, fontWeight: 'normal' }}>Policy</label>
                                </div>
                            </div>
                        </div>
                        <div style={{paddingRight:'20px'}}>
                            <SwitchUnstyled component={Root} defaultChecked={false}/>
                        </div>
                    </div>

                    <div style={{ width: '100%', height: '110px', paddingTop: 15, backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{display:'flex'}}>
                            <div style={{ paddingLeft: '20px', }}>
                                <img src={Thaipost} alt="" width={75} />
                            </div>
                            <div style={{ paddingLeft: '20px',}}>
                                <div style={{ height: 20 }}>
                                    <label style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>True e-Logistics</label>
                                </div>
                                <div style={{ height: 20 }}>
                                    <label style={{ color: '#35bdb4', fontSize: 12, fontWeight: 'bold' }}>ขนส่งเข้ามารับสินค้า</label>
                                </div>
                                <div style={{ height: 20 }}>
                                    <label style={{ color: 'black', fontSize: 12, fontWeight: 'normal' }}>(จัดส่งเฉพาะ กทม. และปริมณฑลเท่านั้น)</label>
                                </div>
                                <div style={{ height: 20 }}>
                                    <label style={{ color: 'black', fontSize: 12, fontWeight: 'normal' }}>Policy</label>
                                </div>
                            </div>
                        </div>
                        <div style={{paddingRight:'20px'}}>
                            <SwitchUnstyled component={Root} defaultChecked={false}  />
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

const blue = {
    500: '#35bdb4',
};

const grey = {
    400: '#BFC7CF',
    500: '#AAB4BE',
    600: '#6F7E8C',
};

const Root = styled('span')(
    ({ theme }) => `
    font-size: 0;
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    margin: 10px;
    cursor: pointer;
  
    &.${switchUnstyledClasses.disabled} {
      opacity: 0.4;
      cursor: not-allowed;
    }
  
    & .${switchUnstyledClasses.track} {
      background: ${theme.palette.mode === 'dark' ? grey[600] : grey[400]};
      border-radius: 10px;
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
    }
  
    & .${switchUnstyledClasses.thumb} {
      display: block;
      width: 14px;
      height: 14px;
      top: 3px;
      left: 3px;
      border-radius: 16px;
      background-color: #fff;
      position: relative;
      transition: all 200ms ease;
    }
  
    &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
      background-color: ${grey[500]};
      box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
    }
  
    &.${switchUnstyledClasses.checked} {
      .${switchUnstyledClasses.thumb} {
        left: 22px;
        top: 3px;
        background-color: #fff;
      }
  
      .${switchUnstyledClasses.track} {
        background: ${blue[500]};
      }
    }
  
    & .${switchUnstyledClasses.input} {
      cursor: inherit;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      z-index: 1;
      margin: 0;
    }
    `,
);

export default PageLogisticShop
