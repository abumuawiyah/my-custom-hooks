import React from "react"; // useState
import ReactDOM from "react-dom";
// import useInterval from "./hooks/useInterval";
import useRandomUsers from "./hooks/useRandomUser";

function Counter() {
  // const [count, setCount] = useState(0);
  const randomUsers = useRandomUsers();
  // useInterval(() => {
  //   // Your custom logic here
  //   setCount(count + 1);
  // }, 1000);

  return (
    <>
      {randomUsers.map((u, id) => (
        <div key={id}>{u.name}</div>
      ))}
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
