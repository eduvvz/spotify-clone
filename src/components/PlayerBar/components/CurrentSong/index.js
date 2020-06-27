import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './styles';
import HearthLikedSong from '../../../HearthLikedSong';

const CurrentSong = ({ artists, nameSong, imageSong, liked }) => {
  const classes = useStyles({ songImageURI: imageSong });

  return (
    <Grid sm={3} md={4} container item justify="flex-start" alignItems="center">
      <div className={classes.songImage} />
      <div className={classes.songInfos}>
        <Typography className={classes.songName}>{nameSong}</Typography>
        <Typography
          color="textSecondary"
          variant="caption"
          className={classes.artist}
        >
          {artists.join(', ')}
        </Typography>
      </div>
      <HearthLikedSong liked={liked} />
    </Grid>
  );
};

CurrentSong.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.string),
  nameSong: PropTypes.string,
  imageSong: PropTypes.string,
  liked: PropTypes.bool,
};

export default CurrentSong;
