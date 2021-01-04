import React from 'react'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'
import { Box, Button, Grid, Typography } from '@material-ui/core';
import useMediaQuery from "@material-ui/core/useMediaQuery"

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
        marginTop:'50px',
        marginBottom:'80px',
        backgroundColor:'#fff',
        [theme.breakpoints.up('sm')]: {
            backgroundColor:'#fff',
            margin:'0',
          },
    },
    container:{
        width:'100%',
        backgroundColor:'#F4F7F9',
        paddingBottom:'50px',
        [theme.breakpoints.up('sm')]: {
            paddingBottom:'0px'
          }
    },
    header:{
        fontSize:'26px',
        lineHeight:'40px',
        color: '#00487C',
        fontWeight:900,
        textAlign:'center',
        [theme.breakpoints.up('sm')]: {
            fontSize:'22px',
            lineHeight:'39px',
            color: '#00487C',
            fontWeight:900,
            textAlign:'center',
          },
          [theme.breakpoints.up('md')]: {
            fontSize:'24px',
            lineHeight:'40px',
            color: '#00487C',
            fontWeight:900,
            textAlign:'center',
          },
          [theme.breakpoints.up('lg')]: {
            fontSize:'33px',
            lineHeight:'46px',
            color: '#00487C',
            fontWeight:900,
            textAlign:'center',
          },
    },
    headerbox:{
        paddingTop:'50px',
        paddingBottom: '32px',
        [theme.breakpoints.up('sm')]: {
            paddingTop: '64px',
            paddingBottom: '28px',
           
          },
          [theme.breakpoints.up('md')]: {
            paddingTop:'100px',
            paddingBottom: '32px',
            
          },
          [theme.breakpoints.up('lg')]: {
            paddingTop:'139px',
            paddingBottom: '32px',
          
          },
    },
    imagebox:{
        width:'100%'
    },
    images:{
        width:'100%'
    },
    buttonbox:{
        alignItems:'center',
        color:'#00487C',
        border:'1px solid #00487C',
        width:'90%',
        '&:hover': {
            backgroundColor: '#F4F7F9',
          },
          [theme.breakpoints.up('sm')]: {
            width:'inherit',
                '&:hover': {
                backgroundColor: '#fff',
            }
          
          },
    },
    Buttondetails: {
        fontSize: '16px',
        fontWeight: 700,
    }
}));

export default function Journey() {
    const mobile = useMediaQuery('(max-width:600px)'); 
    const classes = usestyles();

    return (

        <div className={classes.mainBody}>
          <Box className={classes.container}>
            <Grid container spacing={2}>
           
              <Grid item xs={12} sm={4}>
              {mobile?'':
                <Box className={classes.imagebox}>
                    <img src='/images/right.svg' className={classes.images} alt=''/>
                </Box> 
                }
                
                
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box className={classes.headerbox}>
                <Typography className={classes.header}>
                    Ready to begin an easy, fun and personalized study journey?
                </Typography>
                </Box>
                <Box display='flex' alignItems='center' justifyContent="center">
                <Button variant="outlined"  className={classes.buttonbox}>
                    <Typography className={classes.Buttondetails}>SIGN UP NOW</Typography>
                </Button>
                </Box>
                
            </Grid>
            <Grid item xs={12} sm={4}>
                {mobile? '':
                <Box className={classes.imagebox}>
                    <img src='/images/left.svg'  className={classes.images} alt=''/>
                </Box>}
                
            </Grid>
            </Grid>
          </Box>
        </div>
        
    )
}