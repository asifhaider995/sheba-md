import React from 'react';
import {Grid, Typography, Paper, Icon, Button, makeStyles} from '@material-ui/core';

import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import ScheduleIcon from '@material-ui/icons/Schedule';

const useStyles = makeStyles((theme) => ({
  midSection: {
    height: '40rem',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '3rem',
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
    transitionDuration: '1s',
    '&:hover': {
      transform: 'scale(1.2)',
      margin: '2rem 2rem'
    },
    [theme.breakpoints.down('lg')]: {
      margin: '2rem',
      maxWidth: '30rem'
    },
    [theme.breakpoints.down('md')]: {
      margin: '1rem 1rem',
      maxWidth: '27rem',
      '&:hover': {
        transform: 'scale(1)',
        margin: '1rem',
      },
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      margin: '1.5rem 0',
      '&:hover': {
        transform: 'scale(1)',
        margin: '1.5rem 0',
      },
    },
    [theme.breakpoints.down('xs')]:{
      margin: '1rem 0',
      '&:hover': {
        transform: 'scale(1)',
        margin: '1rem 0',
      },
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
  avatarGrid: {
    width: '100%',
    height: '7rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceTypoHead: {
    fontSize: '36px',
    [theme.breakpoints.down('lg')]: {
      fontSize: '24px'
    },
  },
  serviceTypoDescription: {
    padding: '1rem 0'
  },
  serviceIcon: {
    transform: 'scale(3)'
  },
  serviceDescription: {

  },
  serviceActions: {
    display: 'flex',
    justifyContent: 'left',
    [theme.breakpoints.down('xs')]:{
      display: 'block',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  leftBtn: {
    color: 'white',
    backgroundColor: theme.palette.error.main,
    width: '100%',
    marginRight: '5px',
    '&:hover': {
      color: 'black',
    },
    [theme.breakpoints.down('xs')]:{
      marginRight: 0,
      marginTop: '5px'
    }
  },
  rightBtn: {
    color: 'white',
    backgroundColor: theme.palette.info.dark,
    marginLeft: '5px',
    width: '100%',
    '&:hover': {
      color: 'black',
    },
    [theme.breakpoints.down('xs')]:{
      marginLeft: 0,
      marginTop: '5px'
    }
  }

}))

function Home(props) {

  const classes = useStyles();

  return (
    <Grid id='services' className={classes.midSection}>
      <Grid className={classes.midContentGrid}>
        <Grid className={classes.headingGrid}>
          <Typography align='center' variant='h1' className={classes.typoHead}>Our Services </Typography>
          <Typography align='center' variant='h6' gutterBottom className={classes.typoSubHead}>
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eisumod tempor
          </Typography>
        </Grid>
        <Grid className={classes.serviceList}>
          <Grid className={classes.services}>
            <Paper elevation={3} className={classes.servicePaper}>
              <Grid className={classes.avatarGrid}>
                <Icon className={classes.serviceIcon}><LocalHospitalRoundedIcon /></Icon>
              </Grid>
              <Grid className={classes.serviceDescription}>
                <Typography className={classes.serviceTypoHead} align='center' variant='h4'>Emergency</Typography>
                <Typography className={classes.serviceTypoDescription} align='justify' variant='body1'>
                  Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eisumod tempor in cididunt ut labore et dlore magnus
                </Typography>
              </Grid>
              <Grid className={classes.serviceActions}>
                <Button className={classes.leftBtn} variant='contained'>Get Started</Button>
                <Button className={classes.rightBtn} variant='contained'>Read More</Button>
              </Grid>
            </Paper>
          </Grid>
          <Grid className={classes.services}>
            <Paper elevation={3} className={classes.servicePaper}>
              <Grid className={classes.avatarGrid}>
                <Icon className={classes.serviceIcon}><QuestionAnswerRoundedIcon /></Icon>
              </Grid>
              <Grid className={classes.serviceDescription}>
                <Typography className={classes.serviceTypoHead} align='center' variant='h4'>Talk to a doctor</Typography>
                <Typography className={classes.serviceTypoDescription} align='justify' variant='body1'>
                  Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eisumod tempor in cididunt ut labore et dlore magnus
                </Typography>
              </Grid>
              <Grid className={classes.serviceActions}>
                <Button className={classes.leftBtn} variant='contained'>Get Started</Button>
                <Button className={classes.rightBtn} variant='contained'>Read More</Button>
              </Grid>
            </Paper>
          </Grid>
          <Grid className={classes.services}>
            <Paper elevation={3} className={classes.servicePaper}>
              <Grid className={classes.avatarGrid}>
                <Icon className={classes.serviceIcon}>
                  <ScheduleIcon />
                </Icon>
              </Grid>
              <Grid className={classes.serviceDescription}>
                <Typography className={classes.serviceTypoHead} align='center' variant='h4'>Schedule an appointment</Typography>
                <Typography className={classes.serviceTypoDescription} align='justify' variant='body1'>
                  Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eisumod tempor in cididunt ut labore et dlore magnus
                </Typography>
              </Grid>
              <Grid className={classes.serviceActions}>
                <Button className={classes.leftBtn} variant='contained'>Get Started</Button>
                <Button className={classes.rightBtn} variant='contained'>Read More</Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home;
