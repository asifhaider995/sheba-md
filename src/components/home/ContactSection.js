import React from 'react';
import {Grid, Typography, TextField, Button, CardMedia, Paper, makeStyles} from '@material-ui/core';

import '../../index.css';

import Map from './contact/Map';
import Form from './contact/Form';

const useStyles = makeStyles((theme) => ({
  contactSection: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2rem'
  },
  contactSectionInner: {
    width: '100%',
    padding: '1rem'
  },
  headingGrid: {
    padding: '2rem 0'
  },
  heading: {
    fontFamily: 'Roboto Slab',
    fontWeight: 500,
  },
  subHeading: {
    fontFamily: 'Roboto Slab',
    fontSize: '20px',
    fontStyle: 'italic',
    color: '#5F5D5D',
    [theme.breakpoints.down('md')]:{
      fontSize: '16px',
      textAlign: 'center'
    }
  },
  contactContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: '0 1rem',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      margin: '1rem 0'
    }
  },
  contactLocation: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50rem',
    height: '100%',
    marginRight: '5rem',
    [theme.breakpoints.down('lg')]: {
      width: '30rem',
      marginRight: '4rem'
    },
    [theme.breakpoints.down('md')]: {
      marginRight: 0,
      maxWidth: '100%',
      width: '100%',
      marginBottom: '1rem'
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
      maxWidth: '100%',
      width: '100%',
      marginBottom: '1rem'
    }
  },
  paperMap: {
    height: '100%',
    width: '100%',
    padding: '2rem',
    paddingBottom: '3rem',
    '&:hover': {
      cursor: 'pointer',
    },
    [theme.breakpoints.down('lg')]: {
      padding: '2rem',
      paddingBottom: '2rem'
    },
    [theme.breakpoints.down('md')]:{
      marginBottom: '1rem',
      maxWidth: '25rem',
      padding: 0,
      paddingBottom: '3rem'
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '22rem',
    }
  },
  mapGrid: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  media: {
    borderRadius: '15px',
    height: '45rem',
    width: '45rem',
    [theme.breakpoints.down('lg')]: {
      height: '30rem',
      width: '30rem'
    },
    [theme.breakpoints.down('md')]: {
      height: '25rem',
      width: '20rem'
    },
    [theme.breakpoints.down('xs')]: {
      height: '25rem',
      width: '19rem'
    }
  },
  contactForm: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50rem',
    height: '100%',
    marginLeft: '5rem',
    [theme.breakpoints.down('lg')]: {
      width: '35rem',
      marginLeft: '4rem'
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      maxWidth: '99.5%',
      width: '100%',
      marginTop: '1rem'
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      maxWidth: '100%',
      width: '100%',
      marginTop: '1rem'
    }
  },
  paperForm: {
    padding: '2rem',
    paddingBottom: '3rem',
    [theme.breakpoints.down('lg')]: {
      padding: '2rem',
      paddingBottom: '2rem'
    },
    [theme.breakpoints.down('md')]:{
      marginBottom: '1rem',
      padding: '1rem',
      maxWidth: '25rem',
    },
    [theme.breakpoints.down('xs')]:{
      maxWidth: '20rem',
    }
  },
  formGrid: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    fontFamily: 'Open Sans',
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    height: '45rem',
    width: '100%',
    [theme.breakpoints.down('lg')]: {
      height: '30rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '100%',
    }
  },
  formFields: {
    marginBottom: '3rem',
    [theme.breakpoints.down('lg')]: {
      marginBottom: '.5rem'
    }

  },
  submitBtn: {
    width: '22rem',
    height: '3.5rem',
    backgroundColor: theme.palette.error.main,
    color: 'white',
    fontSize: '20px',
    marginTop: '2rem',
    '&:hover': {
      color: 'black'
    },
    [theme.breakpoints.down('lg')]: {
      marginTop: '1.5rem',
      width: '15rem',
      height: '2.75rem',
      fontSize: '17px'
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '.5rem',
      width: '100%',
      height: '2rem',
      fontSize: '14px'
    }
  }




}))

function Contact(props) {

  const classes = useStyles();

  return (
    <Grid id='contact' className={classes.contactSection}>
      <Grid className={classes.contactSectionInner}>
        <Grid className={classes.headingGrid}>
          <Typography className={classes.heading} align='center' variant='h2' >Contact Us </Typography>
          <Typography align='center' variant='h6' gutterBottom className={classes.subHeading}>
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Grid>
        <Grid className={classes.contactContent}>
          <Map />
          <Form />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Contact;
