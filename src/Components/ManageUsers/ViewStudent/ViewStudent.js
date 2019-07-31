import React from 'react'
import {Paper} from '@material-ui/core';

import { startFetchingStudent, startDeletingStudent, startUpdatingStudent } from '../../../redux/actions/studentAction';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import ArrayToBase64 from '../../Common/ArrayToBase64';
import axios from 'axios'
import { toastr } from 'react-redux-toastr';
const ViewStudents = (props) => {
  React.useEffect(()=>{
    props.startFetchingStudent("http://localhost:3300/students");
    console.log("viewing",props);

  },[])

  const [values, setValues] = React.useState({imageUrl:'',imageFile:null})

    const formData = new FormData();

  const handleChangeImage=(event)=>{


    console.log("changed")

      setValues({...values,imageUrl:URL.createObjectURL(event.target.files[0]),imageFile:event.target.files[0]})

    }

    const [state, setState] = React.useState({
      columns: [
        {
          field: 'image',
          title: 'Image',
          editComponent: props => (
            <input
              type="file"
              value={props.values}
              onChange={handleChangeImage}
            />
          ),
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          render: rowData => <form><img style={{width: 50, borderRadius: '50%'}} src={values.imageUrl===''? `data:image/jpeg;base64,${ArrayToBase64(rowData.image.data)}`:values.imageUrl} alt='image'/></form>
        },
        { title: 'Enrollment#', field: 'enrollmentnumber',editable: 'never'
      },
        { title: 'FirstName', field: 'firstname' },
        { title: 'LastName', field: 'lastname' },
        { title: 'Email', field: 'email' },
        { title: 'Contact #', field: 'contact', },
        { title: 'Date Of Birth', field: 'DOB' },
        { title: 'Address', field: 'address' },
        {title: 'Semester', field: 'semester',},
        {title: 'Course', field: 'course',},
      ],
      data:props.students,

    });
    return (
      <Paper elevation={24} style={{width:900,marginTop:20}}>
      <MaterialTable
      isLoading={props.students?false:true}
      // options={{ paging: false }}
        title="Students"
        columns={state.columns}
        data={props.students}
        options={{
          headerStyle: {
            backgroundColor: '#01579b',
            color: '#FFF'
          },
          exportButton: true,
          addButton:false,
          exportFileName:'Students'
        }}
        editable={{
          // onRowAdd: newData =>
          //   new Promise(resolve => {
          //     setTimeout(() => {
          //       resolve();
          //       const data = [...state.data];
          //       data.push(newData);
          //       setState({ ...state, data });
          //     }, 600);
          //   }),
          onRowUpdate:async (newData, oldData) =>{
            const {enrollmentnumber,firstname,lastname,image,DOB,email,contact,address,semester,course}=oldData;
            const old={enrollmentnumber,firstname,lastname,email,image,DOB,contact,address,semester,course}
            console.table(newData)
            console.table(oldData)
            console.table(old)
            console.log(JSON.stringify(newData) !== JSON.stringify(old) );
            if( JSON.stringify(newData) !== JSON.stringify(old) ){



          formData.append('enrollmentnumber', newData.enrollmentnumber);
          formData.append('file', values.imageFile);
          try {
            if(values.imageFile){

              const res=await axios.post('http://localhost:3300/books/images',formData,{
                headers:{
                  'Content-Type':'multipart/form-data ; boundary=----WebKitFormBoundaryqmm4uk4QgNEqCay1'
                }
              })
            }
    props.startUpdatingStudent(`http://localhost:3300/students/update?email=${newData.email}&image=${newData.image}&enrollmentnumber=${newData.enrollmentnumber}&firstname=${newData.firstname}&lastname=${newData.lastname}&semester=${newData.semester}&course=${newData.course}&DOB=${newData.DOB}&address=${newData.address}&contact=${newData.contact}`)


          } catch (err) {

   console.log('server problem',err);

   }

   }
   else{
     toastr.warning("Info","NO changes found")
  }

  },
            //  setUpdate({...updatedValues,newData})

            // return props.startUpdatingStudent(`http://localhost:3300/students/update?email=${newData.email}&image=${newData.image}&enrollmentnumber=${newData.enrollmentnumber}&firstname=${newData.firstname}&lastname=${newData.lastname}&semester=${newData.semester}&course=${newData.course}&DOB=${newData.DOB}&address=${newData.address}&contact=${newData.contact}`)

            // }),
          onRowDelete: oldData =>{

            return props.startDeletingStudent(`http://localhost:3300/students/delete?enrollmentnumber=${oldData.enrollmentnumber}`)
          }
        }}
      />
      </Paper>
    );
}
const mapstatetoprops=(state)=>({
  students:state.students.students

})
const mapDispatchToProps = (dispatch) => ({

  //  startFetchingBook:  (url) => dispatch(startFetchingBook(url))
  startFetchingStudent:(url)=>dispatch(startFetchingStudent(url)),
  startUpdatingStudent:(url)=>dispatch(startUpdatingStudent(url)),
  startDeletingStudent:(url)=>dispatch(startDeletingStudent(url))
});
export default
 connect(mapstatetoprops,mapDispatchToProps)
(ViewStudents)

