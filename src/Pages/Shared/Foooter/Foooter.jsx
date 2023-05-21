import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="relative">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);",
        }}
      />
      {/* component */}
      <div className="absolute top-0 flex items-end w-full bg-white">
        <footer className="w-full px-4 mx-auto text-gray-700 bg-gray-100 body-font">
          <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
              <div className="logo flex items-center mx-auto md:mx-0">
                <div className="flex justify-center items-center mx-auto md:mx-0">
                  <span className="superhero text-warning opacity-75 font-bold text-base md:text-[18px] -mr-4">
                    superHero
                  </span>
                  <img
                    className="logo-image mr-2 w-16 h-10"
                    src="https://i.ibb.co/r22wffD/logo.png"
                    alt="Logo"
                  />
                  <span className="universe text-[#c3ad42] text-base md:text-[18px] -ml-6 font-extrabold">
                    Universe
                  </span>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Design, Code and Ship!
              </p>
              <div className="mt-4">
                <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-700">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={0}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx={4} cy={4} r={2} stroke="none" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
            <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                  About
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Company
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Careers
                    </a>
                  </li>
                  <li className="mt-3">
                    <Link
                      to="/blog"
                      className="text-gray-500 cursor-pointer hover:text-gray-900"
                    >
                      Blog
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                  Support
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Contact Support
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Help Resources
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Release Updates
                    </a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                  Platform
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Terms &amp; Privacy
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Pricing
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      FAQ
                    </a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                  Contact & Address
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Send a Message
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      Request a Quote
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      +82-456-7890
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      seoul, south korea
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                      superheoruniverse.com
                    </a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-gray-300">
            <div className="container px-5 py-4 mx-auto">
              <p className="text-sm text-gray-700 capitalize text-center mx-auto">
                © 2023 All rights reserved superHero Universe
              </p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
