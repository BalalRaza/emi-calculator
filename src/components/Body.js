import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import SelectAmount from './SelectAmount';
import LoandDuration from './LoanDuration';

import styles from '../assets/jss/components/Body';

function Body(props) {
  const {
    classes,
    data,
    selectedAmount,
    selectedDuration,
    sliderData,
  } = props;

  return (
    <div className={classes.root}>
      <SelectAmount
        sliderData={sliderData}
        selectedAmount={selectedAmount}
        onChangeSlider={props.onChangeSlider}
      />

      <LoandDuration
        data={data}
        selectedAmount={selectedAmount}
        selectedDuration={selectedDuration}
        handleChipClick={props.handleChipClick}
      />
    </div>
  );
}

export default withStyles(styles)(Body);
