import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginForm from './Forms/LoginForm';
import SignUpForm from './Forms/SignUpForm';
import Movies from './Movies/Movies';
import './App.css';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Movies} />
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/signup" component={SignUpForm} />
    </Switch>
  );
}

export default App;