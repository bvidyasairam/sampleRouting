import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from "./Child"
import Users from "./Users"
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const value = useSelector((state) => state.booleanValue)
  const dispatch = useDispatch()
  return (
    <>
      <Router>
        <NavLink activeStyle={{backgroundColor:"red"}} to="/users">Users</NavLink>
        <Switch>
            <Route exact path="/" component={Child} /> 
            <Route path="/users" component={Users} />
        </Switch>
      </Router>
      <button onClick={() => dispatch({ type: "CHANGEBOOLEAN", data: !value })}>Submit</button>
    </>
  );
}

export default App;
