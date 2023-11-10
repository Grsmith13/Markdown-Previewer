import React from "react";
import Card from "react-bootstrap/Card";
import "./Preview.css";

const Previewer = ({ formatted }) => {
  const createMarkup = () => {
    return { __html: formatted };
  };
  return (
    <Card>
      <div>
        <h2>Previewer</h2>
        <div
          className="previewer "
          id="preview"
          dangerouslySetInnerHTML={createMarkup()}
        />
      </div>
    </Card>
  );
};

export default Previewer;
