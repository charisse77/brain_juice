import "./App.css";
import Login from "./components/Login/Login";
import Heading from "./components/Heading/Heading";
import "bootstrap/dist/css/bootstrap.css";
import ProjectCards from "./components/ProjectCards/ProjectCards";
import Logout from "./components/Logout/Logout";

function App() {
  return (
    <div className="container">
      <Logout />
      <div className="mt-5 text-center">
        <Heading></Heading>
      </div>
      <Login></Login>
      <div className="container">
        <ProjectCards
          title="Card Title"
          subtitle="subtitle"
          text="this is some random filler text"
        />
        <ProjectCards
          title="Card Title"
          subtitle="subtitle"
          text="this is some random filler text"
        />
        <ProjectCards
          title="Card Title"
          subtitle="subtitle"
          text="this is some random filler text"
        />
        <ProjectCards
          title="Card Title"
          subtitle="subtitle"
          text="this is some random filler text"
        />
      </div>
    </div>
  );
}

export default App;
