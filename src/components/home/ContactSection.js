import React from 'react';
import {Grid, Typography,  makeStyles} from '@material-ui/core';

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
