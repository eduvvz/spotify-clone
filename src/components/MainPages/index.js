import React, { useRef, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import HomeScreen from '../../screens/Home';
import AccountBar from './components/AccountBar';
import useStyles from './styles';

const MainPages = () => {
  const mainContainer = useRef(null);
  const [positionScroll, setPositionScroll] = useState(0);
  const classes = useStyles();

  const handleScroll = ({ target }) => {
    setPositionScroll(target.scrollTop);
  };

  useEffect(() => {
    if (!mainContainer) return;

    mainContainer.current.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      mainContainer.current.removeEventListener('scroll', handleScroll);
    };
  }, [mainContainer]);

  return (
    <Grid className={classes.main} container ref={mainContainer}>
      <AccountBar positionScroll={positionScroll} />
      <HomeScreen />
    </Grid>
  );
};

export default MainPages;
