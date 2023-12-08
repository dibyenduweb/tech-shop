/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import { AuthContext } from '../Provider/AuthProvider';
import Header from './Home/Header';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../Hooks/useAuth';
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate()

  const {signInUser} = useAuth();
  const {signInWithGoogle} =useAuth();

  const [logError, setLogError] = useState('');
  const [succses, setSuccses] = useState('');
  const [viewPassword, setViewPassword] = useState(false);
  
 // const {signInUser, signInWithGoogle} = useContext(AuthContext);
 // const navigate = useNavigate();

        const handleLogin = (e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            console.log(email, password);
          
            //pass chace
            if(password.length <6 ){
              toast.error('Please check your password');
                return;
              }

            signInUser(email, password)
            .then(result => {
              console.log(result.user)
              toast.success('Logged in Successfully')
              e.target.reset();
              navigate('/');

            })
            .catch(error =>{
              console.log(error)
              //setLogError(error.message);
             toast.error("Please check your email and Passward");

            })

        
        // .then(result => {
        //   console.log(result.user);
        //   navigate('/');
        // })
        // .catch(error => {
        //   console.log(error);
        //  })

              // console.log(result.user);
              // setSuccses('Logged in Successfully')
              // e.target.reset();
              //navigate('/');

        //     })
        //     .catch(error => {
        //       console.error(error);
        //       // setLogError(error.message);
        //       setLogError("Please check your password and email");
        // })
       
     
      }
      const handGoogleSignIn = () =>{
        signInWithGoogle()
        
        .then(result => {
          console.log(result.user);
          toast.success('Logged in Successfully')
          navigate('/');
        })
        .catch(error => {
          console.log(error);
          toast.error('Logged in failed.try again')
        })
    }
        
     
      
      

    return (
      <>
      <Header></Header>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card flex-shrink-0  w-96 shadow-2xl bg-base-100">
      <div className="card-body">
     <form onSubmit={handleLogin}>
     <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>

<div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                <input  
                type={ viewPassword ? "text" : "password" }
                name="password" 
                placeholder="password" 
                className="input input-bordered w-80" required />
                <span className="absolute top-4 right-3 " onClick={ () => setViewPassword(! viewPassword)}>
                  {
                    viewPassword ? <FaEyeSlash></FaEyeSlash> :<FaEye></FaEye>
                    
                  }
                </span>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>

        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered  w-80" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div> */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
     </form>
     {
            logError && <p className="text-red-500">{logError}</p>
           }
           {
            succses &&  <p className="text-green-500">{succses}</p>
           }
     <p>Dont have an account <Link to="/register"><button className='btn ml-2'>Register</button></Link></p>
      <p><button onClick={handGoogleSignIn}  className='btn '> <FcGoogle></FcGoogle>Login with Google</button></p>
      </div>
    </div>
  </div>
  
</div></>
    );
};

export default Login;