import React from 'react'

const Login = () => {
  return (
    <div className='flex  h-screen w-screen items-center justify-center'>
      <div className='border-2 p-20 border-emerald-600 rounded-xl'>
          <form className='flex flex-col items-center justify-center' >
            <input required className=' border-1 border-amber-100 rounded-xl px-5 py-3 text-xl outline-none ' type="email" placeholder='Enter your email..' />
            <input required className=' border-1 border-amber-100 rounded-xl px-5 py-3 text-xl outline-none  mt-3'  type="password" placeholder='Enter password..' />
            <button className='mt-7  bg-emerald-600 border-1  border-amber-100 rounded-xl px-5 py-3 cursor-pointer'>log in</button>
          </form>
      </div>
    </div>
  )
}

export default Login
