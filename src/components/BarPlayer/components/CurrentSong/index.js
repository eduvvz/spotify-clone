import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './styles';
import HearthLikedSong from '../HearthLikedSong';

const CurrentSong = () => {
  const classes = useStyles();

  return (
    <Grid xs={4} container wrap="nowrap">
      <Grid xs={2}>
        <div className={classes.songImage} />
      </Grid>
      <Grid className={classes.songInfos} container alignItems="center">
        <Typography className={classes.songName}>Somzin top</Typography>
        <Typography
          color="textSecondary"
          variant="caption"
          className={classes.artist}
        >
          Artista Top, Artista Top 2, Artista Artista Top, Artista Top 2,
          Artista Artista Top, Artista Top 2, Artista Artista Top, Artista Top
          2, Artista
        </Typography>
      </Grid>
      <Grid xs={1} container alignItems="center">
        <HearthLikedSong />
      </Grid>
    </Grid>
  );
};

export default CurrentSong;
