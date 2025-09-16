import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Alltask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  if (!userData) {
    return null;
  }
  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded flex flex-col gap-1  ">
      <div className="bg-red-500 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5 font-medium text-center">Employee Name</h2>
        <h3 className="w-1/5 font-medium text-center">New Task</h3>
        <h5 className="w-1/5 font-medium text-center">Active Task</h5>
        <h5 className="w-1/5 font-medium text-center">Completed</h5>
        <h5 className="w-1/5 font-medium text-center">Failed</h5>
      </div>
      <div>
        {userData.map((employee, idx) => {
          return (
            <div
              key={employee.id ?? idx}
              className="bg-emerald-950 py-2 px-4 flex justify-between rounded cursor-pointer hover:bg-emerald-900 transition-[1s] my-1 border border-emerald-700"
            >
              <h2 className="w-1/5 font-medium text-center">
                {employee.firstName}
              </h2>
              <h3 className="w-1/5 font-medium text-center">
                {employee.taskCount.newTask}
              </h3>
              <h5 className="w-1/5 font-medium text-center">
                {employee.taskCount.active}
              </h5>
              <h5 className="w-1/5 font-medium text-center">
                {employee.taskCount.completed}
              </h5>
              <h5 className="w-1/5 font-medium text-center">
                {employee.taskCount.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Alltask;
