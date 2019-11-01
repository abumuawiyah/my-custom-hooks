import { useEffect, useState } from "react";

export default function useRandomUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then(r => r.json())
      .then(r => setUsers(r.results));
  }, []);

  return {
    users,
    status: !users || users.length === 0 ? false : true
  };
}
