import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import TopNav from "./TopNav";
import { useDispatch, useSelector } from "react-redux";


import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import { createtaxclearance } from "../redux/actions/taxclearanceActions";


function AddTaxClearance() {
 
  const navigate= useNavigate()
  const dispatch=useDispatch();
  const [ companyName, setCompanyName] = useState("")
  const [ businessPartnerNo, setBusinessPartnerNo] = useState("")
  const [startPeriod, setStartPeriod] = useState("")
  const [expiryDate, setExpiryDate] = useState("")

  const [image, setImage] = useState({})
  const [pdf, setPdf] = useState({})


 let file=image

  
  const {loading,error,success,data}= useSelector((state)=>state.createTaxClearance);






 function submitTaxClearance(e) {
   
 
   
    e.preventDefault();
   
dispatch(createtaxclearance(companyName,businessPartnerNo,startPeriod,expiryDate,pdf))

//window.location.reload()
//navigate('/tax-clearances')

//window.location.href='/tax-clearances'
      


}
useEffect(() => {
  if (success===true) {
    alert(` Tax clearance  has been added succesfully`)
   
    navigate('/tax-clearances')
    window.location.reload()
  }
  
 }, [success,navigate])


    return    <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
      <Navbar/>
      <div class="layout-page">
      <TopNav/>
      <div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="fw-bold py-3 mb-4"> Add Tax Clearance</h4>

    {
    
 loading ? <Loading/>: error?  <div class="alert alert-danger alert-dismissible" role="alert">
 {error}

</div> :  null

                    } 
   
    <div class="row">
      
      <div class="col-xxl">
        <div class="card mb-4">
          <div class="card-header d-flex align-items-center justify-content-between">
           
            
          </div>
          <div class="card-body">
            <form  onSubmit={submitTaxClearance}>
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label" for="basic-default-name">
                Company name

                </label>
                <div class="col-sm-10">
                  <input onChange={(e)=>setCompanyName(e.target.value)} type="text" class="form-control" id="basic-default-name"  />
                </div>
              </div>
           
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label" for="basic-default-company">
               Business Partner Number
                </label>
                <div class="col-sm-10">
                  <input
                  onChange={(e)=>setBusinessPartnerNo(e.target.value)}
                    type="text"
                    class="form-control"
                    id="basic-default-company"
                   
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label" for="basic-default-email">
              Start Period
                </label>
                <div class="col-sm-10">
                  <div class="input-group input-group-merge">
                    <input
                    onChange={(e)=>setStartPeriod(e.target.value)}
                      type="date"
                      id="basic-default-email"
                      class="form-control"
                    
                   
                    />
                   
                  </div>
                 
                </div>
              </div>
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label" for="basic-default-email">
              Expiry Date
                </label>
                <div class="col-sm-10">
                  <div class="input-group input-group-merge">
                    <input
                      type="date"
                      id="basic-default-email"
                      class="form-control"
                      onChange={(e)=>setExpiryDate(e.target.value)}
                   
                    />
                
                  </div>
               
                </div>
              </div>
            
         
             
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label" for="basic-default-phone">
                Tax Clearance Pdf
                </label>
                <div class="col-sm-10">
                  <input
                    type="file"
                   
                    onChange={(e)=>setPdf(e.target.files[0])}
                    id="basic-default-phone"
                    class="form-control phone-mask"
                 name="image"
                    aria-describedby="basic-default-phone"
                  />
                  
                </div>
              </div>
             
              
              <div class="row justify-content-end">
                <div class="col-sm-10">
                  <button type="submit" class="btn btn-primary">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    
     
    </div>
  </div>
      </div>
      </div>
    </div>
    
    
}

export default AddTaxClearance;