import { Link, useLocation } from "react-router-dom"

export const FavLogo = () => {
  const location = useLocation();

  const classes = location.pathname === '/favorite' ? "fav-logo fav-on" : "fav-logo";

  return (
    location.pathname === '/favorite' ?
    <Link to="/movies" className={classes} /> :
    <Link to="/favorite" className={classes}></Link>
  )
}
