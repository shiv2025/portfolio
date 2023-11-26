import {
  IconBrandLinkedin,
  IconPhoneCall,
  IconMapPin,
  IconMail,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import PageHead from "../../Components/PageHead/index";
import HomeButtons from "../../Components/HomeButtons/index";
import ContactIcons from "../../Components/ContactIcons";
import tommy from "../../Assets/shivImg.jpg";

const Home = () => {
  const navigate = useNavigate();
  const navToSkill = () => {
    navigate("/skill");
  };
  const navToEducation = () => {
    navigate("/education");
  };
  const navToInternship = () => {
    navigate("/internship");
  };
  const navToCertificate = () => {
    navigate("/certificate");
  };
  const navToProject = () => {
    navigate("/project");
  };
  return (
    <>
      <div className="bg-gray-800 w-full h-screen flex flex-col justify-evenly  items-center ">
        <div className="flex items-center w-full justify-evenly">
          <div className=" ">
            <PageHead heading={"Shivansh Sethi"}></PageHead>
            <h1 className=" text-3xl font-serif font-semibold text-teal-700">
              MERN Developer
            </h1>
            <h1 className=" text-xl font-serif font-semibold text-teal-700">
              BCA'21 | MCA'23{" "}
            </h1>
          </div>
          <div className="">
            <img
              src={tommy}
              className=" w-48 h-48 border-4 border-teal-600  rounded-full
              shadow-lg shadow-cyan-500/25"
              alt=""
            />
          </div>
        </div>

        <div className=" flex w-full items justify-evenly">
          <ContactIcons
            iconName={IconBrandLinkedin}
            iconData="www.linkedin.com"
          ></ContactIcons>
          <ContactIcons
            iconName={IconPhoneCall}
            iconData="7895300286"
          ></ContactIcons>
          <ContactIcons
            iconName={IconMail}
            iconData="shivanshsethi7895@gmail.com"
          ></ContactIcons>
          <ContactIcons
            iconName={IconMapPin}
            iconData="Dehradun"
          ></ContactIcons>
        </div>

        <div className="w-3/5 text-xl font-semibold font-mono text-teal-700">
          <p className=" font-mono  ">
            Hi, I'm Shivansh Sethi, a passionate and dedicated software
            developer with a strong foundation in Full Stack Development. My
            expertise spans from crafting responsive and dynamic user interfaces
            with React to building robust backends with Node.js and MongoDB.
          </p>
          <p>
            Proficient in version control using GitHub, I also bring Java and C
            programming skills to the table. Currently seeking exciting
            opportunities to contribute my skills and enthusiasm to innovative
            projects. Let's build something amazing together!
          </p>
        </div>

        <div className=" flex justify-evenly w-full h-12  ">
          <HomeButtons
            butonVal="Education"
            navTo={navToEducation}
          ></HomeButtons>
          <HomeButtons butonVal="Skills" navTo={navToSkill}></HomeButtons>
          <HomeButtons
            butonVal="Internship"
            navTo={navToInternship}
          ></HomeButtons>
          <HomeButtons butonVal="Projects" navTo={navToProject}></HomeButtons>
          <HomeButtons
            butonVal="Certificates"
            navTo={navToCertificate}
          ></HomeButtons>
        </div>
      </div>
    </>
  );
};

export default Home;
