import BackToHome from "../../Components/BackToHome/index"
import PageHead from "../../Components/PageHead"
import Intern from "../../Components/Intern/index"
import TSC from "../../Assets/TSC.png";


const Internship = () => {
  return (
    <div className=" bg-gray-700 flex flex-col bg-gray h-screen">
    <div className="" >
      <BackToHome goLink={'/'}></BackToHome>
      <PageHead heading={'Internship'}></PageHead>
    
    </div>
   <div className="flex items-center justify-center mt-40">
    <Intern company="Tech Superior" title="Software Engineer Intern" duration="Feb'23-April'23" logo={TSC}/>
   </div>
    </div>
  )
}

export default Internship