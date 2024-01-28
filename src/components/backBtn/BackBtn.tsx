import { useNavigate } from "react-router-dom";

export const BackBtn = () => {
const navigate = useNavigate();

const handleNavBack = () => {
    navigate(-1);
}

  return (
    <button onClick={handleNavBack} className="navigate-back"></button>
  )
}
