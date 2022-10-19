import ProjectPage from "./ProjectPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import LandingPage from "./components/landingpage";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import useWindowSize from "./hooks/useWindowSize";
import MobileNavbar from "./components/MobileNavbar";

function App() {
  const size = useWindowSize();
  return (
    <div className="App">
      <AnimatedCursor color="249, 144, 144" />
      {/* <ProjectPage pageId="d0ffd99c246b418db93a9c19b2943cf6" />; */}
      <StyledContent>
        <Router>
          {size.width && size.width > 768 ? <Navbar /> : <MobileNavbar />}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/test"
              element={
                <ProjectPage pageId="d0ffd99c246b418db93a9c19b2943cf6" />
              }
            />
          </Routes>
        </Router>
      </StyledContent>
    </div>
  );
}

export default App;

const StyledContent = styled.div`
  position: relative;
  z-index: 99;
  margin-bottom: 100vh;
`;
