import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  barSong: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: 10,
    width: '80%',
    height: 4,
  },
  progressBar: {
    width: (props) => props.progressBarWidth || 0,
    height: '100%',
    borderRadius: 10,
    backgroundColor: theme.palette.text.secondary,
  },
  container: {
    height: 30,
  },
}));

export default useStyles;
