import React from "react";


import CssBaseline from "@material-ui/core/CssBaseline";



import Container from "@material-ui/core/Container";





import Nav from '../Nav/Nav';
import LeftMenu from '../Nav/LeftMenu';
import useStyles from './dashboardcss';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "../Home/Home";
import About from '../About/About';

import Dash from '../Dash/Dash';
import { withRouter } from "react-router";

import IssueBooks from '../IssueBooks/IssueBooks';
import Profile from '../Profile/Profile';
import AddBook from '../ManageBooks/AddBook/AddBook';
import ViewBooks from '../ManageBooks/ViewBooks/ViewBooks';
import AddStudent from '../ManageUsers/AddStudent/AddStudent';
import ViewStudents from '../ManageUsers/ViewStudent/ViewStudent';
import UpdateBook from '../ManageBooks/UpdateBook/UpdateBook';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { startFetchingAdmin } from "../../redux/actions/userAction";
import ErrorPage from '../404/ErrorPage';
import ReturnedBooks from '../ReturnedBooks/ReturnedBooks'








 function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [ anchorEl,setAnchorEl] = React.useState(null);
  const openX = Boolean(anchorEl);

;
const handleMenu= (event) =>{

  setAnchorEl(event.currentTarget);
}
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handleClose() {
    setAnchorEl(null);
  }
  React.useEffect(()=>{
    props.startFetchingAdmin("http://localhost:3300/admin/fetchadmin");
  },[])
  const {user}=props;


  return (
    <div className={classes.root}>
    <CssBaseline />
    <Switch>
          <Route exact path='/' component={Home}/>


        </Switch>

        <Route
        path="/(.+)"
        render={() => (
        <div className={classes.root}>
        <Nav anchorEl={anchorEl} openX={openX} classes={classes} open={open} handleDrawerOpen={handleDrawerOpen} handleClose={handleClose} handleMenu={handleMenu} />
        <LeftMenu classes={classes} open={open} handleDrawerClose={handleDrawerClose} />


        <main className={classes.content} >
        <div className={classes.appBarSpacer} />
        <Container  maxWidth="lg" className={classes.container} >

    { user&&user?
    <Switch>
      <Route path='/about' component={About}/>

      <Route path='/dash' component={Dash}/>
              <Route path='/profile' component={Profile}/>
              <Route path='/returnedbooks' component={ReturnedBooks}/>
              <Route path='/issuebooks' component={IssueBooks}/>
              <Route path='/add-book' component={AddBook}/>
              <Route path='/view-books' component={ViewBooks}/>
              <Route path='/update-book/:id' component={UpdateBook}/>
              <Route path='/add-student' component={AddStudent}/>
              <Route path='/view-students' component={ViewStudents}/>
              <Route  component={ErrorPage}/>


            </Switch>:<h1>Login First</h1>
}
</Container>
</main>

        </div>
        )}/>

    </div>
  );
}
const mapstatetoprops=(state)=>({
  user:state.user.user

})
const mapDispatchToProps = (dispatch) => ({

  // //  startFetchingAdmin:  (url) => dispatch(startFetchingAdmin(url))
  startFetchingAdmin:(url)=>dispatch(startFetchingAdmin(url)),
  // startLogoutUser:(url)=>dispatch(startLogoutUser(url))
});
// export default withRouter(Dashboard)

export default compose (
  withRouter,
  connect(mapstatetoprops,mapDispatchToProps)
)(Dashboard);