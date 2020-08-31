import React, {useEffect} from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import '../../index.css';

import TopSection from '../../components/about/TopSection';
import MidSection from '../../components/about/MidSection';
import DiffSection from '../../components/about/DiffSection';

import Doctor from '../../assets/about/Doctor2.jpg';

import {animateScroll} from 'react-scroll';

const useStyles = makeStyles((theme)=>({
  root: {
    width: '100%',
    height: '100%',
  },
  outerGrid: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  innerGrid: {
    height: '100%',
    width: '100%'
  },
}))

function About(props) {


  useEffect(()=>{
    animateScroll.scrollToTop({smooth: "easeInOutQuad", delay: 200})
  },[])

  const classes = useStyles();
  return (
      <Grid id='about' className={classes.root}>
        <Grid className={classes.outerGrid}>
          <Grid className={classes.innerGrid}>
            <TopSection {...props}/>
            <MidSection {...props} invert={true}/>
            <MidSection {...props} image={Doctor}/>
            <DiffSection {...props} />
          </Grid>
        </Grid>
      </Grid>
  )
}

export default About;
