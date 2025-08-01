

const RecentSearch = ({recentHistory,setRecentHistory,setSelectedHistory}) => {

    const clearHistory = () => {
        localStorage.clear();
        setRecentHistory([])
    }

    return (
        <>
            <div className='col-span-1 dark:bg-zinc-800 bg-red-200 '>
                <h1 className='flex justify-between items-center text-2xl dark:text-white text-amber-950 p-2'><span>Recent History</span><button onClick={clearHistory} className='cursor-pointer w-7 p-1 hover:bg-zinc-700'><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#F3F3F3"><path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" /></svg></button></h1>
                <ul className='dark:text-zinc-400 text-left overflow-auto absolute bottom-3 w-75 text-red-900'>
                    {
                        recentHistory && recentHistory.map((item, index) => (
                            <li
                                onClick={() => setSelectedHistory(item)}
                                className='w-full p-1 pl-3 truncate  cursor-pointer hover:bg-zinc-500 dark:hover:bg-zinc-700 hover:text-zinc-100' key={index} >
                                {item}
                            </li>
                        ))
                    }
                </ul>

            </div>
        </>
    )
}


export default RecentSearch