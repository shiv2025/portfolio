import BackToHome from "../../Components/BackToHome/index";
import PageHead from "../../Components/PageHead";
import Certificate from "../../Components/Certificate/index";
import reactLogo from "../../Assets/reactjs.png";
import udemyLogo from "../../Assets/brandLogo.png";
import reactUdemyCertificate from "../../Assets/reactUdemy.png";
import tscLogo from "../../Assets/TSC.png";
import frontEndLogo from "../../Assets/frontEndLogo.jpeg";
import tscCertificate from "../../Assets/tscCertificate.png";
const Certification = () => {
  return (
    <>
      <div className="bg-gray-700 h-screen ">
        <BackToHome goLink={"/"}></BackToHome>
          <PageHead heading={"Certifications"}></PageHead>
        <div className="flex flex-wrap items-center justify-evenly mt-20 ">
          <Certificate
            title="React"
            techLogo={reactLogo}
            brandLogo={udemyLogo}
            skills="React Hooks Redux TailwindCSS"
            brand="Udemy"
            certificate={reactUdemyCertificate}
          ></Certificate>
          <Certificate
            title="Software Engineer Intern"
            techLogo={frontEndLogo}
            brandLogo={tscLogo}
            skills="React Hooks Redux TailwindCSS"
            brand="Tech Superior Consulting"
            certificate={tscCertificate}
          ></Certificate>
        </div>
      </div>
    </>
  );
};

export default Certification;
