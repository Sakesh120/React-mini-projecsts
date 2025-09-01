import React from "react";
import Header from "../others/Header";
import TaskListnumbers from "../others/TaskListnumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashbord = () => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen ">
      <Header />
      <TaskListnumbers />
      <TaskList />
    </div>
  );
};

export default EmployeeDashbord;
