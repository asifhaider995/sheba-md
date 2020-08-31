import React from 'react';
import {Grid, Typography, makeStyles} from '@material-ui/core';
import '../../index.css';


const useStyles = makeStyles((theme)=>({
  root: {
    width: '100%',
    height: '100%',
  },
  topSectionInner: {
    width: '100%',
    height: '100%',
  },
  typoScreen: {
    width: '100%',
    height: '25rem',
    zIndex: -10000,
    color: 'white',
    backgroundColor: '#252626',
    background: 'linear-gradient(to right, #0B86AC, #07556D)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  typoGrid: {
    width: '70rem',
    height: '100%',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      margin: '1rem'
    }
  },
  typo: {
    textAlign: 'center',
    fontFamily: 'Lato',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '36px',
    [theme.breakpoints.down('md')]: {
      fontSize: '24px'
    },
  }
}))

function TopSection(props) {

  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid className={classes.topSectionInner}>
        <Grid className={classes.typoScreen}>
          <Grid className={classes.typoGrid}>
            <Typography className={classes.typo}>
              Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eisumod, Lorem Ipsum dolor sit amet.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TopSection;
