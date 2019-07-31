
import { SELECT_ISSUE_BOOKS } from '../reducer/issueReducer.js/issueConstants';
import { toastr } from 'react-redux-toastr';
import { startDecrementQuantity, startFetchingBook } from './bookAction';
import { startInsertingReturned } from './returnedAction';


export const startInsertingIssue=(url,isbn)=>{
    return(dispatch)=>{
        return fetch(`${url}`).then(resp=>resp.json()).then(({data})=>{
            console.log(data);
            if(data==='success'){
              return  dispatch(startDecrementQuantity(`http://localhost:3300/books/quantity?ISBN=${isbn}`))
            }else{
    return toastr.error('Error','Error in issuing')
            }
        }).catch(err=>toastr.error('oops','error occur due to lost in coonectivity'))

    }
    }
export const startFetchingIssue=(url)=>{
    return (dispatch)=>{
        return fetch(`${url}`).then(resp=>resp.json()).then(({data})=>{
            return dispatch(issueFetch(data[0]))}).catch(err=>console.log(err))
    }
}
export const startDeletingIssue=(url,enrollmentnumber,ISBN,fine,issuedate)=>{
    return (dispatch)=>{

        return fetch(`${url}`).then(resp=>resp.json()).then(({data,resu})=>{
            console.log(data)
            if(data==='success'){
               return dispatch(startInsertingReturned(`http://localhost:3300/returned/add?enrollmentnumber=${enrollmentnumber}&ISBN=${ISBN}&fine=${fine}&issuedate=${issuedate}`,ISBN))
                // return dispatch(startFetchingIssue('http://localhost:3300/issue/fetch'))
              }else{
      return toastr.error('Error','Error in deleting')
              }}).catch(err=>console.log(err))
    }
}

export const issueFetch=  ( data)=>({
    type:SELECT_ISSUE_BOOKS,
    issue:data


})