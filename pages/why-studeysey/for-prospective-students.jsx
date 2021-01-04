import React from 'react'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'
import { Typography } from "@material-ui/core";
import PersonalisedGuide from './forStudents/personalisedGuide';
import Layout from '../../components/Layout';
import CourseSearch from './forStudents/courseSearch';
import Applicants from './forStudents/applicants'
import Bookicons from './forStudents/bookIcons'
import Journey from './forStudents/journey';
// CSS Styles
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 1,
      sm: 600,
      md: 960,
      lg: 1240,
      xl: 1920,
    },
  },
});


const useStyles = makeStyles(() => ({
  body: {
      
      
      backgroundColor:'#F8F8F8', 
        overflowX: 'hidden',
        overflowY: 'hidden',       
  }
 
  
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.body}>
        
       <PersonalisedGuide />
       <CourseSearch />
       <Applicants />
       <Bookicons />  
       <Journey />      
      </div>
      
    </Layout>

  )
}