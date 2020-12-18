import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from '../src/pages/Home'
import NewPost from '../src/pages/NewPost'
import NavBar from '../src/components/NavBar'
import Detail from '../src/pages/Detail'

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/detail/:id' component={Detail} />
          <Route path='/editPost' component={NewPost} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;