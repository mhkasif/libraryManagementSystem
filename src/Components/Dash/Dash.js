
   import React from 'react'
import Grid  from '@material-ui/core/Grid';
import  Group  from '@material-ui/icons/Group';
import useStyles from '../dashboard/dashboardcss';
import Paper  from '@material-ui/core/Paper';
import Chart from '../dashboard/Chart';
import Deposits from '../dashboard/Deposits';
import clsx from 'clsx';
import Orders from '../dashboard/Orders';
import LibraryBooks from '@material-ui/icons/LibraryBooks'
import {EuroSymbol} from '@material-ui/icons'
import { connect } from 'react-redux';
import { startFetchingIssue } from '../../redux/actions/issueAction';
import { startFetchingSum, startFetchingCountIssue, startFetchingFine } from '../../redux/actions/mathAction';
import { subMonths } from 'date-fns'
import { startFetchingStudent } from '../../redux/actions/studentAction';
import { startFetchingReturned } from '../../redux/actions/returnedAction';
import format  from 'date-fns/format';



   const Dash = ({match,startFetchingIssue,startFetchingFine,issue,countIssue,fine,startFetchingCountIssue,startFetchingSum,returned,sum,startFetchingReturned,startFetchingStudent,students}) => {
       const classes=useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  React.useEffect(()=>{
    startFetchingIssue("http://localhost:3300/issue/fetch?limit=5")
    startFetchingSum("http://localhost:3300/sum")
    startFetchingStudent("http://localhost:3300/students")
    startFetchingReturned("http://localhost:3300/returned/fetch")
    startFetchingCountIssue("http://localhost:3300/issue/count")
 startFetchingFine(`http://localhost:3300/fine?date='${(format( new Date(),"yyyy-MM-dd"))}'`)

  },[])

  // match.params.id=='thismonth'?startFetchingFine(`http://localhost:3300/fine?date='${(format( new Date(),"yyyy-MM-dd"))}'`):startFetchingFine(`http://localhost:3300/fine?date='${(format( subMonths(new Date(), 1),"yyyy-MM-dd"))}'`)

       return (
           <div>
          <Grid justify='space-between' className={classes.boxContainer} container lg={12}>
          <Grid item lg={3} xs={3} sm={3} container justify='flex-end' alignItems='center'  className={classes.Issue}>
          <Grid item  alignItems="flex-end" justify='flex-start' style={{color:'white',height:'100%',fontFamily:"Times New Roman, Times, serif",letterSpacing:'2px' ,paddingLeft:'10px'}} lg={8}>
{typeof issue =='object' &&<h2>{issue.length}</h2>}
          <h2>Issued books</h2>

          </Grid>
          <Grid lg={4} justify='flex-end'>
          <LibraryBooks className={classes.ColorFullBoxes} />
          </Grid>
          </Grid>

          <Grid item lg={3} xs={3} sm={3} container justify='flex-end' alignItems='center'  className={classes.User}>
          <Grid item   justify='center' style={{color:'white',height:'100%',fontFamily:"Times New Roman, Times, serif",letterSpacing:'2px' ,paddingLeft:'10px'}} lg={8}>

          {typeof students =='object' &&<h2>{students.length}</h2>}
          <h4>Manage Students</h4>

          </Grid>
          <Grid lg={4} justify='flex-end'>
          <Group className={classes.ColorFullBoxes} />
          </Grid>
          </Grid>
 <Grid item lg={3} xs={3} sm={3} container justify='flex-end' alignItems='center'  className={classes.Books}>
            <Grid item  alignItems="flex-end" justify='flex-start' style={{color:'white',height:'100%',fontFamily:"Times New Roman, Times, serif",letterSpacing:'2px' ,paddingLeft:'10px'}} lg={8}>
            {sum&& <h2>${sum.sum}</h2>}
            <h2>Total Fine</h2>

            </Grid>
            <Grid lg={4} justify='flex-end'>
            <EuroSymbol className={classes.ColorFullBoxes} />
            </Grid>
            </Grid>


          </Grid>
          <Grid container spacing={3}>


            {/* Chart */}

            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart
               fine= {typeof fine =='object' && fine }
                />
              </Paper>
            </Grid>


            {/* Recent Deposits */}

            <Grid  item xs={12} md={4} lg={3}>
            <Paper  className={classes.fixedHeight}>

            <Deposits
           returned={typeof returned =='object' && returned.length}
           countIssue={typeof countIssue =='object' && countIssue.countIssue}
            />

            </Paper>
            </Grid>

            {/* Recent Orders */}

              <Grid item xs={12}>
              <Paper className={classes.paper}>
           {issue&& <Orders issue={issue} />}
              </Paper>
            </Grid>
          </Grid>
          </div>
       )
   }

   const mapstatetoprops=(state)=>({
    books:state.books.books,
    user:state.user.user,
    issue:state.issue.issue,
    sum:state.sum.sum,
    students:state.students.students,
    returned:state.returned.returned,
    countIssue:state.countIssue.countIssue,
    fine:state.fine.fine

  })
  const mapDispatchToProps = (dispatch) => ({

    //  startFetchingBook:  (url) => dispatch(startFetchingBook(url))
    startFetchingSum:(url)=>dispatch(startFetchingSum(url)),
    startFetchingFine:(url)=>dispatch(startFetchingFine(url)),
    startFetchingIssue:(url)=>dispatch(startFetchingIssue(url)),
    startFetchingStudent:(url)=>dispatch(startFetchingStudent(url)),
    startFetchingReturned:(url)=>dispatch(startFetchingReturned(url)),
    startFetchingCountIssue:(url)=>dispatch(startFetchingCountIssue(url))
  });
  export default connect(mapstatetoprops,mapDispatchToProps)(Dash)

