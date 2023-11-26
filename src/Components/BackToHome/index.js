import { useNavigate } from "react-router-dom";
import {IconArrowLeft} from "@tabler/icons-react"

const BackToHome = ({goLink}) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(goLink);
  };

  return (
    <>
      <div className="flex sticky top-5 ml-5">
        <button className="text-white" onClick={goBack}>
          <IconArrowLeft></IconArrowLeft>
        </button>
      </div>
    </>
  );
};

export default BackToHome;
