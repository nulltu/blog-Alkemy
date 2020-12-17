import Home from '../src/pages/Home'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from '../src/components/Header'
import Detail from '../src/pages/Detail'

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/detail/:id' component={Detail} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;