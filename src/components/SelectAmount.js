import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Slider } from '@material-ui/core';

import Currency from './Currency';

import { maxBy, minBy } from '../util/util';

import styles from '../assets/jss/components/SelectAmount';

function SelectAmount(props) {
  const {
    classes,
    sliderData,
    selectedAmount,
  } = props;

  const minAmount = minBy(sliderData, 'amount');
  const maxAmount = maxBy(sliderData, 'amount');
  const sliderMarks = sliderData.map(item => ({ value: Number(item.amount) }));

  return (
    <React.Fragment>
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
        onChange={(event, value) => props.onChangeSlider(value)}
        value={selectedAmount}
      />
    </React.Fragment>
  );
}

export default withStyles(styles)(SelectAmount);
