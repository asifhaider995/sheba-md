import React, {useState} from 'react';
import { fade, makeStyles, AppBar, Toolbar, IconButton, Typography, InputBase, Menu, MenuItem, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
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
    color: '#0B86AC',
    fontSize: '16px',
    fontFamily: 'Roboto',
  }
}));

export default function Navbar() {
  const classes = useStyles();

  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileAnchorEl);


  const handleMobileMenuClose = () => {
    setMobileAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };

  const activeNavStyleMobile = {
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#0B86AC'

  }

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMobileMenuClose}>
        <NavLink exact to='/' style={{textDecoration: 'none', color: 'none'}} activeStyle={activeNavStyleMobile}>
          <Typography className={classes.navBtnMobile} align='center'>Home</Typography>
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <NavLink exact to='/about' style={{textDecoration: 'none'}} activeStyle={activeNavStyleMobile}>
          <Typography className={classes.navBtnMobile} align='center'>About</Typography>
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <NavLink exact to='/how-it-works' style={{textDecoration: 'none'}} activeStyle={activeNavStyleMobile}>
          <Typography className={classes.navBtnMobile} align='center'>How it works</Typography>
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <NavLink exact to='/services' style={{textDecoration: 'none'}} activeStyle={activeNavStyleMobile}>
          <Typography className={classes.navBtnMobile} align='center' >Services</Typography>
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <NavLink exact to='/login' style={{textDecoration: 'none'}} activeStyle={activeNavStyleMobile}>
          <Typography align='center' className={classes.navBtnMobile}>Login</Typography>
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <NavLink exact to='/register' style={{textDecoration: 'none'}} activeStyle={activeNavStyleMobile}>
          <Typography align='center' className={classes.navBtnMobile}>Sign up</Typography>
        </NavLink>
      </MenuItem>
    </Menu>
  );

  const activeNavStyle = {
    textDecoration: 'none',
    borderBottom: '2px solid #0B86AC'
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
              <NavLink exact to='/' style={{textDecoration: 'none'}} activeStyle={activeNavStyle}>
                <Typography className={classes.navBtn}> Home </Typography>
              </NavLink>
            </Grid>
            <Grid className={classes.navBtnGrid}>
              <NavLink exact to='/about' style={{textDecoration: 'none'}} activeStyle={activeNavStyle}>
                <Typography className={classes.navBtn}> About </Typography>
              </NavLink>
            </Grid>
            <Grid className={classes.navBtnGrid}>
              <NavLink exact to='/how-it-works' style={{textDecoration: 'none'}} activeStyle={activeNavStyle}>
                <Typography className={classes.navBtn}> How it works </Typography>
              </NavLink>
            </Grid>
            <Grid className={classes.navBtnGrid}>
              <NavLink exact to='/services' style={{textDecoration: 'none'}} activeStyle={activeNavStyle}>
                <Typography className={classes.navBtn}> Services </Typography>
              </NavLink>
            </Grid>
            <Grid className={classes.navBtnGrid}>
              <NavLink exact to='/login' style={{textDecoration: 'none'}} activeStyle={activeNavStyle}>
                <Typography className={classes.navBtn}> Login </Typography>
              </NavLink>
            </Grid>
            <Typography className={classes.navBtnDumb}> or </Typography>
            <Grid className={classes.navBtnGrid}>
              <NavLink exact to='/register' style={{textDecoration: 'none'}} activeStyle={activeNavStyle}>
                <Typography className={classes.navBtn}> Sign up </Typography>
              </NavLink>
            </Grid>
          </Grid>
          <Grid className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Grid>
  );
}
