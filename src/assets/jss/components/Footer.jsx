import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
  },
  amount: {
    fontWeight: 'bold',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export default useStyles;
