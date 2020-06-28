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
    backgroundColor: theme.palette.primary.contrastText,
  },
  iconBtnProfile: {
    fontSize: 20,
    margin: theme.spacing(0, 1),
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
  },
}));

export default useStyles;
