import SkillBox from "../../Components/SkillBox/index";
import html from "../../Assets/html.png";
import css from "../../Assets/css.png";
import js from "../../Assets/js.png";
import reactNative from "../../Assets/reactNative.png";
import reactjs from "../../Assets/reactjs.png";
import c from "../../Assets/C.png";
import expressJS from "../../Assets/expressJS.png";
import gitHub from "../../Assets/gitHub.png";
import java from "../../Assets/java.png";
import mongoDB from "../../Assets/mongoDB.png";
import nodeJS from "../../Assets/nodeJS.png";
import sql from "../../Assets/sql.png";
import tailwind from "../../Assets/tailwind.png";
import BackToHome from "../../Components/BackToHome";
import PageHead from "../../Components/PageHead";

const Skills = () => {
  const skillData = [
    { name: "HTML", imgLink: html },
    { name: "CSS", imgLink: css },
    { name: "Java Script", imgLink: js },
    { name: "React Native", imgLink: reactNative },
    { name: "React JS", imgLink: reactjs },
    { name: "Node JS", imgLink: nodeJS },
    { name: "Express JS", imgLink: expressJS },
    { name: "Mongo DB", imgLink: mongoDB },
    { name: "SQL", imgLink: sql },
    { name: "Git HUB", imgLink: gitHub },
    { name: "Tailwind CSS", imgLink: tailwind },
    { name: "C", imgLink: c },
    { name: "JAVA", imgLink: java },
  ];

  return (
    <>
      <div className="bg-gray-700 h-screen">
        <BackToHome goLink={"/"}></BackToHome>
        <div className="">
        <PageHead heading={'Skills'}></PageHead>
        </div>
        <div className=" flex flex-wrap ">
          {skillData.map((skill, index) => (
            <SkillBox key={index} skillData={skill}></SkillBox>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
