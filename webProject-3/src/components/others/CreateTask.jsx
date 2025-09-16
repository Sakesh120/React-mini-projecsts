import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, setTasktitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // Create updated employees array immutably
    const updatedEmployees = (userData || []).map((employee) => {
      if (assignTo === employee.firstName) {
        return {
          ...employee,
          tasks: [...employee.tasks, newTask],
          taskCount: {
            ...employee.taskCount,
            newTask: employee.taskCount.newTask + 1,
          },
        };
      }
      return employee;
    });

    setUserData(updatedEmployees);
    try {
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    } catch (err) {
      console.error("Failed to persist employees to localStorage", err);
    }

    console.log(updatedEmployees);
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
