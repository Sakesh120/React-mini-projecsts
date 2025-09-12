import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  if (!data || !data.tasks) {
    return null; // Or show a loading spinner/message
  }
  return (
    <div
      id="tastlist"
      className="h-[55%] overflow-x-auto lg:py-5 py-2 w-full lg:mt-10 mt-7 grid lg:grid-cols-2  mx-auto sm:grid-cols-2 lg:flex  items-center justify-center  sm:mx-[6vw]  lg:mx-auto gap-5 flex-wrap lg:flex-nowrap lg:justify-start"
    >
      {data.tasks.map((elem, idx) => (
        <React.Fragment key={idx}>
          {elem.active && <AcceptTask data={elem} />}
          {elem.newTask && <NewTask data={elem} />}
          {elem.completed && <CompleteTask data={elem} />}
          {elem.failed && <FailedTask data={elem} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TaskList;
