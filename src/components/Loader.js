import React from 'react';
import clsx from 'clsx';

import { withStyles } from '@material-ui/core/styles';
import { Paper, CircularProgress } from '@material-ui/core';

import styles from '../assets/jss/pages/App';

function Loader(props) {
  const { classes } = props;

  return (
    <div className={classes.root} data-testid="loader">
      <Paper className={clsx(classes.paper, classes.centerContents)}>
        <CircularProgress color="secondary" />
      </Paper>
    </div>
  );
}

export default withStyles(styles)(Loader);
