import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
  const {
    setUser,
    signIn,
    googleSignIn,
    githubSignIn,
    setSuccess,
    passError,
    setPassError,
  } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setSuccess("");

    signIn(email, password)
      .then((result) => {
        const signUser = result.user;
        console.log(result.user, "logged");
        setUser(signUser);

        Swal.fire({
          title: "LogIn successfully",
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "OK",
        });

        alert("signIn successfully");

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        setPassError("please check first");
      });
  };

  const handleGoogle = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const googleUser = result.user;
        Swal.fire({
          title: "LogIn successfully",
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
        setUser(googleUser);

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGithub = () => {
    githubSignIn(githubProvider)
      .then((result) => {
        const gitUser = result.user;
        Swal.fire({
          title: "LogIn successfully",
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
        setUser(gitUser);

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Enthusiast || logIn</title>
      </Helmet>
      <div className="hero bg-base-300 py-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              <p>
                If you have not registered on our page, please go and complete
                the registration first.
                <Link to="/register">
                  <span className="font-bold text-green-900">Register</span>
                </Link>{" "}
              </p>
            </p>
          </div>
          <div className="card bg-violet-400 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="flex gap-4">
                <button className="btn  btn-success" onClick={handleGoogle}>
                  SignInWithGoogle
                </button>
                <button onClick={handleGithub} className="btn btn-secondary">
                  SignInWithGithub
                </button>
              </div>

              {passError && <p className="text-red-600">{passError}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
