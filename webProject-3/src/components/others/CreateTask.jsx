import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTasktitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [task, setTask] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      assignTo,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    setTask(newTask); // keep state updated for UI

    const data = JSON.parse(localStorage.getItem("employees"));
    data.forEach((elem) => {
      if (assignTo === elem.firstName) {
        elem.tasks.push(newTask); // ✅ use newTask, not "task"
        console.log(elem);
      }
    });

    localStorage.setItem("employees", JSON.stringify(data));
    setTasktitle("");
    setTaskDescription("");
    setTaskDate("");
    setCategory("");
    setAssignTo("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-10 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap items-start justify-between w-full  "
      >
        <div className="w-1/2 ">
          <div className="mt-2">
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTasktitle(e.target.value)}
              type="text"
              placeholder="Make a UI design"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-white"
            />
          </div>
          <div className="mt-2">
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              placeholder="Select a date"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-white focus:border-blue-400 focus:ring-1 focus:ring-blue-300 transition"
            />
          </div>
          <div className="mt-2">
            <h3 className="text-sm text-gray-300 mb-0.5 ">Asign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              type="text"
              placeholder="Employee name"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-white"
            />
          </div>
          <div className="mt-2">
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="design, dev, etc."
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-white"
            />
          </div>
        </div>

        <div className="w-1/2 flex flex-col gap-2">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            name=""
            id=""
            cols="30"
            rows="10"
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-white"
          ></textarea>
        </div>
        <button className="w-full bg-green-500 mt-10 rounded-[5px] p-2 shadow shadow-gray-500 cursor-pointer  hover:bg-green-600 transition-[3s] mx-auto ">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
