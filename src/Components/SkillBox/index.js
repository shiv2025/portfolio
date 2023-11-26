const SkillBox = ({ skillData }) => {
  const { name, imgLink } = skillData;
  return (
    <div className="flex flex-col  w-1/5 p-5 items-center text-white text-xl  hover:text-2xl 
      hover:cursor-pointer hover:text-teal-500 hover:font-semibold ">
      <h1 className=" ">{name}</h1>
      <img src={imgLink} alt="" className=" w-40 h-40 rounded-xl " />
    </div>
  );
};

export default SkillBox;
