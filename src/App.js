import './App.css';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Chat from './components/Chat';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div style={{marginBottom: 60}}>
        <Navbar />
      </div>
      <Switch>
        <Redirect from='/' to='/home' exact />
        <Route path='/home' component={Home} />
        <Route path='/chat' component={Chat} />
      </Switch>
    </Router>
  );
}

export default App;
