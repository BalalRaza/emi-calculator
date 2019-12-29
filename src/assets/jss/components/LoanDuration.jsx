import grey from '@material-ui/core/colors/grey';

const labelColor = grey[500];

const styles = (theme) => ({
  container: {
    flexWrap: 'wrap',
    display: 'flex',
  },
  chip: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderWidth: 2,
    borderColor: labelColor,
  },
  chipLabels: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: labelColor,
  },
  activeChipLabel: {
    color: theme.palette.common.white
  },
});

export default styles;
