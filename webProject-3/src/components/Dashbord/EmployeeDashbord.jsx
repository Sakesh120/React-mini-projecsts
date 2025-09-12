import React from "react";
import Header from "../others/Header";
import TaskListnumbers from "../others/TaskListnumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashbord = ({ data }) => {
  // console.log(data);
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen ">
      <Header data={data} />
      <TaskListnumbers data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashbord;
