import React from 'react'
import {
    Typography,
    Box,
  } from '@material-ui/core'
  import { makeStyles, createMuiTheme } from '@material-ui/core/styles'
  import useMediaQuery from "@material-ui/core/useMediaQuery"
  import Grid from '@material-ui/core/Grid';
  
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
        backgroundColor: '#00487C',
        marginBottom:'20px',
        paddingRight:'10px',
        paddingLeft:'10px',

    },
    boxwidget:{
        width:'92%',
        paddingTop:'53px',
        paddingBottom: '88px',
   
        margin:'auto',
    },
    detailTitle: {
        fontSize:'13px',
        color: '#FFFFFF',
        lineHeight:'24px',
        [theme.breakpoints.up('sm')]: {
            fontSize:'13px',
            color: '#FFFFFF',
            lineHeight:'26px',
          },
          [theme.breakpoints.up('md')]: {
            fontSize:'14px',
            color: '#FFFFFF',
            width:'100%',
            lineHeight:'28px',
          },
          [theme.breakpoints.up('lg')]: {
            fontSize:'16px',
            color: '#FFFFFF',
            width:'100%',
            lineHeight:'30px',
          },
    },
    imagebox:{
        paddingRight:'15px',
        [theme.breakpoints.up('sm')]: {
            paddingRight:'17px',
          },
          [theme.breakpoints.up('md')]: {
            paddingRight:'18px',
          },
          [theme.breakpoints.up('lg')]: {
            paddingRight:'20px',
          },
    }
  }));
  
export default function Bookicons() {
    const mobile = useMediaQuery('(max-width:600px)'); 
        const classes = useStyles();
    return(
  
      <div className={classes.root}>
          <Box display='flex' className={classes.boxwidget}>
              <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                      <Box display='flex' flexDirection='row'>
                            {mobile?
                                <Box className={classes.imagebox}  >
                                    <img src="/images/Listiconmobile.svg" className={classes.images} alt=""/>
                                </Box>
                                    : 
                                <Box className={classes.imagebox}  >   
                                    <img src="/images/Listicon.svg"  className={classes.images} alt=""/>
                                </Box>
                            }
                        
                        <Box className={classes.list} >
                            <Typography variant='h5' className={classes.detailTitle}>
                                Comprehensive course search with AI study recommendations after taking our personality test.
                            </Typography>
                        </Box>
                      </Box>
                        
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <Box display='flex' flexDirection='row'>
                            {mobile?
                                <Box className={classes.imagebox}  >
                                    <img src="/images/Listiconmobile.svg" className={classes.images} alt=""/>
                                </Box>
                                    : 
                                <Box className={classes.imagebox}  >   
                                    <img src="/images/Listicon.svg"  className={classes.images} alt=""/>
                                </Box>
                            }
                        <Box className={classes.list} >
                            <Typography variant='h5' className={classes.detailTitle}>
                            Fast, secure and direct messaging with like-minded individuals.
                            </Typography>
                        </Box>
                      </Box>
                        
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <Box display='flex' flexDirection='row'>
                            {mobile?
                                <Box className={classes.imagebox}  >
                                    <img src="/images/Listiconmobile.svg" className={classes.images} alt=""/>
                                </Box>
                                    : 
                                <Box className={classes.imagebox}  >   
                                    <img src="/images/Listicon.svg"  className={classes.images} alt=""/>
                                </Box>
                            }
                        <Box className={classes.list} >
                            <Typography variant='h5' className={classes.detailTitle}>
                            Relevant and detailed information concerning a wide 
                            range of study programmes offered by UK institutions. 
                            </Typography>
                        </Box>
                      </Box>
                        
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <Box display='flex' flexDirection='row'>
                            {mobile?
                                <Box className={classes.imagebox}  >
                                    <img src="/images/Listiconmobile.svg" className={classes.images} alt=""/>
                                </Box>
                                    : 
                                <Box className={classes.imagebox}  >   
                                    <img src="/images/Listicon.svg"  className={classes.images} alt=""/>
                                </Box>
                            }
                        <Box className={classes.list} >
                            <Typography variant='h5' className={classes.detailTitle}>
                            Simplified process for application to HEIs of your choice.
                            </Typography>
                        </Box>
                      </Box>
                        
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <Box display='flex' flexDirection='row'>
                            {mobile?
                                <Box className={classes.imagebox}  >
                                    <img src="/images/Listiconmobile.svg" className={classes.images} alt=""/>
                                </Box>
                                    : 
                                <Box className={classes.imagebox}  >   
                                    <img src="/images/Listicon.svg"  className={classes.images} alt=""/>
                                </Box>
                            }
                        <Box className={classes.list} >
                            <Typography variant='h5' className={classes.detailTitle}>
                            Peer interactions, engagements and sharing of information through a 
                            community of fellow applicants with similar interests.
                            </Typography>
                        </Box>
                      </Box>
                        
                  </Grid>                  
                  <Grid item xs={12} sm={6}>
                      <Box display='flex' flexDirection='row'>
                            {mobile?
                                <Box className={classes.imagebox}  >
                                    <img src="/images/Listiconmobile.svg" className={classes.images} alt=""/>
                                </Box>
                                    : 
                                <Box className={classes.imagebox}  >   
                                    <img src="/images/Listicon.svg"  className={classes.images} alt=""/>
                                </Box>
                            }
                        <Box className={classes.list} >
                            <Typography variant='h5' className={classes.detailTitle}>
                            Post-application support through introduction and connection to trusted educational 
                                        agents or HEI representatives for situational assistance.
                            </Typography>
                        </Box>
                      </Box>
                        
                  </Grid>
              </Grid>
                
                {/* <Grid container spacing={1}>
                        
                        <Grid item xs={12} sm={6} md={6}>
                            
                                <Box display='flex' flexDirection='row'  className={classes.details}>
                                    {mobile?
                                        <Box className={classes.listiconmobile} display='flex' >
                                            <img src="/images/Listiconmobile.svg" className={classes.iconsmobile} alt=""/>
                                        </Box>
                                            : 
                                        <Box className={classes.listicon} display='flex' >    
                                            <img src="/images/Listicon.svg" className={classes.icons} alt=""/>
                                        </Box>
                                    }
                                    <Box className={classes.list} display='flex' >
                                        <Typography variant='h5' className={classes.detailTitle}>
                                        Comprehensive course search with AI study recommendations after taking our personality test.
                                        </Typography>
                                    </Box>
                                </Box>
                        </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box display='flex' flexDirection='row' className={classes.details}>
                                    {mobile?
                                        <Box className={classes.listiconmobile} display='flex' >
                                            <img src="/images/Listiconmobile.svg" className={classes.iconsmobile} alt=""/>
                                        </Box>
                                            : 
                                        <Box className={classes.listicon} display='flex' >    
                                            <img src="/images/Listicon.svg" className={classes.icons} alt=""/>
                                        </Box>
                                    }
                                    <Box className={classes.list} display='flex' >
                                        <Typography variant='h5' className={classes.detailTitle}>
                                        Fast, secure and direct messaging with like-minded individuals.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box display='flex' flexDirection='row' className={classes.details}>
                                    {mobile?
                                        <Box className={classes.listiconmobile} display='flex' >
                                            <img src="/images/Listiconmobile.svg" className={classes.iconsmobile} alt=""/>
                                        </Box>
                                            : 
                                        <Box className={classes.listicon} display='flex' >    
                                            <img src="/images/Listicon.svg" className={classes.icons} alt=""/>
                                        </Box>
                                    }
                                    <Box className={classes.list} display='flex' >
                                        <Typography variant='h5' className={classes.detailTitle}>
                                        Relevant and detailed information concerning a wide 
                                        range of study programmes offered by UK institutions. 
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box display='flex' flexDirection='row' className={classes.details}>
                                    {mobile?
                                        <Box className={classes.listiconmobile} display='flex' >
                                            <img src="/images/Listiconmobile.svg" className={classes.iconsmobile} alt=""/>
                                        </Box>
                                            : 
                                        <Box className={classes.listicon} display='flex' >    
                                            <img src="/images/Listicon.svg" className={classes.icons} alt=""/>
                                        </Box>
                                    }
                                    <Box className={classes.list} display='flex' >
                                        <Typography variant='h5' className={classes.detailTitle}>
                                        Simplified process for application to HEIs of your choice. 

                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box display='flex' flexDirection='row'  className={classes.details}>
                                    {mobile?
                                        <Box className={classes.listiconmobile} display='flex' >
                                            <img src="/images/Listiconmobile.svg" className={classes.iconsmobile} alt=""/>
                                        </Box>
                                            : 
                                        <Box className={classes.listicon} display='flex' >    
                                            <img src="/images/Listicon.svg" className={classes.icons} alt=""/>
                                        </Box>
                                    }
                                    <Box className={classes.list} display='flex' >
                                        <Typography variant='h5' className={classes.detailTitle}>
                                        Peer interactions, engagements and sharing of information through a 
                                        community of fellow applicants with similar interests.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box display='flex' flexDirection='row'  className={classes.details}>
                                    {mobile?
                                        <Box className={classes.listiconmobile} display='flex' >
                                            <img src="/images/Listiconmobile.svg" className={classes.iconsmobile} alt=""/>
                                        </Box>
                                            : 
                                        <Box className={classes.listicon} display='flex' >    
                                            <img src="/images/Listicon.svg" className={classes.icons} alt=""/>
                                        </Box>
                                    }
                                    <Box className={classes.list} display='flex' >
                                        <Typography variant='h5' className={classes.detailTitle}>
                                        Post-application support through introduction and connection to trusted educational 
                                        agents or HEI representatives for situational assistance.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            
                              
                    </Grid>
                */}
            </Box>
       
      </div>
    )
  }
  

    
