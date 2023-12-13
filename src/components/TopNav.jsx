import React from  'react'
import {useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signout } from '../redux/actions/userActions';


function TopNav() {
  const [showNav,setShowNav]= useState(true);

  const navigate= useNavigate()
  const [showOptions,setShowOptions]= useState(true)
  const dispatch= useDispatch()
  const  userSignin= useSelector(state=>state.userSignin);
  const {userInfo,loading,error}= userSignin

  function logoutHandler() {
   
  dispatch(signout())

    //navigate("/")
    window.location.href='/'
  }
    return (
        <nav
        class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
        id="layout-navbar"
      >
        <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
          <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
            <i class="bx bx-menu bx-sm"></i>
          </a>
        </div>

        <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
       
          <div class="navbar-nav align-items-center">
            <div class="nav-item d-flex align-items-center">
           
              <input
                type="text"
                class="form-control border-0 shadow-none"
                
                aria-label="Search..."
              />
            </div>
          </div>
     

          <ul class="navbar-nav flex-row align-items-center ms-auto">
     
            <li class="nav-item lh-1 me-3">
              <a
                class="github-button"
             style={{
              cursor:"pointer"
             }}
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                >
                  {
               ` ${userInfo.name} ${userInfo.surname} `
                  }
                    </a
              >
            </li>

          
       
            <li class="nav-item navbar-dropdown dropdown-user dropdown">
                  <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                    <div class="avatar avatar-online">
                      <img src="../assets/img/avatars/user.png" alt class="w-px-40 h-auto rounded-circle" />
                    </div>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <a class="dropdown-item" href="#">
                        <div class="d-flex">
                          <div class="flex-shrink-0 me-3">
                            <div class="avatar avatar-online">
                              <img src="../assets/img/avatars/user.png" alt class="w-px-40 h-auto rounded-circle" />
                            </div>
                          </div>
                          <div class="flex-grow-1">
                            <span class="fw-semibold d-block">
                            {
                   //` ${currentUser.email} `
                  }
                            </span>
                            <small class="text-muted">Finance Department</small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div class="dropdown-divider"></div>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/profile">
                        <i class="bx bx-user me-2"></i>
                        <span class="align-middle">My Profile</span>
                      </Link>
                    </li>
                  
                    <li>
                      <div class="dropdown-divider"></div>
                    </li>
                    <li>
                      <span class="dropdown-item" onClick={
                  logoutHandler
                  
                      }>
                        <i class="bx bx-power-off me-2"></i>
                        <span class="align-middle">Log Out</span>
                      </span>
                    </li>
                  </ul>
                </li>
                
            
          </ul>
        </div>
      </nav>
    )
}

export default TopNav
