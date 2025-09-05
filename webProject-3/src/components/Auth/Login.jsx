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
    <div className="flex  h-screen w-screen items-center justify-center">
      <div className="border-2 p-20 border-emerald-600 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className=" border-1 border-amber-100 rounded-xl px-5 py-3 text-xl outline-none "
            type="email"
            placeholder="Enter your email.."
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className=" border-1 border-amber-100 rounded-xl px-5 py-3 text-xl outline-none  mt-3"
            type="password"
            placeholder="Enter password.."
          />
          <button className="mt-7  bg-emerald-600 border-1  border-amber-100 rounded-xl px-[115px] py-3 cursor-pointer focus:bg-emerald-700 transition-[2s] ">
            log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
