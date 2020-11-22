import "./style.css"
import Dropdown from "../Common/DropDown/Dropdown";


function Sidebar() {
    return (
      <div className="div-sidebar text-white ">
          <div className="sidebar-header mt-3 mb-5">
          <h4 class="text-left " >Keen</h4>
          </div>
          <div className="sidebar-body">
              <div class="text-left">
              <Dropdown name="Dashboard"/>
                 
              <ul class="list-group list-unstyled ">
  <li class="list-group-item  pl-3 pr-auto disabled text-uppercase list-item-bg-color">Components</li>
  <li class="list-group-item list-item-bg-color"> <img src="https://img.icons8.com/fluent-systems-regular/24/000000/stack-of-paper.png" className="mr-2" />Base</li>
  <li class="list-group-item list-item-bg-color"> <img src="https://img.icons8.com/fluent-systems-regular/24/000000/stack-of-paper.png" className="mr-2" />Custom</li>
  <li class="list-group-item list-item-bg-color"> <img src="https://img.icons8.com/fluent-systems-regular/24/000000/stack-of-paper.png" className="mr-2" />Extended</li>
  <li class="list-group-item list-item-bg-color"> <img src="https://img.icons8.com/fluent-systems-regular/24/000000/stack-of-paper.png" className="mr-2" />Widgets</li>
  <li class="list-group-item list-item-bg-color"> <img src="https://img.icons8.com/fluent-systems-regular/24/000000/stack-of-paper.png" className="mr-2" />Base</li>
  <li class="list-group-item list-item-bg-color"> <img src="https://img.icons8.com/fluent-systems-regular/24/000000/stack-of-paper.png" className="mr-2" />Custom</li>
  <li class="list-group-item list-item-bg-color"> <img src="https://img.icons8.com/fluent-systems-regular/24/000000/stack-of-paper.png" className="mr-2" />Extended</li>
  <li class="list-group-item list-item-bg-color"> <img src="https://img.icons8.com/fluent-systems-regular/24/000000/stack-of-paper.png" className="mr-2" />Widgets</li>
  <li class="list-group-item list-item-bg-color"> <img src="https://img.icons8.com/fluent-systems-regular/24/000000/stack-of-paper.png" className="mr-2" />Base</li>
  <li class="list-group-item list-item-bg-color"> <img src="https://img.icons8.com/fluent-systems-regular/24/000000/stack-of-paper.png" className="mr-2" />Custom</li>
  <li class="list-group-item list-item-bg-color"> <img src="https://img.icons8.com/fluent-systems-regular/24/000000/stack-of-paper.png" className="mr-2" />Extended</li>
  <li class="list-group-item list-item-bg-color"> <img src="https://img.icons8.com/fluent-systems-regular/24/000000/stack-of-paper.png" className="mr-2" />Widgets</li>

</ul>
              </div>
          </div>
          



        
         
        </div>
     
    );
  }
  
  export default Sidebar;