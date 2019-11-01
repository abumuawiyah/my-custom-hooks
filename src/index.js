import React from "react";
import ReactDOM from "react-dom";
import useRandomUser from "use-random-user";

function App() {
  const randomUsers5 = useRandomUser({ total: 5 });
  const randomUsers10 = useRandomUser({ total: 10 });
  return (
    <>
      {randomUsers5.users.map(u => (
        <div>{u.email}</div>
      ))}
      <hr />
      {randomUsers10.users.map(u => (
        <div>{u.email}</div>
      ))}
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
