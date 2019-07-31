
import { SELECT_RETURNED_BOOKS } from './returnedConstants';



const initialState={}
const returnedReducer= (state=initialState,action)=>{
switch (action.type) {
    case SELECT_RETURNED_BOOKS:
const data=action.returned
console.log(data)
        return{
    ...state,
    returned:data

    // books:action.books.then(rsp=>rsp)
}
    default:
        return state
}
}
export default returnedReducer