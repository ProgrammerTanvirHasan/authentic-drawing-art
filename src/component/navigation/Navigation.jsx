import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navigation = () => {
  const { logOut, user } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-orange-200 " : "text-white"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/allArt"
          className={({ isActive }) =>
            isActive ? "text-orange-200" : "text-white"
          }
        >
          All Art & craft Items
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/addCraft"
          className={({ isActive }) =>
            isActive ? "text-orange-200" : "text-white"
          }
        >
          Add Craft Item
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/myCraft"
          className={({ isActive }) =>
            isActive ? "text-orange-200" : "text-white"
          }
        >
          My Art&Craft List
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "text-orange-200" : "text-white"
          }
        >
          Login
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? "text-orange-200" : "text-white"
          }
        >
          Register
        </NavLink>
      </li>
    </>
  );

  const mouseHover = () => {
    setVisible(true);
  };

  const mouseLeave = () => {
    setVisible(false);
  };

  return (
    <div>
      <div className="bg-slate-950 py-8 rounded-t-md ">
        <div className="navbar w-[95%] mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box bg-violet-500 w-52 text-white"
              >
                {links}
              </ul>
            </div>
            <div className="flex">
              <div></div>
              <p className="text-4xl">
                <span className="text-orange-300">Art</span>
                <span className="text-slate-400">Enthusiast</span>
              </p>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul tabIndex={0} className="flex gap-4 text-white font-semibold">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                <button
                  onClick={handleSignOut}
                  className="text-2xl bg-black p-2 rounded-xl font-bold  text-orange-200"
                >
                  SignOut
                </button>
                <div
                  onMouseEnter={mouseHover}
                  onMouseLeave={mouseLeave}
                  className="relative flex"
                >
                  <div
                    className={
                      visible
                        ? "absolute -top-10 right-0 bg-white text-lime-900 p-1 rounded "
                        : "hidden"
                    }
                  >
                    {user.email || "EmailNotFound"}
                  </div>

                  <div className="avatar online">
                    <div className="w-12 rounded-full ml-2">
                      <img
                        className="w-10 h-10 rounded-xl"
                        src={user.photoURL}
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <Link to="/login">
                <button className="text-2xl bg-black p-2 rounded-xl font-bold  text-orange-200">
                  SignIn
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
