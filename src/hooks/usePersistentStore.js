import { useState, useEffect } from "react";

export default function usePersistentStore() {
  const [state, setState] = useState(() => {
    let keys = Object.keys(window.localStorage);
    const items = keys.map(k => {
      return {
        key: k,
        value: window.localStorage.getItem(k)
      };
    });

    return items;
  });
  useEffect(() => {}, [state]);

  function set(key, value) {
    if (key && value) {
      window.localStorage.setItem(key, value);
      setState([...state, { key, value }]);
    }
  }

  function get(key) {
    if (key) {
      window.localStorage.getItem(key);
    }
  }

  function reset() {
    window.localStorage.clear();
  }

  return {
    state,
    set,
    get,
    reset
  };
}
