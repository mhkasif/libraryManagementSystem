
import { FETCH_ISSUE_COUNT } from '../sumReducer/sumConstant';


const initialState={}
const fetchIssueCountReducer= (state=initialState,action)=>{
switch (action.type) {
    case FETCH_ISSUE_COUNT:
const data=action.countIssue
console.log(data)
        return{
    ...state,
    countIssue:data

    // books:action.books.then(rsp=>rsp)
}




    default:
        return state
}
}
export default fetchIssueCountReducer