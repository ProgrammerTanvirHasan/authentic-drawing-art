import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <div className="bg-slate-950 lg:w-[80%] mx-auto rounded-3xl">

          <div className="text-center items-center lg:mt-32 p-4 lg:p-36 ">
        <h1  className="text-3xl lg:text-9xl text-red-400">Oops!</h1>
        <h1 className="text-5xl text-white mt-12">404</h1>
       <h2 className="text-3xl font-bold text-white">Page not found !</h2>
  <Link to='/'>
  <button className="btn bg-green-600 mt-2">Go To Home</button>
  </Link>
 
   </div>
    </div>
        </div>
    );
};

export default Error;