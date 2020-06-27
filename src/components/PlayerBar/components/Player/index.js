import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, CircularProgress } from '@material-ui/core';
import classnames from 'classnames';
import {
  PlayCircleOutline,
  PauseCircleOutline,
  SkipPrevious,
  SkipNext,
  Repeat,
  Shuffle,
} from '@material-ui/icons';
import SongBar from './components/SongBar';
import { toggleSongPlay, toggleRepeat } from '../../../../redux/actions';
import useStyles from './styles';

const Player = ({ songURI, isPlaying }) => {
  const dispatch = useDispatch();
  const { volume, repeat } = useSelector((state) => state.song.controls);
  const classes = useStyles();
  const [song] = useState(new Audio(songURI));
  const [songMetaData, setSongMetaData] = useState({
    duration: 0,
    currentTime: 0,
  });
  const [loadingSong, setLoadingSong] = useState(true);

  useEffect(() => {
    song.volume = volume;
  }, [volume]);

  useEffect(() => {
    song.addEventListener('loadedmetadata', (e) => {
      setSongMetaData((prevSongMetaData) => ({
        ...prevSongMetaData,
        duration: e.target.duration,
      }));
      setLoadingSong(false);
    });

    song.addEventListener('timeupdate', (e) => {
      setSongMetaData((prevSongMetaData) => ({
        ...prevSongMetaData,
        currentTime: e.target.currentTime,
      }));
    });

    song.addEventListener('ended', () => {
      setSongMetaData((prevSongMetaData) => ({
        ...prevSongMetaData,
        currentTime: 0,
      }));
      dispatch(toggleSongPlay());
    });
  }, [song, repeat]);

  useEffect(() => {
    if (isPlaying) song.play();
    else song.pause();
  }, [isPlaying]);

  function changeCurrentTime(time) {
    song.currentTime = time;
  }

  function renderButtonPlay() {
    if (loadingSong) {
      return <CircularProgress color="secondary" />;
    }

    if (isPlaying) {
      return (
        <PauseCircleOutline
          className={classes.controlSongIcons}
          fontSize="large"
          onClick={() => dispatch(toggleSongPlay())}
        />
      );
    }

    return (
      <PlayCircleOutline
        className={classes.controlSongIcons}
        fontSize="large"
        onClick={() => dispatch(toggleSongPlay())}
      />
    );
  }
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
        {renderButtonPlay()}
        <SkipNext className={classes.controlSongIcons} />
        <Repeat
          className={classnames(classes.controlSongIcons, {
            [classes.iconActive]: repeat,
          })}
          onClick={() => dispatch(toggleRepeat())}
        />
      </Grid>
      <SongBar
        currentTime={songMetaData.currentTime}
        songDuration={songMetaData.duration}
        onChangeTime={changeCurrentTime}
      />
    </Grid>
  );
};

Player.propTypes = {
  songURI: PropTypes.string,
  isPlaying: PropTypes.bool,
};

export default Player;
