import React from 'react';
import Back from '../../img/back.png'



const HeaderChat = (props) => {
  return (
    <div >
      <nav className="navbar fixed-top  fixed-top " >
        <div style={{ padding: '15px 20px', }}>
          <img src={Back} alt="" width={20} />

        </div>
        <div style={{ margin: 'auto', }}>
          <lable style={styles.textStyle} >ข้อความ</lable>
        </div>

      </nav>

    </div>
  )
};

const styles = {
  textStyle: {
    paddingRight: 50,
    fontWeight: 'bold',
    fontSize: 16
  },
}

export default HeaderChat;