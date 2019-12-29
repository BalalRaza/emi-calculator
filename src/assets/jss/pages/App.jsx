const styles = (theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
    margin: 5,
    borderRadius: 10,
    padding: 20,
  },
  centerContents: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
