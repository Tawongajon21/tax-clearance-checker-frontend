import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Navbar from './navbar'
import TopNav from './TopNav'

import { useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading'
import Error from './Error'
import { gettaxclearance, updatetaxclearance } from '../redux/actions/taxclearanceActions'

function UpdateTaxClearance() {
 const taxClearance= useSelector((data)=>data.getTaxClearance);
 const {success}= useSelector((data)=>data.updateTaxClearance);

 const id=useParams().id;
 const {loading,error,data}=taxClearance;

    const dispatch= useDispatch();
    const navigate=useNavigate()
    
 


    const [companyName, setCompanyName] = useState(loading ? "loading...": error? "error...": data.companyName);
    const [ createdAt, setCreatedAt] = useState(loading ? "loading...": error? "error...": data.createdAt);
  
    const [ businessPartnerNo, setBusinessPartnerNo] = useState(loading ? "loading...": error? "error...":data.businessPartnerNo)
    const [startPeriod, setStartPeriod] = useState(loading ? "loading...": error? "error...":data.startPeriod)
    const [expiryDate, setExpiryDate] = useState(loading ? "loading...": error? "error...": data.expiryDate) 

    const [pdf, setpdf] = useState(loading ? "loading...": error? "error...": data.pdf)
  
    useEffect(() => {
      dispatch(gettaxclearance(id))

    }, [success])

  
 
    function submitTaxClearance(e) {
      e.preventDefault();
  dispatch(updatetaxclearance(id,companyName,businessPartnerNo,startPeriod,expiryDate,pdf))


  
}

document.title="Tax clearance checker - Update Tax clearance "
      return    <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
        <Navbar/>
        <div class="layout-page">
        <TopNav/>
        <div class="container-xxl flex-grow-1 container-p-y">
      <h4 class="fw-bold py-3 mb-4"> Update Tax Clearance</h4>
  
     
      <div class="row">
        
        <div class="col-xxl">
          <div class="card mb-4">
            <div class="card-header d-flex align-items-center justify-content-between">
             
              
            </div>
            <div class="card-body">
              <form onSubmit={submitTaxClearance}> 
              {
                
                loading ? <Loading/> :
                error ? <Error>
                    {error}
                </Error>
                :
                <>
                <div class="row mb-3">
                  <label class="col-sm-2 col-form-label" for="basic-default-name">
                  Company name
  
                  </label>
                  <div class="col-sm-10">
                    <input value={ 
                      companyName
                     
                     

                    } onChange={(e)=>setCompanyName(e.target.value)} type="text" class="form-control" id="basic-default-name" placeholder="John Doe" />
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
                      placeholder="ACME Inc."
                      value={
                       businessPartnerNo
                                           }
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
                      onChange={(e)=>setCreatedAt(e.target.value)}
                        type="input"
                        id="basic-default-email"
                        class="form-control"
                        value={
                          createdAt
                        }
                      
                     
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
                        type="input"
                        id="basic-default-email"
                        class="form-control"
                        onChange={(e)=>setExpiryDate(e.target.value)}
                        value={
                            expiryDate
                        }
                     
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
                    placeholder={pdf}
                   
                    onChange={(e)=>setpdf(e.target.files[0])}
                    id="basic-default-phone"
                    class="form-control phone-mask"
                 name="image"
                    aria-describedby="basic-default-phone"
                  />
                  
                </div>
              </div>
              
               
               
                
                <div class="row justify-content-end">
                  <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary">Update</button>
                  </div>
                </div>
                </>
                
              }
                
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

export default UpdateTaxClearance