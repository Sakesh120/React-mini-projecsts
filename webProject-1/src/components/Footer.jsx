import React from 'react'
import assets from '../assets/assets'

const Footer = ({theme}) => {
  return (
    <div className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
        {/* footer top */}
      <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
        <div className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
            <img src={theme === 'dark'? assets.logo_dark: assets.logo} className='w-32 sm:w-44  ' alt="" />
            <p className='max-w-md'>From strategy to execution, we craft digtal solutions that move your business forward.</p>

            <ul className='flex gap-8'>
                <li><a href="#hero" className='hover:text-primary '>Home</a></li>
                <li><a href="#services" className='hover:text-primary '>SErvices</a></li>
                <li><a href="#our-work" className='hover:text-primary '>Our Work</a></li>
                <li><a href="#contact-us" className='hover:text-primary '>Contact us</a></li>
            </ul>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Footer
