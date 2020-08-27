import React from 'react';
import {Grid, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  outerGrid: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
}))

function EmptyPage() {

  const classes = useStyles();

  return (
      <Grid className={classes.root}>
        <Grid className={classes.outerGrid}>
          <Typography> Error 404 - This page does not exist </Typography>
        </Grid>
      </Grid>
  )
}

export default EmptyPage;
