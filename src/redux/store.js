import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

import {UserDetailsReducer, userRegisterReducer, userSigninReducer} from './reducers/userReducer'
import { createTaxClearanceReducer, deleteTaxClearanceReducer, getTaxClearanceReducer, getTaxClearancesReducer, updateTaxClearanceReducer } from './reducers/taxclearanceReducer';


const initialState={
    userSignin:{
      
        userInfo:localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')): null
    }


};

 const reducer= combineReducers({
    userSignin:userSigninReducer,
    userRegister:userRegisterReducer,
    userDetails:UserDetailsReducer,

    getTaxClearances:getTaxClearancesReducer,
    getTaxClearance:getTaxClearanceReducer,
    updateTaxClearance:updateTaxClearanceReducer,
    deleteTaxClearance:deleteTaxClearanceReducer,
    createTaxClearance:createTaxClearanceReducer,
   
   
});

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
 const store= createStore(reducer,initialState,compose(applyMiddleware(thunk)));


 export default store