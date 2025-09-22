import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashbord from "./components/Dashbord/AdminDashbord";
import EmployeeDashbord from "./components/Dashbord/EmployeeDashbord";
import { getlocalStrorage, setlocalStrorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      if (userData.role === "employee" && userData.data) {
        setLoggedInUserData(userData.data);
      }
    }
  }, []);
  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email === e.email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
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
        <AdminDashbord changeUser={setUser} />
      ) : user === "employee" ? (
        <EmployeeDashbord changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
