import React, { useEffect, useState } from 'react';
import { useSelector , useDispatch} from 'react-redux';

import Error from './Error';
import { Link, useNavigate } from 'react-router-dom';
import Loading from './Loading';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { register } from '../redux/actions/userActions';


function Register() {
  //const {user,isLoading,isError,isSuccess,message}= useSelector((state)=>state.auth);
document.title="Tax clearance checker - Registration "

const dispatch= useDispatch()
const  userSignin= useSelector(state=>state.userSignin);
const {userInfo,loading,error}= userSignin
  
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("+263"+"")
  const [password, setpassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [surname, setsurname] = useState("")
  const [name, setname] = useState("")
 
  
const navigate=useNavigate()

const submitHandler=(e)=>{
  e.preventDefault();
  dispatch(register(email,phone,password,name,surname))
  
}
useEffect(() => {
  if (userInfo) {
     navigate("/tax-clearances")
  }
  
 }, [userInfo,navigate])

 
    return  <div class="container-xxl">
    <div class="authentication-wrapper authentication-basic container-p-y">
      <div class="authentication-inner">
       
        <div class="card">
          <div class="card-body">
         
           
          
            <h4 class="mb-2">Tax Clearance Checker</h4>
            
{
  
loading ? <Loading/> : error ? <div class="alert alert-danger alert-dismissible" role="alert">
{error}

</div> : null

}
            <form id="formAuthentication" class="mb-3"  onSubmit={submitHandler}>
              <div class="mb-3">
                <label for="username" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  value={name}
                  onChange={(e)=>setname(e.target.value)}
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  autofocus
                />
              </div>
              <div class="mb-3">
                <label for="username" class="form-label">Surname</label>
                <input
                  type="text"
                  class="form-control"
                  value={surname}
                  onChange={(e)=>setsurname(e.target.value)}
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  autofocus
                />
              </div>
            
              <div class="mb-3 col-md-6">
                  <label class="form-label" for="phoneNumber">Phone Number</label>
                  <div class="input-group input-group-merge">
                    <span class="input-group-text">ZIM (+263)</span>
                    <input
                      type="text"
                      id="phoneNumber"
                      value={phone}
                      onChange={(e)=>setphone(e.target.value)}
                      name="phoneNumber"
                      class="form-control"
                      placeholder="202 555 0111"
                    />
                  </div>
                </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="text" 
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                class="form-control" id="email" name="email" placeholder="Enter your email" />
              </div>
              <div class="mb-3 form-password-toggle">
                <label class="form-label" for="password">Password</label>
                <div class="input-group input-group-merge">
                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    name="password"
                    onChange={(e)=>setpassword(e.target.value)}
                    value={password}
                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                    aria-describedby="password"
                  />
                  <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                </div>
              </div>
              <div class="mb-3 form-password-toggle">
                <label class="form-label" for="password">Confirm password</label>
                <div class="input-group input-group-merge">
                  <input
                  value={confirmPassword}
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                    type="password"
                    id="password"
                    class="form-control"
                    name="password"
                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                    aria-describedby="password"
                  />
                  <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                </div>
              </div>

           
              <button class="btn btn-primary d-grid w-100">Sign up</button>
            </form>

            <p class="text-center">
              <span>Already have an account?</span>
              <Link to="/">
                <span>Sign in instead</span>
              </Link>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
}
export default Register