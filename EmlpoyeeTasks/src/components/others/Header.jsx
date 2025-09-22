import React from "react";

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-0">
      {/* Greeting */}
      <h1 className="text-xl sm:text-2xl font-medium leading-snug">
        Hello <br />
        <span className="text-2xl sm:text-3xl font-semibold block">
          {props.data?.firstName ? `${props.data.firstName}👋` : "User👋"}
        </span>
      </h1>

      {/* Logout Button */}
      <button
        onClick={logOutUser}
        className="bg-red-500 hover:bg-red-600 transition-colors text-white px-4 sm:px-5 py-2 rounded-md text-base sm:text-lg font-medium w-full sm:w-auto"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
