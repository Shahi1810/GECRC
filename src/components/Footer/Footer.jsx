import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 font-montserrat">
            <Link to="/" className="flex items-center font-montserrat font-bold italic">
              <img src={logo} className="mr-3 h-16" alt="Logo" />
              GECRC
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 lg:grid-cols-3 font-montserrat">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.facebook.com/people/Global-Environmental-Consultancy-And-Research-Centre/100076337527130/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/in/global-laboratory-b1a7481aa/?originalSubdomain=in"
                    className="hover:underline"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link to="#" className="text-gray-500 hover:text-gray-900">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link to="#" className="text-gray-500">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 40 50"
              >
                <path
                  fillRule="evenodd"
                  d="M36,6H12c-3.314,0-6,2.686-6,6v24c0,3.314,2.686,6,6,6h24c3.314,0,6-2.686,6-6V12 C42,8.686,39.314,6,36,6z M17,36h-5V21c0-1.105,0.895-2,2-2h3V36z M15.122,16.925c-1.861,0.449-3.496-1.186-3.047-3.047 c0.211-0.875,0.928-1.592,1.803-1.803c1.861-0.448,3.495,1.186,3.047,3.047C16.714,15.997,15.997,16.714,15.122,16.925z M36,36h-3 c-1.105,0-2-0.895-2-2l0-6.83c0-1.624-1.216-3.081-2.839-3.166C26.431,23.914,25,25.29,25,27v9h-5V21c0-1.105,0.895-2,2-2h3v2 c0,0,1.5-2,4.5-2c3.866,0,6.5,2.768,6.5,7V36z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">LinkedIn page</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
