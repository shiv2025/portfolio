import GoToHome from "../../Components/BackToHome/index";
import humPeToHaiNaw from "../../Assets/404.jpeg";
const PageNotFound = () => {
  return (
    <>
      <div className="bg-gray-700 h-screen items-center">
        <GoToHome goLink={"/certificate"}></GoToHome>
        <div className="flex  justify-center  text-teal-400 text-6xl ">
          <h1>Error 404 - Page Not Found</h1>
        </div>
        <div className="flex flex-col h-3/4  justify-center items-center">
          <img src={humPeToHaiNaw} alt="" />
          <h1 className="  text-teal-400 text-4xl">Hum pe to hai naw !!</h1>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
