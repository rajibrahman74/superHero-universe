import { useState } from "react";
import { Link } from "react-router-dom";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../providers/AuthProviders";
// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// import app from "../../firebase/firebase.config";
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

const Login = () => {
  // const { singIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  // const navigate = useNavigate();
  // const location = useLocation();

  // const from = location.state?.from?.pathname || "/";

  // const handleLogIn = (e) => {
  //   e.preventDefault();

  //   const form = e.target;
  //   const email = form.email.value;
  //   const password = form.password.value;

  //   // Check for blank input fields
  //   if (!email || !password) {
  //     toast.error("A user cannot login empty email and password fields");
  //     return;
  //   }

  //   singIn(email, password)
  //     .then((result) => {
  //       const loggedUser = result.user;
  //       console.log(loggedUser);
  //       toast.success("User login successfully");
  //       form.reset();
  //       navigate(from, { replace: true });
  //     })
  //     .catch((error) => {
  //       console.error(error.message);
  //       if (error.code === "auth/wrong-password") {
  //         toast.error("Incorrect password. Please try again.");
  //       } else {
  //         toast.error(error.message);
  //       }
  //     });
  // };

  // toggle show password
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // google login
  // const handleWithGoogleSingIn = () => {
  //   signInWithPopup(auth, googleProvider)
  //     .then((result) => {
  //       const loggedInGoogleUser = result.user;
  //       console.log(loggedInGoogleUser);
  //       toast.success("User login successfully");
  //       navigate(from, { replace: true });
  //     })
  //     .catch((error) => {
  //       console.error(error.message);
  //       if (error.code === "auth/user-not-found") {
  //         toast.error("User not found. Please sign up to continue.");
  //       } else {
  //         toast.error(error.message);
  //       }
  //     });
  // };

  return (
    <section className="max-w-7xl flex flex-col sm:flex-row justify-evenly mx-auto px-4 py-12">
      <div className="w-1/2">
        <img
          className="w-[75%]"
          src="https://i.ibb.co/jMSywVG/login-page-2578971-2147152-removebg-preview.png"
          alt=""
        />
      </div>
      <div className="w-1/2">
        {/* Component: Card with form */}
        <form
          // onSubmit={handleLogIn}
          className="max-w-[415px] h-[505px] mx-auto overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200"
        >
          {/* Body*/}
          <div className="p-6">
            <header className="mb-4 text-center">
              <h3 className="text-xl font-medium text-slate-700">Sign in</h3>
            </header>
            <div className="flex flex-col">
              {/* Input field */}
              <div className="relative my-6">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your name"
                  className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b03"
                  className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Your email
                </label>
                <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
                  <span>Type your email address</span>
                </small>
              </div>
              {/* Input field */}
              <div className="relative my-6">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="your password"
                  className="relative w-full h-10 px-4 pr-12 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b13"
                  className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Your password
                </label>
                <svg
                  onClick={toggleShowPassword}
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-2.5 right-4 h-5 w-5 stroke-slate-400 cursor-pointer peer-disabled:cursor-not-allowed"
                  fill={showPassword ? "none" : "currentColor"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
                <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
                  <span>Type your password</span>
                </small>
              </div>
            </div>
          </div>
          {/* Action base sized basic button */}
          <div className="flex justify-end p-6 -mt-5">
            <button
              type="submit"
              className="btn border-0 inline-flex items-center justify-center w-full h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-warning disabled:cursor-not-allowed disabled:borde"
            >
              <span>Sign in</span>
            </button>
          </div>
          <div className="-mt-1 text-center text-md transition text-slate-400 peer-invalid:text-pink-500">
            Create New Account
            <Link className="ml-1 text-warning font-semibold" to="/signup">
              Sign up
            </Link>
          </div>
          <div className="w-full px-6 flex items-center text-center mx-auto py-5">
            <hr className="flex-1 border-t border-slate-200" />
            <span className="my-0 mx-[10px] font-bold text-slate-400">or</span>
            <hr className="flex-1 border-t border-slate-200" />
          </div>
          <div
            // onClick={handleWithGoogleSingIn}
            className="flex items-center justify-center gap-[6px] w-ful; mx-6 h-[50px] border border-slate-200 rounded-md cursor-pointer"
          >
            <img
              className="w-11 h-11 rounded-md"
              src="https://i.ibb.co/WDm81SD/unnamed-removebg-preview.png"
              alt=""
            />
            <span>Continue with Google</span>
          </div>
        </form>
        {/* End Card with form */}
      </div>
    </section>
  );
};

export default Login;
