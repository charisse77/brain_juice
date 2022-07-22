import React, {useState} from 'react'; //importing single item from react library

import "./ProjectCards.css";
import "bootstrap/dist/css/bootstrap.css";

function ProjectCards(props) {
 const [title, setTitle] = useState(props.title); //react hook: returns array, array destructuring? 

const clickHandler = () => {
  setTitle('Updated!'); 
  console.log(title);
}

  return (
    <div className="d-flex">
        <div className="card card-width m-4 card-txt">
      <div className="card-body card-txt">
        <h5 className="card-title card-txt">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted card-txt">{props.subtitle}</h6>
        <p className="card-text card-txt">
        {props.text}
        </p>
        <button className="btn btn-primary" onClick={() => {console.log('Clicked!')}}>Edit</button>
        <button className="btn btn-danger" onClick={clickHandler}>Delete</button>
      </div>
    </div> 
    </div>
   
  );
}

export default ProjectCards;
