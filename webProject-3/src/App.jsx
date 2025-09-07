import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashbord from "./components/Dashbord/AdminDashbord";
import EmployeeDashbord from "./components/Dashbord/EmployeeDashbord";
import { getlocalStrorage, setlocalStrorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  // Uncomment and fix useEffect if needed
  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setUser(JSON.parse(loggedInUser).role);
  //     }
  //   }
  // }, [authData]);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData?.employees) {
      const employee = authData.employees.find(
        (e) => email === e.email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashbord />
      ) : user === "employee" ? (
        <EmployeeDashbord data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
