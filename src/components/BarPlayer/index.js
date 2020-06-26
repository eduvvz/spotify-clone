import React from 'react';
import { Grid } from '@material-ui/core';
import CurrentSong from './components/CurrentSong';
import useStyles from './styles';

const Player = () => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" className={classes.containerMain}>
      <CurrentSong />
    </Grid>
  );
};

export default Player;
