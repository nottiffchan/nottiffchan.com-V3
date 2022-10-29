import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import { useParams } from "react-router-dom";
import { mainProjects, subProjects } from "../data/personalData";
import ProjectNextCase from "../components/ProjectNextCase";
import { useLocation } from "react-router-dom";
import LoadingPage from "./LoadingPage";

function NotionPage() {
  const params = useParams();
  const projectPathname = params.projectPathname;
  const { pathname } = useLocation();
  const [blockMap, setBlockMap] = useState();
  const [loading, setLoading] = useState(true);

  function getNotionPageId(projectPathname) {
    for (var project of mainProjects.concat(subProjects)) {
      if (project.projectPathname === projectPathname) {
        return project.notionPageId;
      }
    }
  }

  useEffect(() => {
    var fetchData = async () => {
      setLoading(true);
      const data = await fetch(
        `https://notion-api.splitbee.io/v1/page/${getNotionPageId(
          projectPathname
        )}`
      )
        .then((res) => res.json())
        .catch(() => (window.location.href = "/404"));

      setBlockMap(data);
      setLoading(false);
    };
    try {
      fetchData();
    } catch (error) {
      console.log("error: ", error);
      window.location.href = "/404";
    }
  }, [pathname]);

  return loading ? (
    <LoadingPage />
  ) : (
    <StyledNotionWrapper>
      <NotionRenderer blockMap={blockMap} fullPage />
      <ProjectNextCase currProjectPathname={projectPathname} />
    </StyledNotionWrapper>
  );
}

export default NotionPage;

const StyledNotionWrapper = styled.div`
  .notion-page-header {
    display: none !important;
  }

  .notion {
    padding-top: var(--nav-height);
  }

  .notion-purple {
    color: var(--grey);
  }

  b {
    font-weight: bold !important;
  }

  .notion-h1 {
    margin-top: 0.5rem;
    font-size: 44px;
    letter-spacing: -0.03rem;
    color: var(--purple);
  }

  .notion-h2 {
    font-weight: bold !important;
    font-size: 30px;
  }

  .notion-h3 {
    font-size: 24px;
  }
`;
