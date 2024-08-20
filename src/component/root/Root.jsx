import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navigation from "../navigation/Navigation";


const Root = () => {
    return (
        <div className="bg-slate-900 ">
          <div className="w-[95% ] mx-auto">
          <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
          </div>
        </div>
    );
};

export default Root;