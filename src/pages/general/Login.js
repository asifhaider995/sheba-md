import React, {useEffect} from 'react';
import {Grid, Typography, Checkbox, Button, Paper, TextField, makeStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {animateScroll} from 'react-scroll';

import Logo from '../../assets/Logo.svg';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    marginTop: '10rem'
  },
  outerGrid: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerGrid: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  formPaper: {
    width: '100%',
    height: '100%',
    padding: '3rem',
    borderRadius: '1rem',
    maxWidth: '30rem',
    [theme.breakpoints.down('xs')]: {
      padding: '1rem',
      maxWidth: '19rem',
      margin: '0 1rem'
    }
  },
  headingLabel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  media: {
    height: '5rem',
    width: '20rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '3.75rem',
    [theme.breakpoints.down('md')]: {
      marginLeft: '3.25rem'
    }
  },
  mediaSub: {
    textAlign: 'center',
    fontSize: '25px',
    fontFamily: 'Saira Semi Condensed',
    margin: '1rem 0 2rem 0'
  },
  formFields: {
    margin: '1rem 0',
    [theme.breakpoints.down('xs')]: {
      margin: '10px 0'
    }
  },
  loggedIn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  submitBtn: {
    marginTop: '1rem'
  },
  oAuth: {
    margin: '2rem 0'
  },
  oAuthBtn: {
    margin: '1rem 0'
  },
  alter: {
    margin: '2rem 0'
  }
}))

function Login(props) {

  const classes = useStyles();

  useEffect(()=>{
    animateScroll.scrollToTop({smooth: "easeInOutQuad"})
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
      <Grid id='login' className={classes.root}>
        <Grid className={classes.outerGrid}>
          <Grid className={classes.innerGrid}>
            <Paper elevation={3} className={classes.formPaper}>
              <Grid className={classes.headingLabel}>
                <img className={classes.media} src={Logo} alt='logo' />
              </Grid>
              <Typography className={classes.mediaSub}>Sign in</Typography>
              <Grid className={classes.formGrid}>
                <form onSubmit={handleSubmit}>
                  <TextField
                    className={classes.formFields}
                    fullWidth
                    helperText="What the hell?"
                    error={true}
                    placeholder='Username or Phone'
                    label="Enter Username or Phone"
                    variant='outlined'
                  />
                  <TextField
                    className={classes.formFields}
                    fullWidth
                    helperText="What the hell?"
                    error={true}
                    placeholder='Enter Password'
                    label="Password"
                    variant='outlined'
                  />
                  <Grid className={classes.loggedIn}>
                    <Checkbox color='primary' /> <p> Keep me logged in </p>
                  </Grid>
                  <Button color='primary' variant='contained' fullWidth className={classes.submitBtn}> Log In </Button>
                </form>
              </Grid>
              <Grid className={classes.alter}>
                <Typography align='center' variant='body1'> Don't have an account? <Link to='/register'> Sign Up </Link></Typography>
              </Grid>
              <Grid className={classes.oAuth}>
                <hr />
                <Typography align='center' variant='body1'>Or, You can log in with</Typography>
                <Button startIcon={<FacebookIcon />} color='primary' variant='contained' fullWidth className={classes.oAuthBtn}> Facebook </Button>
                <Button startIcon={<InstagramIcon />} color='secondary' variant='contained' fullWidth className={classes.oAuthBtn}> Instagram </Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default Login;
