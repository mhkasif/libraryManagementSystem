import React from 'react'
import { startFetchingReturned } from '../../redux/actions/returnedAction';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import MaterialTable from 'material-table';


const ReturnedBooks = (props) => {
    React.useEffect(()=>{
        props.startFetchingReturned("http://localhost:3300/returned/fetch")
      },[])

      return (
      <Paper elevation={24} style={{width:900,marginTop:20}}>

        <MaterialTable
          title="Returned Books"
          columns={[
            { title: 'Enrollment #', field: 'enrollmentnumber' },
            { title: 'Student Name', field: 'studentname' },
            { title: 'ISBN', field: 'ISBN'},
            {
              title: 'Book Title',
              field: 'title',
            },
            { title: 'Issued Date', field: 'issuedate'},
            { title: 'Returned Date', field: 'returneddate'},
            { title: 'Fine Collected', field: 'fine'},

          ]}
          data={props.returned}
          options={{
            exportButton: true,

          }}

        />
      </Paper>

      )
}

const mapstatetoprops=(state)=>({
    returned:state.returned.returned


})
const mapDispatchToProps = (dispatch) => ({
    startFetchingReturned:(url)=>dispatch(startFetchingReturned(url))
  });
export default connect(mapstatetoprops,mapDispatchToProps)
(ReturnedBooks)




