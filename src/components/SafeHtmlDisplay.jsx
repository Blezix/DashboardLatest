import React from "react";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

const SafeHtmlDisplay = ({ html }) => {
  const safeHtml = DOMPurify.sanitize(html);

  return <div>{parse(safeHtml)}</div>;
};

export default SafeHtmlDisplay;
