import React from "react"; // useState
import ReactDOM from "react-dom";
// import useInterval from "./hooks/useInterval";
import useRandomUsers from "./hooks/useRandomUser";
import useWindowWidth from "./hooks/useWindowWidth";
import usePersistentStore from "./hooks/usePersistentStore";

function Counter() {
  // const [count, setCount] = useState(0);
  const randomUsers10 = useRandomUsers({ total: 10 });
  const randomUsers50 = useRandomUsers({ total: 50 });
  const { set, get, getAll } = usePersistentStore();
  // useInterval(() => {
  //   // Your custom logic here
  //   setCount(count + 1);
  // }, 1000);

  function handleSet() {
    set("myName3", "azizi");
  }

  function handleGet() {
    console.log(get("myName3"));
  }

  return (
    <>
      {useWindowWidth()}
      {randomUsers10.users.map(u => (
        <div>{u.email}</div>
      ))}
      <hr />
      {randomUsers50.users.map(u => (
        <div>{u.email}</div>
      ))}
      <button onClick={handleSet}>Set</button>
      <br />
      <button onClick={handleGet}>Get</button>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
