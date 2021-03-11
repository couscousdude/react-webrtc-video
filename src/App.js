import './App.css';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Chat from './components/Chat';
import Navbar from './components/Navbar/Navbar';
import NavDrawer from './components/Navbar/NavDrawer';
import React from 'react';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CreateCall from './components/VideoContainer/CreateCall';

const drawerItems = [
  {icon: <VideoCallIcon />, text: 'Video Chat', key: 'chat'},
  {icon: <AccountBoxIcon />, text: 'Profile', key: 'profile'}
];

function App() {




  const [drawer, setDrawer] = React.useState(false);

  return (
    <Router>
      <div style={{height: 60}}>
        <Navbar handleMenuClick={() => {setDrawer(true)}} />
      </div>
      <NavDrawer open={drawer} items={drawerItems} handleClose={() => {setDrawer(false)}} />
      <Switch>
        <Redirect from='/' to='/home' exact />
        <Route path='/home' component={Home} />
        {/* <Route path='/chat' exact component={Chat} /> */}
        <Route path='/chat'>
          <Chat />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
