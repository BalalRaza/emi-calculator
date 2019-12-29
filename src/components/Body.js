import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import {
  Slider,
  Typography,
  Chip,
} from '@material-ui/core';

import Currency from './Currency';
import {
  minBy,
  maxBy,
  groupByDuration,
} from '../util/util';

import styles from '../assets/jss/components/Body';

class Body extends React.Component {
  render() {
    const {
      classes,
      data,
      selectedAmount,
      selectedDuration,
      sliderData,
    } = this.props;

    const groupedByDuration = groupByDuration(data);
    const chips = Object.values(groupedByDuration)
      .map((value) => ({
        duration: value[0].duration,
        durationUnit: value[0].durationUnit,
      }));

    // Slider Data
    const sliderMarks = sliderData.map(item => ({ value: Number(item.amount) }));
    const minAmount = minBy(sliderData, 'amount');
    const maxAmount = maxBy(sliderData, 'amount');

    return (
      <div className={classes.root}>
        <div className={classes.sliderHeading}>
          <Typography variant="overline">
            Select Advance Amount
          </Typography>
          <Typography variant="h5" color="secondary" className={classes.textBold}>
            <Currency amount={selectedAmount} />
          </Typography>
        </div>
        <Slider
          aria-label="select advanced amount"
          color="secondary"
          min={minAmount}
          max={maxAmount}
          marks={sliderMarks}
          step={null}
          onChange={(event, value) => this.props.onChangeSlider(value)}
          value={selectedAmount}
        />

        <Typography variant="overline">
          Loan Duration
        </Typography>

        <div className={classes.durationsContainer}>
          {
            chips.map(({ duration, durationUnit}) => {
              const label = `${duration} ${durationUnit}`;
              return (
                <Chip
                  key={label}
                  label={label}
                  onClick={() => this.props.handleChipClick({ duration, durationUnit })}
                  clickable
                  variant={selectedDuration === label ? 'default' : 'outlined'}
                  classes={{
                    root: classes.chip,
                    label: classes.chipLabels,
                  }}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Body);
