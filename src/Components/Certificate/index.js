import { useNavigate } from "react-router-dom";

const Certification = ({ certificate, title, brand, brandLogo, techLogo, skills }) => {
  const navigate = useNavigate();
  console.log(certificate);
  const handleClick = () => {
    
    navigate('/certificate/${certificate}');
  };
  return (
    <div
      className="bg-gray-600 border rounded-xl flex flex-col  w-1/5 h-80 justify-evenly  p-1 items-center
       hover:cursor-pointer text-white hover:text-teal-900 hover:border-4  hover:border-teal-400 hover:bg-gray-500"
      onClick={handleClick}
    >
      <div className="flex w-full justify-evenly items-center p-5">
        <h1 className=" text-3xl font-bold">{title}</h1>
        <img
          src={techLogo}
          alt=""
          className=" w-24 h-24 rounded-xl  "
        />

      </div>
      <div className="flex w-full justify-evenly items-center p-5">
        <h1 className=" text-2xl ">Provided By: {brand}</h1>
        <img
          src={brandLogo}
          alt=""
          className=" w-24 h-24 rounded-xl  "
        />
      </div>
      <h1 className="text-white text-md font-semibold">Skills: {skills}</h1>
    </div>
  );
};

export default Certification;
