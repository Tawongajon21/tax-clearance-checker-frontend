
import { CREATE_TAX_CLEARANCE_FAIL, CREATE_TAX_CLEARANCE_REQUEST, CREATE_TAX_CLEARANCE_SUCCESS, DELETE_TAX_CLEARANCE_FAIL, DELETE_TAX_CLEARANCE_REQUEST, DELETE_TAX_CLEARANCE_SUCCESS, GET_TAX_CLEARANCES_FAIL, GET_TAX_CLEARANCES_REQUEST, GET_TAX_CLEARANCES_SUCCESS, GET_TAX_CLEARANCE_FAIL, GET_TAX_CLEARANCE_REQUEST, GET_TAX_CLEARANCE_SUCCESS, UPDATE_TAX_CLEARANCE_FAIL, UPDATE_TAX_CLEARANCE_REQUEST, UPDATE_TAX_CLEARANCE_SUCCESS } from "../constants/taxclearances";


export const getTaxClearancesReducer=(state={loading:true},action)=>{
    switch (action.type) {
    case GET_TAX_CLEARANCES_REQUEST:
            
            return  {loading:true}
    case GET_TAX_CLEARANCES_SUCCESS:
        return  {loading:false,data:action.payload}
        case GET_TAX_CLEARANCES_FAIL:
            return  {loading:false,error:action.payload}
        default:
           return state;
    }
    }
export const getTaxClearanceReducer=(state={loading:true},action)=>{
    switch (action.type) {
    case GET_TAX_CLEARANCE_REQUEST:
            
            return  {loading:true}
    case GET_TAX_CLEARANCE_SUCCESS:
        return  {loading:false,data:action.payload}
        case GET_TAX_CLEARANCE_FAIL:
            return  {loading:false,error:action.payload}
        default:
           return state;
    }
    }




    export const createTaxClearanceReducer=(state={},action)=>{
        switch (action.type) {
            case CREATE_TAX_CLEARANCE_REQUEST:
                return {loading:true}
              case CREATE_TAX_CLEARANCE_SUCCESS: 
              
                return {loading:false,success:true,data:action.payload}
              
        case CREATE_TAX_CLEARANCE_FAIL:
           
            return {loading:false,error:action.payload}
            default:
                return state;
        }
    }

    export const updateTaxClearanceReducer=(state={},action)=>{
        switch (action) {
            case UPDATE_TAX_CLEARANCE_REQUEST:
                return {loading:true}
              case UPDATE_TAX_CLEARANCE_SUCCESS: 
              
                return {loading:false,success:true,data:action.payload}
              
        case UPDATE_TAX_CLEARANCE_FAIL:
            return {loading:false,error:action.payload}
            default:
                return state;
        }
    }
    export const deleteTaxClearanceReducer=(state={},action)=>{
        switch (action) {
            case DELETE_TAX_CLEARANCE_REQUEST:
                return {loading:true}
              case DELETE_TAX_CLEARANCE_SUCCESS: 
              
                return {loading:false,success:true,data:action.payload}
              
        case DELETE_TAX_CLEARANCE_FAIL:
            return {loading:false,error:action.payload}
            default:
                return state;
        }
    }
