import React from "react";

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-10 rounded">
      <form className="flex flex-wrap items-start justify-between w-full  ">
        <div className="w-1/2 ">
          <div className="mt-2">
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              type="text"
              placeholder="Make a UI design"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-white"
            />
          </div>
          <div className="mt-2">
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              type="date"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-white"
            />
          </div>
          <div className="mt-2">
            <h3 className="text-sm text-gray-300 mb-0.5 ">Asign to</h3>
            <input
              type="text"
              placeholder="Employee name"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-white"
            />
          </div>
          <div className="mt-2">
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              type="text"
              placeholder="design, dev, etc."
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-white"
            />
          </div>
        </div>

        <div className="w-1/2 flex flex-col gap-2">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-white"
          ></textarea>
        </div>
        <button className="w-full bg-green-500 mt-10 rounded-[5px] p-2 shadow shadow-gray-500 cursor-pointer hover:w-[80vw] transition-[3s] mx-auto ">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
