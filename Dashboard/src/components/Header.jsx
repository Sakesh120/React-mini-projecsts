import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row d-flex align-items-center">
            {/* logowrapper */}
            <div className="logoDiv col-xs-3">
              <Link to={"/"} className="d-flex align-items-center ">
                <img src="../logo.png" className="logo" />
                <span className="ml-2 "> HOTASH</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
