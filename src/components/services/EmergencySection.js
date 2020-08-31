import React from 'react';
import {Grid, Typography, Paper, Button, CardMedia, fade, makeStyles} from '@material-ui/core';
import '../../index.css';

import Img from '../../assets/about/Doctor4.jpg';

const useStyles = makeStyles((theme)=>({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5rem 0',
    background: fade(theme.palette.info.light, 0.3),
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
    height: '25rem',
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
    marginLeft: '2rem',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      maxWidth: '30rem',
      margin: '1rem 0',
      marginLeft: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: '24rem',
      margin: '1rem 0',
      marginLeft: 0,
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
    fontSize: '18px',
    textAlign: 'left',
    margin: '1rem 0',
    fontFamily: 'Open Sans',
    [theme.breakpoints.down('md')]: {
      marginRight: '1rem'
    }
  },
  actionBtn: {
    margin: '3.5rem 0 0 0',
    background: theme.palette.error.dark,
    color: 'white',
  }

}))


function MidSection(props) {
  const invert = props.invert ? props.invert : false;
  const image = props.image ? props.image : Img;
  const textHead = props.textHead;
  const textBody = props.textBody;
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
              <Typography variant='h4' className={classes.textHeading}>
                <div>{textHead}</div>
              </Typography>
            </Grid>
            <Grid className={classes.textBodyGrid}>
            <Typography className={classes.textBody} style={{whitespace: 'pre-line'}}>
              {textBody}
            </Typography>
            <Button variant='contained' size='large' color='secondary' className={classes.actionBtn}> Get Started </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default MidSection;
