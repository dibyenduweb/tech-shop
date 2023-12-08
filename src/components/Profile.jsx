import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Header from "./Home/Header";

const Profile = () => {
    const {user, logOut,} = useAuth();
  console.log(user);
    const handleLogOut = () =>{
        logOut()
        .then(() => console.log('your logged out now'))
        .catch(error => console.log(error))
    }
    return (
        <div>
            <Header></Header>
            <div className='navbar-end'>
        {
            user ?.email ? <>
            <div>
            <div className="hero text-center lg:mx-72 mt-24 ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={user?.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl font-bold">{user?.displayName}</h1>
      <p className="py-6">{user?.email}</p>
      <p>Phone: 000000000</p>
      
      <p className="btn btn-sm my-2">Change Password</p> <br />
      <a onClick={handleLogOut} className='btn btn-secondary'>Sign out</a>
    </div>
  </div>
</div>
           

           
           
            </div>

            </> 
            :
            <Link to='/login'>
                <button className='btn mr-10 btn-sm'>Login</button>
            </Link>
        }
       
      </div>
        </div>
    );
};

export default Profile;