import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#282828',
      dark: '#121212',
      light: '#535353',
      contrastText: '#040404',
    },
    secondary: {
      main: '#1ed760',
      dark: 'rgb(18, 18, 18)',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
  },
});

export default theme;
