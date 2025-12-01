import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router";
import { UserButton, useUser } from "@clerk/clerk-react";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-3 px-5 flex justify-between items-center shadow-md">
      <img src="/logo1.svg" alt="" width={100} height={100} />
      {isSignedIn ? (
        <div className="flex items-center gap-2">
          <Link to={"/dashboard"}>
            <Button
              variant="outline"
              className=" transition-all cursor-pointer"
            >
              DashBoard
            </Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/sign-in"}>
          <Button className="bg-[#9f5bff] hover:bg-[#6026b0] transition-all cursor-pointer">
            Get Started
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
