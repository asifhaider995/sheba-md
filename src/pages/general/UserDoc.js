import React, {useEffect} from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import '../../index.css';

import TopSection from '../../components/userdoc/TopSection';
import StageSection from '../../components/userdoc/StageSection';
import FaqSection from '../../components/userdoc/FaqSection';
import MidSectionList from '../../components/userdoc/MidSection';
import MidSection from '../../components/about/MidSection';

import CallImage from '../../assets/userdoc/Call1.jpg';
import Emergency from '../../assets/userdoc/Emergency1.jpg';
import Doctor from '../../assets/userdoc/Doctor1.jpg';

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

function UserDoc(props) {


  useEffect(()=>{
    animateScroll.scrollToTop({smooth: "easeInOutQuint"})
  },[])

  const classes = useStyles();
  return (
      <Grid id='userdoc' className={classes.root}>
        <Grid className={classes.outerGrid}>
          <Grid className={classes.innerGrid}>
            <TopSection />
            <StageSection />
            <MidSectionList image={CallImage}/>
            <MidSection invert={true} image={Doctor}/>
            <MidSectionList image={Emergency}/>
            <FaqSection />
          </Grid>
        </Grid>
      </Grid>
  )
}

export default UserDoc;
