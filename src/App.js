import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Component/Login'
import {Route, Switch} from 'react-router-dom'
import Main from './Component/Main'
import PrintContent from './Component/PrintContent'
import Course from './Component/Course'

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Login}/>
      <Route path='/Main' component={Main}/>
      <Route path='/Transcript' component={PrintContent}/>
      <Route path='/Course' component={Course}/>
    </Switch>
  );
}

export default App;
