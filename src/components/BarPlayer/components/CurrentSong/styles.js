import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  songImage: {
    width: 56,
    height: 56,
    backgroundColor: 'orange',
    marginRight: theme.spacing(2),
  },
  songInfos: {
    maxWidth: '80%',
    marginRight: theme.spacing(2),
  },
  artist: {
    maxWidth: '100%',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    display: 'block',
  },
  songName: {
    marginBottom: -15,
  },
}));

export default useStyles;
