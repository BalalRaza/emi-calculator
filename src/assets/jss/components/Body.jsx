const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  sliderHeading: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  textBold: {
    fontWeight: 'bold',
  },
  durationsContainer: {
    flexWrap: 'wrap',
    display: 'flex',
  },
  chip: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  chipLabels: {
    textTransform: 'uppercase',
  },
});

export default styles;
