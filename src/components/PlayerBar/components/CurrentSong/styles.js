import { makeStyles } from '@material-ui/core';
import { onHoverImageAlbuns } from '../../../../utils/styles/globalStyles';

const limitSongInfoSize = {
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  display: 'initial',
};

const useStyles = makeStyles((theme) => ({
  currentSongContainer: {
    transition: '.2s',
  },
  songImage: {
    position: 'relative',
    width: 56,
    height: 56,
    backgroundImage: (props) => `url(${props.songImageURI})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',

    '&:HOVER *': {
      display: 'flex',
    },
  },
  showImage: {
    transform: `translateX(-72px)`,
  },
  hoverSongimage: {
    ...onHoverImageAlbuns,
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
