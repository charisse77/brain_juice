import "./Login.css";
import "bootstrap/dist/css/bootstrap.css";


function Login() {

function handleSubmit(e){
  e.preventDefault();
  var loginForm = document.getElementById("form");
  var addNewBtn = document.getElementById("addNew")
  var projectCard = document.getElementById("projectCard");

  if(loginForm.style.display === "none"){
    console.log("block")
  }else{
    loginForm.style.display = "none";
    addNewBtn.style.display = "block";
    projectCard.style.display = "flex";
    projectCard.classList.add("justify-content-center");
  }


  // if (x.style.display === "none") {
  //   x.style.display = "block";
  // } else {
  //   x.style.display = "none";
  // }

  // if (y.style.display === "none") {
  //   y.style.display = "block";
  // } else {
  //   y.style.display = "none";
  // }
}

  return (
    <div className="container content">
      <div className="d-flex justify-content-center form-group">
        <form className="p-5" id="form" onSubmit={handleSubmit}>
          <p>
            <label for="email">Email</label>
            <br />
            <input
              type="text"
              id="email"
              name="email"
              className="form-control"
            />
          </p>

          <p>
            <label for="password">Password</label> <br />
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
            />
          </p>

          <div className="d-flex justify-content-center m-3">
            <input className="btn btn-primary" type="submit" value="Login" />

          </div>
          <div className="d-flex justify-content-center">

            <input className="btn btn-primary" type="submit" value="Demo" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
