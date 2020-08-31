import React from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import '../../index.css';

import TopSection from '../../components/services/TopSection';


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

function Service(props) {

  const classes = useStyles();

  return (
      <Grid className={classes.root}>
        <Grid className={classes.outerGrid}>
          <Grid className={classes.innerGrid}>
            <TopSection {...props}/>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default Service;
