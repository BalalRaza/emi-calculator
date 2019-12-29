import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

import { maxBy, isEmpty, getRandomInt } from '../util/util';
import { URL } from '../config/config';

import styles from '../assets/jss/pages/App';

class App extends React.Component {
  state = {
    loading: true,
    data: [],
    selected: {},
  };

  componentDidMount() {
    if (isEmpty(this.state.data)) {
      this.fetchData();
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

  fetchData = () => {
    let res;

    return fetch(URL)
      .then(response => {
        res = response.clone(); // Just in case if JSON has syntax error
        return response.json();
      })
      .then(data => this.setData(data))
      .catch((err) => {
        if (err instanceof SyntaxError) {
          return this.fixAndGetJson(res)
            .then(data => this.setData(data));
        }
      });
  };

  fixAndGetJson(response) {
    return response.text()
      .then((text) => {
        const regex = /("id": \d)/gi;
        const fixed = text.replace(regex, '$&,');
        return JSON.parse(fixed);
      });
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
            selectedDuration={selectedDuration}
            onChangeSlider={this.onChangeSlider}
            handleChipClick={this.handleChipClick}
            sliderData={productsForDuration}
          />
          <Footer emiAmount={emiAmount} />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
