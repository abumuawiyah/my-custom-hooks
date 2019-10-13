import { useEffect, useState } from "react";

export default function useRandomUsers() {
  const [users, setUsers] = useState([{ name: "azizi" }]);
  useEffect(() => {
    setUsers([{ name: "hafsa" }, { name: "rumaysa" }]);
    console.log("user");
    return () => {};
  }, []);

  return users;
}
