import React, { useState, useRef, useLayoutEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Home, Search, Dehaze, Add, Favorite } from '@material-ui/icons';
import classnames from 'classnames';
import useStyles from './styles';
import logo from '../../static/images/Spotify_Logo_RGB_White.png';
import { playlists } from '../../utils/mock/playlists';

const SideBar = () => {
  const mainNavBarEl = useRef(null);
  const playlistsTargetsEl = useRef(null);
  const [heightMainSidebar, setHeightMainSidebar] = useState(0);
  const classes = useStyles({ heightMainSidebar });

  const navbarItems = [
    {
      name: 'Home',
      icon: <Home className={classes.iconNavbar} />,
      isActive: true,
    },
    {
      name: 'Search',
      icon: <Search className={classes.iconNavbar} />,
    },
    {
      name: 'Your Library',
      icon: <Dehaze className={classes.iconNavbar} />,
    },
  ];

  useLayoutEffect(() => {
    setHeightMainSidebar(
      playlistsTargetsEl.current.offsetHeight +
        mainNavBarEl.current.offsetHeight
    );
  }, [mainNavBarEl, playlistsTargetsEl]);

  return (
    <Grid container className={classes.sidebar}>
      <Grid xs={12} ref={mainNavBarEl} item>
        <img src={logo} className={classes.logo} alt="spotify logo" />
        <ul className={classes.navbar}>
          {navbarItems.map((item, i) => (
            <li
              key={`navbar-item-${i}`}
              className={classnames({
                [classes.active]: item.isActive,
              })}
            >
              {item.icon}
              <span className={classes.fontSidebar}>{item.name}</span>
            </li>
          ))}
        </ul>
      </Grid>
      <Grid
        xs={12}
        ref={playlistsTargetsEl}
        className={classes.playlistMain}
        item
      >
        <Typography
          color="textSecondary"
          className={classnames(classes.playlistTitle, classes.fontSidebar)}
        >
          PLAYLISTS
        </Typography>
        <div className={classes.playListTarget}>
          <div
            className={classnames(
              classes.figurePlaylistTarget,
              classes.targetMore
            )}
          >
            <Add />
          </div>
          <Typography color="textSecondary" className={classes.fontSidebar}>
            Create Playlist
          </Typography>
        </div>
        <div className={classes.playListTarget}>
          <div
            className={classnames(
              classes.figurePlaylistTarget,
              classes.targetLiked
            )}
          >
            <Favorite />
          </div>
          <Typography color="textSecondary" className={classes.fontSidebar}>
            Liked Songs
          </Typography>
        </div>
        <div className={classes.separator} />
      </Grid>
      <Grid xs={12} className={classes.playlist} item>
        <ul className={classes.playlistList}>
          {playlists.map((playlist, i) => (
            <div key={`playlist-item-${i}`}>
              <Typography variant="subtitle2" color="textSecondary">
                {playlist}
              </Typography>
            </div>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};

export default SideBar;
