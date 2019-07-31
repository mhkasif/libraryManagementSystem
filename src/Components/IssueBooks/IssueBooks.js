import React from 'react'
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import { startFetchingIssue, startDeletingIssue } from '../../redux/actions/issueAction';
import Paper  from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { KeyboardReturn } from '@material-ui/icons';
import format from 'date-fns/format';
import { differenceInDays, toDate, parseISO } from 'date-fns'
const IssueBooks = (props) => {

    React.useEffect(()=>{
        props.startFetchingIssue("http://localhost:3300/issue/fetch?limit=8")


      },[])

    const [state, setState] = React.useState({
      columns: [
        { title: 'Enrollment#', field: 'enrollmentnumber',editable: 'never'
      },
        { title: 'Student Name', field: 'studentname' },
        { title: 'ISBN', field: 'ISBN' },
        {title:'Book Title',field:'title'},
        { title: 'Issue Date', field: 'issuedate' },
        { title: 'Return Date', field: 'returndate' },
        { title: 'Issued By', field: 'issuedby', }
      ],
      data:props.issue,

    });
    return (
      <Paper elevation={24} style={{width:900,marginTop:20}}>
      <MaterialTable
      isLoading={props.issue?false:true}
      // options={{ paging: false }}
        title="Issued Books"
        columns={state.columns}
        data={props.issue}
        options={{
          headerStyle: {
            backgroundColor: '#01579b',
            color: '#FFF'
          },
          exportButton: true,
          addButton:false,
          exportFileName:'Students'
        }}
        icons={{
            Delete: props => (<KeyboardReturn {...props} className="icon-small" />),
            }}
            localization={{
                body: {

                deleteTooltip:"Return",
                editRow: {
                    deleteText: "Are you sure you want to Return this book?"
                }
                }
                }}
        editable={{
          onRowDelete: oldData =>{
              console.log(oldData)
              const returndate=oldData.returndate
              const returneddate=(format( new Date(),"yyyy-MM-dd"))
             const did= differenceInDays(parseISO(returneddate),parseISO(returndate));
             console.log(did,'did')
             console.log(returndate,'returndate')
             console.log(returneddate,'returneddate')
              switch (true) {
                case did<10 && did>=0:
              return props.startDeletingIssue(`http://localhost:3300/issue/delete?enrollmentnumber=${oldData.enrollmentnumber}&ISBN=${oldData.ISBN}`,oldData.enrollmentnumber,oldData.ISBN,'0',oldData.issuedate)
              case did<20 && did>=10:
              return props.startDeletingIssue(`http://localhost:3300/issue/delete?enrollmentnumber=${oldData.enrollmentnumber}&ISBN=${oldData.ISBN}`,oldData.enrollmentnumber,oldData.ISBN,'500',oldData.issuedate)
              case did<30 && did>=20:
                  return props.startDeletingIssue(`http://localhost:3300/issue/delete?enrollmentnumber=${oldData.enrollmentnumber}&ISBN=${oldData.ISBN}`,oldData.enrollmentnumber,oldData.ISBN,'1000',oldData.issuedate)
                case did>=30:
                return props.startDeletingIssue(`http://localhost:3300/issue/delete?enrollmentnumber=${oldData.enrollmentnumber}&ISBN=${oldData.ISBN}`,oldData.enrollmentnumber,oldData.ISBN,'1500',oldData.issuedate)

              default:
                  return props.startDeletingIssue(`http://localhost:3300/issue/delete?enrollmentnumber=${oldData.enrollmentnumber}&ISBN=${oldData.ISBN}`,oldData.enrollmentnumber,oldData.ISBN,'0',oldData.issuedate)

              }
          }
        }}
      />
      </Paper>
    );
}
const mapstatetoprops=(state)=>({
    issue:state.issue.issue


})
const mapDispatchToProps = (dispatch) => ({

    //  startFetchingBook:  (url) => dispatch(startFetchingBook(url))

    startFetchingIssue:(url)=>dispatch(startFetchingIssue(url)),
    startDeletingIssue:(url,enrollmentnumber,ISBN,fine,issuedate)=>dispatch(startDeletingIssue(url,enrollmentnumber,ISBN,fine,issuedate))
  });

export default connect(mapstatetoprops,mapDispatchToProps)(IssueBooks)


