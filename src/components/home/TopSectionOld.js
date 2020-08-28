import React from 'react';
import {Grid, Typography, IconButton, Button, CardMedia, makeStyles} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Img from '../../assets/home/Background.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  innerRoot: {
    width: '100%',
    height: '100%',
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBar: {
    flexGrow: 1,
    backgroundColor: '#0B86AC',
    width: '100%',
    height: '3.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('lg')]: {
      height: '4rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '3rem',
    },
    [theme.breakpoints.down('sm')]: {
      height: '4rem'
    },
  },
  topBarTypo: {
    color: 'white',
    padding: '1rem',
    paddingTop: '1rem',
    fontStyle: 'italic',
    marginTop: '10px',
    [theme.breakpoints.up('lg')]: {
      fontSize: '22px'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '17px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '17px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
    },
  },
  slideShow: {
    width: '100%',
    backgroundColor: '#252626',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1000,
    padding: '3px 0'
  },
  media: {
    borderRadius: '5px',
    margin: '0 7rem',
    width: '1280px',
    height: '486px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '640px',
      margin: '0 1.75rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '356px',
      margin: '1px 3px',
      opacity: 1
    },
  },
  mediaTextGrid: {
    width: '60%',
    height: '60%',
    marginLeft: '5rem',
    marginTop: '7rem',
    opacity: 1,
    zIndex: 50000,
    [theme.breakpoints.down('md')]: {
      width: '60%',
      height: '60%',
      marginLeft: '3rem',
      marginTop: '9rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '60%',
      height: '60%',
      marginLeft: '3rem',
      marginTop: '10rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '80%',
      height: '80%',
      marginLeft: '1rem',
      marginTop: '38px',
    },
  },
  mediaTextHead: {
    color: 'black',
    textAlign: 'left',
    fontSize: '48px',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: '48px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '33px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px'
    },
  },
  mediaTextBody: {
    fontFamily: 'Calibri',
    color: 'black',
    fontSize: '24px',
    textAlign: 'justify',
    marginTop: '1rem',
    marginRight: '10rem',
    [theme.breakpoints.down('md')]: {
      marginRight: '8rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: '4rem',
      fontSize: '20px',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 10,
      marginRight: '55px',
      fontSize: '12px',
    },
  },
  actionBtn: {
    backgroundColor: '#C10202',
    color: 'white',
    width: '15rem',
    height: '3rem',
    marginTop: '2rem',
    '&:hover': {
      backgroundColor: '#0B86AC'
    },
    [theme.breakpoints.down('sm')]: {
      width: '10rem',
      height: '2rem',
      marginTop: '1rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '7rem',
      height: '1.5rem',
      fontSize: '10px',
    },
  },
  leftArrow: {
    background: '#252626',
    color: 'white',
    width: '2rem',
    height: '4rem',
    borderRadius: 10,
    paddingLeft: '1.5rem',
    paddingRight: '1rem',
    opacity: 0.1,
    left: 30,
    '&:hover': {
      background: '#252626',
      opacity: 0.9,
    },
    [theme.breakpoints.down('md')]:{
      transform: 'scale(0.75)',
      left: 10
    }
  },
  rightArrow: {
    background: '#252626',
    color: 'white',
    width: '2rem',
    height: '4rem',
    borderRadius: 10,
    paddingLeft: '1.5rem',
    paddingRight: '1rem',
    opacity: 0.1,
    right: 30,
    '&:hover': {
      background: '#252626',
      opacity: 0.9,
    },
    [theme.breakpoints.down('md')]:{
      transform: 'scale(0.75)',
      right: 10
    }
  },
  bottomBar: {
    flexGrow: 1,
    width: '100%',
    height: '3.5rem',
    backgroundColor: '#C10202',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('lg')]: {
      height: '3rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '3rem',
    },
    [theme.breakpoints.down('sm')]: {
      height: '4rem'
    },

  },
  bottomBarTypo: {
    color: 'white',
    fontStyle: 'italic',
    paddingTop: '10px',
    marginBottom: '10px',
    [theme.breakpoints.up('lg')]: {
      fontSize: '22px'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '17px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '17px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  }
}))

function TopSection(props) {

  const classes = useStyles();

  return (
    <Grid id='page-top-section' className={classes.root}>
      <Grid className={classes.innerRoot}>
        <Grid className={classes.topBar}>
          <Typography variant='h5' align='center' className={classes.topBarTypo}>
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sick mundus creatus est.
          </Typography>
        </Grid>
        {/*SlideShow*/}
        <Grid className={classes.slideShow}>
          <IconButton className={classes.leftArrow}><ArrowBackIosIcon /></IconButton>
          <CardMedia image={Img} title='' className={classes.media}>
            <Grid className={classes.mediaTextGrid}>
              <Typography variant='h3' className={classes.mediaTextHead}>Lorem Ipsum dolor</Typography>
              <Typography variant='body2' className={classes.mediaTextBody}>
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eisumod tempor in cididunt ut labore et dlore magnus
              </Typography>
              <Button variant='contained' className={classes.actionBtn}> Get Started </Button>
            </Grid>
          </CardMedia>
          <IconButton className={classes.rightArrow}> <ArrowForwardIosIcon /> </IconButton>
          </Grid>
          <Grid className={classes.bottomBar}>
            <Typography variant='h6' align='center' className={classes.bottomBarTypo}>
              Lorem Ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TopSection;
