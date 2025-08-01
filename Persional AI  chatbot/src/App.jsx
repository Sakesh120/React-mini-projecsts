import React, { use, useEffect, useRef, useState } from 'react'
import { URL } from './constants'
import RecentSearch from './RecentSearch'
import QuestionAnswer from './QuestionAnswer'

const App = () => {
  const [quetion, setQuestion] = useState('')
  const [result, setResult] = useState([])
  const [recentHistory, setRecentHistory] = useState(JSON.parse(localStorage.getItem('history')))
  const [selectedHistory, setSelectedHistory] = useState('')
  const scrollToAns = useRef()
  const [loader, setLoader] = useState(false)


  const askQuestion = async () => {
    let history = [];
    if (!quetion && !selectedHistory) {
      return false
    }

    if (quetion) {

      if (localStorage.getItem('history')) {
        history = JSON.parse(localStorage.getItem('history'));
        history = [quetion, ...history];
      } else {
        history = [quetion];
      }

      localStorage.setItem('history', JSON.stringify(history));
      setRecentHistory(history); // ✅ flat array, not nested

    }

    const payloadData = quetion ? quetion : selectedHistory
    const payload = {
      "contents": [{
        "parts": [{ "text": payloadData }]
      }]
    }

    setLoader(true)

    let response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(payload)
    });



    response = await response.json();
    let dataString = response.candidates[0].content.parts[0].text;
    dataString = dataString.split("* ").map(item => item.trim());

    setResult(prev => [...prev, { type: 'q', text: quetion ? quetion : selectedHistory }, { type: 'a', text: dataString }]);
    setQuestion('')


    setTimeout(() => {
      scrollToAns.current.scrollTop = scrollToAns.current.scrollHeight
    }, 500);
    setLoader(false)
  };

  const isEnter = (event) => {
    if (event.key == 'Enter') 
      askQuestion();
    }

  useEffect(() => {
    console.log(selectedHistory)
    askQuestion();

  }, [selectedHistory])



  // Dark mode 
  const [darkMode,setDarkMode]=useState('dark')

  useEffect(() => {
    console.log(darkMode)
    if(darkMode=='dark'){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  },[darkMode])

  return (
    <div className={darkMode=='dark'?'dark':'light'}>
    <div className='grid grid-cols-5 h-screen text-center'>
          <select onChange={(event)=>setDarkMode(event.target.value)} className='fixed dark:text-white right-20 p-3 top-3 font-bold shadow dark:shadow-gray-200 rounded-2xl text-gray-700 shadow-gray-600 cursor-pointer'>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
      <RecentSearch recentHistory={recentHistory} setRecentHistory={setRecentHistory} setSelectedHistory={setSelectedHistory} />
      <div className='col-span-4 px-10 py-2'>
        <h1 className='text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-700 to-violet-700 p-2'>Hello Users,Ask me Anything</h1>
        {
          loader ?
            <div role="status" className='flex justify-center'>
              <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
              <span className="sr-only">Loading...</span>
            </div> : null
        }


        <div ref={scrollToAns} className='container h-130 overflow-y-scroll '>
          <div className='dark:text-zinc-300 text-zinc-800'>
            <ul>
              {
                result.map((item, index) => (
                  <QuestionAnswer item={item} key={index}/>

                ))
              }
            </ul>
          </div>
        </div>
        <div className=' w-1/2 dark:text-white m-auto text-gray-700 rounded-3xl border border-zinc-700 flex p-1 h-16  dark:bg-zinc-800 bg-red-100'>
          <input type="text" value={quetion} onKeyDown={isEnter} onChange={(event) => setQuestion(event.target.value)} className='w-full h-full p-3 outline-none' placeholder='Ask me Anything' id='Que' />
          <button onClick={askQuestion} className='cursor-pointer mr-2'>Ask</button>
        </div>
      </div>
    </div>
    </div>
  )
}


export default App