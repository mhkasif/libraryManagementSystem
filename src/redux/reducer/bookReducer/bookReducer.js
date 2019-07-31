import {SELECT_ALL_BOOK,DELETE_BOOK} from './bookConstants'
const initialState={}
const bookReducer= (state=initialState,action)=>{
switch (action.type) {
    case SELECT_ALL_BOOK:
const data=action.books
console.log(data)
        return{
    ...state,
    books:data
}
// case DELETE_BOOK:
//     return{
//         ...state,books:data

//     }
    default:
        return state
}
}
export default bookReducer