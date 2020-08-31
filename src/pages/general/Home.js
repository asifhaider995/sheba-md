import React from 'react';
import {Grid, makeStyles} from '@material-ui/core';

import TopSection from '../../components/home/TopSection';
import MidSection from '../../components/home/MidSection';
import DoctorCards from '../../components/home/DoctorCards';
import ContactSection from '../../components/home/ContactSection';
import ServiceSection from '../../components/home/ServiceSection';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    flexGrow: 1,
    marginBottom: '1rem'
  },
  outerGrid: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerGrid: {
    height: '100%',
    width: '100%'
  }

}))

const textHead1 = "Are you in need of an Emergency?"
const textHead2 = "Would you like to talk to a doctor?"
const textHead3 = "Would you want to set an appointment?"


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
    Doctors can work wonders, talk to one and all your problems are solved, I think. <br />
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
    No one has time for everything but if you try, you can always find time. <br />
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



function Home(props) {

  const classes = useStyles();

  return (
      <Grid className={classes.root}>
        <Grid className={classes.outerGrid}>
          <Grid className={classes.innerGrid}>
            <TopSection />
            <MidSection />
            <ServiceSection textBody={textBody1} textHead={textHead1} invert={true}/>
            <ServiceSection textBody={textBody2} textHead={textHead2} />
            <ServiceSection textBody={textBody3} textHead={textHead3} invert={true}/>
            <DoctorCards />
            <ContactSection />
          </Grid>
        </Grid>
      </Grid>
  )
}

export default Home;
