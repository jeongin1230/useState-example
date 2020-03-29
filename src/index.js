//First: import useState. It's a named export from 'react' or we could skip or we could skip this step, and write React.useState
import React, { useState } from "react";
import ReactDOM from "react-dom";

// This componenet expects 2 props:
// 1. text - the text to display
// 2. maxLength - how many characters to hsow before "read more"
function RevealText({ text, maxLength }) {
  // Create a piece of state, and initialize it to 'true'
  // 'hidden' will hold the current value of the state, and 'setHidden' will let us change it
  const [hidden, setHidden] = useState(true);
  // [Current Value Of The State, State Setter]

  // If the text is short enought, don't bother with the buttons
  if (text.length <= maxLength) {
    return <span>text</span>;
  }

  // Render the text (shortened or full-length) followed by a link to expand/collapse it. When a link is clicked, update the value of 'hidden', which will trigger a re-render
  return (
    <span>
      {hidden ? text.substr(0, maxLength) : text}
      {hidden ? (
        <div>
          <a onClick={() => setHidden(false)}>read more...</a>
        </div>
      ) : (
        <div>
          <a onClick={() => setHidden(true)}>read less...</a>
        </div>
      )}
    </span>
  );
}

ReactDOM.render(
  <RevealText
    maxLength={32}
    text={
      "Focused, hard work is the real key to success. Keep your eyes on the goal, and just keep taking the next step towards completing it."
    }
  />,
  document.querySelector("#root")
);
