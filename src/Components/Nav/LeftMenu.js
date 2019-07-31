import React from "react";
import clsx from "clsx";


import Drawer from "@material-ui/core/Drawer";


import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import MainListItems, { Months } from "../dashboard/listItems";
import { withRouter } from 'react-router';
import { Grid } from '@material-ui/core/';
import { NavLink } from 'react-router-dom';






const LeftMenu=({handleDrawerClose,open,classes})=> {



    return (

        <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Grid  justify='center' container>
        <NavLink to='/about'>
        <img style={{cursor:'pointer'}} width='70px' alt='logo' heigth='60px' src='/assets/logo.png' />
</NavLink>
        </Grid>

        <Divider />
        <List><MainListItems/></List>
        <Divider />
<List><Months/></List>

      </Drawer>

    )
}
export default withRouter (LeftMenu);