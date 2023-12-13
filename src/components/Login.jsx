import React, { useEffect, useState } from 'react';
import { useSelector , useDispatch} from 'react-redux';

import Error from './Error';
import { Link, useNavigate } from 'react-router-dom';
import Loading from './Loading';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signin } from '../redux/actions/userActions';


function Login() {
 // const {user,isLoading,isError,isSuccess,message}= useSelector((state)=>state.auth);
document.title="Tax clearance checker - Registration "

//const dispatch= useDispatch();

  const dispatch= useDispatch()
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")


  const [errorStatus, setErrorStatus] = useState(false)
  const  userSignin= useSelector(state=>state.userSignin);
  const {userInfo,loading,error}= userSignin

const navigate=useNavigate()

const submitHandler=(e)=>{
  e.preventDefault();
  dispatch(signin(email,password))
  
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
loading ? <Loading/> :
 error ?    <div class="alert alert-danger alert-dismissible" role="alert">
 {error}

</div>: null

}
            <form id="formAuthentication" class="mb-3"  onSubmit={submitHandler}>
           
           
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
             

           
              <button class="btn btn-primary d-grid w-100">Sign In</button>
            </form>

            <p class="text-center">
              <span>Already have an account?</span>
              <Link to="/register">
                <span>Sign up instead</span>
              </Link>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
}
export default Login