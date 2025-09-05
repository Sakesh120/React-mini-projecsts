import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashbord from "./components/Dashbord/AdminDashbord";
import EmployeeDashbord from "./components/Dashbord/EmployeeDashbord";
import { getlocalStrorage, setlocalStrorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      console.log("this is admin");
      setUser("admin");
      console.log(user);
    } else if (email == "user@me.com" && password == "456") {
      console.log("this is User");
      setUser("employee");
      console.log(user);
    } else {
      alert("Invalied Credencials");
    }
  };

  const data = useContext(AuthContext);
  console.log(data);

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user == "admin" ? (
        <AdminDashbord />
      ) : (
        <EmployeeDashbord />
      )}
      {/* {user == "admin" ? <AdminDashbord /> : <EmployeeDashbord />} */}
    </>
  );
};

export default App;
