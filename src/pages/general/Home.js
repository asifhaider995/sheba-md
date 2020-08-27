import React from 'react';
import {Grid, makeStyles} from '@material-ui/core';

import TopSection from '../../components/home/TopSection';
import MidSection from '../../components/home/MidSection';
import DoctorCards from '../../components/home/DoctorCards';
import ContactSection from '../../components/home/ContactSection';

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

function Home(props) {

  const classes = useStyles();

  return (
      <Grid className={classes.root}>
        <Grid className={classes.outerGrid}>
          <Grid className={classes.innerGrid}>
            <TopSection />
            <MidSection />
            <DoctorCards />
            <ContactSection />
          </Grid>
        </Grid>
      </Grid>
  )
}

export default Home;
