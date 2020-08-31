import React, {useEffect} from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import '../../index.css';

import TopSection from '../../components/services/TopSection';
import EmergencySection from '../../components/services/EmergencySection';

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

const textHead1 = "Emergency?"
const textHead2 = "Confused? Talk to a doctor"
const textHead3 = "Get an appointment"


const textBody1 = (
  <div>
    Sometimes, life fucks you so bad your need emergencies <br />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. <br />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit -
    <ul>
      <li> ipsum dolor sit amet </li>
      <li> ipsum onsectetur adipiscing elit, sed do </li>
      <li> ipsum incididunt ut labore </li>
      <li> ipsum dolor et dolore magna aliqua </li>
    </ul>
  </div>
)

const textBody2 = (
  <div>
    Sometimes, life fucks you so bad your need emergencies <br />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. <br />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit -
    <ul>
      <li> ipsum dolor sit amet </li>
      <li> ipsum onsectetur adipiscing elit, sed do </li>
      <li> ipsum incididunt ut labore </li>
      <li> ipsum dolor et dolore magna aliqua </li>
    </ul>
  </div>
)

const textBody3 = (
  <div>
    Sometimes, life fucks you so bad your need emergencies <br />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. <br />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit -
    <ul>
      <li> ipsum dolor sit amet </li>
      <li> ipsum onsectetur adipiscing elit, sed do </li>
      <li> ipsum incididunt ut labore </li>
      <li> ipsum dolor et dolore magna aliqua </li>
    </ul>
  </div>
)


function Service(props) {

  useEffect(()=>{
    animateScroll.scrollToTop({smooth: "easeInOutQuad"})
  },[])

  const classes = useStyles();

  return (
      <Grid id='services' className={classes.root}>
        <Grid className={classes.outerGrid}>
          <Grid className={classes.innerGrid}>
            <TopSection {...props}/>
            <EmergencySection invert={true} textHead={textHead1} textBody={textBody1} />
            <EmergencySection textHead={textHead2} textBody={textBody2}/>
            <EmergencySection invert={true} textHead={textHead3} textBody={textBody3}/>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default Service;
