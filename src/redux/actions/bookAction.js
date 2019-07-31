
import {SELECT_ALL_BOOK} from '../reducer/bookReducer/bookConstants'
import { toastr } from 'react-redux-toastr';
import { startFetchingIssue } from './issueAction';


//


export const startInsertingBookImage=(url)=>{
    return(dispatch)=>{
        return fetch(`${url}`).then(resp=>resp.json())
    //     .then(({data})=>{
    //         console.log(data);
    //         if(data==='success'){
    //           return  toastr.success('Success','BookImage added Successfuly')
    //         }else{
    // return toastr.error('Error','Error in submitting')
    //         }
    //     })
        .catch(err=>toastr.error('oops','error occur due to lost in coonectivity'))

    }
    }
export const startInsertingBook=(url,obj)=>{
return(dispatch)=>{
    return fetch(url,obj).then(resp=>resp.json()).then(({data})=>{
        console.log(data);
        if(data==='success'){
          return  toastr.success('Success','Book added Successfuly')
        }else{
return toastr.error('Error','Error in submitting')
        }
    }).catch(err=>toastr.error('oops','error occur due to lost in coonectivity'))

}
}
// export const insertBook=()=>({

// })

export const startFetchingBook=(url)=>{
    return (dispatch)=>{
console.log("called");
        return fetch(`${url}`).then(resp=>resp.json()).then(({data})=>{
            return dispatch(bookFetch(data))}).catch(err=>console.log(err))
    }
}
export const startDeletingBook=(url)=>{
    return (dispatch)=>{

        return fetch(`${url}`).then(resp=>resp.json()).then(({data,resu})=>{
            console.log(resu)
            if(data==='success'){
                toastr.success('Success','Book deleted Successfuly')
                return dispatch(startFetchingBook('http://localhost:3300/books'))
              }else{
      return toastr.error('Error','Error in deleting')
              }}).catch(err=>console.log(err))
    }
}
export const startDecrementQuantity=(url)=>{
    return (dispatch)=>{

        return fetch(`${url}`).then(resp=>resp.json()).then(({data,resu})=>{
            console.log(resu)
            if(data==='success'){
                toastr.success('Success','Book Issued  Successfuly')
                return dispatch(startFetchingBook('http://localhost:3300/books'))
              }else{
      return toastr.error('Error','Error in Issuing')
              }}).catch(err=>console.log(err))
    }
}
export const startIncreamentQuantity=(url)=>{
    return (dispatch)=>{

        return fetch(`${url}`).then(resp=>resp.json()).then(({data,resu})=>{
            console.log(data)
            if(data==='success'){
                toastr.success('Success','Book Returned Successfuly')

                return dispatch(startFetchingIssue('http://localhost:3300/issue/fetch?limit=8'))

              }else{
      return toastr.error('Error','Error in Returning')
              }}).catch(err=>console.log(err))
    }
}
export const startUpdatingBook=(url)=>{
    return (dispatch)=>{

        return fetch(`${url}`).then(resp=>resp.json()).then(({data,resu})=>{
            console.log(resu)
            if(data==='success'){
                console.log("why")
                return toastr.success('Success','Book updated Successfuly')
                // return dispatch(startFetchingBook('http://localhost:3300/books'))
              }else{
      return toastr.error('Error','Error in updating')
              }}).catch(err=>console.log(err))
    }
}
export const bookFetch=  ( data)=>({
    type:SELECT_ALL_BOOK,
    books:data


})
        // try{

        //     const url=await fetch("http://localhost:3300/obooks");
        //     const resp=await url.json();
        //     const data=await resp.data[0]
        //     console.log(data)

        // }catch(err){console.log(err)}
// fetch("http://localhost:3300/obooks").then(resp=>resp.json()).then(({data})=>{
//     return data[0]
// }).catch(err=>console.log(err)),
//     }
