import React from 'react'
import { Grid,GridList, Card,CardActionArea,CardMedia,Typography,CardContent,CardActions,Button, Box} from '@material-ui/core';
import useStyles from '../../dashboard/dashboardcss';
import { connect } from 'react-redux';
import { startFetchingBook,startDeletingBook } from '../../../redux/actions/bookAction';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { startInsertingIssue } from '../../../redux/actions/issueAction';
import { NavLink } from 'react-router-dom';
import SearchField from './SeachField';
import ArrayToBase64 from '../../Common/ArrayToBase64';






const ViewBooks = (props) => {
  const [open, setOpen] = React.useState(false);
  const [studentId,setId]=React.useState({enrollment:''})
  const [tempISBN,setISBN]=React.useState({ISBN:''})
  const [searchValue,setSearchValue]=React.useState({searchValue:''})
  const classes=useStyles();
  const handleClickOpen=(bookisbn)=>() =>{
    setOpen(true);
    setISBN({ISBN:bookisbn})

  }
  const handleChangeSearch= (e)=>{
     setSearchValue({searchValue:e.target.value})
    //  console.log(searchValue.searchValue);
     console.log(e.target.value);
     props.startFetchingBook(`http://localhost:3300/books/search?ISBN=${e.target.value}`)
  }
  function handleClose() {
    setOpen(false);
  }
  const handleChange =event => {
    setId({...studentId,enrollment:event.target.value });

  };

React.useEffect(()=>{
  props.startFetchingBook("http://localhost:3300/books");


},[])
// const imageURL=props.books.books[0].image
const {books,user}=props;
const drawerWidth = 240;

const handleDeleteBook=(isbn)=>()=>{
  console.log(isbn);
props.startDeletingBook(`http://localhost:3300/books/delete?ISBN=${isbn}`);
}
const handleIssueBook=(isbn)=>()=>{

  props.startInsertingIssue(`http://localhost:3300/issue/add?enrollmentnumber=${studentId.enrollment}&ISBN=${isbn}&issuedBy=${user.email}`,isbn)
  handleClose()

}


    return (
      <div>
      <div>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Issue Book</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter student Enrollment Number to issue this book

          </DialogContentText>

          <DialogContentText style={{color:'red',fontSize:14}}>
            Student has to submit book within 10 days*.
            Otherwise fine will be apply

          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="studentId"
            label="Student-ID"
            fullWidth
            onChange={handleChange}
            value={studentId.enrollment}

          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleIssueBook(tempISBN.ISBN)} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>

    <Grid  justify='center' className={classes.Paper} style={{marginBottom:20}}>
    <Grid justify='center' lg={12} >
    <SearchField handleChangeSearch={handleChangeSearch} searchValue={searchValue.searchValue} />
    </Grid>

    </Grid>
      {books&&books.length<1?<h1>no books found</h1>:
          <GridList container lg={12} style={{background: "linear-gradient(to left, #8e9eab, #eef2f3)"}} className={classes.ProfileMain} >

          <Grid style={{width:'100%'}}  container justify='space-around' >
          {books&&books.map((book)=><Grid style={{margin:10}} key={book.ISBN} item xs={12} md={5} lg={5}  >

          <Card  className={classes.card}>
          <CardActionArea>
            <CardMedia
            to={`/update-book/${book.ISBN}`}
            className={classes.media}
              component={NavLink}
              alt="Contemplative Reptile"
              height="100"
              image= { `data:image/jpeg;base64,${ArrayToBase64(book.image.data)}`}

              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography noWrap gutterBottom variant="h5" component="h2">
               {book.title}
              </Typography>
              <Typography noWrap variant="h6" color="textSecondary" component="h3">
                Written By : {book.author}
              </Typography>
              <Typography variant="h5" color="textSecondary" component="h3">
                Quantity : {book.quantity}
              </Typography>
              <Typography variant="h5" color="textSecondary" component="h3">
                ISBN : {book.ISBN}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>


            <Button  onClick={handleClickOpen(book.ISBN)} variant='contained' size="small" color="primary">
              Issue
            </Button>



            <Button component={NavLink} to={`/update-book/${book.ISBN}`}  variant='contained' size="small" color="primary">
              View
            </Button>

            <Grid container justify='flex-end'>
            <Button onClick={handleDeleteBook(book.ISBN)} variant="contained" color="secondary" >
            Delete
            <DeleteIcon />
            </Button>
            </Grid>

          </CardActions>
        </Card>
        </Grid>)}

        </Grid>
          </GridList>
      }
      </div>

    )
}
const mapstatetoprops=(state)=>({
  books:state.books.books,
  user:state.user.user

})
const mapDispatchToProps = (dispatch) => ({

  //  startFetchingBook:  (url) => dispatch(startFetchingBook(url))
  startFetchingBook:(url)=>dispatch(startFetchingBook(url)),
  startDeletingBook:(url)=>dispatch(startDeletingBook(url)),
  startInsertingIssue:(url,isbn)=>dispatch(startInsertingIssue(url,isbn))
});
export default connect(mapstatetoprops,mapDispatchToProps)(ViewBooks)
