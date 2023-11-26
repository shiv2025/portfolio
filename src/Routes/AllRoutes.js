import Home from '../Modules/Home/index';
import PageNotFound from "../Modules/PageNotFound/index"
import Skills from "../Modules/Skills/index"
import Education from "../Modules/Education/index"
import Internship from "../Modules/Internship/index"
import Certification  from "../Modules/Certification/index"
import Projects from '../Modules/Projects';
import {Routes,Route} from "react-router-dom"
import viewCertificate from '../Components/Certificate/viewCertificate';
// import reactUdemyCertificate from "../Assets/reactUdemy.png"
// import tscCertificate from "../Assets/tscCertificate.png"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/skill" Component={Skills}></Route>
      <Route path="/education" Component={Education}></Route>
      <Route path="/certificate" Component={Certification}></Route>
      <Route path="/certificate/tscCertificate" Component={viewCertificate}></Route>
      {/* <Route path="/certificate/tscCertificate" Component={reactUdemyCertificate}></Route> */}
      <Route path="/internship" Component={Internship}></Route>
      <Route path='/project' Component={Projects}></Route>
      <Route path="/*" Component={PageNotFound}></Route>
    </Routes>
  );
};

export default AllRoutes;
