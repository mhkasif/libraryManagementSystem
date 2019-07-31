import { createStore,applyMiddleware,compose } from "redux";
import rootReducer from "../reducer/rootReducer";
import thunk  from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const configStore=()=>{

  const  store = createStore(

     rootReducer,
    composeEnhancers( applyMiddleware(thunk)),
   )
   return store
}
  export default configStore;