import React from 'react';

import { Typography, Tooltip } from '@material-ui/core';
import { HelpOutlineOutlined as HelpIcon } from '@material-ui/icons';

import Currency from './Currency';
import { footerInformation as tooltipTitle } from '../util/constants';

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

      <div className={classes.iconContainer}>
        <Tooltip
          title={tooltipTitle}
          placement="bottom-end"
        >
          <HelpIcon color="secondary" />
        </Tooltip>
      </div>
    </div>
  );
}

export default Footer;
