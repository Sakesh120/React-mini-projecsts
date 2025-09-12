import React, { useState } from "react";
import { setlocalStrorage } from "../../utils/localStorage";

const Header = ({ data }) => {
  // const [username, setUsername] = useState("");
  // if (!data) {
  //   setUsername("Admin");
  // } else {
  //   setUsername(data.firstName);
  // }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">
          {data?.firstName ? `${data.firstName}👋` : "User👋"}
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium"
      >
        log out
      </button>
    </div>
  );
};

export default Header;
