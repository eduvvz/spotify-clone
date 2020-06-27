import React from 'react';
import { Grid } from '@material-ui/core';
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  Repeat,
  Shuffle,
} from '@material-ui/icons';
import SongBar from './components/SongBar';
import useStyles from './styles';

const Player = () => {
  const classes = useStyles();

  return (
    <Grid sm={6} md={4} container item direction="column">
      <Grid
        xs={12}
        className={classes.containerControl}
        container
        item
        justify="center"
        alignItems="center"
      >
        <Shuffle className={classes.controlSongIcons} />
        <SkipPrevious className={classes.controlSongIcons} />
        <PlayCircleOutline
          className={classes.controlSongIcons}
          fontSize="large"
        />
        <SkipNext className={classes.controlSongIcons} />
        <Repeat className={classes.controlSongIcons} />
      </Grid>
      <SongBar />
    </Grid>
  );
};

export default Player;
