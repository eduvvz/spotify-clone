import React from 'react';
import { Grid } from '@material-ui/core';
import CurrentSong from './components/CurrentSong';
import Player from './components/Player';
import useStyles from './styles';

const BarPlayer = () => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" className={classes.containerMain}>
      <CurrentSong />
      <Player />
    </Grid>
  );
};

export default BarPlayer;
