import React from 'react';
import {Grid, Typography, CardMedia, Button, fade, makeStyles} from '@material-ui/core';
import '../../index.css';
import Background from '../../assets/home/Background.jpg';

const useStyles = makeStyles((theme)=>({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
  },
  innerRoot: {
    height: '50rem',
    width: '100%',
    [theme.breakpoints.down('lg')]: {
      height: '40rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '35rem',
    }
  },
  mediaGrid: {
    height: '50rem',
    width: '100%',
    [theme.breakpoints.down('lg')]: {
      height: '40rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '35rem',
    }
  },
  media: {
    height: '50rem',
    width: '100%',
    zIndex: -10000,
    [theme.breakpoints.down('lg')]: {
      height: '40rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '35rem',
    }
  },
  contentGrid: {
    height: '50rem',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'flex-start',
    zIndex: 100,
    [theme.breakpoints.down('lg')]: {
      height: '40rem',
    },
    background: fade(theme.palette.text.primary,0.7),
    [theme.breakpoints.down('md')]: {
      height: '35rem',
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
  content: {
    color: 'white',
    height: '100%',
    width: '100%',
    maxWidth: '40rem',
    paddingTop: '20rem',
    textAlign: 'left',
    marginLeft: '5rem',
    [theme.breakpoints.down('md')]: {
      maxWidth: '25rem',
      paddingTop: '20rem',
      padding: '2rem',
      marginLeft: '2rem',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '23rem',
      padding: 10,
      paddingTop: '20rem',
      textAlign: 'left',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '20rem',
      padding: 10,
      paddingTop: '20rem',
      textAlign: 'center',
      marginLeft: 0,
    }
  },
  contentHead: {
    fontFamily: 'Roboto Slab',
    fontWeight: 400,
    [theme.breakpoints.down('md')]: {
      fontSize: '60px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '50px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '46px'
    }
  },
  contentSubHead: {
    fontFamily: 'Saira Semi Condensed',
    fontSize: '28px',
    fontStyle: 'italic',
    [theme.breakpoints.down('md')]: {
      fontSize: '22px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '15px'
    }
  },
  actionBtn: {
    width: '20rem',
    height: '3rem',
    color: 'white',
    marginTop: '3rem',
    fontSize: '20px',
    backgroundColor: theme.palette.info.dark,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '3rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '1rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '1rem',
      width: '100%',
    },
  }

}))


function Top(props) {
  const classes = useStyles();
  return (
    <Grid id='home-top-section' className={classes.root}>
      <Grid className={classes.innerRoot}>
        <Grid className={classes.mediaGrid}>
          <CardMedia className={classes.media} image={Background}>
            <Grid className={classes.contentGrid}>
              <Grid className={classes.content}>
                <Typography variant='h1' className={classes.contentHead}> ShebaMD </Typography>
                <Typography className={classes.contentSubHead}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Typography>
                <Button className={classes.actionBtn}> Get Started </Button>
              </Grid>
            </Grid>
          </CardMedia>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Top;
