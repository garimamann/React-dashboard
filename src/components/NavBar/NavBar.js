
import DropDown from "../Common/DropDown/Dropdown";
import Icon from "../Common/Icons/Icon";
import "./NavBarStyle.css";

function NavBar({ handleIsMenuOpen, isMenuOpen }) {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-2 shadow  bg-white rounded">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav">
          <li><img src="https://img.icons8.com/office/16/000000/menu.png" onClick={() => handleIsMenuOpen(!isMenuOpen)} style={{ cursor: "pointer" }} /></li>
          <li> <DropDown  name="Pages"/></li>
          <li> <DropDown name="Reports"/></li>
          <li> <DropDown name="Apps"/></li>

        </ul>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">

          <ul className="navbar-nav ml-auto">
            <li> <Icon> <img src="https://img.icons8.com/fluent-systems-regular/24/000000/settings.png"/> </Icon></li>
            <li> <Icon> <img src="https://img.icons8.com/fluent-systems-regular/24/000000/bell.png"/></Icon></li>
            <li> <Icon > <img src="https://img.icons8.com/material-rounded/24/000000/search.png"/> </Icon></li>
            <li className="mx-2"> Hi, User <div className=" circle "></div> </li>
            <li> <Icon ><img src="https://img.icons8.com/fluent/24/000000/squared-menu.png"/></Icon></li>
            

          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;