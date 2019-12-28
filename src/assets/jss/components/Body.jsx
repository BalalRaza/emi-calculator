const sliderHeight = 6;
const thumbSize = 15;
const borderRadius = 6;

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
  sliderRoot: {
    height: sliderHeight,
  },
  thumb: {
    height: thumbSize,
    width: thumbSize,
  },
  track: {
    height: sliderHeight,
    borderRadius,
  },
  rail: {
    height: sliderHeight,
    borderRadius,
  },
  durationsContainer: {
    marginTop: theme.spacing(2),
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
