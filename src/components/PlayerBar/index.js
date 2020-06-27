import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import CurrentSong from './components/CurrentSong';
import Player from './components/Player';
import Actions from './components/Actions';
import useStyles from './styles';

const BarPlayer = () => {
  const classes = useStyles();
  const { currentSong } = useSelector((state) => state.song);

  return (
    <Grid container alignItems="center" className={classes.containerMain}>
      {currentSong && (
        <CurrentSong
          artists={currentSong.artists}
          nameSong={currentSong.name}
          imageSong={currentSong.image}
          liked={currentSong.liked}
        />
      )}
      <Player />
      <Actions />
    </Grid>
  );
};

export default BarPlayer;
