import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Grid, Typography } from '@material-ui/core';
import { ExpandLess } from '@material-ui/icons';
import useStyles from './styles';
import HearthLikedSong from '../../../HearthLikedSong';
import { toggleLargeImageSongSidebar } from '../../../../redux/actions';

const CurrentSong = ({ artists, nameSong, imageSong, liked }) => {
  const dispatch = useDispatch();
  const { imageSongShowInSidebar } = useSelector((state) => state.layout);
  const classes = useStyles({ songImageURI: imageSong });

  return (
    <Grid
      sm={3}
      md={4}
      container
      item
      justify="flex-start"
      alignItems="center"
      className={classnames(classes.currentSongContainer, {
        [classes.showImage]: imageSongShowInSidebar,
      })}
    >
      <div className={classes.songImage}>
        <div
          className={classes.hoverSongimage}
          onClick={() => dispatch(toggleLargeImageSongSidebar())}
        >
          <ExpandLess />
        </div>
      </div>
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
