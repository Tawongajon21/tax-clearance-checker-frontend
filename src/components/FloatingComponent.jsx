import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux';

function FloatingComponent() {
    const navigate=useNavigate();
  //  const dispatch= useDispatch()
    function logoutHandler() {
   
     //   dispatch(logout());
        navigate("/login")
    }
  return (
    
    <div class="buy-now">
   <div class="card-body">
    <div class="row gy-3">


     
      <div class="col-lg-4 col-md-6">
       
        <div class="mt-3">
         
          <button
           style={{
           
                "position": "fixed",
                "bottom": "3rem",
                "right": "1.625rem",
                "zIndex": 999999,
            
             
              
           }}
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalCenter"
          >
          Quick Menu
          </button>

          
          <div class="modal fade" id="modalCenter" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modalCenterTitle">Quick Menu</h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col mb-3">
                      <Link for="nameWithTitle" to='/' class="form-label"> Tax Clearances</Link>
                     
                    </div>
                  </div>
                  <div class="row">
                    <div class="col mb-3">
                      <Link for="nameWithTitle" to='/add-tax-clearance' class="form-label">Add Tax Clearance</Link>
                     
                    </div>
                  </div>
                  <div class="row g-2">
                    <div class="col mb-0">
                      <Link for="emailWithTitle" to='/profile' class="form-label">Profile</Link>
                    
                    </div>
                 
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                    Close Menu
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

   
    </div>
  </div>
    </div>

  )
}

export default FloatingComponent