import React from 'react';
import {Grid, Typography, Paper, CardMedia, fade, makeStyles} from '@material-ui/core';
import '../../index.css';

import Img from '../../assets/about/Doctor5.jpg';

const useStyles = makeStyles((theme)=>({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 0',
    background: fade('#0b86ac', 0.2),
  },
  mainInner: {
    width: '77rem',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      maxWidth: '35rem',
      margin: '1rem'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: '24rem',
      margin: '1rem'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      maxWidth: '20rem',
      margin: '.5rem'
    }
  },
  mainPaper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      padding: '1rem'
    }
  },
  media: {
    height: '20rem',
    width: '100%',
    borderRadius: '1rem',
  },
  mediaGrid: {
    borderRadius: '1rem',
    border: '1px solid black',
    width: '35%',
    height: '100%',
    background: 'black',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    }

  },
  mediaGridInv: {
    borderRadius: '1rem',
    border: '1px solid black',
    transform: 'translateX(48rem)',
    width: '35%',
    height: '100%',
    background: 'black',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      transform: 'translateX(0)'
    }

  },
  textSectionGrid: {
    width: '65%',
    height: '100%',
    padding: '1rem',
    margin: '0 1rem',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      maxWidth: '30rem',
      margin: '1rem 0'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: '24rem',
      margin: '1rem 0'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      maxWidth: '16rem',
      margin: 0
    }
  },
  textSectionGridInv: {
    transform: 'translateX(-25rem)',
    width: '65%',
    height: '100%',
    padding: '1rem',
    margin: '0 1rem',
    [theme.breakpoints.down('md')]: {
      transform: 'translateX(0)',
      width: '100%',
      maxWidth: '30rem',
      margin: '1rem 0'
    },
    [theme.breakpoints.down('sm')]: {
      transform: 'translateX(0)',
      width: '100%',
      maxWidth: '24rem',
      margin: '1rem 0'
    },
    [theme.breakpoints.down('xs')]: {
      transform: 'translateX(0)',
      width: '100%',
      maxWidth: '16rem',
      margin: 0
    }
  },
  textHeadGrid: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textHeading: {
    fontFamily: 'Roboto Slab',
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      fontSize: '20px'
    }
  },
  textBodyGrid:{
    width: '100%',
    height: '100%',
  },
  textBody: {
    fontSize: '14px',
    textAlign: 'left',
    margin: '1rem 0',
    fontFamily: 'Open Sans'
  }

}))


function MidSection(props) {
  const invert = props.invert ? props.invert : false;
  const image = props.image ? props.image : Img;
  const classes = useStyles();
  return (
    <Grid id='mid-section-one' className={classes.root}>
      <Grid className={classes.mainInner}>
        <Paper elevation={3} className={classes.mainPaper}>
          <Grid className={invert? classes.mediaGridInv : classes.mediaGrid} id='mediaGrid'>
            <CardMedia image={image} title='' className={classes.media}/>
          </Grid>
          <Grid className={invert? classes.textSectionGridInv : classes.textSectionGrid} id='textGrid'>
            <Grid className={classes.textHeadGrid}>
              <Typography variant='h4' className={classes.textHeading}> Lorem Ipsum dolor sit amet, consectetur ad. </Typography>
            </Grid>
            <Grid className={classes.textBodyGrid}>
              <Typography className={classes.textBody}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
              <Typography className={classes.textBody}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Typography className={classes.textBody}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default MidSection;
