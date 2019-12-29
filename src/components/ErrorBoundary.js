import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import styles from '../assets/jss/pages/App';

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    const { classes } = this.props;

    if (this.state.hasError) {
      return (
        <div className={classes.root}>
          <Typography variant="h4">
            Something went wrong. We shall soon fix this.
          </Typography>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default withStyles(styles)(ErrorBoundary);
