import React from 'react';
import {Grid, Typography, AccordionDetails, Accordion, AccordionSummary, makeStyles} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  faqGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    margin: '3rem 0',
    marginTop: '4rem',
  },
  faqInnerGrid: {
    width: '70rem',
    height: '100%',
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      maxWidth: '36rem',
      margin: '1rem'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: '26rem',
      margin: '1rem'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      maxWidth: '22rem',
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
  typoHead: {
    fontFamily: 'Roboto Slab',
    fontSize: '48px',
    fontWeight: 'medium',
    [theme.breakpoints.down('md')]: {
      fontSize: '24px'
    }
  },
  questionListGrid: {
    padding: '1rem',
    height: '100%'
  },
  questionGrid:{
    width: '100%',
    margin: '.5rem 0',
  },
  accordionQuestion: {
    backgroundColor: '#dfdfdf',
    borderRadius: '5px'
  },
  question: {
    fontFamily: 'Open Sans',
    fontWeight: 'bold'
  },
  answer: {
    height: '100%',
    fontFamily: 'Saira Semi Condensed'
  }
}))


const data = [
  {
    question: "Lorem ipsum dolor sit amet?",
    answer: "consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    answer: "consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    answer: "consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    answer: "consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    answer: "consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    answer: "consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
]

function Home(props) {

  const classes = useStyles();

  return (
    <Grid className={classes.faqGrid}>
      <Grid className={classes.faqInnerGrid}>
        <Grid className={classes.headingGrid}>
          <Typography align='center' variant='h3' className={classes.typoHead}> Common Questions</Typography>
        </Grid>
        <Grid className={classes.questionListGrid}>
          { data.map((item, index) => {
            return (
              <Grid key={index} className={classes.questionGrid}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel-content"
                    id="panel-header"
                    className={classes.accordionQuestion}
                  >
                    <Typography className={classes.question}> {item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.answer}> {item.answer} </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home;
