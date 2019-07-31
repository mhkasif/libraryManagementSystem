import { SELECT_ALL_STUDENT } from "./studentConstants";


const initialState={}
const studentReducer= (state=initialState,action)=>{
switch (action.type) {
    case SELECT_ALL_STUDENT:
const data=action.students
console.log(data)
        return{
    ...state,
    students:data

    // books:action.books.then(rsp=>rsp)
}




    default:
        return state
}
}
export default studentReducer