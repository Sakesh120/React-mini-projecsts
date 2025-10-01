import React, { useRef, useState } from "react";

const ToDoBox = () => {
  const [task, setTask] = useState("");
  const listref = useRef();
  const AddTask = () => {
    if (task == "") {
      alert("Enter the task");
    } else {
      let li = document.createElement("li");
      li.innerHTML = task;
      listref.appendChild(li);
    }
  };
  return (
    <div className="bg-white max-w-[540px]  mx-auto mt-[100px] mb-[20px] w-[100%] px-[30px] pt-[40px] pb-[20px] rounded-[10px] shadow shadow-amber-900 ">
      <h2 className="text-2xl font-bold flex gap-2 items-center mb-[10px] text-[#002765]">
        TO-DO List
        <img className="w-[30px] bl-[10px] " src="/icons.png" alt="" />
      </h2>
      <div className="flex items-center justify-between bg-[#edeef0] rounded-[30px] pl-20px mb-[25px] [&>*]:border-0 [&>*]:outline-0">
        <input
          onChange={(e) => setTask(e.target.value)}
          className="flex-[1] bg-transparent pl-4"
          type="text"
        />
        <button
          onClick={AddTask}
          className="px-[50px] py-[16px] bg-[#ff5945] text-white cursor-pointer text-[16px] rounded-[420px]"
        >
          Add
        </button>
      </div>
      <ul ref={listref} id="list-container"></ul>
    </div>
  );
};

export default ToDoBox;
