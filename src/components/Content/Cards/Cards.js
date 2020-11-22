import Graph from "../Graph/Graph"


function Cards({title, subtitle, children }) {
  return (
    <div class="card h-100 mw-75" >
      <div class="card-body">
        <div class="d-flex ">
          <h6 class="card-subtitle mb-2 text-muted text-uppercase text-left">{subtitle}</h6>
          <h5 class="card-title text-left">{title}</h5>
          <span class="ml-auto"><img src="https://img.icons8.com/officel/16/000000/more.png" /></span>
          </div>{children}</div>
    </div>

  );
}

export default Cards;