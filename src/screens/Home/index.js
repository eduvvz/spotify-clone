import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './styles';
import CardSong from '../../components/CardSong';
import { recently } from '../../utils/mock/home';

const Home = () => {
  const classes = useStyles();

  return (
    <Grid xs={12} className={classes.page} item>
      <Typography variant="h5">Recently played</Typography>
      <Grid spacing={3} container>
        {recently.map((song, i) => (
          <CardSong
            key={`card-song-${[recently]}-${i}`}
            song={song}
            imageCircle={i > 1}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Home;
