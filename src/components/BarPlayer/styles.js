import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  containerMain: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: 90,
    backgroundColor: theme.palette.primary.main,
    borderTop: `1px solid ${theme.palette.primary.dark}`,
    padding: theme.spacing(0, 2),
  },
}));

export default useStyles;
