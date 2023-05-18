import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gray-100 sticky top-0 z-10">
      <nav className="navbar max-w-7xl mx-auto flex justify-between items-center px-4 py-5">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                exact
                activeclassName="active text-[#757575] font-semibold hover:text-warning"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeclassName="active text-[#757575] font-semibold hover:text-warning"
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active text-[#757575] font-semibold hover:text-warning"
                to="/"
              >
                All Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active text-[#757575] font-semibold hover:text-warning"
                to="/"
              >
                My Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active text-[#757575] font-semibold hover:text-warning"
                to="/"
              >
                Add A Toy
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active text-[#757575] font-semibold hover:text-warning"
                to="/login"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="md:me-auto my-auto">
          <Link to="/">
            <div className="logo flex items-center">
              <div className="flex justify-center items-center">
                <span className="superhero text-[#e6281a] font-bold text-base md:text-[22px] -mr-5">
                  superHero
                </span>
                <img
                  className="logo-image mr-2 w-20 h-12"
                  src="https://i.ibb.co/r22wffD/logo.png"
                  alt="Logo"
                />
                <span className="universe text-[#c3ad42] font-bold text-base md:text-[22px] -ml-7">
                  Universe
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <div className="hidden lg:flex ms-auto me-5">
            <ul className="flex items-center gap-7 px-1">
              <li>
                <NavLink
                  activeClassName="active text-[#757575] font-semibold hover:text-warning"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active text-[#757575] font-semibold hover:text-warning"
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active text-[#757575] font-semibold hover:text-warning"
                  to="/register"
                >
                  All Toys
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active text-[#757575] font-semibold hover:text-warning"
                  to="/register"
                >
                  My Toys
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active text-[#757575] font-semibold hover:text-warning"
                  to="/register"
                >
                  Add A Toy
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active text-[#757575] font-semibold hover:text-warning"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <img
              // title={user.displayName}
              className="w-12 h-12 rounded-full"
              // src={user.photoURL}
              src="https://media.licdn.com/dms/image/D5603AQEY32qG8cq1RA/profile-displayphoto-shrink_200_200/0/1671728550172?e=1689811200&v=beta&t=uht7relojC9feSngy1fNK7gZ29nIOnkwx9YvRvVfrL4"
              alt=""
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
