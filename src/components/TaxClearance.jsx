import React, { useEffect } from "react";
import Navbar from "./navbar";
import TopNav from "./TopNav";
import { useSelector , useDispatch} from "react-redux";
import { useParams } from "react-router-dom";

import Loading from "./Loading";
import Error from "./Error";
import { gettaxclearance } from "../redux/actions/taxclearanceActions";



function TaxClearance() {
  
  const  {loading,error,data}= useSelector(state=>state.getTaxClearance);



  const dispatch= useDispatch();
//  const user= useSelector((data)=>data.auth);

//const signature= user.user.signature;


const params= useParams();
const id=params.id
document.title="Tax clearance checker - Tax clearance "
 

  useEffect(() => {
 dispatch(gettaxclearance(id))
  }, [id])

    return ( <>
     <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
        <Navbar/>
        <div class="layout-page">
        <TopNav/>
        <div class="content-wrapper">
     {
      
      loading ? <Loading/>  : error ? <Error>
        {error}
      </Error> :   <div class="container-xxl flex-grow-1 container-p-y">
       <h4 class="fw-bold py-3 mb-4">{
data.companyName

       } </h4>

       <div class="row">
 
         <div class="col-md-6">
          <div className="card mb-4">
          <div class="form-password-toggle">
                 <label class="form-label" for="basic-default-password32">
                   Business partner number
                 </label>
                 <div class="input-group input-group-merge">
                   <input
                     type="text"
                     class="form-control"
                     id="basic-default-password32"
                    value={
                      data.businessPartnerNo
                    }
                     aria-describedby="basic-default-password"
                   
                   />
                
                 </div>
               </div>
               <div class="form-password-toggle">
                 <label class="form-label" for="basic-default-password32">
                   Commencement date
                 </label>
                 <div class="input-group input-group-merge">
                   <input
                     type="text"
                     class="form-control"
                     id="basic-default-password32"
                   value=             {
                        data.createdAt
                      }
                  
                   />
                 
                 </div>
               </div>
          </div>
         </div>
         <div class="col-md-6">
          <div className="card mb-4">
          <div class="form-password-toggle">
                 <label class="form-label" for="basic-default-password32">
                  Expiry Date
                 </label>
                 <div class="input-group input-group-merge">
                   <input
                     type="text"
                     class="form-control"
                     id="basic-default-password32"
                    value={
                      data.expiryDate
                    }
                     aria-describedby="basic-default-password"
                   
                   />
                
                 </div>
               </div>
               <div class="form-password-toggle">
                 <label class="form-label" for="basic-default-password32">
                  Tax Clearance Pdf
                 </label>
                 <div class="input-group input-group-merge">
                   <a href={data.pdf}
                   
                   >View pdf</a>
                 
                 </div>
               </div>
          </div>
         </div>

     
        
   
       
      
       </div>

      

 
      

      
   
     </div>
       
     }

    
 

     <div class="content-backdrop fade"></div>
   </div>
        </div>
        </div>
      </div>
      
    </>
     
      
       
  
           
  
      
  
        
       
  
   
    )
}

export default TaxClearance

