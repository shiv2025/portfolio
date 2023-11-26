const HomeButtons = ({butonVal ,navTo}) => {
      
  return (
    <button
      className="border-2 border-teal-500 text-white text-md rounded-lg w-32
       hover:border-4 hover:border-teal-500 hover:text-teal-500 hover:text-lg 
       shadow-lg shadow-cyan-500/50 "
      onClick={navTo}
    >
      {butonVal}
    </button>
  );
};

export default HomeButtons;
