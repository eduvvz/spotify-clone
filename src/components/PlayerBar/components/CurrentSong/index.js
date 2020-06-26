import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './styles';
import HearthLikedSong from '../../../HearthLikedSong';

const CurrentSong = () => {
  const classes = useStyles();

  return (
    <Grid
      sm={3}
      md={4}
      container
      wrap="nowrap"
      justify="flex-start"
      alignItems="center"
    >
      <div className={classes.songImage} />
      <div className={classes.songInfos}>
        <Typography className={classes.songName}>Somzin top</Typography>
        <Typography
          color="textSecondary"
          variant="caption"
          className={classes.artist}
        >
          Artista Top
        </Typography>
      </div>
      <HearthLikedSong />
    </Grid>
  );
};

export default CurrentSong;
