import React from 'react';
import {Grid, Typography, CardContent, Paper, Avatar, Button, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  doctorGrid: {
    backgroundColor: '#FCFCFC',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    marginTop: '1rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '3rem',
    }
  },
  headingGrid: {
    padding: '1rem 0'
  },
  heading: {
    fontFamily: 'Roboto Slab',
    fontWeight: 500,
    fontSize: '64px',
    [theme.breakpoints.down('xs')]:{
      fontSize: '36px',
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
  doctorCardList: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      margin: '1rem 0'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
    [theme.breakpoints.down('xs')]: {
    },
  },
  doctorCards : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    maxWidth: '35rem',
    margin: '0 3rem',
    [theme.breakpoints.down('lg')]:{
      maxWidth: '30rem',
      margin: '1rem 1rem',
    },
    [theme.breakpoints.down('md')]:{
      maxWidth: '28rem',
      margin: '2rem 1rem',
    },
    [theme.breakpoints.down('sm')]:{
      maxWidth: '99%',
      margin: '2rem 0',
    },
    [theme.breakpoints.down('xs')]:{
      margin: '2rem 0',
    }
  },
  paperCard: {
    padding: '1rem',
    width: '100%',
    [theme.breakpoints.down('sm')]:{
      maxWidth: '28rem',
      margin: '2rem 0',
    },
    [theme.breakpoints.down('xs')]:{
      maxWidth: '18rem',
      margin: '2rem 0',
    }
  },
  topCardSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]:{
      display: 'block'
    }
  },
  avatarGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 1rem',
  },
  avatar: {
    height: '8rem',
    width: '8rem'
  },
  cardContent: {
  },
  cardTitle : {
    textAlign: 'left',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]:{
      textAlign: 'center',
      fontSize: '36px'
    }
  },
  cardSubtitle: {
    fontSize: '18px',
    [theme.breakpoints.down('md')]:{
      fontSize: '24px',
      textAlign: 'center'
    }
  },
  cardBody: {

  },
  cardActionSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px 0',
    [theme.breakpoints.down('md')]:{
      display: 'block',
    }
  },
  cardActionLeftBtn: {
    marginRight: '10px',
    backgroundColor: theme.palette.error.main,
    color: 'white',
    '&:hover': {
      color: 'black'
    },
    [theme.breakpoints.down('md')]:{
      marginRight: 0,
      marginTop: '10px'
    }
  },
  cardActionRightBtn: {
    marginLeft: '10px',
    backgroundColor: theme.palette.info.dark,
    color: 'white',
    '&:hover': {
      color: 'black'
    },
    [theme.breakpoints.down('md')]:{
      marginLeft: 0,
      marginTop: '10px'
    }
  }


}))

function DoctorCards(props) {

  const classes = useStyles();

  return (
    <Grid id='doctors' className={classes.doctorGrid}>
      <Grid className={classes.doctorGridInner}>
        <Grid className={classes.headingGrid}>
          <Typography align='center' className={classes.heading}>Meet Our Doctors</Typography>
          <Typography align='center' variant='h6' gutterBottom className={classes.typoSubHead}>
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Grid>
        <Grid className={classes.doctorCardList}>
          <Grid className={classes.doctorCards}>
            <Paper elevation={3} className={classes.paperCard}>
              <Grid className={classes.topCardSection}>
                <Grid className={classes.avatarGrid}><Avatar className={classes.avatar} /></Grid>
                <CardContent className={classes.cardContent}>
                  <Typography className={classes.cardTitle} variant='h5'> Dr. Who </Typography>
                  <Typography className={classes.cardSubtitle} variant='subtitle2'> Medicine </Typography>
                  <Typography className={classes.cardBody} align='justify' variant='body2'>
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eisumod tempor in cididunt ut labore et dlore magnus
                  </Typography>
                </CardContent>
              </Grid>
              <hr />
              <Grid className={classes.cardActionSection}>
                <Button fullWidth variant='contained' className={classes.cardActionLeftBtn}> Send a Message </Button>
                <Button fullWidth variant='contained' className={classes.cardActionRightBtn}> Call Now </Button>
              </Grid>
            </Paper>
          </Grid>
          <Grid className={classes.doctorCards}>
            <Paper elevation={3} className={classes.paperCard}>
              <Grid className={classes.topCardSection}>
                <Grid className={classes.avatarGrid}><Avatar className={classes.avatar} /></Grid>
                <CardContent className={classes.cardContent}>
                  <Typography className={classes.cardTitle} variant='h5'> Dr. Who </Typography>
                  <Typography className={classes.cardSubtitle} variant='subtitle2'> Medicine </Typography>
                  <Typography className={classes.cardBody} align='justify' variant='body2'>
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eisumod tempor in cididunt ut labore et dlore magnus
                  </Typography>
                </CardContent>
              </Grid>
              <hr />
              <Grid className={classes.cardActionSection}>
                <Button fullWidth variant='contained' className={classes.cardActionLeftBtn}> Send a Message </Button>
                <Button fullWidth variant='contained' className={classes.cardActionRightBtn}> Call Now </Button>
              </Grid>
            </Paper>
          </Grid>
          <Grid className={classes.doctorCards}>
            <Paper elevation={3} className={classes.paperCard}>
              <Grid className={classes.topCardSection}>
                <Grid className={classes.avatarGrid}><Avatar className={classes.avatar} /></Grid>
                <CardContent className={classes.cardContent}>
                  <Typography className={classes.cardTitle} variant='h5'> Dr. Who </Typography>
                  <Typography className={classes.cardSubtitle} variant='subtitle2'> Medicine </Typography>
                  <Typography className={classes.cardBody} align='justify' variant='body2'>
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eisumod tempor in cididunt ut labore et dlore magnus
                  </Typography>
                </CardContent>
              </Grid>
              <hr />
              <Grid className={classes.cardActionSection}>
                <Button fullWidth variant='contained' className={classes.cardActionLeftBtn}> Send a Message </Button>
                <Button fullWidth variant='contained' className={classes.cardActionRightBtn}> Call Now </Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DoctorCards;
