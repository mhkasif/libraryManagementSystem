

import { toastr } from 'react-redux-toastr';
import { SELECT_USER,LOGOUT_USER } from '../reducer/userReducer/userConstants';
import { Redirect } from 'react-router-dom';
import React from 'react';
export const startInsertingUser=(url)=>{
return(dispatch)=>{
    return fetch(`${url}`).then(resp=>resp.json()).then(({data})=>{
        console.log(data);
        if(data==='success'){
          return  toastr.success('Success','Account Created Successfuly')
        }else{
return toastr.error('Error',data)
        }
    }).catch(err=>toastr.error('oops','error occur due to lost in coonectivity'))

}
}
// export const insertBook=()=>({

// })

export const startFetchingUser=(url)=>{
    return (dispatch)=>{

        return fetch(`${url}`).then(resp=>resp.json()).then(({data})=>{
            console.log(data)
            if(data.length!==0)
            toastr.success('Success','Logged In successfuly')
            else
           return toastr.error('Error','Wrong Email OR Password')
            return dispatch(userFetch(data))
}).then(({user})=>{
    if(user)
    setTimeout(() => {
        window.location='/dash'

    }, 2000);
}).catch(err=>toastr.error('Oops',err))
    }
}
export const startFetchingAdmin=(url)=>{
    return (dispatch)=>{

        return fetch(`${url}`).then(resp=>resp.json()).then(({data})=>{
            console.log(data)
            return dispatch(userFetch(data[0]))
}).catch(err=>toastr.error('Oops',err))
    }
}

export const startLogoutUser=(url)=>{
    return (dispatch)=>{

        return fetch(`${url}`).then(resp=>resp.json()).then(({data})=>{
            console.log(data)
            toastr.success('Success','Logged Off successfuly')

            return dispatch(logoutUser(data))
}).catch(err=>toastr.error('Oops',err))
}
}
export const startUpdatingUser=(url)=>{
    return (dispatch)=>{

        return fetch(`${url}`).then(resp=>resp.json()).then(({data,resu})=>{
            console.log(resu,data)
            if(data==='success'){
                dispatch(startFetchingAdmin('http://localhost:3300/admin/fetchadmin'))
                return toastr.success('Success','User updated Successfuly')
              }else{
      return toastr.error('Error','Error in updating')
              }}).catch(err=>console.log(err))
    }
}
export const userFetch=  ( data)=>({
    type:SELECT_USER,
    user:data
})
export const logoutUser=(data)=>({
    type:LOGOUT_USER,
    user:data
})
