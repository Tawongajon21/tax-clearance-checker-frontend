import axios from 'axios';
import { CREATE_TAX_CLEARANCE_FAIL, CREATE_TAX_CLEARANCE_REQUEST, CREATE_TAX_CLEARANCE_SUCCESS, DELETE_TAX_CLEARANCE_FAIL, DELETE_TAX_CLEARANCE_REQUEST, DELETE_TAX_CLEARANCE_SUCCESS, GET_TAX_CLEARANCES_FAIL, GET_TAX_CLEARANCES_REQUEST, GET_TAX_CLEARANCES_SUCCESS, GET_TAX_CLEARANCE_FAIL, GET_TAX_CLEARANCE_REQUEST, GET_TAX_CLEARANCE_SUCCESS, UPDATE_TAX_CLEARANCE_FAIL, UPDATE_TAX_CLEARANCE_REQUEST, UPDATE_TAX_CLEARANCE_SUCCESS } from "../constants/taxclearances";

let baseUrl="https://tax-clearance-checker-backend-production-2ec2.up.railway.app/api/v1"


export const gettaxclearances =()=>async(dispatch,getState)=>{
    const {userSignin:{userInfo}}= getState();
  

      dispatch({
          type:GET_TAX_CLEARANCES_REQUEST
      });
   
  
      try {
        const {data}  = await axios.get(`${baseUrl}/tax/get-tax-clearances`  ,{
          headers:{  
            Authorization:`Bearer ${userInfo.signature}`
             
      }
  }    
   ) 
     
            
  dispatch({type:GET_TAX_CLEARANCES_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:GET_TAX_CLEARANCES_FAIL,payload:message})
  }
  
     
  }
export const gettaxclearance =(id)=>async(dispatch,getState)=>{
    const {userSignin:{userInfo}}= getState();
 
      dispatch({
          type:GET_TAX_CLEARANCE_REQUEST
      });
   
     
    
      try {
        const {data}  = await axios.get(`${baseUrl}/tax/get-tax-clearance/${id}`  ,{
          headers:{  
        
              Authorization:`Bearer ${userInfo.signature}`
      }
  }    
   ) 
     
        
  dispatch({type:GET_TAX_CLEARANCE_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:GET_TAX_CLEARANCE_FAIL,payload:message})
  }
  
     
  }
export const createtaxclearance =(companyName,businessPartnerNo,startPeriod,expiryDate,pdf)=>async(dispatch,getState)=>{
    const {userSignin:{userInfo}}= getState();

    let infoData={companyName,businessPartnerNo,startPeriod,expiryDate,pdf};
  
      dispatch({
          type:CREATE_TAX_CLEARANCE_REQUEST,payload:infoData
      });
   
     
      
      try {
      
        const {data}  = await axios.post(`${baseUrl}/tax/create-tax-clearance`, {companyName,businessPartnerNo,startPeriod,expiryDate,pdf} ,{
          headers:{  
        
              Authorization:`Bearer ${userInfo.signature}`,
              'Content-Type': 'multipart/form-data'
      }
  }    
   ) 
     
         
  dispatch({type:CREATE_TAX_CLEARANCE_SUCCESS,payload:data.infoData});
       } catch (error) {
      
      const message= error.response.data.message
  
          dispatch({type:CREATE_TAX_CLEARANCE_FAIL,payload:message})
  }
  
     
  }


export const updatetaxclearance =(id,companyName,businessPartnerNo,startPeriod,expiryDate,pdf)=>async(dispatch,getState)=>{
    const {userSignin:{userInfo}}= getState();

    let infoData={id,companyName,businessPartnerNo,startPeriod,expiryDate,pdf};
   
      dispatch({
          type:UPDATE_TAX_CLEARANCE_REQUEST,payload:infoData
      });
   
     

      try {
        const {data}  = await axios.put(`${baseUrl}/tax/update-tax-clearance/${id}`, {companyName,businessPartnerNo,startPeriod,expiryDate,pdf} ,{
          headers:{  
        
              Authorization:`Bearer ${userInfo.signature}`,
              'Content-Type': 'multipart/form-data'
      }
  }    
   ) 
     
        
  dispatch({type:UPDATE_TAX_CLEARANCE_SUCCESS,payload:data.infoData});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:UPDATE_TAX_CLEARANCE_FAIL,payload:message})
  }
  
     
  }

  export const deletetaxclearance=(id)=>async(dispatch,getState)=>{
    dispatch({type:DELETE_TAX_CLEARANCE_REQUEST,payload:id});
    const {userSignin:{userInfo}}= getState();

    try {
      const {data}= await axios.delete(`${baseUrl}/tax/delete-tax-clearance/${id}`,{
        headers:{
          Authorization:`Bearer ${userInfo.signature}`
      }
    
      })
      console.log(data);
      dispatch({type:DELETE_TAX_CLEARANCE_SUCCESS,payload:data.id})
    } catch (error) {
      const message=  error.response&& error.response.data.message
      ? error.response.data.message
      : error.message
      dispatch({type:DELETE_TAX_CLEARANCE_FAIL,payload:message})
    }
  }
