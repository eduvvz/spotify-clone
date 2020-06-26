import React from 'react';
import { Grid } from '@material-ui/core';
import { VolumeUp } from '@material-ui/icons';
import useStyles from './styles';

const BarVolume = () => {
  const classes = useStyles();

  return (
    <Grid xs={5} container>
      <VolumeUp className={classes.controlSongIcons} />
    </Grid>
  );
};

export default BarVolume;
