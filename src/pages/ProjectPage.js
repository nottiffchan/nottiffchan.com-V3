import React, { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import PropTypes from "prop-types";

function ProjectPage({ pageId }) {
  const [blockMap, setBlockMap] = useState();

  useEffect(() => {
    var fetchData = async () => {
      const data = await fetch(
        `https://notion-api.splitbee.io/v1/page/${pageId}`
      )
        .then((res) => res.json())
        .catch((err) => console.error(err));

      setBlockMap(data);
    };
    fetchData();
  }, [pageId]);

  return (
    blockMap && (
      <div>
        <NotionRenderer blockMap={blockMap} fullPage />
      </div>
    )
  );
}

export default ProjectPage;

ProjectPage.propTypes = {
  pageId: PropTypes.string.isRequired,
};