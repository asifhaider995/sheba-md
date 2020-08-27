import React from 'react';
import {Grid, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '50rem',
  },
  outerGrid: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
}))

function Service() {

  const classes = useStyles();

  return (
      <Grid className={classes.root}>
        <Grid className={classes.outerGrid}>
          <Typography> Service </Typography>
        </Grid>
      </Grid>
  )
}

export default Service;
