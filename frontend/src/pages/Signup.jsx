/**
 * File: SignUp.js
 * Description: This file defines the SignUp component, which represents the sign-up page of the application.
 * Users can create a new account by providing their email address, password, and confirming the password.
 * They can also navigate to the sign-in page by clicking the "log into your account" link.
 */

// Import necessary modules from React and react-router-dom
import { Link } from "react-router-dom";
import { useState } from "react";

// Import useSignUp hook
import useSignUp from "../hooks/useSignUp";

// Import toast from react toastify
import { toast } from "react-toastify";

// Define the SignUp component as a functional component
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("");

  // useSignUp hook
  const { SignupUser } = useSignUp();

  // Loader Context

  const SignupHandler = async (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      toast.error("Password didn't match try again");
    } else {
      SignupUser(email, password, image);
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left-side content for the sign-up page */}
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            {/* Application logo */}
            <img
              className="h-12 w-auto"
              src="https://i.ibb.co/F7bvD64/Logo-1.png"
              alt="Logo"
            />
            {/* Sign-up heading */}
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
              Create a new Account
            </h2>
            {/* Sign-in link */}
            <p className="mt-2 text-sm text-gray-600">
              Or{" "}
              <Link
                to="/signin"
                className="font-medium text-primary-color hover:text-primary-color-shade2"
              >
                log into your account
              </Link>
            </p>
          </div>

          {/* Sign-up form */}
          <div className="mt-8">
            <div className="mt-6">
              <form className="space-y-6" onSubmit={SignupHandler}>
                <div>
                  {/* Email address input */}
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary-color-shade2 focus:outline-none focus:ring-primary-color-shade2 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  {/* Password input */}
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary-color-shade2 focus:outline-none focus:ring-primary-color-shade2 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  {/* Confirm Password input */}
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="confirm-password"
                      name="confirm-password"
                      type="password"
                      autoComplete="new-password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary-color-shade2 focus:outline-none focus:ring-primary-color-shade2 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-6 mt-5">
                  <div className="mt-1 flex items-center">
                    {/* PlaceholderUserImage displays the current profile picture */}
                    <img
                      className="inline-block h-12 w-12 rounded-full object-cover"
                      src="https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"
                      alt="User Profile"
                    />
                    <div className="ml-4 flex">
                      {/* Render a div element with appropriate styling for the image selector */}
                      <div className="relative flex cursor-pointer items-center rounded-md border border-gray-500  py-2 px-3 shadow-sm focus-within:outline-none focus-within:ring-2  focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 hover:bg-primary">
                        {/* Render the child elements passed to the ImageSelector */}
                        <label
                          htmlFor="remember-me"
                          className="block text-sm text-gray-500"
                        >
                          {/* Render the label text */}
                          Change Image
                        </label>
                        <input
                          name="input"
                          type="file"
                          onChange={(e) => setImage(e.target.files[0])}
                          className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {/* Remember me checkbox */}
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary-color focus:ring-primary-color"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                <div>
                  {/* Sign-up button */}
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-primary-color py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-color-shade2 focus:outline-none focus:ring-2 focus:ring-primary-color-shade2 focus:ring-offset-2"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Right-side content for the sign-up page */}
      <div className="relative hidden w-0 flex-1 lg:block">
        {/* Background image */}
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://i.ibb.co/crwKwCm/irina-iriser-FEIdfzc-I8-IE-unsplash.jpg"
          alt="Background"
        />
      </div>
    </div>
  );
};

// Export the SignUp component to be used in other parts of the application
export default SignUp;
