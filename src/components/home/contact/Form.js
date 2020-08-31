import React from 'react';
import {Grid, Typography, TextField, Button, Paper, makeStyles} from '@material-ui/core';

import {withFormik} from 'formik';
import * as Yup from 'yup';

import '../../../index.css';


const useStyles = makeStyles((theme) => ({
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
      marginBottom: '2rem'
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
    <Grid className={classes.contactForm}>
      <Paper elevation={3} className={classes.paperForm}>
        <Typography align='center' variant='h4' style={{fontFamily: 'Roboto Slab'}} gutterBottom>Leave us a message</Typography>
        <Grid className={classes.formGrid}>
          <form onSubmit={props.handleSubmit} className={classes.form}>
            <TextField
              name='name'
              value={props.values.name}
              onBlur={props.handleBlur}
              onChange={props.handleChange}
              className={classes.formFields}
              fullWidth
              helperText={(props.touched.name && props.errors.name) && props.errors.name}
              error={props.errors.name && props.touched.name}
              placeholder='Name'
              label="Enter Name"
              variant='outlined'
            />
            <TextField
              name='email'
              value={props.values.email}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              className={classes.formFields}
              fullWidth
              helperText={(props.touched.email && props.errors.email) && props.errors.email}
              error={props.touched.email && props.errors.email}
              placeholder='Email'
              label="Enter Email"
              variant='outlined'
            />
            <TextField
              name='message'
              value={props.values.message}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              className={classes.formFields}
              fullWidth
              helperText={(props.touched.message && props.errors.message) && props.errors.message}
              error={props.touched.message && props.errors.message}
              placeholder='Message'
              label="Your Message"
              variant='outlined'
              multiline
              rows={window.screen.width >= 2048 ? 15: 9}
            />
            <Button className={classes.submitBtn}> Submit </Button>
          </form>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    message: ''
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().min(3, "Name is too short").required('Name is required'),
    email: Yup.string().email("Valid email required").required('Email is required'),
    message: Yup.string().min(100, "Your message is too short").max(500, "Too long").required('Message is required')
  }),
  handleSubmit: (values, {setSubmitting}) => {
    alert("Form submitted");
    console.log(values)
  }
})(Contact);
