import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigator from './Navigation';
import Feed from './component/feed/feed';
import Search from './component/search/search';
import Createdshop from './component/createdshop/createdshop';
import Chat from './component/chat/chat';
import Profile from './component/profile/profile';
import Notifications from './component/notifications/notifications'



function App() {
  return (
    <div style={{backgroundColor:'#eeeeee',minHeight: '100vh'}}>
      <BrowserRouter >
        <Switch>
          <Route exact  path="/feed" component={Feed} />
          <Route path="/Search" component={Search} />
          <Route path="/Createdshop" component={Createdshop} />
          <Route path="/Chat" component={Chat} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Notifications" component={Notifications} />
        </Switch>
        <Navigator />
      </BrowserRouter>
    </div>
  );
}

export default App;