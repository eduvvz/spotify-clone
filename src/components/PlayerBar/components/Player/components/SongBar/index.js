import React, { useState, useRef } from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './styles';

const SongBar = () => {
  const barSongEl = useRef(null);
  const [progressSong, setProgressSong] = useState(0);
  const classes = useStyles({ progressBarWidth: progressSong });

  const onClickOrDragBarSong = (event) => {
    const x =
      event.pageX -
      barSongEl.current.getBoundingClientRect().left +
      window.scrollX;
    setProgressSong(x);
  };

  return (
    <Grid container justify="space-around" alignItems="center">
      <Typography color="textSecondary" variant="caption">
        0:00
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
        2:00
      </Typography>
    </Grid>
  );
};

export default SongBar;
