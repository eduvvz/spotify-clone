import { makeStyles } from '@material-ui/core';
import { customScrollbar } from '../../utils/styles/globalStyles';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    display: 'block',
    width: 232,
    height: 'calc(100vh - 90px)',
    backgroundColor: theme.palette.primary.contrastText,
  },
  logo: {
    height: 40,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
  },
  navbar: {
    listStyle: 'none',
    margin: 0,
    padding: 0,

    '& li': {
      display: 'flex',
      alignItems: 'center',
      borderRadius: 5,
      padding: theme.spacing(0, 2),
      margin: theme.spacing(0, 1),
      height: 40,
      color: theme.palette.text.secondary,
      cursor: 'pointer',

      '&:HOVER': {
        color: theme.palette.text.primary,
      },
    },
  },
  active: {
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.text.primary} !important`,
  },
  fontSidebar: {
    fontSize: 14,
    fontWeight: 600,
  },
  iconNavbar: {
    fontSize: 28,
    marginRight: theme.spacing(2),
  },
  playlistMain: {
    padding: theme.spacing(3, 3, 1, 3),

    '&:first-child': {
      marginTop: theme.spacing(2),
    },
  },
  playlistTitle: {
    marginBottom: theme.spacing(2),
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: theme.palette.text.secondary,
    marginTop: theme.spacing(2),
    opacity: 0.3,
  },
  playListTarget: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1),
  },
  figurePlaylistTarget: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  targetMore: {
    backgroundColor: theme.palette.text.secondary,

    '& *': {
      color: theme.palette.primary.main,
    },
  },
  targetLiked: {
    background:
      'linear-gradient(-30deg, rgba(136,166,153,1) 0%, rgba(51,14,172,1) 100%);',

    '& *': {
      color: theme.palette.text.secondary,
    },
  },
  playlist: {
    ...customScrollbar,
    width: '100%',
    padding: theme.spacing(0, 3),
    overflowY: 'auto',
    maxHeight: (props) => `calc(100vh - 90px - ${props.heightMainSidebar}px)`,
  },
  playlistList: {
    margin: 0,
    height: '100%',
    padding: 0,

    '& div': {
      height: 32,
      display: 'flex',
      alignItems: 'center',
      width: '100%',

      '&:HOVER *': {
        cursor: 'default',
        color: theme.palette.text.primary,
      },
    },
  },
}));

export default useStyles;
