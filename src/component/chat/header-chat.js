import React from 'react';
import Back from'../../img/back.png'



const HeaderChat = (props) => {
  return (
    <div >
      <nav className="navbar fixed-top  fixed-top " role="HeaderFeed" >
        <div style={{padding:'15px 20px',}}>
          <img src={Back} alt="" width={20} />
          
        </div>
        <div style={{margin:'auto',}}>
        <a style={{paddingRight:50,fontWeight: 'bold', fontSize: 16 }} >ข้อความ</a>
        </div>
        
      </nav>
     
    </div>
  )
};

export default HeaderChat;