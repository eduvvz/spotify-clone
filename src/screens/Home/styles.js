import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  page: {
    padding: theme.spacing(2, 3, 0),

    '& h5': {
      fontWeight: 600,
      marginBottom: theme.spacing(3),
    },
  },
  listContainer: {
    marginBottom: theme.spacing(3),
  },
}));

export default useStyles;
