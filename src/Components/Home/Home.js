
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SignupPage from '../Auth/SignupPage';
import LoginPage from '../Auth/LoginPage';


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Home() {
  const classes = useStyles();
  const [signupOpen,setValue]=React.useState(false);
  const changeComponent=()=>{
    console.log("v")
   setValue(!signupOpen)
  }
  return (
    <Container component="main" maxWidth="xs">

    <CssBaseline />

{ signupOpen?
      <SignupPage changeToLogin={changeComponent} classes={classes}/>:<LoginPage classes={classes} changeToSignup={changeComponent}/>
}

</Container>
  );
}
