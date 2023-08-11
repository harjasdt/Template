import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import axios from "axios";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const storedData = JSON.parse(localStorage.getItem("userData"));
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen(!open);
  };
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();

  const loginPage = () => {
    navigate("/login");
  };
  const signUpPage = () => {
    navigate("/register");
  };
  const LogoutPage = () => {
    axios
      .post("http://127.0.0.1:8000/api/logout/", {
        email: storedData.email,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("userData", JSON.stringify(response.data.message));
      });
    navigate("/");
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 bg-[#536162] p-4 pb-4 z-10 mb-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-white font-bold text-lg">
              Finesse360
            </a>
          </div>
          <div className="hidden md:flex ">
            <a href="/" className="text-white mx-4">
              Home
            </a>
            <Link to="Articles" className="text-white mx-4">
              Articles
            </Link>
            <div className="relative text-white mx-4">
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                onClick={toggleDropdown}
                class="flex items-center w-full rounded  focus:text-white hover:bg-transparent"
              >
                Calculators{" "}
                <svg
                  class="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdown"
                className={`z-10 ${
                  open ? "block" : "hidden"
                } bg-white divide-y divide-gray-100 rounded-lg shadow w-[200px]  absolute top-full -right-9`}
              >
                <ul
                  class="py-2 text-sm text-black"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="/mf"
                      class="block px-4 py-2  hover:bg-[#536162] hover:text-white"
                    >
                      Mutual Funds
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sip"
                      class="block px-4 py-2  hover:bg-[#536162] hover:text-white"
                    >
                      Systematic Investment Plan
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ppf"
                      class="block px-4 py-2  hover:bg-[#536162] hover:text-white"
                    >
                      Public Provident Fund
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <Link to="offer" href="/about" className="text-white mx-4">
              About
            </Link>
          </div>
          <div className="flex items-center">
            <div className="md:hidden">
              <button onClick={toggleNavbar}>
                <GiHamburgerMenu className="text-white text-2xl" />
              </button>
            </div>
            {!storedData.flag ? (
              <div className="hidden md:flex space-x-4">
                <button
                  onClick={loginPage}
                  className="bg-[#424642] text-white hover:bg-[#C06014] px-4  py-2 rounded-full"
                >
                  Login
                </button>
                <button
                  onClick={signUpPage}
                  className="bg-[#424642] text-white hover:bg-[#C06014] px-4 py-2 rounded-full"
                >
                  Sign Up
                </button>
              </div>
            ) : (
              <button
                onClick={LogoutPage}
                className="bg-[#424642] text-white hover:bg-[#C06014] px-4 py-2 rounded-full"
              >
                Logout
              </button>
            )}
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-[#536162] mt-2">
            <a href="/" className="block text-white py-2 px-6">
              Home
            </a>
            <a href="/" className="block text-white py-2 px-6">
              Articles
            </a>
            <a href="/" className="block text-white py-2 px-6">
              Calculators
            </a>
            <a href="/" className="block text-white py-2 px-6">
              About
            </a>

            {!storedData.flag ? (
              <div className="hidden md:flex space-x-4">
                <button
                  onClick={loginPage}
                  className="bg-[#424642] text-white hover:bg-[#C06014] px-4  py-2 rounded-full"
                >
                  Login
                </button>
                <button
                  onClick={signUpPage}
                  className="bg-[#424642] text-white hover:bg-[#C06014] px-4 py-2 rounded-full"
                >
                  Sign Up
                </button>
              </div>
            ) : (
              <button
                onClick={LogoutPage}
                className="bg-[#424642] text-white hover:bg-[#C06014] px-4 py-2 rounded-full"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </nav>
    </div>
  );
}
