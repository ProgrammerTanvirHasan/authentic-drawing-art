import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

const Register = () => {
  const { createUser, passError, setPassError, setSuccess } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    setPassError("");

    if (password.length < 8) {
      setPassError("Password mustBe longer");
      return;
    } else if (terms == false) {
      alert("first checked our terms");
      return;
    } else if (!/[a-z]/.test(password)) {
      setPassError("AtLeast one character must be small letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const currentUser = result.user;
        console.log(currentUser);

        Swal.fire({
          title: "Registered Successfully",
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "OK",
        });

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then((result) => {
            setSuccess(result.user);
            console.log("updated successfully");
          })
          .catch((error) => {
            setPassError(error.message);
          });

        alert("user created successfully");

        navigate("/login");
      })
      .catch((error) => {
        setPassError(error.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Enthusiast || Registration</title>
      </Helmet>
      <div className="bg-slate-300 text-3xl text-center">
        <h2>Register page</h2>
      </div>

      <div className="hero bg-slate-300 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              <p>
                If registration has been completed, please log in now.{" "}
                <Link to="/login">
                  <span className="font-bold text-green-900">login</span>
                </Link>{" "}
              </p>
            </p>
          </div>
          <div className="card bg-violet-400 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="YourName"
                  className="input input-bordered"
                />

                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo Url"
                  className="input input-bordered"
                />

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
                <br />

                <label className="label">
                  <p>
                    {" "}
                    <input type="checkbox" name="terms" />{" "}
                    <span>Please check our terms</span>{" "}
                  </p>
                </label>
              </div>
              <div className="form-control ">
                <button className="btn btn-primary">Register</button>
              </div>

              {passError && <p className="text-red-600">{passError}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
