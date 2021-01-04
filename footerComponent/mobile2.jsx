import React from 'react'
import {
  Typography,
  Box,
  TextField,
  Button,
  InputBase,
  Divider
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'

// CSS Styles
const useStyles = makeStyles((theme) => ({
  root: {
		overflowX: "hidden",
		overflowY: "hidden",

	},
  backgroundContainer: {
    background: "#182C51",
  },
  mainContainer: {
    maxWidth: "1440px",
    margin: "0 auto",
  },

  details: {
    fontSize: "0.9rem",
    paddingRight: "2rem",
    paddingTop: "1rem",
    marginBottom: "2rem",
    textAlign: "left",
    fontWeight: 400,
    lineHeight: "1.8rem",
    color: "#ffffff",
  },
  textField: {
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "6px",
    color: "#FFFFFF",
    height: "50px",
    padding: "1rem",
    fontSize: "0.9rem",
    '& > *': {
      color: "#ffffff",
      fontSize: "0.8rem",
    },
  },
  container: {
    paddingLeft: "1rem",
    paddingRight: "0rem",
    paddingBottom: "3rem",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up('sm')]: {
      padding: "0 2rem",
      paddingBottom: "1rem",
    },
    [theme.breakpoints.up('md')]: {
      padding: "24px 7rem",
      
    },
  },
  
  boxTopRight: {
    [theme.breakpoints.up('md')]: {
      padding: "0 6rem 0 12rem",
    },
  },
  form: {
    '& > *': {
      // display: "flex",
      marginBottom: "3rem",
      width: "100%",
      borderRadius: "6px",
    },
  },
  button: {
    position: "absolute",
    right: "9%",
    marginTop: "0.3rem",
    zIndex: 8,
    width: "6rem",
    fontSize: "0.7rem",
    height: "2.5rem",
    color: "#242120",
    [theme.breakpoints.up('sm')]: {
      right: "5%",
    },
    [theme.breakpoints.up('md')]: {
      right: "16.7%",
    },
  },
  location: {
    [theme.breakpoints.down('sm')]: {
      display:'flex',
      flexDirection:"row",
      width: '8rem'
      
      
    }
  },
  footerLinks: {
    fontSize: "10px",
    marginBottom: "0.3rem",
    color: "#ffffff",
    cursor: "pointer",
  },
  linkContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  linkBox1: {
    // marginRight: "5rem",
    // marginBottom: "3.5rem",
    width: "8rem",
  },
  inputfields: {
	display: "flex",

	[theme.breakpoints.down("sm")]: {
		flexDirection: "column",
	},
},
fields: {
	paddingRight: "14px",
	width: "100%",
	paddingLeft: "14px",
	backgroundColor: "#f3f6f8",
	fontWeight: 200,
	marginRight: "7px",
	color: "#000",
	fontStyle: "normal",

	fontFamily: "Source Sans Pro",
	borderRadius: "8px",
	[theme.breakpoints.down("sm")]: {
		paddingLeft: "51px",
		paddingTop: "7px",
		paddingBottom: 7,
		color: "#000",
  paddingRight: "38px",
  fontSize:12
	},
},
address1: {
	fontFamily: "Source Sans Pro",
	fontSize: "11px",
	fontWeight: 400,
	fontStyle: "normal",
	lineHeight: "28px",
	marginTop: 8
},
address2: {
	fontFamily: "Source Sans Pro",
	fontSize: "11px",
	fontWeight: 400,
	fontStyle: "normal",
	lineHeight: "28px",
	marginTop: "auto",
	[theme.breakpoints.down("sm")]: {},
},

menulists2: {
	display: "flex",
	flexDirection: "column",
	paddingTop: 25,
	
	width: '16rem',
	[theme.breakpoints.down("xs")]: {
		
		flexDirection: "row",
		

		justifyContent: "space-between",
	}
},




buttonfield: {
	fontFamily: "Source Sans Pro",
	backgroundColor: "#61F2BE",
	borderRadius: 8,
	fontWeight: 600,
	[theme.breakpoints.down("sm")]: {
		width: "100%",
		marginTop: 6,
	},
	"&:hover": {
		backgroundColor: "#61F2BE",
	},
},
body:{

	[theme.breakpoints.up("lg")]: {
	maxWidth: '28%',
	paddingRight:54,
	},
	[theme.breakpoints.down("md")]: {
	maxWidth:"45%"
	
	},
	[theme.breakpoints.down("md")]: {
	maxWidth:"88%"
	
	},

},
header: {
    fontSize: "1.6rem",
    fontWeight: 600,
    color: "#BCE0F9",
    [theme.breakpoints.up('sm')]: {
      paddingTop: "2rem",
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: "3rem",
    },
  },
mainbody:{
display: "flex",
paddingTop: "18px",
paddingBottom: "23px",
backgroundColor: "#00487C",
color: "white",
borderRadius: "0px",
width: "100%",
justifyContent:'center',
[theme.breakpoints.down("md")]: {
  flexDirection:"column",
  
},
}
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      
      <div className={classes.root}>
	
				<Box
					container ='true'
					justify="center"
          alignItems="center"
          className={classes.mainbody}
					>
					<Box className={classes.body}>
						<div>
							<h1
								style={{
									color: "#F3F6F8",
									fontWeight: "700",
									fontSize: 22,
									fontStyle: "normal",
									lineHeight: "48px",
                                    fontFamily: "Source Sans Pro",
                                    
								}}>
								Join our community!
							</h1>
						</div>
					</Box>
					<Box display='flex'>
						<div>
							<form noValidate autoComplete="off">
								<div className={classes.inputfields}>
									<InputBase
										placeholder="Enter your email address"
										className={classes.fields}
									/>
									<div>
										<Button
											className={classes.buttonfield}
											variant="contained"
											size="large">
											Subscribe
										</Button>
									</div>
								</div>
							</form>
						</div>
					</Box>
				</Box>
				<Box className={classes.backgroundContainer}>
        <Box className={classes.mainContainer}>
          <Box className={classes.container}>
            <Box className={classes.linkContainer}>
              <Box className={classes.linkBox1}>
                <div >
                  <Typography
                  className={classes.header}
                  style={{ fontSize: "0.9rem", marginBottom: "0.7rem" }}
                  variant="h6"
                > 
                  <img 
                      style={{
                        width: "140px",
                        marginBottom:'0.3rem',
                        
                        
                      }}
                      src="/Studyseylogo.png"
                    />
                    </Typography>
                </div>
                <Box  className={classes.location}>
                <Typography
                  style={{ fontSize: "10px",color: "#ffffff",marginBottom: "0.7rem"}}
                   variant="h6"
                >
                 <b style={{ fontSize: "0.7rem"}}>UK OFFICE</b><br />
										Suite 143 548-550 Elder Gate,
										Milton Keynes, MK9 1LR
                </Typography>
              
                </Box>
                
              </Box>
              <Box style={{ width: "10rem" ,marginTop: '111px'}}>
              <Typography
                style={{ fontSize: "10px",color: "#ffffff"}}
                   variant="h6"
                >
                 <b style={{ fontSize: "0.7rem" }}>LAGOS OFFICE</b><br />
									No 3, Adenugba Street,<br />
									 Oregun, Ikeja
                </Typography>
              </Box>
              
              <Box style={{ width: "8rem" ,marginRight:'-22px'}}>
                <Typography
                  className={classes.header}
                  style={{ fontSize: "0.9rem", marginBottom: "0.7rem" }}
                  variant="h6"
                >
                  COMPANY
              </Typography>
              <Link href='/'>
                <Typography className={classes.footerLinks} variant="h6">
                  About us
                </Typography>
              </Link>
              <Link href='/'>
                <Typography className={classes.footerLinks} variant="h6">
                Terms & Conditions
                </Typography>
              </Link>
              <Link href='/'>
                <Typography className={classes.footerLinks} variant="h6">
                  Privacy Policy
                </Typography>
              </Link>

              <Link href='/'>
                <Typography className={classes.footerLinks} variant="h6">
                  Press & Media
                </Typography>
              </Link>

              
              </Box>
              <Box style={{ width: "10rem" }}>
                <Typography
                  className={classes.header}
                  style={{ fontSize: "0.9rem", marginBottom: "0.7rem" }}
                  variant="h6"
                >
                  WHY STUDYSEY?
              </Typography>
              <Link href='/why-studeysey/for-prospective-students'  passHref >
                <Typography className={classes.footerLinks} variant="h6">
                   For Prospective Students
                </Typography>
              </Link>

              <Link href='/why-studeysey/for-educational-agents'  passHref >
                <Typography className={classes.footerLinks} variant="h6">
                  For Educational Agents
                </Typography>
              </Link>

              <Link href='/why-studeysey/for-institutions'  passHref >
                <Typography className={classes.footerLinks} variant="h6">
                    For Institutions 
                </Typography>
              </Link>

              <Link href='/'>
                <Typography className={classes.footerLinks} variant="h6">
                  How Studysey Works
                </Typography>
              </Link>
              </Box>
              <Box style={{ marginBottom: "1.5rem", width: "8rem",marginRight:'-22px' }}>
                <Typography
                  className={classes.header}
                  style={{ fontSize: "0.9rem", marginBottom: "0.7rem" }}
                  variant="h6"
                >
                  SUPPORT
                </Typography>
                <Link href="/">
                  <Typography className={classes.footerLinks} variant="h6">
                    Contact us
                  </Typography>
                </Link>

                <Link href="/">
                  <Typography className={classes.footerLinks} variant="h6">
                    Help/FAQs
                  </Typography>
                </Link>

                <Link href="/">
                  <Typography className={classes.footerLinks} variant="h6">
                    Request Partnership
                  </Typography>
                </Link>

              </Box>
              <Box style={{ width: "10rem", marginBottom: "1.5rem" }}>
                <Typography
                  className={classes.header}
                  style={{ fontSize: "0.9rem", marginBottom: "0.7rem" }}
                  variant="h6"
                >
                  CONNECT WITH US
                </Typography>
                <Typography className={classes.footerLinks} variant="h6">
                <Box style={{ marginBottom: "0.3rem" }}>
                  <img style={{ marginRight: "0.5rem" }} src="/Group 122.svg" alt="facebook" />
                  <img style={{ marginRight: "0.5rem" }} src="/Group.svg" alt="instagram" />
                  <img style={{ marginRight: "0.5rem" }} src="/Group 124.svg" alt="twitter" />
                  <img style={{ marginRight: "0.5rem" }} src="/Group 125.svg" alt="linkedIn" />
                </Box>
                </Typography>
                <Typography
    
                  style={{ fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "#BCE0F9",}}
                 
                >
                  CONTACT US

                </Typography>
                <Typography className={classes.footerLinks} variant="h6">
                  contact@studysey.com
                  </Typography>
                
              </Box>
             
            </Box>
          </Box>
          <Box
					style={{
						backgroundColor: "#182C51",
						borderRadius: "0px",

						width: "100%",
					}}>
					<Divider
						style={{
							backgroundColor: "#00487C",
						}}
					/>
					<h5
						style={{
							textAlign: "center",
							paddingTop: "11px",
							fontSize: "12px",
							fontFamily: "Source Sans Pro",
							fontWeight: 400,
							lineHeight: "17.06px",
							paddingBottom: '11px',
							color: "#FFFFFF",
							margin: '0px',
						}}>
						{" "}
						Copyright Studysey {new Date().getFullYear()} . All rights reserved
					</h5>
				
				</Box>
			
        </Box>
      </Box>
      </div>
    </React.Fragment>
  )
}

export default Footer
// import React from "react"
// import Mobile from './../component/mobile'
// import Desktop from './../component/desktop'
// import useMediaQuery from "@material-ui/core/useMediaQuery"



// export default function SimpleMediaQuery() {
//   const mobile = useMediaQuery('(max-width:40px)');    



//  if(mobile){
//    return <Mobile />
//  }else{
//    return <Desktop />
//  } 


// }
