import './App.css';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Chat from './components/Chat';
import Navbar from './components/Navbar/Navbar';
import NavDrawer from './components/Navbar/NavDrawer';
import React from 'react';
import VideoCallIcon from '@material-ui/icons/VideoCall';

const drawerItems = [
  {icon: <VideoCallIcon />, text: 'Video Chat'}
];

function App() {
  const [drawer, setDrawer] = React.useState(false);

  return (
    <Router>
      <div style={{marginBottom: 60}}>
        <Navbar handleMenuClick={() => {setDrawer(true)}} />
      </div>
      <NavDrawer open={drawer} items={drawerItems} handleClose={() => {setDrawer(false)}} />
      <Switch>
        <Redirect from='/' to='/home' exact />
        <Route path='/home' component={Home} />
        <Route path='/chat' component={Chat} />
      </Switch>
    </Router>
  );
}

export default App;
