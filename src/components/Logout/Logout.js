import "./Logout.css";
import "bootstrap/dist/css/bootstrap.css";

function Logout(){
    function handleLogout(e){
        e.preventDefault();
        var x = document.getElementById("form");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
    return(
        <div className="m-2">
            <div className="float-right text" onClick={handleLogout}>Logout</div>
        </div>
    );
}

export default Logout; 