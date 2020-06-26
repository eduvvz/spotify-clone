import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#282828',
      dark: '#121212',
      light: '#535353',
    },
    secondary: {
      main: '#1ed760',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
  },
});

export default theme;
