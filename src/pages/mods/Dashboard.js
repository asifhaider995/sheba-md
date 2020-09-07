import React from 'react';
import {Grid, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    paddingTop: '5rem'
  }
}))

function AdminDash(props) {

  const classes = useStyles();

  return (
    <Grid id='admin-dash' className={classes.root}>
      <Grid className={classes.innerRoot}>
        <Typography align='center' variant='h3'> Welcome to the Admin Panel </Typography>
      </Grid>
    </Grid>
  )
}

export default AdminDash;
