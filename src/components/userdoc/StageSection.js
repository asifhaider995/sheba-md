import React from 'react';
import {Grid, Typography, makeStyles} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  midSection: {
    height: '40rem',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '1rem',
    backgroundColor: '#F6F6F6',
    [theme.breakpoints.down('md')]: {
      height: '100%',
      paddingTop: '2rem',
    }
  },
  midContentGrid: {
    width: '100%',
    height: '100%',
  },
  headingGrid: {
    width: '100%',
    padding: '1rem 0'
  },
  typoHead: {
    fontFamily: 'Roboto Slab',
    fontWeight: 500,
    [theme.breakpoints.down('md')]:{
      fontSize: '48px',
      textAlign: 'center'
    }
  },
  typoSubHead: {
    fontFamily: 'Roboto Slab',
    fontSize: '20px',
    fontStyle: 'italic',
    color: '#5F5D5D',
    [theme.breakpoints.down('md')]:{
      fontSize: '16px',
      textAlign: 'center'
    }
  },
  serviceList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      margin: '1rem 0'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      margin: '1rem 0'
    },
    [theme.breakpoints.down('xs')]:{
      margin: '1rem 0',
    }
  },
  services: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    margin: '2rem 2rem',
    maxWidth: '33rem',
    [theme.breakpoints.down('lg')]: {
      margin: '2rem',
      maxWidth: '30rem'
    },
    [theme.breakpoints.down('md')]: {
      margin: '1rem 1rem',
      maxWidth: '27rem',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '99%',
      margin: '1.5rem 0',
    },
    [theme.breakpoints.down('xs')]:{
      margin: '1rem 0',
    }

  },
  servicePaper: {
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      maxWidth: '27rem',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '27rem',
    },
    [theme.breakpoints.down('xs')]:{
      maxWidth: '20rem',
    }
  },
  iconGrid: {
    width: '100%',
    height: '7rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBorder: {
    border: '5px solid #c10202',
    borderRadius: '4rem',
    width: '4rem',
    height: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceIcon: {
    color: '#c10202',
    fontFamily: 'Saira Semi Condensed',
    fontSize: '40px'
  },
  serviceTypoHead: {
    color: '#0b86aF',
    fontFamily: 'Roboto Slab',
    fontSize: '36px',
    [theme.breakpoints.down('lg')]: {
      fontSize: '24px'
    },
  },
  serviceTypoDescription: {
    fontFamily: 'Open Sans',
    padding: '1rem 0'
  },
  serviceDescription: {
    textAlign: 'center'
  },

}))

function Home(props) {

  const classes = useStyles();

  return (
    <Grid id='services' className={classes.midSection}>
      <Grid className={classes.midContentGrid}>
        <Grid className={classes.headingGrid}>
          <Typography align='center' variant='h3' className={classes.typoHead}> Lorem Ipsum dolor </Typography>
          <Typography align='center' variant='h6' gutterBottom className={classes.typoSubHead}>
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eisumod tempor
          </Typography>
        </Grid>
        <Grid className={classes.serviceList}>
          <Grid className={classes.services}>
            <Grid className={classes.servicePaper}>
              <Grid className={classes.iconGrid}>
                <Grid className={classes.iconBorder}>
                  <Typography className={classes.serviceIcon}>1</Typography>
                </Grid>
              </Grid>
              <Grid className={classes.serviceDescription}>
                <Typography className={classes.serviceTypoHead} align='center' variant='h4'>Sign up</Typography>
                <Typography className={classes.serviceTypoDescription} variant='body1'>
                  Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eisumod tempor in cididunt ut labore et dlore magnus
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.services}>
            <Grid className={classes.servicePaper}>
              <Grid className={classes.iconGrid}>
                <Grid className={classes.iconBorder}>
                  <Typography className={classes.serviceIcon}>2</Typography>
                </Grid>
              </Grid>
              <Grid className={classes.serviceDescription}>
                <Typography className={classes.serviceTypoHead} align='center' variant='h4'>Select Service</Typography>
                <Typography className={classes.serviceTypoDescription} variant='body1'>
                  Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eisumod tempor in cididunt ut labore et dlore magnus
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.services}>
            <Grid className={classes.servicePaper}>
              <Grid className={classes.iconGrid}>
                <Grid className={classes.iconBorder}>
                  <Typography className={classes.serviceIcon}>3</Typography>
                </Grid>
              </Grid>
              <Grid className={classes.serviceDescription}>
                <Typography className={classes.serviceTypoHead} align='center' variant='h4'>Pay</Typography>
                <Typography className={classes.serviceTypoDescription} variant='body1'>
                  Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eisumod tempor in cididunt ut labore et dlore magnus
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home;
