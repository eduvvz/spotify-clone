import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  accountBar: {
    padding: theme.spacing(0, 4),
    position: 'sticky',
    width: '100%',
    height: 60,
    top: 0,
    backgroundColor: 'rgba(4, 4, 4, 0)',
    transition: '.3s',
    zIndex: 99,
  },
  showBgAccountbar: {
    backgroundColor: 'rgba(4, 4, 4, 1) !important',
  },
  containerButtonLeavePage: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 90,
  },
  buttonsLeavePage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: theme.spacing(4),
    height: theme.spacing(4),
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.contrastText,

    '& *': {
      fontSize: 28,
    },
  },
  buttonProfile: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: theme.spacing(4),
    borderRadius: theme.spacing(4),
    minWidth: 32,
    transition: '.3s',
    cursor: 'pointer',
    backgroundColor: theme.palette.primary.contrastText,

    '&:HOVER': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  iconBtnProfile: {
    fontSize: 20,
    margin: theme.spacing(0, 1),

    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  pictureProfile: {
    width: 28,
    height: 28,
    borderRadius: '50%',
    marginRight: theme.spacing(1),
    backgroundImage: (props) => `url(${props.imageUserURI})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  nameProfile: {
    fontWeight: 600,
    maxWidth: 110,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    display: 'initial',

    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

export default useStyles;
