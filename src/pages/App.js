import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';

import { maxBy } from '../util/util';

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
    const products = this.getProductsForDuration({ duration, durationUnit });
    const maxAmount = maxBy(products, 'amount');
    this.setState({
      selected: {
        duration,
        durationUnit,
        amount: maxAmount,
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

  /**
   * @param {{ duration: Number, durationUnit: String }} durationObj Duration object
   */
  getProductsForDuration = (durationObj) => {
    const products = [];
    const keysToCheck = ['duration', 'durationUnit'];

    data.forEach((item) => {
      let flag = true;
      keysToCheck.forEach((key) => {
        if (durationObj[key] !== item[key]) {
          flag = false;
        }
      });
      
      if (flag) {
        products.push(item);
      }
    });

    return products;
  };

  render() {
    const { classes } = this.props;

    // Header data
    const maxLoanAmount = maxBy(data, 'amount');

    // Body data
    const { duration, durationUnit } = this.state.selected;
    const selectedDurationText = `${duration} ${durationUnit}`;
    
    const productsForDuration = this.getProductsForDuration(this.state.selected);

    // Footer data
    const selectedProduct = productsForDuration.find((item) => {
      return item.amount === this.state.selected.amount;
    });
    const { emiAmount } = selectedProduct;

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Header eligibleLoanAmount={maxLoanAmount} />
          <Body
            data={data}
            selectedAmount={this.state.selected.amount}
            selectedDuration={selectedDurationText}
            onChangeSlider={this.onChangeSlider}
            handleChipClick={this.handleChipClick}
            sliderData={productsForDuration}
          />
          <Footer />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
