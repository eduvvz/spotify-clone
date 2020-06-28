import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './styles';

const SongBar = ({ songDuration, currentTime, onChangeTime }) => {
  const barSongEl = useRef(null);
  const [progressSong, setProgressSong] = useState(0);
  const classes = useStyles({ progressBarWidth: progressSong });

  const convertTimeToMinutes = (value) => {
    const s = parseInt(value % 60, 10);
    const m = parseInt((value / 60) % 60, 10);
    return `${m}:${s < 10 ? `0${s}` : s}`;
  };

  useEffect(() => {
    const barWidth = barSongEl.current.offsetWidth;
    const elapsedTime = ((currentTime * 100) / songDuration).toFixed(3);
    setProgressSong((elapsedTime / 100) * barWidth);
  }, [currentTime, songDuration]);

  const onClickOrDragBarSong = (event) => {
    const barWidth = barSongEl.current.offsetWidth;
    const x =
      event.pageX -
      barSongEl.current.getBoundingClientRect().left +
      window.scrollX;
    const elapsedSong = (x * 100) / barWidth;
    onChangeTime((elapsedSong / 100) * songDuration);
  };

  return (
    <Grid container justify="space-around" alignItems="center">
      <Typography color="textSecondary" variant="caption">
        {convertTimeToMinutes(currentTime)}
      </Typography>
      <div
        className={classes.barSong}
        ref={barSongEl}
        onClick={onClickOrDragBarSong}
        onDragLeave={onClickOrDragBarSong}
      >
        <div className={classes.progressBar}>
          <div className={classes.indicator} id="indicator" />
        </div>
      </div>
      <Typography color="textSecondary" variant="caption">
        {convertTimeToMinutes(songDuration)}
      </Typography>
    </Grid>
  );
};

SongBar.propTypes = {
  songDuration: PropTypes.number,
  currentTime: PropTypes.number,
  onChangeTime: PropTypes.func,
};

export default SongBar;
