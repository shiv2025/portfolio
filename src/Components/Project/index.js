import React from 'react'

const Project = ({title,proImg,skills}) => {
  return (
    <div className='flex flex-col w-1/5 h-72 m-5 border-2 border-white
     bg-gray-600 rounded-lg text-white text-md font-mono
        hover:border-teal-500 hover:h-84 hover:text-teal-900 hover:point
         hover:font-semibold hover:border-4 hover:text-lg hover:bg-gray-400
         shadow-lg shadow-cyan-500/100 '>
        <h1>{title}</h1>
        <img className=' h-56 w-76' src={proImg}  alt="" />
        <h1>{skills}</h1>
    </div>
  )
}

export default Project