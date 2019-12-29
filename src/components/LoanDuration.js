import React from 'react';
import clsx from 'clsx';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Chip } from '@material-ui/core';

import { groupByDuration } from '../util/util';

import styles from '../assets/jss/components/LoanDuration';

function LoanDuration(props) {
  const {
    classes,
    data,
    selectedDuration,
  } = props;

  const groupedByDuration = groupByDuration(data);
    const chips = Object.values(groupedByDuration)
      .map((value) => ({
        duration: value[0].duration,
        durationUnit: value[0].durationUnit,
      }));

  return (
    <React.Fragment>
      <Typography variant="overline">
        Loan Duration
      </Typography>

      <div className={classes.container}>
        {
          chips.map(({ duration, durationUnit}) => {
            const label = `${duration} ${durationUnit}`;
            const selected = selectedDuration === label;

            return (
              <Chip
                key={label}
                label={label}
                onClick={() => props.handleChipClick({ duration, durationUnit })}
                clickable
                variant={selected ? 'default' : 'outlined'}
                color={selected ? 'secondary' : 'default'}
                classes={{
                  root: classes.chip,
                  label: clsx(classes.chipLabels, selected && classes.activeChipLabel),
                }}
              />
            );
          })
        }
      </div>
    </React.Fragment>
  );
}

export default withStyles(styles)(LoanDuration);
