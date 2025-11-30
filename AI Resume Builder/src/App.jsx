import React from "react";
import { Button } from "./components/ui/button";
import { Navigate, Outlet } from "react-router";
import { useUser } from "@clerk/clerk-react";
const App = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  if (!isSignedIn && isLoaded) {
    {
      return <Navigate to={"/sign-in"} />;
    }
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
