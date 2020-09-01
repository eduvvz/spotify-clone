import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Grid, Typography, Popover } from '@material-ui/core';
import { ChevronRight, ChevronLeft, ArrowDropDown } from '@material-ui/icons';
import useStyles from './styles';

const AccountBar = ({ positionScroll }) => {
  const { user } = useSelector((state) => state);
  const classes = useStyles({ imageUserURI: user.image });
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid
      data-testid="accountbar-container"
      className={classnames(classes.accountBar, {
        [classes.showBgAccountbar]: positionScroll > 40 || false,
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

      <div
        className={classes.buttonProfile}
        onClick={handleClick}
        data-testid="accountbar-btn-profile"
      >
        <div className={classes.pictureProfile} />
        <Typography variant="subtitle2" className={classes.nameProfile}>
          {user.name}
        </Typography>
        <ArrowDropDown className={classes.iconBtnProfile} />
      </div>
      <Popover
        id={anchorEl ? 'account-popover' : undefined}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        className={classes.dropdownAccountBtn}
        data-testid="accountbar-paper-account-options"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className={classes.paperAccountItems}>
          <div>
            <Typography variant="subtitle2" color="textSecondary">
              Account
            </Typography>
          </div>
          <div>
            <Typography variant="subtitle2" color="textSecondary">
              Profile
            </Typography>
          </div>
          <span className={classes.separator} />
          <div>
            <Typography variant="subtitle2" color="textSecondary">
              Logout
            </Typography>
          </div>
        </div>
      </Popover>
    </Grid>
  );
};

AccountBar.propTypes = {
  positionScroll: PropTypes.number,
};

export default AccountBar;
