import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  controlSongIcons: {
    margin: theme.spacing(0, 2),
    color: theme.palette.text.secondary,

    '&:HOVER': {
      color: theme.palette.text.primary,
    },
  },
  containerControl: {
    marginBottom: 5,
  },
  containerSongBar: {
    padding: theme.spacing(0, 1),
  },
}));

export default useStyles;
