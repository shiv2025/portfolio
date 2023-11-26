import Qualification from "../../Components/Qualification/index";
import BackToHome from "../../Components/BackToHome/index";
import PageHead from "../../Components/PageHead";

const Education = () => {
  const dataMca = {
    course: "MCA - Masters of Computer Application",
    duration: "2021-2023",
    college: "Graphic Era Hill University , Dehradun",
  };

  const dataBca = {
    course: "BCA - Batchelors of Computer Application",
    duration: "2018-2021",
    college: "Graphic Era Hill University , Dehradun",
  };

  const Data12 = {
    course: "12th",
    duration: "2017-2018",
    college: "The Heritage School , Dehradun",
  };

  const data10 = {
    course: "10th",
    duration: "2015-2016",
    college: "The Heritage School , Dehradun",
  };

  return (
      <div className="bg-gray-700 w-full h-screen">
        <div className="">
          <BackToHome goLink={"/"}></BackToHome>
        <PageHead heading={'Education'}></PageHead>
        </div>
        <div className=" flex flex-wrap justify-center items-center pt-20">
          <Qualification data={dataMca} />
          <Qualification data={dataBca} />
          <Qualification data={Data12} />
          <Qualification data={data10} />
        </div>
      </div>

  );
};

export default Education;
