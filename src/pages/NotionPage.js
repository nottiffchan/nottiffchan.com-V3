import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import { useParams } from "react-router-dom";
import { mainProjects } from "../data/personalData";
import ProjectNextCase from "../components/ProjectNextCase";
import { useLocation } from "react-router-dom";

function NotionPage() {
  const params = useParams();
  const projectPathname = params.projectPathname;
  const { pathname } = useLocation();
  const [blockMap, setBlockMap] = useState();

  function getNotionPageId(projectPathname) {
    for (var project of mainProjects) {
      if (project.projectPathname === projectPathname) {
        return project.notionPageId;
      }
    }
  }

  useEffect(() => {
    var fetchData = async () => {
      const data = await fetch(
        `https://notion-api.splitbee.io/v1/page/${getNotionPageId(
          projectPathname
        )}`
      )
        .then((res) => res.json())
        .catch((err) => console.error(err));

      setBlockMap(data);
    };
    try {
      fetchData();
    } catch (error) {
      console.log("error: ", error);
    }
  }, [pathname]);

  return !blockMap ? (
    <div style={{ height: "100vh" }}></div>
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
    padding-top: 80px;
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
