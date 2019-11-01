import { useEffect, useState } from "react";

export default function useRandomUsers({ total = 50 }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${total}`)
      .then(r => r.json())
      .then(r => setUsers(r.results));
  }, [total]);

  return {
    users,
    status: !users || users.length === 0 ? false : true
  };
}
