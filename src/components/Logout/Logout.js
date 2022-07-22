import "./Logout.css";
import "bootstrap/dist/css/bootstrap.css";

function Logout() {
  function handleLogout(e) {
    e.preventDefault();
    var loginForm = document.getElementById("form");
    var addNewBtn = document.getElementById("addNew");
    var projectCard = document.getElementById("projectCard");

    if (loginForm.style.display === "none") {
      console.log("block");
      loginForm.style.display = "block";
      addNewBtn.style.display = "none";
      projectCard.style.display = "none";
    } else {
      

      console.log("block2");
    }
  }
  return (
    <div className="m-2">
      <div className="float-right text" onClick={handleLogout}>
        Logout
      </div>
    </div>
  );
}

export default Logout;
