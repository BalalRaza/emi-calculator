import React from 'react';
import clsx from 'clsx';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';

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
          <Paper className={clsx(classes.paper, classes.centerContents)}>
            <Typography variant="h6">
              Something went wrong. We shall soon fix this.
            </Typography>
          </Paper>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default withStyles(styles)(ErrorBoundary);
