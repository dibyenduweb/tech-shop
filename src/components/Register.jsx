import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import Header from "./Home/Header";
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";


const Register = () => {
const {createtUser,handleUpdateProfile} =useAuth();

const [regError, setRegError] = useState('');
  //const [succses, setSuccses] = useState('');
  const [viewPassword, setViewPassword] = useState(false);

 const navigate = useNavigate()
  
  // // const {createtUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const img =e.target.img.value;
        const password = e.target.password.value;


         //rest error
      setRegError('');
      //setSuccses('');
//password validation


       if (password.length <6 ){
        toast.error('Password must be 6 characters or longer');
          return;
        }
        else if(!/[A-Z]/.test(password)){
          toast.error('password should be one uppercase,number,symbol')
            return;
        }
        else if(!/[0-9]/.test(password)){
          toast.error('password should be one uppercase,number,symbol')
            return;
        }
        else if(!/[ ~!@#$%^&*()+-/*`:;"'<>,.{} ]/.test(password)){
          toast.error('password should be one uppercase,number,symbol')
            return;
        }
// create user
      createtUser(email,password)
      .then(res => {
        handleUpdateProfile(name,img)
        .then(()=>{
          console.log(res.user)
          toast.success('Account created successfully')
          return navigate('/profile');
  

        })
      
      })
      .catch(error => {
        toast.error(error.message);
        return;

      })
        
      

      
      // .catch(error =>{
      //   console.error(error);
      //   //setRegError(error.message);
      //   setRegError('Email address already used');
      // })

    }

    return (
      <>
      <Header></Header>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register!</h1>
           
          </div>
          <div className="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
            <div className="card-body">
           <form onSubmit={handleRegister}>
           <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
              </div>
           <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" placeholder="image url" className="input input-bordered" name='img' />
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
                  <a href="#" className="label-text-alt link link-hover">Forgot password? </a>
                  
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">regiseter</button>
              </div>
           </form>
           {
            regError && <p className="text-red-500">{regError}</p>
           }
          {/* {
            succses &&  <p className="text-green-500">{succses}</p>
           }  */}
           <p>Already have an account, just <Link to="/login"><button className='btn btn-primary ml-2'>login</button></Link></p>
            </div>
          </div>
        </div>
      </div></>
    );
};

export default Register;