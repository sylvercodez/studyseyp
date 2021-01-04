import Layout from "../components/Layout";

// import Widget4 from './HomePage/widget4'
// import Widget5 from './HomePage/widget5'
// import Widget6 from './HomePage/widget6'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'
import { Typography } from "@material-ui/core";

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
      maxWidth: '1440px',
      margin:'auto',
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
        
       <Typography style={{padding:'40px 50px'}} >studysey is coming back</Typography>
       <Typography style={{padding:'40px 50px'}}>studysey is coming back</Typography>
      
      </div>
    </Layout>
  )
}