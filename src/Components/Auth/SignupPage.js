
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { startInsertingUser } from '../../redux/actions/userAction';
import { reduxForm, Field } from 'redux-form';
import { isRequired, composeValidators, createValidator, combineValidators, hasLengthGreaterThan } from 'revalidate';
import { renderTextField } from '../Common/RenderTextField';



const SignupPage = ({classes,changeToLogin,startInsertingUser,pristine,invalid}) => {
  const [values, setValues] = React.useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    adminId:""
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });

  };

  const handleSubmit= (e)=>{
    e.preventDefault();

    // try{
const { firstName,
lastName,
email,
password,
adminId}=values;

      //  props.startFetchingBook("http://localhost:3300/books")
startInsertingUser(`http://localhost:3300/admin/add?firstname=${firstName}&lastname=${lastName}&adminid=${adminId}&email=${email}&password=${password}`).then(()=>changeToLogin())
      //  console.log(image)


    }
    return (
        <div style={{transition:'all ease 0.7s'}} className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {/* <TextField
                autoComplete="fname"
                name="firstname"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={values.firstName}
                onChange={handleChange("firstName")}
              /> */}
                 <Field
     autoComplete="fname"
     name="firstname"
     variant="outlined"
     required
     fullWidth
     id="firstName"
     label="First Name"
     autoFocus
     value={values.firstName}
     onChange={handleChange("firstName")}
      component={renderTextField}
    />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastname"
                autoComplete="lname"
                value={values.lastName}
                onChange={handleChange("lastName")}
              /> */}
                <Field
     variant="outlined"
     required
     fullWidth
     id="lastName"
     label="Last Name"
     name="lastname"
     autoComplete="lname"
     value={values.lastName}
     onChange={handleChange("lastName")}
     component={renderTextField}

    />

            </Grid>
            <Grid item xs={12}>
              {/* <TextField
                variant="outlined"
                required
                fullWidth
                id="id"
                label="Admin-ID"
                name="adminid"
                value={values.adminId}
                onChange={handleChange("adminId")}
              /> */}
               <Field
     variant="outlined"
     required
     fullWidth
     id="id"
     label="Admin-ID"
     name="adminid"
     value={values.adminId}
     onChange={handleChange("adminId")}
     component={renderTextField}

    />
            </Grid>
            <Grid item xs={12}>
              {/* <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange("email")}
              /> */}
               <Field
 variant="outlined"
 required
 fullWidth
 id="email"
 label="Email Address"
 name="email"
 autoComplete="email"
 value={values.email}
 onChange={handleChange("email")}
 component={renderTextField}

    />
            </Grid>

            <Grid item xs={12}>
              {/* <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={values.password}
                onChange={handleChange("password")}
              /> */}
               <Field
 variant="outlined"
 required
 fullWidth
 name="password"
 label="Password"
 type="password"
 id="password"
 autoComplete="current-password"
 value={values.password}
 onChange={handleChange("password")}
 component={renderTextField}

    />

            </Grid>

          </Grid>
          <Button
           disabled={invalid || pristine}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link style={{cursor:'pointer'}} onClick={changeToLogin} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    )
}
const mapDispatchToProps = (dispatch) => ({

  //  startFetchingBook:  (url) => dispatch(startFetchingBook(url))
  startInsertingUser:(url)=>dispatch(startInsertingUser(url))
});
const isValidEmail = createValidator(
  message => value => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return message
    }
  },
  'Invalid email address'
)
const validate=combineValidators({
  firstname:isRequired("First Name"),
    lastname:isRequired("Last Name"),
    email:composeValidators(isRequired({message: 'Please enter an Email'}), isValidEmail)(),
    password:composeValidators(isRequired({message: 'Please enter your Password'}), hasLengthGreaterThan(6)({message:"Password should not be less then 6 characters"}))(),
    adminid:isRequired("Admin-ID")
})

export default connect(null,mapDispatchToProps)(reduxForm({form:'signupform',validate})( SignupPage))
