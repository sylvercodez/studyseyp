import React from 'react'
import {
    Typography,
    Box,
  } from '@material-ui/core'
  import { makeStyles, createMuiTheme } from '@material-ui/core/styles'
  import Button from '@material-ui/core/Button';
  import Grid from '@material-ui/core/Grid';
  import useMediaQuery from "@material-ui/core/useMediaQuery"
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
      root:{
        backgroundColor: '#FFF',
      },
    boxwidget: {
        margin: 'auto',
        width: '94%', 
        [theme.breakpoints.up('sm')]: {
            margin: 'auto',
            width: '92%',    
        },
        
        [theme.breakpoints.up('md')]: {
            margin: 'auto',
            width: '84%',    
        },
        
    },
    widgetbox:{
        margin: '0 auto',
        width: '94%', 
        [theme.breakpoints.up('sm')]: {
            margin: '0 auto',
            width: '85%',    
        },
        
        [theme.breakpoints.up('lg')]: {
            margin: '0 auto',
            width: '85%',    
        },
    },
    mainBox: {
        backgroundColor: '#FFFFFF',
        marginBottom: '1rem',
        borderRadius: '10px',
        paddingTop: '0',
        paddingBottom: '4px',
        color: '#EAEAEA',
        flexDirection:'row' ,
        alignItems: 'inherit',
        transition: 'all 0.3s ease-in-out 0s',
        '&:hover':{
            color: '#00487C',
            boxShadow: ' 8px 32px 30px rgba(0, 0, 0, 0.08)',
            marginBottom: '1.5rem'
        },
        [theme.breakpoints.up('sm')]: {
            backgroundColor: '#FFFFFF',
            marginBottom: '1rem',
            borderRadius: '10px',
            paddingTop: '26px',
            paddingBottom: '26px',
            color: '#EAEAEA',
            flexDirection:'row' ,
            alignItems: 'inherit',
            '&:hover':{
                color: '#00487C',
                boxShadow: ' 8px 32px 30px rgba(0, 0, 0, 0.08)',
                marginBottom: '1.5rem'
            },   
        },
        [theme.breakpoints.up('lg')]: {
            backgroundColor: '#FFFFFF',
            marginBottom: '1rem',
            borderRadius: '10px',
            paddingTop: '28px',
            paddingBottom: '28px',
            color: '#EAEAEA',
            flexDirection:'row' ,
            '&:hover':{
                color: '#00487C',
                boxShadow: ' 8px 32px 30px rgba(0, 0, 0, 0.08)',
                marginBottom: '1.5rem'
            },   
        },
        
    },
    widget: {
        fontSize: '15px',
        fontWeight: 600,
        color: '#00487C',
        marginBottom: '5px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '22px',
            fontWeight: 600,
            color: '#00487C',
            marginBottom: '6px',   
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '37px',
            fontWeight: 600,
            color: '#00487C',
            marginBottom: '7px',   
        },
    },
   
    mainTitle: {
        
        fontSize: '40px',
        // color: '#EAEAEA',
        marginRight: '26px',
        marginLeft: '26px',
        fontWeight: 700,
        alignItems:'center',
        [theme.breakpoints.up('sm')]: {
            marginRight: '26px',
            marginLeft: '26px',
            fontSize: '60px',
            // color: '#EAEAEA',
            fontWeight: 700,
            alignItems:'inherit',
        },
        [theme.breakpoints.up('lg')]: {
            marginRight: '62px',
            marginLeft: '65px',
            fontSize: '70px',
            // color: '#EAEAEA',
            fontWeight: 700,  
        },
    },
    details: {
        width: '85%',
        lineHeight: '16px',
        color: '#000000',
        fontSize: '10px',
        alignItems:'inherit',
        textAlign:'inherit',
        [theme.breakpoints.up('sm')]: {
            width: '77%',
            lineHeight: '21px',
            color: '#000000',
            fontSize: '12px', 
            alignItems:'inherit',
            textAlign:'inherit',
        },
        [theme.breakpoints.up('lg')]: {
            color: '#6D6969',
            width: '34%',
            lineHeight: '23px',
            color: '#000000',
            fontSize: '14px', 

        },
    },
    details1: {
        width: '100%',
        lineHeight: '19px',
        color: '#000000',
        fontSize: '10px',
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            lineHeight: '21px',
            color: '#000000',
            fontSize: '12px', 
        },
        [theme.breakpoints.up('lg')]: {
            width: '100%',
            lineHeight: '23px',
            color: '#000000',
            fontSize: '14px', 
        },
    },
    steps: {
        alignItems:'inherit',
        justifyContent:'center',
        width:'100%',
        [theme.breakpoints.up('sm')]: {
            alignItems:'inherit',
        },
    },
 
    
  }));
  
export default function Works() {
    
        const classes = useStyles();
    return(
  
      <div className={classes.root}>
            <Box display='flex' className={classes.widgetbox} flexDirection='column'>
                <Typography className={classes.widget}>
                    How It Works
                </Typography>   
            </Box>
           <Box display='flex' flexDirection="column" className={classes.boxwidget}>
           <Grid container spacing={2}>
                
                <Grid item xs={12}>
                    <Box display='flex' className={classes.mainBox}>
                        <Typography variant='h4' className={classes.mainTitle}>
                            1 
                        </Typography>
                        <Box display='flex' className={classes.steps} flexDirection='column'>
                           
                            <Typography className={classes.details}>
                                Create an Agent account on Studysey. 
                            </Typography>
                        </Box>  
                        
                    </Box>
                </Grid>
            
       
            <Grid item xs={12}>
                    <Box display='flex' flexDirection='row' className={classes.mainBox}>
                        <Typography variant='h4' className={classes.mainTitle}>
                            2 
                        </Typography>
                        <Box display='flex' className={classes.steps} flexDirection='column'>
                           
                            <Typography className={classes.details}>
                                After thorough investigation and verification, you would 
                            </Typography>
                        </Box>
                        
                    </Box> 
            </Grid>
            <Grid item xs={12}>
                <Box display='flex' flexDirection='row' className={classes.mainBox}>
                    <Typography variant='h4' className={classes.mainTitle}>
                        3 
                    </Typography>
                    <Box display='flex' className={classes.steps} flexDirection='column'>
                        
                        <Typography className={classes.details}>
                        Set up your profile with information about your brand, 
                        services and achievements.
                        </Typography>
                    </Box>  
                    
                </Box> 
            </Grid>
            <Grid item xs={12}>
                <Box display='flex' flexDirection='row' className={classes.mainBox}>
                    <Typography variant='h4' className={classes.mainTitle}>
                        4
                    </Typography>
                    <Box display='flex' className={classes.steps} flexDirection='column'>
                       
                        <Typography className={classes.details}>
                            Connect, engage and interact with students on multiple course channels.
                        </Typography>
                    </Box>
                        
                </Box> 
            </Grid>
            <Grid item xs={12}>
                <Box display='flex' flexDirection='row' className={classes.mainBox}>
                    <Typography variant='h4' className={classes.mainTitle}>
                        5
                    </Typography>
                    <Box display='flex' className={classes.steps} flexDirection='column'>
                       
                        <Typography className={classes.details}>
                        Enjoy fast, secure and direct messaging with prospective students and applicants. 
                        </Typography>
                    </Box>
                        
                </Box> 
            </Grid>
            <Grid item xs={12}>
                <Box display='flex' flexDirection='row' className={classes.mainBox}>
                    <Typography variant='h4' className={classes.mainTitle}>
                        6
                    </Typography>
                    <Box display='flex' className={classes.steps} flexDirection='column'>
                       
                        <Typography className={classes.details}>
                        Get hired by applicants as their official educational agent 
                        and provide personalized support for enrolment.
                        </Typography>
                    </Box>
                        
                </Box> 
            </Grid>
        </Grid>
            </Box>
        
      </div>
    )
  }
  

    
