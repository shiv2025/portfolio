import React from "react";

const Qualification = ({ data }) => {
  const { course, duration, college } = data;
  return (
    <div className="flex flex-col m-2 border-4  border-white
    bg-gray-500 text-white text-lg rounded-lg  w-2/5 h-2/5 p-10 items-center
      hover:w-5/12 hover:h-5/12 hover:border-teal-600  hover:cursor-pointer
      hover:text-teal-700 hover:text-xl hover:bg-gray-300">
      <h1 className=" font-extrabold">{course}</h1>
      <h1>{duration}</h1>
      <h1>{college}</h1>
    </div>
  );
};

export default Qualification;
