import React from 'react'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'
import { Typography } from "@material-ui/core";

import Layout from '../../components/Layout';
import Engage from './forEducation/engage';
import Recruits from './forEducation/recruits';
import Works from './forEducation/works';
import Started from './forEducation/started';

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
        <Engage />
        <Recruits />
        <Works />
        <Started />
      </div>
      
    </Layout>

  )
}