import React from 'react';
import {Grid, Typography, Paper, Table, TableRow, TableBody, TableCell, TableHead, TableContainer, makeStyles} from '@material-ui/core';
import '../../index.css';

const useStyles = makeStyles((theme)=>({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2rem 0',
    marginTop: '1rem'
  },
  mainInner: {
    width: '77rem',
    height: '100%',
    display: 'block',
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
  headingGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  heading: {
    fontFamily: 'Roboto Slab',
    fontSize: '48px',
    fontWeight: 'medium'
  },
  mainContent: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainPaper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    [theme.breakpoints.down('md')]: {
      display: 'block'
    }
  },
  table: {
    minWidth: '9.5rem',
    width: '100%'
  },
  shebaHead: {
    backgroundColor: '#0b86ac',
    color: 'white',
    fontFamily: 'Saira Semi Condensed',
    fontSize: '28px',
  },
  otherHead: {
    backgroundColor: '#c10202',
    color: 'white',
    fontSize: '24px',
    fontFamily: 'Open Sans',
  },
  shebaBody: {
    backgroundColor: 'white',
    fontFamily: 'Saira Semi Condensed',
  },
  otherBody: {
    backgroundColor: theme.palette.action.hover,
    fontFamily: 'Open Sans'
  }

}))


function DiffSection(props) {
  const classes = useStyles();
  return (
    <Grid id='mid-section-one' className={classes.root}>
      <Grid className={classes.mainInner}>
        <Grid className={classes.headingGrid}>
          <Typography className={classes.heading}>Why is ShebaMD different?</Typography>
        </Grid>
        <Grid className={classes.mainContent}>
          <Paper elevation={3} className={classes.mainPaper}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" className={classes.otherHead}> Regular Health Care</TableCell>
                    <TableCell align="center" className={classes.shebaHead}> ShebaMD</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="left" className={classes.otherBody}> Lorem ipsum dolor sit amet, consectetur adipiscing elit </TableCell>
                    <TableCell align="left" className={classes.shebaBody}> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left" className={classes.otherBody}> Lorem ipsum onsectetur adipiscing elit </TableCell>
                    <TableCell align="left" className={classes.shebaBody}> eprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left" className={classes.otherBody}> ure dolor in reprehenderit in voluor sit amet, consectetur adipiscing elit </TableCell>
                    <TableCell align="left" className={classes.shebaBody}> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum derit in voluptate olore eu fugiat nulla pariatur.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left" className={classes.otherBody}> Lorem ierit in voluptateerit in voluptate psum dolor sit amet, consectetur adipiscing elit </TableCell>
                    <TableCell align="left" className={classes.shebaBody}> Duis aulla pariatur.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DiffSection;
