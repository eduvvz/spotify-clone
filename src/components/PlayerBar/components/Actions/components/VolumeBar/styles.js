import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  controlSongIcons: {
    margin: theme.spacing(0, 1),
    color: theme.palette.text.secondary,

    '&:HOVER': {
      color: theme.palette.text.primary,
    },
  },
  volumeBar: {
    width: '100%',
    maxWidth: 100,
    height: 4,
    backgroundColor: theme.palette.primary.light,
    borderRadius: 10,

    '&:HOVER div': {
      backgroundColor: theme.palette.secondary.main,
    },

    '&:HOVER #indicator': {
      display: 'initial',
    },
  },
  indicationVolumeBar: {
    position: 'relative',
    width: (props) => props.indicationVolumeBarWidth || 0,
    height: '100%',
    backgroundColor: theme.palette.text.secondary,
    borderRadius: 10,
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
}));

export default useStyles;
