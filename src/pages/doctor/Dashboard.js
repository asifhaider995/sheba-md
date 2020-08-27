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

function Dashboard(props) {

  const classes = useStyles();

  return (
      <Grid className={classes.root}>
        <Grid className={classes.outerGrid}>
          <Typography> Doctor's Dashboard </Typography>
        </Grid>
      </Grid>
  )
}

export default Dashboard;
