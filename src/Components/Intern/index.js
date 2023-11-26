import React from 'react'

const Intern = ({company , title ,duration ,logo}) => {
  return (
    <div className="bg-gray-600 border rounded-xl flex flex-col  w-1/5 p-5 items-center">
        <img src={logo} alt="" className=" w-40 h-40 rounded-xl  border-2 border-teal-500" />
      <h1 className="text-white text-xl">{company}</h1>
      <h1 className="text-white text-xl">{title}</h1>
      <h1 className="text-white text-xl">{duration}</h1>
    </div>
    
  )
}

export default Intern