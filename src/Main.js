import React from 'react';
import { Switch, Route } from 'react-router-dom';
import User from './User';
import UserList from './UserList';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const NoMatch = ({ location }) => (
    <div>
      <h3>No match for <code>{location.pathname}</code></h3>
    </div>
);

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/userlist' component={UserList}></Route>
        <Route path="/user/:id"  component={User}/>
        <Route component={NoMatch} />
    </Switch>
);

export default Main;