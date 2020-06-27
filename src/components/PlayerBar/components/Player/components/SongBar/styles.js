import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  barSong: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: 10,
    width: '80%',
    height: 4,
    margin: theme.spacing(1, 0),

    '&:HOVER div': {
      backgroundColor: theme.palette.secondary.main,
    },

    '&:HOVER #indicator': {
      display: 'initial',
    },
  },
  progressBar: {
    position: 'relative',
    width: (props) => props.progressBarWidth || 0,
    height: '100%',
    borderRadius: 10,
    backgroundColor: theme.palette.text.secondary,
  },
  indicator: {
    display: 'none',
    width: 10,
    height: 10,
    borderRadius: 5,
    right: -5,
    top: '50%',
    transform: 'translate(0, -50%)',
    backgroundColor: `${theme.palette.text.primary} !important`,
    position: 'absolute',
  },
  container: {
    height: 30,
  },
}));

export default useStyles;
