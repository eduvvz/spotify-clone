import React from 'react';
import PropTypes from 'prop-types';
import { FavoriteBorder, Favorite } from '@material-ui/icons';
import useStyles from './styles';

const HearthLikedSong = ({ liked, size }) => {
  const classes = useStyles();

  return liked ? (
    <Favorite className={classes.likedIcon} fontSize={size} />
  ) : (
    <FavoriteBorder fontSize={size} />
  );
};

HearthLikedSong.defaultProps = {
  size: 'small',
};

HearthLikedSong.propTypes = {
  liked: PropTypes.bool,
  size: PropTypes.string,
};

export default HearthLikedSong;
