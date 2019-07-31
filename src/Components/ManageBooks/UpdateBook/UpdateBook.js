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
import { combineValidators,createValidator, isRequired, composeValidators, hasLengthGreaterThan } from 'revalidate';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Typography  from '@material-ui/core/Typography';
import useStyles from '../../dashboard/dashboardcss';
import { connect } from 'react-redux';
import { startFetchingBook, startInsertingBook, startUpdatingBook } from '../../../redux/actions/bookAction';
import axios from 'axios'
import ArrayToBase64 from '../../Common/ArrayToBase64';
import { Field, reduxForm } from 'redux-form'
import { renderTextField } from '../../Common/RenderTextField';
import { renderSelectField } from '../../Common/renderSelectField';


const UpdateBook = (props) => {
   const updatingBook=props.books&&props.books.filter(book => {

     return book.ISBN === props.match.params.id
    }
    )[0]
const classes=useStyles();
const [values, setValues] =React.useState({...updatingBook,imageFile:null});
React.useEffect(() => {
  props.books&&props.books.filter(book => {
    if(book.ISBN === props.match.params.id){
      props.initialize(book);
      console.log("clled")
    }
})}, [])

  const upload = async () => {
    const {ISBN,publisher,category,edition,title,price,quantity,author,imageFile}=values;
// console.table(values)
          const formData = new FormData();
           formData.append('ISBN', ISBN);
           formData.append('file', imageFile);
           try {
            if(values.imageFile){

    const res=await axios.post('http://localhost:3300/books/images',formData,{
      headers:{
        'Content-Type':'multipart/form-data ; boundary=----WebKitFormBoundaryqmm4uk4QgNEqCay1'
      }
    })
  }
    props.startUpdatingBook(`http://localhost:3300/books/update?&title=${title}&price=${price}&quantity=${quantity}&author=${author}&ISBN=${ISBN}&publisher=${publisher}&edition=${edition}&category=${category}`)

           } catch (err) {

    console.log('server problem',err);

    }
    }
    const handleSub=()=>{
      // e.preventDefault();
      console.log('submtted')
upload()

    }
    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
      console.log(name,event.target.value)

    };


    const handleImage=(name)=>(event)=>{
      console.log(event.target.files[0])
      setValues({...values,[name]:URL.createObjectURL(event.target.files[0]),imageFile:event.target.files[0]})

    }
    const handleSubmit= ()=>{
      console.log(values.image)
      // try{

handleSub()

        //  props.startFetchingBook("http://localhost:3300/books")
// props.startUpdatingBook(`http://localhost:3300/books/update?title=${title}&price=${price}&quantity=${quantity}&author=${author}&ISBN=${ISBN}&image=${image}&publisher=${publisher}&edition=${edition}&category=${category}`).then(()=>props.history.goBack())
        //  console.log(image)


      }
      // catch(err){
      //   console.log(err)

      // }



    // }

    return (
      <div>

      <Grid
      justify="space-between"
      container
      className={classes.ProfileMain}
      lg={12}
      >
      <Grid item className={classes.profilePicGrid} md={3} lg={3}>
      <Typography variant='h4' color='initial' gutterBottom >Update Book</Typography>
      <Card className={classes.card}>
      <CardActionArea>
      <CardMedia
      className={classes.profilePic}
      image={updatingBook&& values.image.type==='Buffer'? `data:image/jpeg;base64,${ArrayToBase64(values.image.data)}`:values.image}
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
      />
      </form>
      <label htmlFor="contained-button-file">
      <Button variant="contained" component="span" className={classes.button}>
      Upload
      </Button>
      </label>
      </Grid>
      </Grid>
      <Grid item className={classes.profileFieldsGrid} md={8} lg={8}>
      <Box boxShadow={2}>
      <form className={classes.container}>
      <Grid justify="space-around" container>
      <Grid lg={11}>
      {/*<TextField
      id="filled-title"
      label="Title"
      value={values.title}
      onChange={handleChange("title")}
      margin="normal"
      variant="filled"
      style={{ width: "100%" }}
      />*/}
      <Field
      name="title"
      component={renderTextField}
      id="filled-title"
      label="Title"
      value={values.title}
      onChange={handleChange("title")}
      margin="normal"
      variant="filled"
      style={{ width: "100%" }}

    />
      </Grid>
      <Grid lg={5}>
      <TextField
      id="filled-ISBN"
      label="ISBN"
      value={values.ISBN}
      margin="normal"
      variant="filled"
      style={{ width: "100%" }}
      disabled
      />
      </Grid>
      <Grid lg={5}>
      {/*<TextField
      id="filled-authorName"
      label="authorName"
      value={values.author}
      onChange={handleChange("author")}
      margin="normal"
      variant="filled"
      style={{ width: "100%" }}
      />*/}
      <Field
      name="author"
      id="filled-authorName"
      label="authorName"
      value={values.author}
      onChange={handleChange("author")}
      component={renderTextField}
      margin="normal"
      variant="filled"
      style={{ width: "100%" }}
    />
      </Grid>
      <Grid lg={5}>
     {/* <TextField
      id="filled-publisher"
      label="Publisher"
      value={values.publisher}
      onChange={handleChange("publisher")}
      margin="normal"
      variant="filled"
      style={{ width: "100%" }}
     />*/}
     <Field
     name="publisher"
     component={renderTextField}
     id="filled-publisher"
     label="Publisher"
     value={values.publisher}
     onChange={handleChange("publisher")}
     margin="normal"
     variant="filled"
     style={{ width: "100%" }}

   />
      </Grid>
      <Grid lg={5}>
 {/* <TextField
      id="filled-quantity"
      label="quantity"
      value={values.quantity}
      onChange={handleChange("quantity")}
      margin="normal"
      variant="filled"
      style={{ width: "100%" }}
      type='number'
     /> */}
     <Field
     name="quantity"
     id="filled-quantity"
      label="quantity"
      value={values.quantity}
      onChange={handleChange("quantity")}
      margin="normal"
      variant="filled"
      style={{ width: "100%" }}
      type='number'
      component={renderTextField}

     />
      </Grid>
      <Grid lg={5}>
 {/* <TextField
      id="filled-Price"
      label="Price"
      value={values.price}
      onChange={handleChange("price")}
      margin="normal"
      variant="filled"
      style={{ width: "100%" }}
     /> */}
     <Field
     name="price"
     id="filled-Price"
      label="Price"
      value={values.price}
      onChange={handleChange("price")}
      margin="normal"
      variant="filled"
      style={{ width: "100%" }}
    component={renderTextField}
   />
      </Grid>

      <Grid className={classes.studentSelect} lg={5}>
      {/* <FormControl variant="filled" style={{ width: "100%" }}>
      <InputLabel htmlFor="filled-category-native-simple">
      Category
      </InputLabel>
      <Select
      native
      value={values.category}
      onChange={handleChange("category")}
      input={
        <FilledInput
        name="Category"
        id="filled-courseName-native-simple"
        />
      }
    > */}
    <Field
    style={{ width: "100%" }}
    id="filled-courseName-native-simple"
          lab="Category"
          value={values.category}
          onChange={handleChange("category")}
          component={renderSelectField}
          name="category"
        >
        <option value="" />
        <option value={"Networking"}>Networking</option>
        <option value={"Graphics"}>Graphics</option>
                        <option value={"Programming"}>Programming</option>
                        <option value={"Web development"}>Web development</option>
                        <option value={"mobile development"}>mobile development</option>
                        <option value={"Database"}>Database</option>
                        <option value={"Mathematics"}>Mathematics</option>
{/* </Select>
</FormControl> */}
</Field>
      </Grid>

      <Grid className={classes.studentSelect} lg={11}>
      {/* <FormControl variant="filled" style={{ width: "100%" }}>
      <InputLabel htmlFor="filled-age-native-simple">
      Edition
      </InputLabel>
      <Select
      native
      value={values.edition}
      onChange={handleChange("edition")}
      input={
        <FilledInput
        name="edition"
        id="filled-edition-native-simple"
        />
      }
    > */}
    <Field
    style={{ width: "100%" }}
          lab="edition"
          value={values.edition}
          onChange={handleChange("category")}
          component={renderSelectField}
          name="edition"
          id="filled-edition-native-simple"

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
      <option value={"9th"}>9th</option>
      <option value={"10th"}>10th</option>
      <option value={"11th"}>11th</option>
      <option value={"12th"}>12th</option>
      <option value={"13th"}>13th</option>
      <option value={"14th"}>14th</option>
      <option value={"15th"}>15th</option>
      <option value={"16th"}>16th</option>
      <option value={"17th"}>17th</option>
      <option value={"18th"}>18th</option>
      <option value={"19th"}>19th</option>
      <option value={"20th"}>20th</option>
 </Field>
{/* </Select>
</FormControl> */}
      </Grid>
      <Grid
      className={classes.studentSelect}
      container
      justify="flex-end"
      lg={11}
      >
      <Button
      disabled={props.invalid||props.pristine || props.toastrs.length>0}
      onClick={handleSubmit}
      variant="contained"
      style={!props.invalid && !props.pristine&&props.toastrs.length===0&&props.dirty?{ background: "rgb(33,186,70)", color: "white" ,width:"20%" }:{ background: "grey", color: "white" ,width:"20%",cursor:'not-allowed' }}
      ><CloudUploadIcon style={{marginRight:10} } />
      Update
      </Button>
      </Grid>
      </Grid>
      </form>
      </Box>
      </Grid>
      </Grid>

      </div>
      );
    }
const mapstatetoprops=(state,props)=>({
    books:state.books.books,
  //   initialValues:state.books.books.filter(book => {

  //     return book.ISBN === props.match.params.id
  // }),
    toastrs:state.toastr.toastrs
  })
const mapDispatchToProps = (dispatch) => ({

  //  startFetchingBook:  (url) => dispatch(startFetchingBook(url))
  startUpdatingBook:(url)=>dispatch(startUpdatingBook(url))
});
const isGreaterThan = (n) => createValidator(
  message => value => {
    if (value && Number(value) <= n) {
      return message
    }
  },
  field => `${field} must be greater than ${n}`
)
const validate=combineValidators({
  title:composeValidators(isRequired({message: 'Please enter a description'}), hasLengthGreaterThan(3)({message: 'Title needs to be at least 5 characters'}))(),
  author:isRequired('Author Name'),
publisher:isRequired('Publisher'),
category:isRequired('Category'),
edition:isRequired('Edition'),
price:isRequired('Price'),
quantity:composeValidators(isRequired({message: 'Please enter Quantity'}), isGreaterThan(0)({message: 'Quantity must be greater than 0'}))(),


})


export default connect(mapstatetoprops,mapDispatchToProps)(reduxForm({form:'updateBook', enableReinitialize:true,keepDirtyOnReinitialize : true,validate})(UpdateBook))
