import './App.css';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Chat from './components/Chat';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect from='/' to='/home' exact />
        <Route path='/home' component={Home} />
        <Route path='/chat' component={Chat} />
      </Switch>
    </Router>
  );
}

export default App;
