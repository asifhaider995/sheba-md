import React from 'react';
import {Grid, Typography} from '@material-ui/core';

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

function ServerError() {

  const classes = useStyles();

  return (
      <Grid className={classes.root}>
        <Grid className={outerGrid}>
          <Typography> Server Error </Typography>
        </Grid>
      </Grid>
  )
}

export default ServerError;
