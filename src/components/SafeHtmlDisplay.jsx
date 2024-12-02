import React from "react";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

const SafeHtmlDisplay = ({ html }) => {
    const sanitizedHtml = DOMPurify.sanitize(html);

    return <div>{parse(sanitizedHtml)}</div>;
};

export default SafeHtmlDisplay;