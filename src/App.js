import React from 'react';
import { Grid } from '@material-ui/core';
import Player from './components/PlayerBar';
import SideBar from './components/SideBar';
import Main from './components/MainPages';

function App() {
  return (
    <div className="App">
      <Grid container wrap="nowrap">
        <SideBar />
        <Main />
      </Grid>
      <Player />
    </div>
  );
}

export default App;
