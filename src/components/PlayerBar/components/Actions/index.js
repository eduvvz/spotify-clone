import React from 'react';
import { Grid } from '@material-ui/core';
import { PlaylistPlay, DevicesOther } from '@material-ui/icons';
import BarVolume from './components/VolumeBar';
import useStyles from './styles';

const Actions = () => {
  const classes = useStyles();

  return (
    <Grid sm={3} md={4} container justify="flex-end" alignItems="center">
      <PlaylistPlay className={classes.controlSongIcons} />
      <DevicesOther className={classes.controlSongIcons} />
      <BarVolume />
    </Grid>
  );
};

export default Actions;
