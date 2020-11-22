import "./Content.css";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import Cards from "./Cards/Cards";
import Graph from "./Graph/Graph";
import ReactApexChart from "react-apexcharts";



function Content() {



  return (
    <div className=" main-content px-2">

      <div className="row">
        <div className="col-12"> <DashboardHeader />  </div>
        <div className="col-12">
          <div class="d-flex flex-row justify-content-center flex-wrap p-2">
            <div className=" m-1 my-sm-0 card-dimentions">
              <Cards title="Author Sales">
                <Graph type={"bar"}>
                  {(options, series) => <ReactApexChart options={options} series={series} type="bar" height={350} />}
                </Graph>
              </Cards></div>
            <div className=" m-1 my-sm-0 card-dimentions"><Cards title="Technolgies" >
              <Graph type={"pie"}>
                {(options, series) => <ReactApexChart options={options} series={series} type="donut" height={350} />}
              </Graph>
            </Cards>

            </div>
            <div className=" m-1 my-sm-0 card-dimentions"><Cards title="Total Order" >
              <Graph type={"area"}>
                {(options, series) => <ReactApexChart options={options} series={series} type="area" height={350} />}
              </Graph>
            </Cards></div>


            <div className=" m-1 card-dimentions"><Cards subtitle="Announcements" >
              <div className="text-left mt-4">
            <h5>Incredebly Positive Reviews</h5>
            
            <p className="text-muted text-justify mt-4">To start with a blog, think of a topic and brainstrom ideas.To start with a blog, think of a topic and brainstrom ideas.To start with a blog, think of a topic and brainstrom ideas.</p>
            <div class="progress">
  <div className="progress-bar w-25" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
            </div>
                
            </Cards></div>
            <div className=" m-1 card-dimentions"><Cards subtitle="Projects" >
            <div className="text-left mt-4">
            <h5>Incredebly Positive Reviews</h5>
            
            <p className="text-muted text-justify mt-4 ">To start with a blog, think of a topic and brainstrom ideas.To start with a blog, think of a topic and brainstrom ideas.To start with a blog, think of a topic and brainstrom ideas.</p>
            <div class="progress">
  <div className="progress-bar w-25" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
            </div>
                </Cards></div>
            <div className=" m-1 card-dimentions"><Cards subtitle="Today's Schedule" >
            <div className="text-left mt-4">
            <h5>Incredebly Positive Reviews</h5>
            
            <p className="text-muted text-justify mt-4">To start with a blog, think of a topic and brainstrom ideas.To start with a blog, think of a topic and brainstrom ideas.To start with a blog, think of a topic and brainstrom ideas.</p>
            <div class="progress">
  <div className="progress-bar w-25" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
            </div>
                </Cards>
            </div>
            <div className=" m-1 card-dimentions"><Cards title="Top Sales" >
            <ul class="list-group card-list">

  <li class="list-group-item font-weight-bold d-flex justify-content-between"> <div>Jan-Jun<div className="text-muted">Sale estimate</div></div> <div class="progress w-50 " ml-auto>
  <div class="progress-bar w-25" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div></li>
<li class="list-group-item font-weight-bold d-flex justify-content-between"> <div>Feb-May<div className="text-muted">Sale estimate</div></div> <div class="progress w-50 " ml-auto>
  <div class="progress-bar w-25" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div></li><li class="list-group-item font-weight-bold d-flex justify-content-between"> <div>Jun-Sept<div className="text-muted">Sale estimate</div></div> <div class="progress w-50 " ml-auto>
  <div class="progress-bar w-25" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div></li><li class="list-group-item font-weight-bold d-flex justify-content-between"> <div>Sept-dec<div className="text-muted">Sale estimate</div></div> <div class="progress w-50 " ml-auto>
  <div class="progress-bar w-25" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div></li>
  
</ul>
                </Cards>
            </div>
            <div className=" m-1  doublecard">
              <Cards title="Sales Stactics">
                            <Graph type={"doubleBar"}>
                  {(options, series) => <ReactApexChart options={options} series={series}  type="bar" height={350}/>}
                </Graph>
              
              </Cards>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Content;