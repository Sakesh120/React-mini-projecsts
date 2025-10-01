import React, { useState, useEffect } from "react";

const ToDoBox = () => {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const savedTasks = localStorage.getItem("todoTasks");
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks));
      } catch (error) {
        console.error("Error parsing saved tasks:", error);
        setTasks([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (inputTask.trim() === "") {
      setError("Please enter a task");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: inputTask.trim(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInputTask("");
    setError("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const completedCount = tasks.filter((task) => task.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="bg-white max-w-[540px] mx-auto mt-[50px] mb-[20px] w-[90%] px-[20px] sm:px-[30px] pt-[40px] pb-[20px] rounded-[15px] shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-bold flex gap-2 items-center mb-[20px] text-[#002765]">
        TO-DO List
        <img
          className="w-[30px] sm:w-[35px]"
          src="/icons.png"
          alt="todo icon"
        />
      </h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0 bg-[#edeef0] rounded-[30px] p-1 mb-[25px]">
        <input
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 bg-transparent px-4 py-3 sm:py-4 text-sm sm:text-base border-0 outline-0 placeholder-gray-500"
          type="text"
          placeholder="Add a new task..."
        />
        <button
          onClick={addTask}
          className="px-[30px] sm:px-[50px] py-[12px] sm:py-[16px] bg-[#ff5945] hover:bg-[#e04a3a] text-white cursor-pointer text-sm sm:text-[16px] rounded-[25px] transition-colors duration-200 font-medium"
        >
          Add
        </button>
      </div>

      {totalCount > 0 && (
        <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
          <span>
            {completedCount} of {totalCount} tasks completed
          </span>
          {completedCount > 0 && (
            <button
              onClick={clearCompleted}
              className="text-[#ff5945] hover:text-[#e04a3a] font-medium transition-colors"
            >
              Clear Completed
            </button>
          )}
        </div>
      )}

      <ul className="space-y-2">
        {tasks.length === 0 ? (
          <li className="text-gray-500 text-center py-8 text-sm">
            No tasks yet. Add one above to get started!
          </li>
        ) : (
          tasks.map((task) => (
            <li
              key={task.id}
              className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 hover:bg-gray-50 ${
                task.completed ? "opacity-60" : ""
              }`}
            >
              <div className="flex items-center flex-1">
                <div className="relative">
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      task.completed
                        ? "bg-green-500 border-green-500"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {task.completed && (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <span
                  className={`ml-3 text-sm sm:text-base transition-all duration-200 ${
                    task.completed
                      ? "line-through text-gray-500"
                      : "text-gray-800"
                  }`}
                >
                  {task.text}
                </span>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="ml-2 w-8 h-8 rounded-full hover:bg-red-100 flex items-center justify-center transition-colors duration-200 text-gray-400 hover:text-red-500"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          ))
        )}
      </ul>

      {totalCount > 0 && (
        <div className="mt-6">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Progress</span>
            <span>{Math.round((completedCount / totalCount) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-[#ff5945] to-[#ff7f6b] h-2 rounded-full transition-all duration-500"
              style={{ width: `${(completedCount / totalCount) * 100}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToDoBox;
