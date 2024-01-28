import { useLocation } from "react-router-dom"
import { BackBtn } from "../backBtn/BackBtn";

export const BadRequest = () => {
  const location = useLocation();

  return (
    <div className="bad-request-wrapper">
      <div>{location.state?.key ? location.state.key : 'You haven\'t added any movies to favorite'}</div>
      <BackBtn />
    </div>
  )
}
