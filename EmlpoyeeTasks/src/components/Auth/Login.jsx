import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center px-4">
      <div className="border-2 border-emerald-600 rounded-xl p-6 sm:p-10 md:p-16 lg:p-20 w-full max-w-md bg-[#1c1c1c]">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center w-full"
        >
          {/* Email Input */}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Enter your email.."
            className="w-full border border-amber-100 rounded-xl px-4 py-2 text-base sm:text-lg outline-none"
          />

          {/* Password Input */}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Enter password.."
            className="w-full border border-amber-100 rounded-xl px-4 py-2 text-base sm:text-lg outline-none mt-3"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-7 bg-emerald-600 border border-amber-100 rounded-xl py-3 text-base sm:text-lg font-medium cursor-pointer hover:bg-emerald-700 transition-all duration-300"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
