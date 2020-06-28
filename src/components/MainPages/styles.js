import { makeStyles } from '@material-ui/core';
import { customScrollbar } from '../../utils/styles/globalStyles';

const useStyles = makeStyles((theme) => ({
  main: {
    position: 'relative',
    height: 'calc(100vh - 90px)',
    width: 'calc(100vw - 232px)',
    overflowY: 'auto',
    backgroundColor: theme.palette.primary.dark,
    ...customScrollbar,
  },
}));

export default useStyles;
