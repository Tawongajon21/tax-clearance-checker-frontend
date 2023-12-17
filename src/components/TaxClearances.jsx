import react, { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";
import Error from "./Error";
import Navbar from "./navbar";
import TopNav from "./TopNav";
import {  useSelector,useDispatch } from "react-redux";
import moment from 'moment'

import { Link, useNavigate } from "react-router-dom";


import { deletetaxclearance, gettaxclearances } from "../redux/actions/taxclearanceActions";
import { formatDate } from "../helpers/helper";

function TaxClearances() {
  const dispatch= useDispatch()
  const navigate= useNavigate()
  const  {loading,error,data}= useSelector(state=>state.getTaxClearances);
 


console.log("hello");



const [searchPhrase, setsearchPhrase] = useState("")
document.title="Tax clearance checker - Tax clearances "
useEffect(() => {
 
  dispatch(gettaxclearances())
}, [])

let companies;
if (searchPhrase) {
  companies= loading ? "loading" : error ? "error" :
  data.data.filter(p=>p.companyName.toLowerCase().includes(searchPhrase))
}else{
  companies= loading ? "loading" : error ? "error" :
  data.data
}




  return (
    <div class="layout-wrapper layout-content-navbar">
<div class="layout-container">
<Navbar/>
<div class="layout-page">

<TopNav/>





<div class="content-wrapper">
    
    <div class="container-xxl flex-grow-1 container-p-y">
      <h4 class="fw-bold py-3 mb-4">
        Tax Clearances
      </h4>

      <div class="navbar-nav align-items-center">
          <div class="nav-item d-flex align-items-center">
            <i class="bx bx-search fs-4 lh-0"></i>
            <input
              type="text"
              class="form-control border-0 shadow-none"
              placeholder="Search..."
              aria-label="Search..."
              value={searchPhrase}
              onChange={(e)=>setsearchPhrase(e.target.value)}
            />
          </div>
        </div>
      <div class="card">
   
       
          <div class="table-responsive text-nowrap">
        <table class="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Business Partner Number</th>
              <th>Date Entered</th>
              <th>Expiry date</th>
              
              
            </tr>
          </thead>
          <tbody class="table-border-bottom-0">
       { 
       
       loading ?  <Loading/>  : error ? <Error>
        {error}
       </Error> : <> 

  
        {
          
          companies.map((item)=>{
            const {_id,companyName,businessPartnerNo,createdAt,expiryDate}= item;
           let date= formatDate(createdAt);
         
            if (companyName==searchPhrase) {
              return  <tr key={_id}>
              <td>
               {companyName}
               </td>
            <td> <strong>
             {businessPartnerNo}
             </strong></td>
              
               <td>{
              date
               }
               </td>
               <td>{
                 expiryDate
                 }</td>
                 <td>
                 <td>
                         <div class="dropdown">
                           <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                             <i class="bx bx-dots-vertical-rounded"></i>
                           </button>
                           <div class="dropdown-menu">
                             <Link class="dropdown-item" to={`/tax-clearance/${_id}`}
                               ><i class="bx bx-edit-alt me-1"></i> View</Link>
                             <Link  class="dropdown-item" to={`/update-tax-clearance/${_id}`} 
                               ><i class="bx bx-trash me-1"></i>Edit</Link>
                            <span style={{
                               cursor:"pointer"
                          
                             }} class="dropdown-item" onClick={()=>{
                              dispatch(deletetaxclearance(_id))
                              //window.location.reload()
                            
                             
                             }}
                               ><i class="bx bx-trash me-1"></i> Delete</span
                             >
                           </div>
                         </div>
                       </td>
                 </td>
           </tr>
            }else{
return     <tr key={_id}>
<td>
{companyName}
</td>
<td> <strong>
{businessPartnerNo}
</strong></td>

<td>{ createdAt}
</td>
<td>{
 expiryDate
 }</td>
 <td>
 <td style={{
  display:"flex"
 }}>
         
         <Link class="dropdown-item" to={`/tax-clearance/${_id}`}
               > View</Link>
             <Link  class="dropdown-item" to={`/update-tax-clearance/${_id}`} 
               >Edit</Link>
             <span style={{
               cursor:"pointer"
             }} class="dropdown-item" onClick={()=>{
               dispatch(deletetaxclearance(_id))
               window.location.reload()
             }}
               ><i class="bx bx-trash me-1"></i> Delete</span
             >
          
       
       </td>
 </td>
</tr>
            }
           
            
           }) 
      
        }

             
     
           
           
       </>
               }
          </tbody>
        </table>
      </div>
       
       
      </div>
 
      
  
     
    </div>
   



    <div class="content-backdrop fade"></div>
  </div>



</div>

</div>
</div>
   
  )
}


    


export default TaxClearances