import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';

import { maxBy, groupBy } from '../util/util';

import styles from '../assets/jss/pages/App';

const data = [
  {
    "id": 1,
    "amount": 10000,
    "duration": 3,
    "durationUnit": "MONTH",
    "emiAmount": 3400
  },
  {
    "id": 2,
    "amount": 10000,
    "duration": 6,
    "durationUnit": "MONTH",
    "emiAmount": 1400
  },
  {
    "id": 3,
    "amount": 20000,
    "duration": 6,
    "durationUnit": "MONTH",
    "emiAmount": 3450
  },
  {
    "id": 4,
    "amount": 30000,
    "duration": 6,
    "durationUnit": "MONTH",
    "emiAmount": 5100
  },
  {
    "id": 5,
    "amount": 30000,
    "duration": 9,
    "durationUnit": "MONTH",
    "emiAmount": 3200
  },
  {
    "id": 6,
    "amount": 40000,
    "duration": 1,
    "durationUnit": "YEAR",
    "emiAmount": 3600
  }
];

class App extends React.Component {
  state = {
    selected: {
      duration: 6,
      durationUnit: 'MONTH',
      amount: 20000,
    },
  };

  handleChipClick = ({ duration, durationUnit }) => {
    this.setState({
      selected: {
        ...this.state.selected,
        duration,
        durationUnit,
      },
    });
  };

  onChangeSlider = (value) => {
    this.setState({
      selected: {
        ...this.state.selected,
        amount: value,
      },
    });
  };

  render() {
    const { classes } = this.props;
    
    const groupedByAmount = groupBy(data, 'amount');

    const maxLoanAmount = maxBy(data, 'amount');

    const sliderMarks = Object.keys(groupedByAmount)
      .map(item => ({ value: Number(item) }));

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Header eligibleLoanAmount={maxLoanAmount} />
          <Body
            data={data}
            sliderMarks={sliderMarks}
            selectedAmount={this.state.selected.amount}
            onChangeSlider={this.onChangeSlider}
            handleChipClick={this.handleChipClick}
          />
          <Footer />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
