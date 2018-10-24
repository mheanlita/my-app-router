import React, { Component } from 'react';
//import PersonList from './PersonList';
import UserList from './UserList';
import User from './User';
import Main from './Main';
import Navigation from './Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* < PersonList /> */}
        {/* <Navigation />*/}
        <Main /> 
        <UserList />
        {/* <User /> */}
      </div>
    );
  }
}

export default App;
