
import { SELECT_USER, LOGOUT_USER } from './userConstants';
const initialState={};

const userReducer=(state=initialState,action)=>{

        switch (action.type) {
            case SELECT_USER:
        const data=action.user
        console.log(data)
                return{
            ...state,
            user:data
        }
        case LOGOUT_USER:
return{
    ...state,user:null
}
            default:
                return state
        }
        }

export default userReducer;