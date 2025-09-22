import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Alltask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  if (!userData) {
    return null;
  }
  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded flex flex-col gap-3">
      {/* Header Row - Hidden on small screens */}
      <div className="hidden sm:flex bg-red-500 py-2 px-4 justify-between rounded text-white font-medium">
        <h2 className="w-1/5 text-center">Employee Name</h2>
        <h3 className="w-1/5 text-center">New Task</h3>
        <h5 className="w-1/5 text-center">Active Task</h5>
        <h5 className="w-1/5 text-center">Completed</h5>
        <h5 className="w-1/5 text-center">Failed</h5>
      </div>

      {/* Data Rows */}
      <div className="flex flex-col gap-2">
        {userData.map((employee, idx) => {
          return (
            <div
              key={employee.id ?? idx}
              className="bg-emerald-950 py-3 px-4 rounded cursor-pointer hover:bg-emerald-900 transition-colors duration-500 border border-emerald-700 text-white"
            >
              {/* Desktop / Tablet View */}
              <div className="hidden sm:flex justify-between text-center">
                <h2 className="w-1/5 font-medium">{employee.firstName}</h2>
                <h3 className="w-1/5">{employee.taskCount.newTask}</h3>
                <h5 className="w-1/5">{employee.taskCount.active}</h5>
                <h5 className="w-1/5">{employee.taskCount.completed}</h5>
                <h5 className="w-1/5">{employee.taskCount.failed}</h5>
              </div>

              {/* Mobile View (stacked card) */}
              <div className="flex flex-col sm:hidden gap-1 text-sm">
                <p>
                  <span className="font-semibold">Name:</span>{" "}
                  {employee.firstName}
                </p>
                <p>
                  <span className="font-semibold">New Task:</span>{" "}
                  {employee.taskCount.newTask}
                </p>
                <p>
                  <span className="font-semibold">Active:</span>{" "}
                  {employee.taskCount.active}
                </p>
                <p>
                  <span className="font-semibold">Completed:</span>{" "}
                  {employee.taskCount.completed}
                </p>
                <p>
                  <span className="font-semibold">Failed:</span>{" "}
                  {employee.taskCount.failed}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Alltask;
