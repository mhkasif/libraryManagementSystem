import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { startFetchingUser } from "../../redux/actions/userAction";
import { reduxForm, Field } from 'redux-form';
import { isRequired, composeValidators, createValidator, combineValidators, hasLengthGreaterThan } from 'revalidate';
import { renderTextField } from '../Common/RenderTextField';



const LoginPage = props => {
  const [values, setValues] = React.useState({
    email: "",
    password: ""
  });
  const { classes, changeToSignup, startFetchingUser} = props;
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // try{
    const { email, password } = values;

    //  props.startFetchingBook("http://localhost:3300/books")
    startFetchingUser(
      `http://localhost:3300/admin/fetch?email=${email}&password=${password}`);
      props.reset();
  };
  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={classes.form} noValidate>
{/* <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={values.email}
          onChange={handleChange("email")}
        /> */}
          <Field
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
      value={values.email}
      onChange={handleChange("email")}
      component={renderTextField}
    />
        <Field
    variant="outlined"
    margin="normal"
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
        {/* <TextField
          variant="outlined"
          margin="normal"
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
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSubmit}
          disabled={props.invalid || props.pristine}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link
              style={{ cursor: "pointer" }}
              onClick={changeToSignup}
              variant="body2"
            >
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  //  startFetchingBook:  (url) => dispatch(startFetchingBook(url))
  startFetchingUser: url => dispatch(startFetchingUser(url))
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
  email:composeValidators(isRequired({message: 'Please enter an Email'}), isValidEmail)(),
  password:composeValidators(isRequired({message: 'Please enter your Password'}), hasLengthGreaterThan(6)({message:"Password should not be less then 6 characters"}))()
})

export default connect(
  null,
  mapDispatchToProps,
)(reduxForm({form:'loginform',validate})(LoginPage))
