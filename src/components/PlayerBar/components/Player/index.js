import React, { useState, useEffect, useCallback } from 'react';
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
  const [song, setSong] = useState(null);
  const [songMetaData, setSongMetaData] = useState({
    duration: 0,
    currentTime: 0,
  });
  const [loadingSong, setLoadingSong] = useState(false);

  const restartSong = useCallback(() => {
    setLoadingSong(true);

    if (song) {
      // não achei outra forma de matar o aúdio :/
      song.src = '';
    }

    setSong(new Audio(songURI));
  }, [song, songURI]);

  useEffect(restartSong, [songURI]);

  useEffect(() => {
    if (!song) return;
    song.volume = volume;
  }, [volume, song]);

  useEffect(() => {
    if (!song) return;

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
  }, [song, dispatch]);

  useEffect(() => {
    if (!song) return;
    if (isPlaying) song.play();
    else song.pause();
  }, [isPlaying, song]);

  function changeCurrentTime(time) {
    if (!song) return;
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
