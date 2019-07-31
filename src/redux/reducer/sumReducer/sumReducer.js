
import { FETCH_SUM,FETCH_ISSUE_COUNT, FETCH_FINE } from './sumConstant';


const initialState={}
const sumReducer= (state=initialState,action)=>{
switch (action.type) {
    case FETCH_SUM:
const data=action.sum
        return{
    ...state,
    sum:data
    // books:action.books.then(rsp=>rsp)
}



    default:
        return state
}
}
export default sumReducer