import React from "react";
import {Link, useNavigate} from 'react-router-dom'
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux"

 function Navbar() {
  const [showNav,setShowNav]= useState(true);
  //const  {userInfo}= useSelector((data)=>data.auth);
  //const dispatch= useDispatch();
  const navigate= useNavigate();
  function logoutHandler() {
   
    //dispatch(logoutUser())
    navigate("/")
  }
    return ( <>
    

  {showNav ?    <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
  <div class="app-brand demo">
    <a class="app-brand-link">
      <span class="app-brand-logo demo">
     
      </span>
      <span class="app-brand-text demo menu-text fw-bolder ms-2">TCC</span>
    </a>

    <span  onClick={
      ()=>{
        setShowNav(!showNav)
       
      }
    } class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
    data-bs-toggle="modal"
    data-bs-target="#basicModal"
    >
      <i class="bx bx-menu bx-sm"></i>
    </span>
  </div>


  <ul class="menu-inner py-1">
   
    <li class="menu-item">
      <Link to="/" class="menu-link">
       
        <div data-i18n="Analytics">
            Tax Clearance Checker 
        </div>
      </Link>
    </li>


    <li class="menu-item">
      <Link to="/add-tax-clearance" class="menu-link menu-toggle">
        <i class="menu-icon tf-icons bx bx-layout"></i>
        <div data-i18n="Layouts">
            Add Tax Clearance
    </div>
      </Link>

   
    </li>
    <li class="menu-item">
      <Link to="/profile" class="menu-link menu-toggle">
        <i class="menu-icon tf-icons bx bx-layout"></i>
        <div data-i18n="Layouts">
            Profile
    </div>
      </Link>

     
    </li>
  
  





   



  
 


  </ul>
</aside> : null
 }
    </>
        )
    
      
      
 }
         

        
         
         
      
      
   

   
     

     
       



  

export default Navbar
