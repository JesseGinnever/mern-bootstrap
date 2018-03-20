import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'typeface-roboto';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            Title
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}

export default App;
