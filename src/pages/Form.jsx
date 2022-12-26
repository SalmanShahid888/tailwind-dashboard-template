import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink, redirect, useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPasword] = useState("");

  const onFormSubmit = () => {
    if (userEmail === "" || userPassword === "") {
      alert("Please fill all the fields");
    } else {
      localStorage.setItem("user", JSON.stringify(userEmail));
      localStorage.setItem("password", JSON.stringify(userPassword));
      setUserEmail(" ");
      setUserPasword(" ");
    }
  };

  return (
    <div
      className="h-screen overflow-hidden flex items-center justify-center"
      style={{ backGround: "White" }}
    >
      <div className="bg-purple-900 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 bottom-0 leading-5 h-full w-full overflow-hidden"></div>
      <div className="relative   min-h-screen  sm:flex sm:flex-row  justify-center bg-transparent rounded-3xl shadow-xl">
        <div className="flex-col flex  self-center lg:px-14 sm:max-w-4xl xl:max-w-md  z-10">
          <div className="self-start hidden lg:flex flex-col  text-gray-300">
            <h1 className="my-3 font-semibold text-4xl">
              Welcome Sign Up to Begin
            </h1>
            <p className="pr-3 text-sm opacity-75">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center  z-10">
          <div className="p-12 bg-white mx-auto rounded-3xl w-96 ">
            <div className="mb-7">
              <h3 className="font-semibold text-2xl text-gray-800">Sign Up </h3>
            </div>
            <div className="space-y-6">
              <div className="">
                <input
                  className=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                  type=""
                  placeholder="Email"
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                    console.log(userEmail);
                  }}
                />
              </div>

              <div className="relative" x-data="{ show: true }">
                <input
                  placeholder="Password"
                  type=""
                  className="text-sm text-gray-200 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400"
                  onChange={(e) => {
                    setUserPasword(e.target.value);
                  }}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm ml-auto">
                  <Link
                    href="#"
                    className="text-purple-700 hover:text-purple-600"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <div>
                <NavLink
                  to="/dashboard"
                  end
                  className="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
                >
                  <span>Sign Up</span>
                </NavLink>
              </div>
              <div className="flex items-center justify-center space-x-2 my-5">
                <span className="h-px w-16 bg-gray-100"></span>
                <span className="text-gray-300 font-normal">or</span>
                <span className="h-px w-16 bg-gray-100"></span>
              </div>
              <div className="flex justify-center gap-5 w-full ">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500"
                >
                  <svg
                    className="w-4 mr-2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#EA4335"
                      d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"
                    />
                    <path
                      fill="#34A853"
                      d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"
                    />
                    <path
                      fill="#4A90E2"
                      d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"
                    />
                  </svg>
                  <svg
                    className="w-4"
                    fill="#fff"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.99 13.9v-3.72h9.36c.14.63.25 1.22.25 2.05 0 5.71-3.83 9.77-9.6 9.77-5.52 0-10-4.48-10-10S6.48 2 12 2c2.7 0 4.96.99 6.69 2.61l-2.84 2.76c-.72-.68-1.98-1.48-3.85-1.48-3.31 0-6.01 2.75-6.01 6.12s2.7 6.12 6.01 6.12c3.83 0 5.24-2.65 5.5-4.22h-5.51v-.01Z"></path>
                  </svg>
                  <span>Google</span>
                </button>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500 px-"
                >
                  <svg
                    className="w-4"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#fff"
                      d="M9.945 22v-8.834H7V9.485h2.945V6.54c0-3.043 1.926-4.54 4.64-4.54 1.3 0 2.418.097 2.744.14v3.18h-1.883c-1.476 0-1.82.703-1.82 1.732v2.433h3.68l-.736 3.68h-2.944L13.685 22"
                    ></path>
                  </svg>
                  <span>Facebook</span>
                </button>
              </div>
            </div>
            <div className="mt-7 text-center text-gray-300 text-xs">
              <span>Copyright © 2023 By XPERTSPOT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
