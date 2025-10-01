import React from "react";
import ToDoBox from "./ToDoBox";
import "./App.css";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e1a78] to-[#0f172a] min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 flex justify-center items-center">
        <ToDoBox />
      </div>

      <footer className="text-center text-white/60 text-sm mt-8">
        <p>Made with ❤️ using React & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
