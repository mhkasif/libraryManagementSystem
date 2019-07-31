

import { toastr } from 'react-redux-toastr';
import { startIncreamentQuantity } from './bookAction';
import { SELECT_RETURNED_BOOKS } from '../reducer/returnedReducer/returnedConstants';


export const startInsertingReturned=(url,ISBN)=>{
    return(dispatch)=>{
        return fetch(`${url}`).then(resp=>resp.json()).then(({data})=>{
            console.log(data)
            if(data==='success'){
              return  dispatch(startIncreamentQuantity(`http://localhost:3300/books/quantity/increament?ISBN=${ISBN}`))
            }else{
    return toastr.error('Error','Error in issuing')
            }
        }).catch(err=>toastr.error('oops','error occur due to lost in conectivity'))

    }
    }
export const startFetchingReturned=(url)=>{
    return (dispatch)=>{
        return fetch(`${url}`).then(resp=>resp.json()).then(({data})=>{
            return dispatch(returnedFetch(data[0]))}).catch(err=>console.log(err))
    }
}

export const returnedFetch=  ( data)=>({
    type:SELECT_RETURNED_BOOKS,
    returned:data


})