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
  InputAdornment,
} from "@material-ui/core";

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Typography  from '@material-ui/core/Typography';
import useStyles from '../../dashboard/dashboardcss';
import { connect } from 'react-redux';
import { startFetchingBook, startInsertingBook, startInsertingBookImage } from '../../../redux/actions/bookAction';

import axios from 'axios'

const AddBook = (props) => {
    const classes=useStyles();
    const [values, setValues] = React.useState({
      ISBN: "",
      authorName: "",
      title: "",
      publisher: "",
      price: "",
      quantity: 0,
      category: "",
      edition:'',
      image:'' || '/assets/book.png',
      imageFile:null
    });

    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });

    };

    const upload = async () => {
const {ISBN,publisher,category,edition,image,title,price,quantity,authorName,imageFile}=values;

      const formData = new FormData();
       formData.append('ISBN', ISBN);
       formData.append('file', imageFile);
       try {
const res=await axios.post('http://localhost:3300/books/images',formData,{
  headers:{
    'Content-Type':'multipart/form-data ; boundary=----WebKitFormBoundaryqmm4uk4QgNEqCay1'
  }
})
// const {fileName,filePath}=res.data
// setUploadedFile({fileName,filePath})
props.startInsertingBook(`http://localhost:3300/books/add?title=${title}&price=${price}&quantity=${quantity}&author=${authorName}&ISBN=${ISBN}&image=${image}&publisher=${publisher}&edition=${edition}&category=${category}`)

       } catch (err) {
// if(err.response.status===500)
console.log('server problem',err);

}

    //   var request = { // Your POST endpoint
    //   method: 'POST',
    //   headers: {

    //     // 'Access-Control-Allow-Origin': '*',

    //     'Content-Type': 'multipart/form-data ; boundary=----WebKitFormBoundaryqmm4uk4QgNEqCay1'

    //   },
    //   mode: 'cors',
    //   body: formData // This is your file object
    // };

    //   fetch('http://localhost:3300/books/images',request).then(
    //     // response => response.json() // if the response is a JSON object
    //   ).then(
    //     success => console.log(success) // Handle the success response object
    //   ).catch(
    //     error => console.log(error) // Handle the error response object
    //   );
    };
    const  handleImage= (name)=> (event)=>{
      console.log(event.target.files[0])
       setValues({...values,[name]:URL.createObjectURL(event.target.files[0]),imageFile:event.target.files[0]})
    }
    const handleSub=()=>{
      // e.preventDefault();
      console.log('submtted')
upload()

    }
    const handleSubmit=  (e)=>{
      console.log(values.image)
      // e.preventDefault();
      // try{

// const {ISBN,publisher,category,edition,image,title,price,quantity,authorName,}=values;


 handleSub()
//  props.startInsertingBook(`http://localhost:3300/books/add?title=${title}&price=${price}&quantity=${quantity}&author=${authorName}&ISBN=${ISBN}&image=${image}&publisher=${publisher}&edition=${edition}&category=${category}`)


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
  <Typography variant='h4' color='initial' gutterBottom >Add Book</Typography>
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
            <Button  variant="contained" component="span" className={classes.button}>
              Upload
            </Button>
          </label>
          </Grid>
          </Grid>
          <Grid item className={classes.profileFieldsGrid} md={8} lg={8}>
            <Box boxShadow={2}>
              {/*<form className={classes.container}>*/}
              <form className={classes.container}>

                <Grid justify="space-around" container>
                <Grid lg={11}>
                <TextField
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
                      onChange={handleChange("ISBN")}
                      margin="normal"
                      variant="filled"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid lg={5}>
                    <TextField
                      id="filled-authorName"
                      label="authorName"
                      value={values.authorName}
                      onChange={handleChange("authorName")}
                      margin="normal"
                      variant="filled"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid lg={5}>
                    <TextField
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
                    <TextField
                      id="filled-quantity"
                      label="quantity"
                      value={values.quantity}
                      onChange={handleChange("quantity")}
                      margin="normal"
                      variant="filled"
                      style={{ width: "100%" }}
                      type='number'
                    />
                  </Grid>
                  <Grid lg={5}>
                    <TextField
                      id="filled-Price"
                      label="Price"
                      value={values.price}
                      onChange={handleChange("price")}
                      margin="normal"
                      variant="filled"
                      style={{ width: "100%" }}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                      }}
                    />
                  </Grid>

                  <Grid className={classes.studentSelect} lg={5}>
                    <FormControl variant="filled" style={{ width: "100%" }}>
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
                      >
                        <option value="" />
                        <option value={"Networking"}>Networking</option>
                        <option value={"Graphics"}>Graphics</option>
                        <option value={"Programming"}>Programming</option>
                        <option value={"Web development"}>Web development</option>
                        <option value={"mobile development"}>mobile development</option>
                        <option value={"Database"}>Database</option>
                        <option value={"Mathematics"}>Mathematics</option>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid className={classes.studentSelect} lg={11}>
                    <FormControl variant="filled" style={{ width: "100%" }}>
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
                      </Select>
                    </FormControl>
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
}

const mapDispatchToProps = (dispatch) => ({

  //  startFetchingBook:  (url) => dispatch(startFetchingBook(url))
  startInsertingBook:(url)=>dispatch(startInsertingBook(url)),
  startInsertingBookImage:(url,obj)=>dispatch(startInsertingBookImage(url,obj)),
});

export default connect(null,mapDispatchToProps)( AddBook)
