
import { FETCH_SUM,FETCH_ISSUE_COUNT, FETCH_FINE } from '../reducer/sumReducer/sumConstant';


export const startFetchingSum=(url)=>{
    return (dispatch)=>{
        return fetch(`${url}`).then(resp=>resp.json()).then(({data})=>{
            console.log(data);
            return dispatch(sumFetch(data[0]))}).catch(err=>console.log(err))
    }
}
export const startFetchingCountIssue=(url)=>{
    return (dispatch)=>{
        return fetch(`${url}`).then(resp=>resp.json()).then(({data})=>{
            console.log(data);
            return dispatch(IssueCountFetch(data[0]))}).catch(err=>console.log(err))
    }
}
export const startFetchingFine=(url)=>{
    return (dispatch)=>{
        return fetch(`${url}`).then(resp=>resp.json()).then(({data})=>{
            console.log(data);
            return dispatch(fineFetch(data[0]))}).catch(err=>console.log(err))
    }
}
export const sumFetch=  ( data)=>({
    type:FETCH_SUM,
    sum:data
})
export const fineFetch=  ( data)=>({
    type:FETCH_FINE,
    fine:data
})
export const IssueCountFetch=  ( data)=>({
    type:FETCH_ISSUE_COUNT,
    countIssue:data


})