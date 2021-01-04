import React from 'react'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'
import { Box, Button, Grid, Typography } from '@material-ui/core';

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

const usestyles = makeStyles(() =>({
  mainBody:{
    backgroundColor:  "#FFF"
  },
  container:{
    maxWidth: '1440px',
    width:'90%',
    margin:'auto',
    paddingTop:'30px',
    paddingBottom: '60px',
   
    [theme.breakpoints.up('sm')]: {
      paddingTop:'20px',
      paddingBottom: '40px',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop:'53px',
      paddingBottom: '88px',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop:'53px',
      paddingBottom: '88px',
    },
  },
  button:{
    backgroundColor:"#fff",
    color: '#182C51',
    borderRadius: '42px',
    padding: '7px 14px',
    
  },
  [theme.breakpoints.up('sm')]: {
    backgroundColor:"#fff",
    color: '#182C51',
    borderRadius: '42px',
    padding: '8px 15px',
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor:"#fff",
    color: '#182C51',
    borderRadius: '42px',
    padding: '8px 16px',
  },
  [theme.breakpoints.up('lg')]: {
    backgroundColor:"#fff",
    color: '#182C51',
    borderRadius: '42px',
    padding: '9px 19px',
  },
  buttonDetails:{
    fontSize: '14px',
    fontWeight: 600,
    [theme.breakpoints.up('sm')]: {
      fontSize: '14px',
      fontWeight: 600,
    },[theme.breakpoints.up('md')]: {
      fontSize: '16px',
      fontWeight: 600,
    },[theme.breakpoints.up('lg')]: {
      fontSize: '18px',
      fontWeight: 600,
    },
    
  },
  header:{
    paddingTop: '4px',
    paddingBottom: '5px',
    color:'#00487C',
    fontSize:'15px',
    width:'100%',
    fontWeight: 700,
    lineHeight: '22px',
    [theme.breakpoints.up('sm')]: { 
      paddingTop: '13px',
      paddingBottom: '15px',
      color:'#00487C',
      fontSize:'20px',
      width:'92%',
      fontWeight: 800,
      lineHeight: '29px',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '17px',
      paddingBottom: '19px',
      color:'#00487C',
      fontSize:'28px',
      width:'100%',
      fontWeight: 900,
      lineHeight: '26px',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '21px',
      paddingBottom: '22px',
      color:'#00487C',
      fontSize:'35px',
      width:'88%',
      fontWeight: 900,
      lineHeight: '42px',
    },
  
  },
  details: {
    fontSize:'12px',
    fontWeight:400,
    lineHeight:'22px',
    color:'#182C51',
    [theme.breakpoints.up('sm')]: {
      fontSize:'12px',
      fontWeight:400,
      lineHeight:'24px',
      color:'#182C51',
    },
    [theme.breakpoints.up('md')]: {
      fontSize:'12px',
      fontWeight:400,
      lineHeight:'26px',
      color:'#182C51',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize:'14px',
      fontWeight:400,
      lineHeight:'30px',
      color:'#182C51',
    },
  },
  imagebox:{
    display:'flex',
    width:'100%',
    justifyContent: 'flex-start',
  },
  detailBox:{
    width:'100%',
    [theme.breakpoints.up('lg')]: {
      width:'90%',
    },
    [theme.breakpoints.up('lg')]: {
      width:'85%',
    },
    [theme.breakpoints.up('lg')]: {
      width:'80%',
    },

  },
  images: {
    width:'100%',
  }
}));

export default function Recruits() {

    const classes = usestyles();

    return (

        <div className={classes.mainBody}>
          <Box className={classes.container}>
            <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                    <Box className={classes.imagebox}><img src='/images/groups.svg' className={classes.images}/></Box>
            
                </Grid>
                <Grid item xs={12} sm={6}>

                    <Typography className={classes.header}>
                      Recruit more students, make more money
                    </Typography>
                    <Box className={classes.detailBox}>
                    <Typography className={classes.details}>
                    Studysey makes student recruitment easy! We do all the hard work 
                    and heavy lifting for you. With many years of experience in Technology,
                    International Education and Student Recruitment, we can proudly say we are experts 
                    in this field and with our robust understanding of this eco-system, 
                    we would definitely help you make more money.
                    </Typography>
                    </Box>
                    
                </Grid>
              
            </Grid>
            
          </Box>
        </div>
        
    )
}