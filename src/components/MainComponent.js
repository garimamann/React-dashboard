import NavBar from "./NavBar/NavBar";
import Content from "./Content/Content";
import { useState } from "react";
import Sidebar from "./SideBar/index"

function MainComponent() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="container-fluid p-0 m-0">
      <div className="d-flex ">
        {isMenuOpen && <div className=" align-self-strech col-2 bg-dark"> <Sidebar />  </div>}
        <div className="d-flex align-items-start flex-column">
          <div className="w-100"> <NavBar handleIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} /> </div>
          <div className=""><Content /> </div>
        </div>
      </div>

    </div>
  );
}

export default MainComponent;