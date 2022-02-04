import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigator from './Navigation';

import Feed from './component/feed/feed';
import Search from './component/search/search';
import Createdshop from './component/createdshop/createdshop';
import Chat from './component/chat/chat';
import Profile from './component/profile/profile';



function App() {
  return (
    <div style={{backgroundColor:'#eeeeee',height:'100vw'}}>
      <BrowserRouter >
        <Navigator />
        <Switch>
          <Route exact  path="/" component={Feed} />
          <Route path="/Search" component={Search} />
          <Route path="/Createdshop" component={Createdshop} />
          <Route path="/Chat" component={Chat} />
          <Route path="/Profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;