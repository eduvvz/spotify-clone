import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { PlayArrow, Pause } from '@material-ui/icons';
import { playASong, toggleSongPlay } from '../../redux/actions';
import useStyles from './styles';

const CardSong = ({ song, imageCircle }) => {
  const dispatch = useDispatch();
  const { currentSong } = useSelector((state) => state.song);
  const classes = useStyles({ imageCircle });

  function renderIcon() {
    if (currentSong.isPlaying && currentSong.id === song.id) return <Pause />;

    return <PlayArrow />;
  }

  function onClickBtnPlay() {
    if (currentSong.isPlaying && currentSong.id === song.id) {
      dispatch(toggleSongPlay());
    } else {
      dispatch(playASong(song));
      dispatch(toggleSongPlay());
    }
  }

  return (
    <Grid xs={12} sm={6} md={3} lg={2} item>
      <div className={classes.card} data-testid="cardsong">
        <div className={classes.cardImage}>
          <img src={song.image} alt={song.name} data-testid="cardsong-image" />
        </div>
        <Typography data-testid="cardsong-name" className={classes.nameSong}>
          {song.name}
        </Typography>
        <Typography
          data-testid="cardsong-artist"
          className={classes.artistSong}
          color="textSecondary"
        >
          {song.artists[0]}
        </Typography>
        <div
          className={classes.buttonPlay}
          data-testid="cardsong-btnplay"
          id="button-play"
          onClick={onClickBtnPlay}
        >
          {renderIcon()}
        </div>
      </div>
    </Grid>
  );
};

CardSong.propTypes = {
  song: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    artists: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string,
  }),
  imageCircle: PropTypes.bool,
};

export default CardSong;
