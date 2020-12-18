import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from '../src/pages/Home'
import NewPost from '../src/pages/NewPost'
import NavBar from '../src/components/NavBar'
import EditPost from '../src/pages/EditPost'


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