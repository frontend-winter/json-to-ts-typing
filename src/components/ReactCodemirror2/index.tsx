import React, { FC } from "react";
import {
  IUnControlledCodeMirror,
  UnControlled as CodeMirror,
} from "react-codemirror2";

// import "codemirror/mode/xml/xml.js";
import "codemirror/mode/javascript/javascript.js";
// import "codemirror/mode/vbscript/vbscript";
import "codemirror/addon/edit/matchbrackets";

import "codemirror/lib/codemirror.css";

import "codemirror/theme/material.css";
import "codemirror/theme/neat.css";
import "codemirror/theme/gruvbox-dark.css";
import "codemirror/theme/idea.css";
import "codemirror/theme/darcula.css";

const ReactCodemirror2: FC<IUnControlledCodeMirror> = (props) => {
  return (
    <>
      <CodeMirror
        options={{
          mode: "javascript",
          lineWrapping: true,
          matchBrackets: true,
          lineNumbers: true,
          theme: "material",
        }}
        {...props}
        onChange={(editor, data, value) => {}}
      />
    </>
  );
};

export default ReactCodemirror2;
