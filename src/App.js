import React from "react";
import ProjectPage from "./pages/ProjectPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";
import AnimatedCursor from "react-animated-cursor";
import LandingPage from "./pages/LandingPage";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import useWindowSize from "./hooks/useWindowSize";
import MobileNavbar from "./components/MobileNavbar";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";

function App() {
  const size = useWindowSize();
  return (
    <div className="App">
      <AnimatedCursor color="249, 144, 144" />
      <StyledContent>
        <Router>
          <WavyContainer />
          {size.width && size.width > 768 ? <Navbar /> : <MobileNavbar />}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/test"
              element={
                <ProjectPage pageId="d0ffd99c246b418db93a9c19b2943cf6" />
              }
            />
          </Routes>
        </Router>
      </StyledContent>
      <Footer />
    </div>
  );
}

export default App;

const StyledContent = styled.div`
  position: relative;
  z-index: 99;
  margin-bottom: 100vh;
  background-color: var(--bg-color);
`;
