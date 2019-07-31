import { combineReducers } from "redux";
import bookReducer from './bookReducer/bookReducer';
import userReducer from './userReducer/userReducer';

import {reducer as toastrReducer} from 'react-redux-toastr'
import studentReducer from './studentReducer/studentReducer';
import issueReducer from './issueReducer.js/issueReducer';
import returnedReducer from './returnedReducer/returnedReducer';
import sumReducer from './sumReducer/sumReducer';
import fetchIssueCountReducer from './fetchIssueCountReducer/fetchIssueCountReducer';
import fineReducer from './fineReducer/fineReducer';
import {reducer as FormReducer} from 'redux-form';



const rootReducer=combineReducers({
    books:bookReducer,
    user:userReducer,
    students:studentReducer,
    toastr:toastrReducer,
    issue:issueReducer,
    returned:returnedReducer,
    sum:sumReducer,
    countIssue:fetchIssueCountReducer,
    fine:fineReducer,
    form:FormReducer
})
export default rootReducer;