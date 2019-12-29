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
});

export default responsiveFontSizes(theme);
