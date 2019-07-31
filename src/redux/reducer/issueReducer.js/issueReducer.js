
import { SELECT_ISSUE_BOOKS } from './issueConstants';


const initialState={}
const issueReducer= (state=initialState,action)=>{
switch (action.type) {
    case SELECT_ISSUE_BOOKS:
const data=action.issue
console.log(data)
        return{
    ...state,
    issue:data

    // books:action.books.then(rsp=>rsp)
}
    default:
        return state
}
}
export default issueReducer