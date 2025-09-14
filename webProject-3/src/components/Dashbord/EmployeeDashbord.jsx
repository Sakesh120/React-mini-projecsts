import React from "react";
import Header from "../others/Header";
import TaskListnumbers from "../others/TaskListnumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashbord = (props) => {
  // console.log(data);
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen ">
      <Header data={props.data} changeUser={props.changeUser} />
      <TaskListnumbers data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashbord;
