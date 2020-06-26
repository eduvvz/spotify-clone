import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  likedIcon: {
    color: theme.palette.secondary.main,
  },
  notLikedIcon: {
    color: theme.palette.text.secondary,
  },
}));

export default useStyles;
