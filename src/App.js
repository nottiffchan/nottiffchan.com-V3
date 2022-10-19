import ProjectPage from "./ProjectPage";
import AnimatedCursor from "react-animated-cursor";
import LandingPage from "./components/landingpage";

function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <AnimatedCursor color="249, 144, 144" />
      {/* <ProjectPage pageId="d0ffd99c246b418db93a9c19b2943cf6" />; */}
      <LandingPage />
    </div>
  );
}

export default App;
