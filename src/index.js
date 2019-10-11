import React, { useState } from "react";
import ReactDOM from "react-dom";
import useInterval from "./hooks/useInterval";

function Counter() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
  }, 1000);

  return <h1>{count}</h1>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
