import React, {useState} from 'react';


import { fade, makeStyles, AppBar, Toolbar,
  Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, ListSubheader,
  IconButton, Typography, InputBase, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InfoIcon from '@material-ui/icons/Info';
import HelpIcon from '@material-ui/icons/Help';
import PeopleIcon from '@material-ui/icons/People';

import '../index.css';
import {NavLink} from 'react-router-dom';
import Logo from '../assets/Logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    maxWidth: '1920px',
    width: '100%',
    marginBottom: '4rem'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      marginRight: 0
    },
  },
  logoGrid: {
    display: 'block',
    margin: '0 -2rem',
    [theme.breakpoints.down('md')]: {
      margin: '0 -4rem'
    },
  },
  logo: {
    transform: 'scale(0.65)',
    [theme.breakpoints.down('md')]: {
      transform: 'scale(0.5)'
    },
  },
  search: {
    position: 'relative',
    flexGrow: 1,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.info.main, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.info.main, 0.25),
    },
    marginRight: theme.spacing(2),
    width: '25rem',
    [theme.breakpoints.down('md')]: {
      marginRight: 0,
      width: '100%',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '20rem',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  sectionDesktop: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  spacing: {
    flexGrow: 1,
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  navBtnGrid: {
    display: 'flex',
    padding: '0 1rem',
  },
  navBtn: {
    padding: '.34rem 0',
    textDecoration: 'none',
    color: '#0B86AC',
    fontSize: '16px',
    fontFamily: 'Roboto Slab',
    transitionDuration: '.1s',
    width: '100%',
    '&:hover' : {
      cursor: 'pointer',
      borderBottom: '2px solid #0B86AC',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '22px'
    },
  },
  navBtnDumb: {
    fontFamily: 'Ubuntu',
    color: '#0B86AC',
    fontSize: '16px',
    marginBottom: '-1px',
    [theme.breakpoints.up('xl')]: {
      fontSize: '20px'
    },
  },
  navBtnMobile: {
    color: '#252626',
    fontSize: '16px',
    fontFamily: 'Roboto',
    textDecoration: 'none'
  },
  list: {
    width: '16rem'
  }
}));

export default function Navbar() {
  const classes = useStyles();

  const [drawer, setDrawer] = useState(false)

  const handleDrawerOpen = (event) => {
    setDrawer(true);
  }

  const handleDrawerClose = (event) => {
    setDrawer(false);
  }

  const mobileDrawerId = 'primary-search-account-drawer-mobile';
  const renderMobileDrawer = (
    <Drawer
      id={mobileDrawerId}
      open={drawer}
      onClose={handleDrawerClose}
      anchor="left"
    >
      <div
        className={classes.list}
        role="presentation"
        onKeyDown={handleDrawerClose}
      >
        <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Site Map
          </ListSubheader>
        }
        >
          <NavLink exact to='/' className={classes.navBtnMobile} activeStyle={{color: '#0B86AC', textDecoration: 'none'}}>
            <ListItem
              button
              onClick={handleDrawerClose}
            >
              <ListItemIcon> <HomeIcon /> </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink exact to='/about' className={classes.navBtnMobile} activeStyle={{color: '#0B86AC', textDecoration: 'none'}}>
            <ListItem
              button
              onClick={handleDrawerClose}
            >
              <ListItemIcon> <InfoIcon /> </ListItemIcon>
              <ListItemText>About</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink exact to='/how-it-works' className={classes.navBtnMobile} activeStyle={{color: '#0B86AC', textDecoration: 'none'}}>
            <ListItem
              button
              onClick={handleDrawerClose}
            >
              <ListItemIcon> <HelpIcon /> </ListItemIcon>
              <ListItemText>How it works?</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink exact to='/services' className={classes.navBtnMobile} activeStyle={{color: '#0B86AC', textDecoration: 'none'}}>
            <ListItem
              button
              onClick={handleDrawerClose}
            >
              <ListItemIcon> <PeopleIcon /> </ListItemIcon>
              <ListItemText>Services</ListItemText>
            </ListItem>
          </NavLink>
        </List>
        <Divider />
        <List>
          <NavLink exact to='/login' className={classes.navBtnMobile} activeStyle={{color: '#0B86AC', textDecoration: 'none'}}>
            <ListItem button onClick={handleDrawerClose}>
              <ListItemIcon> <LockOpenIcon /> </ListItemIcon>
              <ListItemText> Login </ListItemText>
            </ListItem>
          </NavLink>
          <NavLink exact to='/register' className={classes.navBtnMobile} activeStyle={{color: '#0B86AC', textDecoration: 'none'}}>
            <ListItem button onClick={handleDrawerClose}>
              <ListItemIcon> <ExitToAppIcon /></ListItemIcon>
              <ListItemText> Sign Up </ListItemText>
            </ListItem>
          </NavLink>
        </List>
      </div>
    </Drawer>
  )


  const activeNavStyle = {
    textDecoration: 'none',
    borderBottom: '2px solid #0B86AC',
    '&:hover': {}
  }

  return (
    <Grid className={classes.root}>
      <AppBar position='fixed' color='inherit'>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Grid className={classes.logoGrid}>
            <NavLink exact to='/'>
              <img className={classes.logo} src={Logo} alt='logo'/>
            </NavLink>
          </Grid>
          <Grid className={classes.search}>
            <Grid className={classes.searchIcon}>
              <SearchIcon />
            </Grid>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Grid>
          <Grid className={classes.spacing} />
          <Grid className={classes.sectionDesktop}>
            <Grid className={classes.navBtnGrid}>
              <NavLink exact to='/' className={classes.navBtn} activeStyle={activeNavStyle}>
                Home
              </NavLink>
            </Grid>
            <Grid className={classes.navBtnGrid}>
              <NavLink exact to='/about' className={classes.navBtn} activeStyle={activeNavStyle}>
                About
              </NavLink>
            </Grid>
            <Grid className={classes.navBtnGrid}>
              <NavLink exact to='/how-it-works' className={classes.navBtn} activeStyle={activeNavStyle}>
                How it works
              </NavLink>
            </Grid>
            <Grid className={classes.navBtnGrid}>
              <NavLink exact to='/services' className={classes.navBtn} activeStyle={activeNavStyle}>
                Services
              </NavLink>
            </Grid>
            <Grid className={classes.navBtnGrid}>
              <NavLink exact to='/login' className={classes.navBtn} activeStyle={activeNavStyle}>
                Login
              </NavLink>
            </Grid>
            <Typography className={classes.navBtnDumb}> or </Typography>
            <Grid className={classes.navBtnGrid}>
              <NavLink exact to='/register' className={classes.navBtn} activeStyle={activeNavStyle}>
                Sign up
              </NavLink>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {renderMobileDrawer}
    </Grid>
  );
}
