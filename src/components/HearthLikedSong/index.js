import React from 'react';
import PropTypes from 'prop-types';
import { FavoriteBorder, Favorite } from '@material-ui/icons';
import useStyles from './styles';

const HearthLikedSong = ({ liked, size }) => {
  const classes = useStyles();

  return liked ? (
    <Favorite
      data-testid="hearthlikedsong-icon-favorite"
      className={classes.likedIcon}
      fontSize={size}
    />
  ) : (
    <FavoriteBorder
      data-testid="hearthlikedsong-icon-favoriteborder"
      className={classes.notLikedIcon}
      fontSize={size}
    />
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
