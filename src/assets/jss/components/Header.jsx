import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    lineHeight: 1.7,
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export default useStyles;
