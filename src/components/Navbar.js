import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="nav-bar flexer">
    <NavLink to="/">Rockets</NavLink>
    <NavLink to="Missions">Missions</NavLink>
    <NavLink to="Profile">My Profile</NavLink>
  </div>
);

export default Navbar;
