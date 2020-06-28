import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Grid, Typography } from '@material-ui/core';
import { ChevronRight, ChevronLeft, ArrowDropDown } from '@material-ui/icons';
import useStyles from './styles';

const AccountBar = ({ positionScroll }) => {
  const { user } = useSelector((state) => state);
  const classes = useStyles({ imageUserURI: user.image });

  return (
    <Grid
      className={classnames(classes.accountBar, {
        [classes.showBgAccountbar]: positionScroll > 220 || false,
      })}
      justify="space-between"
      alignItems="center"
      container
    >
      <div className={classes.containerButtonLeavePage}>
        <div className={classes.buttonsLeavePage}>
          <ChevronLeft />
        </div>
        <div className={classes.buttonsLeavePage}>
          <ChevronRight />
        </div>
      </div>

      <div className={classes.buttonProfile}>
        <div className={classes.pictureProfile} />
        <Typography variant="subtitle2" className={classes.nameProfile}>
          {user.name}
        </Typography>
        <ArrowDropDown className={classes.iconBtnProfile} />
      </div>
    </Grid>
  );
};

AccountBar.propTypes = {
  positionScroll: PropTypes.number,
};

export default AccountBar;
