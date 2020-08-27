import React from 'react';
import {Grid, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    flexGrow: 1,
    backgroundColor: 'black',
    color: 'white',
    marginTop: '5rem'
  },
  outerGrid: {
    height: '6rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      height: '4rem'
    },
    [theme.breakpoints.down('sm')]: {
      height: '3rem'
    }
  },
  text: {
    width: '100%',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px'
    }
  }


}))

function Footer(props) {

  const classes = useStyles();

  return (
      <Grid className={classes.root}>
        <Grid className={classes.outerGrid}>
          <Typography color='inherit' align='center' variant='h6' className={classes.text}>
              All Rights Reserved &copy; ShebaCorp, 2020
          </Typography>
        </Grid>
      </Grid>
  )
}

export default Footer;
