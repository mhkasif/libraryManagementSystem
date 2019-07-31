
import { FETCH_FINE } from '../sumReducer/sumConstant';


const initialState={}
const fineReducer= (state=initialState,action)=>{
switch (action.type) {
    case FETCH_FINE:
const data=action.fine
console.log(data)
        return{
    ...state,
    fine:data

    // books:action.books.then(rsp=>rsp)
}
    default:
        return state
}
}
export default fineReducer