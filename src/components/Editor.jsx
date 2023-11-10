import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./Editor.css";
import { marked } from "marked";
import Previewer from "./Previewer";

const Editor = ({ defaultText }) => {
  const [text, setText] = useState(defaultText);
  const [formatted, setFormatted] = useState(text);

  useEffect(() => {
    // Set initial state when the component mounts
    setText(defaultText);
    setFormatted(marked(defaultText));
  }, [defaultText]);

  const handleChange = (e) => {
    e.preventDefault();
    const newText = e.target.value;
    setText(newText);
    setFormatted((text) => marked(newText));

    // console.log({ __html: formatted }, formatted);
  };
  return (
    <>
      <Card className="editor">
        <div>
          <h2>Editor</h2>
          <textarea id="editor" value={text} onChange={handleChange} />
        </div>
      </Card>
      <Previewer formatted={formatted} />
    </>
  );
};

export default Editor;
