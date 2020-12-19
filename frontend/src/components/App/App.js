import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from '../../pages/Home'
import NewPost from '../../pages/NewPost'
import NavBar from '../navBar/NavBar'
import EditPost from '../../pages/EditPost'
import './app.css'


function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/editPost/:id' component={EditPost} />
          <Route path='/newPost' component={NewPost} />
          <Redirect to='/'/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;