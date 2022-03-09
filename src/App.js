import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Feed from './component/feed/feed';
import Search from './component/search/search';
import Createdshop from './component/createdshop/createdshop';
import Chat from './component/chat/chat';
import Profile from './component/profile/profile';
import Notifications from './component/notifications/notifications';
import InsertProduct from './component/insert product/insert-product';
import TypeProduct from './component/insert product/pages/typeProduct';
import DetailProduct from './component/feed/detailProduct/detailProduct';
import Wallet from './component/wallet/wallet';



function App() {
  return (
    <div style={{backgroundColor:'#eeeeee',minHeight: '100vh'}}>
      <BrowserRouter >
        <Switch>
          <Route exact  path="/" component={Feed} />
          <Route path="/Search" component={Search} />
          <Route path="/Createdshop" component={Createdshop} />
          <Route path="/Chat" component={Chat} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Notifications" component={Notifications} />
          <Route path="/InsertProduct" component={InsertProduct} />
          <Route path="/TypeProduct" component={TypeProduct} />
          <Route path="/DetailProduct" component={DetailProduct} />
          <Route path="/Wallet" component={Wallet} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;