import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  controlSongIcons: {
    margin: theme.spacing(0, 1),
    color: theme.palette.text.secondary,

    '&:HOVER': {
      color: theme.palette.text.primary,
    },
  },
}));

export default useStyles;
