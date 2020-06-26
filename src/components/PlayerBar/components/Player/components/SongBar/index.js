import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './styles';

const SongBar = () => {
  const classes = useStyles({ progressBarWidth: '20%' });

  return (
    <Grid container justify="space-around" alignItems="center">
      <Typography color="textSecondary" variant="caption">
        0:00
      </Typography>
      <div className={classes.barSong}>
        <div className={classes.progressBar} />
      </div>
      <Typography color="textSecondary" variant="caption">
        2:00
      </Typography>
    </Grid>
  );
};

export default SongBar;
