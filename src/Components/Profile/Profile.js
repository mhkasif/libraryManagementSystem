import React from 'react'
import {
  Grid,
  TextField,

  Button,
  Box,
} from "@material-ui/core";

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {startUpdatingUser } from '../../redux/actions/userAction';

import useStyles from '../dashboard/dashboardcss';
import { connect } from 'react-redux';



const Profile = (props) => {
    const classes=useStyles();
const [values,setValues]=React.useState({...props.user})
const handleChange = name => event => {
  setValues({ ...values, [name]: event.target.value });

}
const handleSubmit=()=>{
  const {email,password,firstname,lastname,adminid}=values;
  console.log(values)
  props.startUpdatingUser(`http://localhost:3300/admin/update?firstname=${firstname}&lastname=${lastname}&email=${email}&password=${password}&adminid=${adminid}`)
}
    return (
        <div>
        <Grid item className={classes.profileFieldsGrid} md={8} lg={8}>
        <Box boxShadow={2}>
        <form className={classes.container}>
        <Grid justify="space-around" container>
        <Grid lg={11}>
        <TextField
        id="filled-title"
        label="FirstName"
        value={values.firstname}
        onChange={handleChange("firstname")}
        margin="normal"
        variant="filled"
        style={{ width: "100%" }}
        />
        </Grid>
        <Grid lg={5}>
        <TextField
        id="filled-Lastname"
        label="LastName"
        value={values.lastname}
        onChange={handleChange("lastname")}
        margin="normal"
        variant="filled"
        style={{ width: "100%" }}

        />
        </Grid>
        <Grid lg={5}>
        <TextField
        id="filled-adminid"
        label="Admin-Id"
        value={values.adminid}
        onChange={handleChange("adminid")}
        margin="normal"
        variant="filled"
        style={{ width: "100%" }}
        disabled

        />
        </Grid>
        <Grid lg={5}>
        <TextField
        id="filled-email"
        label="email"
        value={values.email}
        onChange={handleChange("email")}
        margin="normal"
        variant="filled"
        style={{ width: "100%" }}
        disabled
        />
        </Grid>
        <Grid lg={5}>
        <TextField
        id="filled-password"
        label="password"
        value={values.password}
        onChange={handleChange("password")}
        margin="normal"
        variant="filled"
        style={{ width: "100%" }}
        type='password'
        />
        </Grid>

        <Grid
        className={classes.studentSelect}
        container
        justify="flex-end"
        lg={11}
        >
        <Button
        onClick={handleSubmit}

        variant="contained"
        style={{ background: "rgb(33,186,70)", color: "white" ,width:"20%" }}
        ><CloudUploadIcon style={{marginRight:10} } />
        Update
        </Button>
        </Grid>
        </Grid>
        </form>
        </Box>
        </Grid>


        </div>
    )
}


const mapstatetoprops=(state)=>({
  user:state.user.user,

})
const mapDispatchToProps = (dispatch) => ({

//  startFetchingBook:  (url) => dispatch(startFetchingBook(url))
startUpdatingUser:(url)=>dispatch(startUpdatingUser(url))
});

export default connect(mapstatetoprops,mapDispatchToProps)(Profile)
