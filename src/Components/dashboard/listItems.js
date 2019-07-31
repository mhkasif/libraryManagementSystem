import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import { LibraryBooks, AttachMoney, Info, LibraryAdd, ExpandLess, ExpandMore, Visibility, PersonAdd, AddToQueue, Note, AssignmentReturn } from '@material-ui/icons';
import { ListSubheader, Collapse} from '@material-ui/core';
import AssignmentIcon  from '@material-ui/icons/Assignment';
import {NavLink} from 'react-router-dom'
import { withRouter } from 'react-router';
import List  from '@material-ui/core/List';
import useStyles from './dashboardcss';




 const MainListItems =({match})=>{
// eslint-disable-next-line react-hooks/rules-of-hooks

const [open, setOpen] = React.useState(false);
const[openIndex,setIndex]=React.useState(null)
const handleClick=(openIndex)=>{

setOpen(!open);
setIndex(openIndex)
}
const classes=useStyles();

return (
  <div>
  <ListItem onClick={()=>handleClick(0)} selected={match.params[0]==='dash'} component={NavLink} to='/dash' button>
  <ListItemIcon>
  <DashboardIcon />
  </ListItemIcon>
  <ListItemText primary="Dashboard" />
  </ListItem>
  <ListItem onClick={()=>handleClick(0)} selected={match.params[0]==='profile'} component={NavLink} to='/profile' button>
  <ListItemIcon>
  <PersonIcon />

  </ListItemIcon>
  <ListItemText primary="My Profile" />
  </ListItem>
  <ListItem onClick={()=>handleClick(1)} button>
  <ListItemIcon>
  <PeopleIcon />
  </ListItemIcon>
  <ListItemText primary="Manage Students" />
  {open && openIndex===1? <ExpandLess /> : <ExpandMore />}

  </ListItem>
  <Collapse in={open  && openIndex===1} timeout="auto" unmountOnExit>
  <List component="div" disablePadding>
    <ListItem selected={match.params[0]==='add-student'} component={NavLink} to='/add-student' button className={classes.nested}>
      <ListItemIcon>
      <PersonAdd />
      </ListItemIcon>
      <ListItemText primary="Add Student" />
    </ListItem>
  </List>
</Collapse>
<Collapse in={open  && openIndex===1} timeout="auto" unmountOnExit>
<List component="div" disablePadding>
  <ListItem selected={match.params[0]==='view-students'} component={NavLink} to='/view-students' button className={classes.nested}>
    <ListItemIcon>
      <Visibility />
    </ListItemIcon>
    <ListItemText primary="View Student" />
  </ListItem>
</List>
</Collapse>
  <ListItem onClick={()=>handleClick(2)} button>
  <ListItemIcon>
  <LibraryBooks />
  </ListItemIcon>
  <ListItemText primary="Manage Books" />
  {open && openIndex===2 ? <ExpandLess /> : <ExpandMore />}
  </ListItem>
  <Collapse in={open  && openIndex===2} timeout="auto" unmountOnExit>
  <List component="div" disablePadding>
    <ListItem selected={match.params[0]==='add-book'} component={NavLink} to='/add-book' button className={classes.nested}>
      <ListItemIcon>
        <LibraryAdd />
      </ListItemIcon>
      <ListItemText primary="Add Book" />
    </ListItem>
  </List>
</Collapse>
  <Collapse in={open  && openIndex===2} timeout="auto" unmountOnExit>
  <List component="div" disablePadding>
    <ListItem selected={match.params[0]==='view-books'} component={NavLink} to='/view-books' button className={classes.nested}>
      <ListItemIcon>
        <Visibility />
      </ListItemIcon>
      <ListItemText primary="View Books" />
    </ListItem>
  </List>
</Collapse>
  
  <ListItem onClick={()=>handleClick(0)} selected={match.params[0]==='returnedbooks'} component={NavLink} to='/returnedbooks'  button>
  <ListItemIcon>
  <AssignmentReturn />
  </ListItemIcon>
  <ListItemText primary="Returned Books" />
  </ListItem>
  <ListItem onClick={()=>handleClick(0)} selected={match.params[0]==='issuebooks'} component={NavLink} to='/issuebooks'  button>
  <ListItemIcon>
  <Note />
  </ListItemIcon>
  <ListItemText primary="Issued Books" />
  </ListItem>
  <ListItem onClick={()=>handleClick(0)} selected={match.params[0]==='about'} component={NavLink} to='/about'  button>
  <ListItemIcon>
  <Info />
  </ListItemIcon>
  <ListItemText primary="About" />
  </ListItem>
  </div>
)


};


const SecondaryListItems = ({match})=>{
   return(
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem selected={match.params[0]=='dash/thismonth'} component={NavLink} to='/dash/thismonth' button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem selected={match.params[0]=="dash/lastmonth"} component={NavLink} to='/dash/lastmonth' button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last Month" />
    </ListItem>
  </div>
)
   }

 export const Months=withRouter(SecondaryListItems)
export default withRouter(MainListItems)