import React, { useState } from 'react'
import { makeStyles, useTheme, createMuiTheme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Divider,
  Box,
  Button
} from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useRouter } from 'next/router'

//CSS Styles

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowX:"hidden",
    overflowY:"hidden",
    
  },
  appBar: {
    background: "#ffffff",
    width: "100vw",
    [theme.breakpoints.up('md')]: {
      paddingRight: "3.5rem",
      paddingLeft: "3.5rem"
    },
    [theme.breakpoints.up('lg')]: {
      paddingRight: "5.5rem",
      paddingLeft: "5.5rem",
    }
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    width: "7rem"
  },
  menuItems1Box: {
    textAlign: "center",
    background: "#ffffff",
    border: "1px solid rgba(0, 0, 0, 0.08)",
  },
  menuItems1: {
    [theme.breakpoints.up('sm')]: {
      fontSize: "0.5rem",
      marginRight: "0.6rem",
      marginLeft: "0.6rem",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "0.6rem",
      marginRight: "0.8rem",
      marginLeft: "0.8rem",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "0.7rem",
      marginRight: "1rem",
      marginLeft: "1rem",
    },
  },
  menuItems2: {
    [theme.breakpoints.up('sm')]: {
      fontSize: "0.5rem",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "0.6rem",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "0.7rem",
      marginRight: "0.6rem",
      marginLeft: "0.6rem",
    },
  },
  signUp: {
    fontSize: "0.5rem",
    background: "#FF5C00",
    color: "#ffffff"
  }
}));

const menuItems1 = [
  {
    page: "MARKETPLACE",
    pageUrl: "/marketplace"
  },
  {
    page: "WHOLESALE CENTER",
    pageUrl: "/wholesalecenter"
  },
  {
    page: "SELLER CENTER",
    pageUrl: "/sellercenter"
  },
  {
    page: "SERVICES",
    pageUrl: "/services"
  },
  {
    page: "INTERNSHIPS",
    pageUrl: "/internship"
  },
  {
    page: "EVENTS",
    pageUrl: "/events"
  },
]
const menuItems2 = [
  {
    page: "ABOUT US",
    pageUrl: "/about"
  },
  {
    page: "STORIES",
    pageUrl: "/testimonial"
  },
  {
    page: "CONTACT",
    pageUrl: "/contact"
  },
  {
    page: "LOGIN",
    pageUrl: "/login"
  },
]
const signUp = [
  {
    page: "SIGN UP",
    pageUrl: "/signup"
  },
]

const header = () => {
  const router = useRouter()
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageUrl) => {
    router.push(pageUrl);
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
      {
        !isMobile &&
        <Box className={classes.menuItems1Box}>
          {menuItems1.map((menuItem, key) => {
            const { page, pageUrl } = menuItem;
            return (
              <Button className={classes.menuItems1} key={key} onClick={() => handleMenuClick(pageUrl)}>{page}</Button>
            )
          })}
        </Box>
      }
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <img onClick={() => handleMenuClick('/')} className={classes.title} src="images/vasiti-logo.svg" alt="vasiti-logo" />
          <div>
            {isMobile ? (
              <><IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon style={{ color: "#1F1A35" }} />
              </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuItems1.map((menuItem, key) => {
                    const { page, pageUrl } = menuItem;
                    return (
                      <MenuItem key={key} onClick={() => handleMenuClick(pageUrl)}>{page}</MenuItem>
                    )
                  })}
                  <Divider />
                  {menuItems2.map((menuItem, key) => {
                    const { page, pageUrl } = menuItem;
                    return (
                      <MenuItem
                        key={key}
                        onClick={() => handleMenuClick(pageUrl)}>
                        {page}
                      </MenuItem>
                    )
                  })}
                  {signUp.map((Item, key) => {
                    const { page, pageUrl } = Item;
                    return (
                      <MenuItem
                        style={{
                          backgroundColor: "#FF5C00",
                          color: "#FFFFFF"
                        }}
                        className={classes.menuItems1}
                        key={key}
                        onClick={() => handleMenuClick(pageUrl)}
                      >
                        {page}
                      </MenuItem>
                    )
                  })}
                </Menu>
              </>
            ) :
              <>
                <Box>
                  {menuItems2.map((menuItem, key) => {
                    const { page, pageUrl } = menuItem;
                    return (
                      <Button className={classes.menuItems2} key={key} onClick={() => handleMenuClick(pageUrl)}>{page}</Button>
                    )
                  })}
                  {signUp.map((Item, key) => {
                    const { page, pageUrl } = Item;
                    return (
                      <Button className={classes.signUp} key={key} onClick={() => handleMenuClick(pageUrl)}>{page}</Button>
                    )
                  })}
                </Box>
              </>
            }

          </div>
        </Toolbar>
      </AppBar>
      </div>
    </React.Fragment>
  )
}

export default header
