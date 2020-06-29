import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './styles';
import CardSong from '../../components/CardSong';
import { playlistsOfHome } from '../../utils/mock/home';

const Home = () => {
  const classes = useStyles();

  return (
    <Grid xs={12} className={classes.page} item>
      {playlistsOfHome.map((plalist, i) => (
        <div key={`playlist-home-${i}`}>
          <Typography variant="h5">{plalist.name}</Typography>
          <Grid spacing={3} className={classes.listContainer} container>
            {plalist.items.map((song, j) => (
              <CardSong
                key={`card-song-${plalist.name}-${j}`}
                song={song}
                imageCircle={i > 1}
              />
            ))}
          </Grid>
        </div>
      ))}
    </Grid>
  );
};

export default Home;
