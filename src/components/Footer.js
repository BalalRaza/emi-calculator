import React from 'react';

import { Typography, IconButton } from '@material-ui/core';
import { HelpOutlineOutlined as HelpIcon } from '@material-ui/icons';

import Currency from './Currency';

import useStyles from '../assets/jss/components/Footer';

function Footer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Typography variant="overline">
          Calculated EMI
        </Typography>
        <Typography variant="h5" color="primary" className={classes.amount}>
          <Currency amount={props.emiAmount} />
        </Typography>
      </div>

      <div>
        <IconButton className={classes.iconButton} aria-label="info">
          <HelpIcon color="secondary" />
        </IconButton>
      </div>
    </div>
  );
}

export default Footer;
