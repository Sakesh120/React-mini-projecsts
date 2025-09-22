const RecentSearch = ({
  recentHistory,
  setRecentHistory,
  setSelectedHistory,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const clearHistory = () => {
    localStorage.clear();
    setRecentHistory([]);
  };

  const handleItemClick = (item) => {
    setSelectedHistory(item);
    // Close mobile menu when item is selected
    if (setIsMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block col-span-1 dark:bg-zinc-800 bg-red-200">
        <h1 className="flex justify-between items-center text-2xl dark:text-white text-amber-950 p-2">
          <span>Recent History</span>
          <button
            onClick={clearHistory}
            className="cursor-pointer w-7 p-1 hover:bg-zinc-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#F3F3F3"
            >
              <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
            </svg>
          </button>
        </h1>
        <ul className="dark:text-zinc-400 text-left overflow-auto absolute bottom-3 w-75 text-red-900">
          {recentHistory &&
            recentHistory.map((item, index) => (
              <li
                onClick={() => handleItemClick(item)}
                className="w-full p-1 pl-3 truncate cursor-pointer hover:bg-zinc-500 dark:hover:bg-zinc-700 hover:text-zinc-100"
                key={index}
              >
                {item}
              </li>
            ))}
        </ul>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed inset-y-0 left-0 w-80 dark:bg-zinc-800 bg-red-200 z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center text-2xl dark:text-white text-amber-950 p-2 border-b border-zinc-600">
          <span>Recent History</span>
          <div className="flex items-center space-x-2">
            <button
              onClick={clearHistory}
              className="cursor-pointer w-7 p-1 hover:bg-zinc-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#F3F3F3"
              >
                <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
              </svg>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="cursor-pointer w-7 p-1 hover:bg-zinc-700"
            >
              <svg
                className="w-6 h-6"
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
          </div>
        </div>
        <ul className="dark:text-zinc-400 text-left overflow-y-auto h-full pb-20 text-red-900">
          {recentHistory &&
            recentHistory.map((item, index) => (
              <li
                onClick={() => handleItemClick(item)}
                className="w-full p-2 pl-3 truncate cursor-pointer hover:bg-zinc-500 dark:hover:bg-zinc-700 hover:text-zinc-100 border-b border-zinc-600 last:border-b-0"
                key={index}
              >
                {item}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default RecentSearch;
