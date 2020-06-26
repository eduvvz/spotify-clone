import React from 'react';
import { Grid } from '@material-ui/core';
import CurrentSong from './components/CurrentSong';
import Player from './components/Player';
import Actions from './components/Actions';
import useStyles from './styles';

const BarPlayer = () => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" className={classes.containerMain}>
      <CurrentSong />
      <Player />
      <Actions />
    </Grid>
  );
};

export default BarPlayer;
