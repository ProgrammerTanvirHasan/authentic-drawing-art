import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";




const PrivateRoute = ({children}) => {

const {user,loading}=useContext(AuthContext)
const location=useLocation()


if(loading){
    return <div><span className="loading loading-bars loading-xs text-white"></span>
    <span className="loading loading-bars loading-sm text-white"></span>
    <span className="loading loading-bars loading-md text-white"></span>
    <span className="loading loading-bars loading-lg text-white"></span></div>;
   
     
   } 

  if(user){
    return children;
  }

    return <Navigate  state={location.pathname} to='/login' ></Navigate>
};

export default PrivateRoute;