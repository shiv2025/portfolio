import BackToHome from "../../Components/BackToHome/index";
import PageHead from "../../Components/PageHead";
import webChatImg from "../../Assets/webChatImg.png";
import iotImg from "../../Assets/iotImg.png";
import mlImg from "../../Assets/mlImg.png";
import instaClone from "../../Assets/instaImg.png";
import portfolioImg from "../../Assets/portfolioImg.png";
import Project from "../../Components/Project/index";
const Projects = () => {
  return (
    <div className=" flex flex-col bg-gray-700 h-screen">
      <div className=" ">
        <BackToHome goLink={"/"}></BackToHome>
        <PageHead heading={"Projects"}></PageHead>
      </div>
      <div className="flex flex-wrap  items-center justify-evenly">
        <Project
          title="Web Chat Application "
          proImg={webChatImg}
          skills="MERN Stack"
        ></Project>
        <Project
          title="Instagram Clone"
          proImg={instaClone}
          skills="MERN Stack"
        ></Project>
        <Project
          title="Portfolio"
          proImg={portfolioImg}
          skills="ReactJS"
        ></Project>
        <Project
          title="Crypto Price Prediction"
          proImg={mlImg}
          skills="ML , Algo: FB-Prophet"
        ></Project>
        <Project
          title="IOT - Plant Monitoring System"
          proImg={iotImg}
          skills="IOT , C++ , Arduino"
        ></Project>
      </div>
    </div>
  );
};

export default Projects;
