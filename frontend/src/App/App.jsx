import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import Home from '../pages/Home';
import NavBar from '../components/navBar/Navbar';
import NewPost from '../pages/NewPost';
import EditPost from '../pages/EditPost';
import './app.css';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/newPost" component={NewPost} />
      <Route path="/editPost/:id" component={EditPost} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default App;
