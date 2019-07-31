import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  TextField,
  Select,
  option,
  InputLabel,
  FormControl,
  FilledInput,
  Button,
  Box,
} from "@material-ui/core";

import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import useStyles from "../../dashboard/dashboardcss";
import Typography  from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { startInsertingStudent } from '../../../redux/actions/studentAction';
import 'date-fns';
import format from 'date-fns/format'


import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  DatePicker,
} from '@material-ui/pickers';
import axios from 'axios'

const AddStudent = (props) => {

  const [selectedDate, handleDateChange] = React.useState(new Date())
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    enrollmentNumber:'',
    contact: "",
    address: "",
    semester: "",
    course: "",
    image:'' || '/assets/user.png',
    imageFile:null

  });
  const classes = useStyles();
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });

  };
  const upload = async () => {
    const {firstName,lastName,email,enrollmentNumber,image,contact,address,semester,course,imageFile}=values;


          const formData = new FormData();
           formData.append('enrollmentNumber', enrollmentNumber);
           formData.append('file',
           imageFile);
           try {
    const res=await axios.post('http://localhost:3300/books/images',formData,{
      headers:{
        'Content-Type':'multipart/form-data ; boundary=----WebKitFormBoundaryqmm4uk4QgNEqCay1'
      }
    })
    // const {fileName,filePath}=res.data
    // setUploadedFile({fileName,filePath})
    props.startInsertingStudent(`http://localhost:3300/students/add?firstname=${firstName}&lastname=${lastName}&email=${email}&enrollmentnumber=${enrollmentNumber}&contact=${contact}&DOB=${format( selectedDate,"dd/MMM/yyyy")}&address=${address}&semester=${semester}&course=${course}&image=${image}`)


           } catch (err) {
    console.log(err)
    }
        };
  const handleImage=(name)=>(event)=>{
      setValues({...values,[name]:URL.createObjectURL(event.target.files[0]),imageFile:event.target.files[0]})


  }
  const handleSub=()=>{
    // e.preventDefault();
    console.log('submtted')
upload()

  }
  const handleSubmit= ()=>{

    // try{
      // const {firstName,lastName,email,enrollmentNumber,contact,address,semester,course,image}=values;
      //  props.startFetchingBook("http://localhost:3300/books")
      // props.startInsertingStudent(`http://localhost:3300/students/add?firstname=${firstName}&lastname=${lastName}&email=${email}&enrollmentnumber=${enrollmentNumber}&contact=${contact}&DOB=${format( selectedDate,"dd/MMM/yyyy")}&address=${address}&semester=${semester}&course=${course}&image=${image}`)
      handleSub()



    }

  return (
    <div>
      <Grid
        justify="space-between"
        container
        className={classes.ProfileMain}
        lg={12}
      >
      <Grid item className={classes.profilePicGrid} md={3} lg={3}>
<Typography variant='h4' color='initial' gutterBottom >Add Student</Typography>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.profilePic}
                image={values.image}
                title="Contemplative Reptile"
              />
            </CardActionArea>
          </Card>
          <Grid style={{margin:'20px'}}>
          <form onSubmit={handleSub}>

          <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          style={{display:'none'}}
          onChange={handleImage("image")}
          name='image'
        />
        </form>
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span" className={classes.button}>
            Choose
          </Button>
        </label>
        </Grid>
        </Grid>
        <Grid item className={classes.profileFieldsGrid} md={8} lg={8}>
          <Box boxShadow={2}>
            <form className={classes.container}>
              <Grid justify="space-around" container>
                <Grid lg={5}>
                  <TextField
                    id="filled-Firstname"
                    label="First Name"
                    value={values.name}
                    onChange={handleChange("firstName")}
                    margin="normal"
                    variant="filled"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid lg={5}>
                  <TextField
                    id="filled-Lastname"
                    label="Last Name"
                    value={values.name}
                    onChange={handleChange("lastName")}
                    margin="normal"
                    variant="filled"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid lg={5}>
                  <TextField
                    id="filled-email"
                    label="Email Address"
                    value={values.email}
                    onChange={handleChange("email")}
                    margin="normal"
                    variant="filled"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid lg={5}>
                  <TextField
                    id="filled-contact"
                    label="Contact No"
                    value={values.contact}
                    onChange={handleChange("contact")}
                    margin="normal"
                    variant="filled"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid lg={5}>
                  <TextField
                    id="filled-enrNum"
                    label="Enrollment Number"
                    value={values.enrollmentNumber}
                    onChange={handleChange("enrollmentNumber")}
                    margin="normal"
                    variant="filled"
                    style={{ width: "100%" }}
                  />
                </Grid>

                <Grid className={classes.studentSelect} lg={5}>
                  <FormControl variant="filled" style={{ width: "100%" }}>
                    <InputLabel htmlFor="filled-age-native-simple">
                      Course
                    </InputLabel>
                    <Select
                      native
                      value={values.course}
                      onChange={handleChange("course")}
                      input={
                        <FilledInput
                          name="Course Name"
                          id="filled-courseName-native-simple"
                        />
                      }
                    >
                      <option value="" />
                      <option value={"bscs"}>BSCS</option>
                      <option value={"bsse"}>BSSE</option>
                      <option value={"mcs"}>MCS</option>
                      <option value={"phd"}>Ph.D</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid className={classes.studentSelect} lg={5}>
                <FormControl variant="filled" style={{ width: "100%" }}>
                  <InputLabel htmlFor="filled-age-native-simple">
                    Semester
                  </InputLabel>
                  <Select
                    native
                    value={values.semester}
                    onChange={handleChange("semester")}
                    input={
                      <FilledInput
                        name="semester"
                        id="filled-semester-native-simple"
                      />
                    }
                  >
                    <option value="" />
                    <option value={"1st"}>1st</option>
                    <option value={"2nd"}>2nd</option>
                    <option value={"3rd"}>3rd</option>
                    <option value={"4th"}>4th</option>
                    <option value={"5th"}>5th</option>
                    <option value={"6th"}>6th</option>
                    <option value={"7th"}>7th</option>
                    <option value={"8th"}>8th</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid lg={5}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container style={{grid:'60%'}} justify="space-around">
              <DatePicker
              disableFuture
              openTo="year"
              format="dd/MM/yyyy"
              label="Date of birth"
              views={["year", "month", "date"]}
              value={selectedDate}
              onChange={handleDateChange}
              variant="filled"
              margin='normal'
            />
            </Grid>
            </MuiPickersUtilsProvider>
            </Grid>


                <Grid lg={11}>
                  <TextField
                    id="filled-address"
                    label="Address"
                    value={values.address}
                    onChange={handleChange("address")}
                    margin="normal"
                    variant="filled"
                    style={{ width: "100%" }}
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
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};



const mapDispatchToProps = (dispatch) => ({

  //  startFetchingBook:  (url) => dispatch(startFetchingBook(url))
  // startInsertingBook:(url)=>dispatch(startInsertingBook(url))
  startInsertingStudent:(url)=>dispatch(startInsertingStudent(url))
});

export default connect(null,mapDispatchToProps)( AddStudent)

