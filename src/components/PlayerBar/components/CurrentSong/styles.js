import { makeStyles } from '@material-ui/core';

const limitSongInfoSize = {
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  display: 'initial',
};

const useStyles = makeStyles((theme) => ({
  songImage: {
    width: 56,
    height: 56,
    backgroundColor: 'orange',
  },
  songInfos: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    maxWidth: '70%',
  },
  artist: {
    ...limitSongInfoSize,
  },
  songName: {
    ...limitSongInfoSize,
  },
}));

export default useStyles;
