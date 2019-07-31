
import { toastr } from "react-redux-toastr";
import {SELECT_ALL_STUDENT} from '../reducer/studentReducer/studentConstants'


export const startInsertingStudent = url => {
  return dispatch => {
    return fetch(`${url}`)
      .then(resp => resp.json())
      .then(({data})=>{
        console.log(data);
        if(data==='success'){
          return  toastr.success('Success','Student added Successfuly')
        }else{
return toastr.error('Error',data)
        }
    })
      .catch(err =>
        toastr.error("Opps", "Check your network connection to server")
      );
  };
};
// export const insertBook=()=>({

// })

export const startFetchingStudent = url => {
  return dispatch => {
    return fetch(`${url}`)
      .then(resp => resp.json())
      .then(({ data }) => dispatch(studentFetch(data)))
      .catch(err => console.log(err));
  };
};
export const startDeletingStudent=(url)=>{
  return (dispatch)=>{

      return fetch(`${url}`).then(resp=>resp.json()).then(({data,resu})=>{
          console.log(resu)
          if(data==='success'){
              toastr.success('Success','Student deleted Successfuly')
              return dispatch(startFetchingStudent('http://localhost:3300/students'))
            }else{
    return toastr.error('Error','Error in deleting')
            }}).catch(err=>console.log(err))
  }
}
export const startUpdatingStudent=(url)=>{
  return (dispatch)=>{

      return fetch(`${url}`).then(resp=>resp.json()).then(({data,resu})=>{
          console.log(resu)
          if(data==='success'){
               toastr.success('Success','Student updated Successfuly')
              return dispatch(startFetchingStudent('http://localhost:3300/students'))
            }else{
    return toastr.error('Error','Error in updating')
            }}).catch(err=>console.log(err))
  }
}
export const studentFetch = data => ({
  type:SELECT_ALL_STUDENT,
  students: data
});
