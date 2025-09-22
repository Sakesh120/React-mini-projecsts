import React from "react";

const TaskListnumbers = ({ data }) => {
  if (!data || !data.taskCount) {
    return null; // Or show a loading spinner/message
  }
  return (
    <div className="flex mt-10 lg:justify-between gap-5 flex-wrap lg:flex-nowrap justify-around">
      <div className="w-[40%] lg:py-6 lg:px-9 py-3 px-5 bg-red-400 rounded-xl">
        <h1 className="text-3xl font-semibold">{data.taskCount.newTask}</h1>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="w-[40%] lg:py-6 lg:px-9 py-3 px-5 bg-blue-400 rounded-xl">
        <h1 className="text-3xl font-semibold">{data.taskCount.active}</h1>
        <h3 className="text-xl font-medium">Active Task</h3>
      </div>
      <div className="w-[40%] lg:py-6 lg:px-9 py-3 px-5 bg-green-400 rounded-xl">
        <h1 className="text-3xl font-semibold">{data.taskCount.completed}</h1>
        <h3 className="text-xl font-medium">Completed task</h3>
      </div>
      <div className="w-[40%] lg:py-6 lg:px-9 py-3 px-5 bg-yellow-400 rounded-xl">
        <h1 className="text-3xl font-semibold">{data.taskCount.failed}</h1>
        <h3 className="text-xl font-medium">Failed task</h3>
      </div>
    </div>
  );
};

export default TaskListnumbers;
