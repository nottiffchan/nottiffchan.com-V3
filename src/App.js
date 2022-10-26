import React from "react";
import NotionPage from "./pages/NotionPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";
import AnimatedCursor from "react-animated-cursor";
import LandingPage from "./pages/LandingPage";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import useWindowSize from "./hooks/useWindowSize";
import MobileNavbar from "./components/MobileNavbar";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import Footer from "./components/Footer";
import PageNotFound from "./pages/404";
import ScrollToTop from "./hooks/ScrollToTop";
import LoadingPage from "./pages/LoadingPage";

function App() {
  const size = useWindowSize();
  return (
    <div className="App">
      <AnimatedCursor color="249, 144, 144" />

      {document.readyState !== "interactive" &&
      document.readyState !== "complete" ? (
        <LoadingPage />
      ) : (
        <Router>
          <ScrollToTop />

          <StyledContent>
            <WavyContainer />
            {size.width && size.width > 768 ? <Navbar /> : <MobileNavbar />}

            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route
                path="/projects/:projectPathname"
                element={<NotionPage />}
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </StyledContent>
        </Router>
      )}

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
