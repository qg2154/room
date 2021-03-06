import React from 'react';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import ReserveInfo from './pages/ReserveInfo';

import {Route, Switch} from "react-router-dom"; 

import Navbar from "./components/Navbar";

function App() {
  return (
  <>
    
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/rooms/" component={Rooms}/>
      <Route exact path="/rooms/:" component={SingleRoom}/>
      <Route exact path="/reserve" component={ReserveInfo}/>
      <Route component={Error} />
    </Switch>
  </>
  );
}

export default App;
