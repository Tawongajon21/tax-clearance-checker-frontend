import React, { useEffect } from 'react';
import Navbar from './navbar';
import TopNav from './TopNav';
import { useDispatch, useSelector } from 'react-redux';

import Loading from './Loading';
import Error from './Error';
import { detailsuser } from '../redux/actions/userActions';


function Profile() {
  const dispatch= useDispatch();
  
 const  data= useSelector((data)=>data.userDetails);


useEffect(() => {
dispatch(detailsuser())
}, [])


  const {loading,error,user,message}=data;



   document.title="Tax clearance checker - Profile "
  
   
   return  <div class="layout-wrapper layout-content-navbar">
   <div class="layout-container">
   <Navbar/>
    <div class="layout-page">
    <TopNav/>
    <div class="content-wrapper">
    <div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="fw-bold py-3 mb-4">Profile</h4>
{

loading? <Loading/> : error ? <Error>
  {message}
</Error> :  <div class="row">
      <div class="col-md-12">
       
        <div class="card mb-4">
          <h5 class="card-header">Profile Details</h5>
       
          <div class="card-body">
            <div class="d-flex align-items-start align-items-sm-center gap-4">
          
            </div>
          </div>
          <hr class="my-0" />
          <div class="card-body">
            <form id="formAccountSettings" method="POST" onsubmit="return false">
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="firstName" class="form-label">First Name</label>
                  <input
                    class="form-control"
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={
                      user.name
                    }
                    autofocus
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="lastName" class="form-label">Last Name</label>
                  <input value={
                       user.surname
                    } class="form-control" type="text" name="lastName" id="lastName" />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="email" class="form-label">E-mail</label>
                  <input
                    class="form-control"
                    type="text"
                    id="email"
                    name="email"
                    value={
                      user.email
                    }
                    placeholder="john.doe@example.com"
                  />
                </div>
              
                <div class="mb-3 col-md-6">
                  <label class="form-label" for="phoneNumber">Phone Number</label>
                  <div class="input-group input-group-merge">
                    
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      class="form-control"
                      value={
                        user.phone
                      }
                      
                    />
                  </div>
                </div>
        
            
        
              </div>
            
            </form>
          </div>
    
        </div>
     
      </div>
    </div>
    
}
    
  </div>
    </div>
    </div>
   
    
   </div>
   
 
    </div> 
  
   
 
    
  
}
export default Profile;