import React from 'react';
import {Grid, Typography, CardMedia, Paper, makeStyles} from '@material-ui/core';

import MapPic from '../../../assets/home/Map.png';
import '../../../index.css';


const useStyles = makeStyles((theme) => ({
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
}))

function Map(props) {

  const classes = useStyles();

  return (
    <Grid className={classes.contactLocation}>
      <Paper elevation={3} className={classes.paperMap}>
        <Typography align='center' variant='h4' gutterBottom style={{fontFamily: 'Roboto Slab'}}>Find us</Typography>
        <Grid className={classes.mapGrid}>
          <CardMedia image={MapPic} title='map' className={classes.media} />
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Map;
