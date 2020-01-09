import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

import { maxBy, isEmpty, getRandomInt, minBy } from '../util/util';
import { fetchData } from '../network/api';

import styles from '../assets/jss/pages/App';

class App extends React.Component {
  state = {
    loading: true,
    data: [],
    selected: {},
  };

  componentDidMount() {
    if (isEmpty(this.state.data)) {
      return fetchData()
        .then(data => this.setData(data));
    }
  }

  setData = (data) => {
    const randomProduct = this.getRandomProduct(data);
    this.setState({
      data,
      loading: false,
      selected: { ...randomProduct },
    });
  };

  getRandomProduct(data) {
    const randomIndex = getRandomInt(0, data.length - 1);
    const randomProduct = data[randomIndex];

    return {
      duration: randomProduct.duration,
      durationUnit: randomProduct.durationUnit,
      amount: randomProduct.amount,
    };
  }

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

    this.state.data.forEach((item) => {
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

  getProductsForAmount = (amount) => {
    const products = [];
    this.state.data.forEach((item) => {
      if (item.amount === amount) {
        products.push(item);
      }
    });

    return products;
  };

  getSliderData(data) {
    let amounts = data.map(obj => obj.amount);
    amounts = new Set(amounts);
    return [...amounts]; // convert to array and return
  }

  render() {
    const { classes } = this.props;
    const { loading, data } = this.state;

    // Fallback when data is being loaded
    if (loading) {
      return <Loader />;
    }

    // Header data
    const maxLoanAmount = maxBy(data, 'amount');

    // Body data
    const { duration, durationUnit } = this.state.selected;
    const selectedDuration = `${duration} ${durationUnit}`;
    
    const sliderData = this.getSliderData(data);
    console.log('2', sliderData);

    // Footer data
    const productsForSelectedAmount = this.getProductsForAmount(this.state.selected.amount);
    console.log('11', productsForSelectedAmount);

    const selectedProduct = productsForSelectedAmount.find((item) => {
      return item.duration === this.state.selected.duration
        && item.durationUnit === this.state.selected.durationUnit;
    });
  
    const { emiAmount } = selectedProduct;

    return (
      <div className={classes.root} data-testid="main-container">
        <Paper className={classes.paper}>
          <Header eligibleLoanAmount={maxLoanAmount} />
          <Body
            data={data}
            selectedAmount={this.state.selected.amount}
            selectedDuration={selectedDuration}
            onChangeSlider={this.onChangeSlider}
            handleChipClick={this.handleChipClick}
            sliderData={sliderData}
          />
          <Footer emiAmount={emiAmount} />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
