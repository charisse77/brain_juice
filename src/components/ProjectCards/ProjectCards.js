import "./ProjectCards.css";
import "bootstrap/dist/css/bootstrap.css";

function ProjectCards(props) {
  return (
    <div className="d-flex">
        <div className="card card-width m-4 card-txt">
      <div className="card-body card-txt">
        <h5 className="card-title card-txt">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted card-txt">{props.subtitle}</h6>
        <p className="card-text card-txt">
        {props.text}
        </p>
        <p>Edit</p>
        <p>Delete</p>
      </div>
    </div> 
    </div>
   
  );
}

export default ProjectCards;
