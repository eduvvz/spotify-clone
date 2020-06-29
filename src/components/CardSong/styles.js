import { makeStyles } from '@material-ui/core';

const dontOverflowText = {
  textOverflow: 'ellipsis',
  overflow: 'hidden',
};

const useStyles = makeStyles((theme) => ({
  card: {
    padding: '20px 20px 16px',
    minHeight: 250,
    position: 'relative',
    borderRadius: 8,
    backgroundColor: theme.palette.primary.main,

    '&:HOVER #button-play': {
      display: 'flex',
    },
  },
  cardImage: {
    width: '100%',
    position: 'relative',
    paddingBottom: '100%',
    marginBottom: theme.spacing(2),
    borderRadius: (props) => (props.imageCircle ? '50%' : 0),
    overflow: 'hidden',

    '& img': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
    },
  },
  nameSong: {
    ...dontOverflowText,
    fontWeight: 600,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  artistSong: {
    ...dontOverflowText,
    fontSize: 12,
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
  },
  buttonPlay: {
    position: 'absolute',
    cursor: 'pointer',
    right: 16,
    bottom: 16,
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: theme.palette.secondary.main,
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow:
      '0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2)',
  },
}));

export default useStyles;
