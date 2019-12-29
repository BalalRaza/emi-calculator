import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#194167',
    },
    secondary: {
      main: '#30B299',
    },
  },
  typography: {
    overline: {
      fontSize: '0.9rem',
    },
  },
});

export default responsiveFontSizes(theme);
