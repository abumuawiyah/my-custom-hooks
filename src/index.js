import React from "react"; // useState
import ReactDOM from "react-dom";
// import useInterval from "./hooks/useInterval";
import useRandomUsers from "./hooks/useRandomUser";
import useWindowWidth from "./hooks/useWindowWidth";
import usePersistentStore from "./hooks/usePersistentStore";

function Counter() {
  // const [count, setCount] = useState(0);
  const randomUsers = useRandomUsers();
  const { set, get, getAll } = usePersistentStore();
  // useInterval(() => {
  //   // Your custom logic here
  //   setCount(count + 1);
  // }, 1000);

  console.log("get All", getAll());

  function handleSet() {
    set("myName3", "azizi");
  }

  function handleGet() {
    console.log(get("myName3"));
  }

  return (
    <>
      {useWindowWidth()}
      {randomUsers.map((u, id) => (
        <div key={id}>{u.name}</div>
      ))}
      <button onClick={handleSet}>Set</button>
      <br />
      <button onClick={handleGet}>Get</button>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
