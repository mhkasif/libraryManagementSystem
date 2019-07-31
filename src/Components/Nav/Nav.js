import React from "react";
import clsx from "clsx";


import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";




import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { startFetchingAdmin, startLogoutUser } from '../../redux/actions/userAction';
import { connect } from 'react-redux';
import { Divider, Button } from "@material-ui/core";
import { NavLink } from 'react-router-dom';




const  Nav=(props)=> {


  const handleLogout=()=>{
    props.startLogoutUser("http://localhost:3300/admin/logout")
  }
  // const imageURL=props.books.books[0].image
  const {user}=props;


        // const [anchorEl] = React.useState(null);

        const {handleDrawerOpen,handleMenu,handleClose,open ,classes,openX,anchorEl}=props
        return (

            <AppBar
              position="absolute"
              className={clsx(classes.appBar, open && classes.appBarShift)}
            >
              <Toolbar className={classes.toolbar}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={handleDrawerOpen}
                  className={clsx(
                    classes.menuButton,
                    open && classes.menuButtonHidden
                  )}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                  className={classes.title}
                >
                  Library Management System
                </Typography>

               {!user?<Button component={NavLink} to='/' style={{color:'white'}}>LOGIN</Button>:
 (
                  <div>
                    <IconButton
                      aria-label="Account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>

                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right"
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right"
                      }}
                      open={openX}
                      onClose={handleClose}
                    >
                      {user&&user.firstname &&<MenuItem disabled>{user.firstname.toUpperCase()}</MenuItem>}
                      <Divider/>
                      <MenuItem component={NavLink} to='/profile' onClick={handleClose}>Profile</MenuItem>
                      <MenuItem component={NavLink} to='/' onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                  </div>
                )
                    }

              </Toolbar>
            </AppBar>



        );
    }

    const mapstatetoprops=(state)=>({
      user:state.user.user

    })
    const mapDispatchToProps = (dispatch) => ({

      //  startFetchingAdmin:  (url) => dispatch(startFetchingAdmin(url))
      startLogoutUser:(url)=>dispatch(startLogoutUser(url))
    });
export default connect(mapstatetoprops,mapDispatchToProps)(Nav);