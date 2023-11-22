import React, { useState } from "react";
import Editor from "././components/Editor";
// import Previewer from "././components/Previewer";
const App = () => {
  const defaultText = `# Hello and Welcome to my Markdown!

  ## Lorem Ipsum...
  ### Ipsum Lurm
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // Look code!:
  
  function boop(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return bop;
    }
  }
  \`\`\`
  
  Here's a bold new flavor! **cheese**... whoa!
  Or lets make a word  _Italian_.
  Or... wait for it... **_Cheese Pizza _**
  But lets cross out the crazy bread  ~~bread ~~.
  

  The website that helped me get here [links](https://www.freecodecamp.org), and some possibly
  > Block Quotes!
  
  Look at all these flippable tables!:
  
  Wild muenster | Crazy brie | Another cheddar?
  ------------ | ------------- | -------------
  Your pizza can | eat here, and it | can be disappear ....
  wherever . | Okay. |So don't sue.
  
  - And of course there are goblins.
    - Some are nice.
       - some are not so nice.
          - but who knows.
  
  
  1. Thank you for coming.
  1. I made this way too late!
  1. And last but not least, let's not forget embedded images that I will eventually replace with very likely a pizza!
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `;
  

  return (
    <div className="container">
      <Editor defaultText={defaultText} />
    </div>
  );
};

export default App;
