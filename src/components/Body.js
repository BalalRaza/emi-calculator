import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Chip } from '@material-ui/core';

import SelectAmount from './SelectAmount';

import { groupByDuration } from '../util/util';

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

    return (
      <div className={classes.root}>
        <SelectAmount
          sliderData={sliderData}
          selectedAmount={selectedAmount}
          onChangeSlider={this.props.onChangeSlider}
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
