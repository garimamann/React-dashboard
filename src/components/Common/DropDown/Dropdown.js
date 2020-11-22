import "./DropDown.css"


function DropDown({name}) {
    return (
      <div className="div-dropdown ">
        <a class="nav-link dropdown-toggle p-2 font-weight-bold" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {name} 
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    
         
        </div>
      </div>
    );
  }
  
  export default DropDown;