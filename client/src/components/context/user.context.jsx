import { createContext, useState } from "react";
// as actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

import React from "react";

export default function Userprovider(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return (
    <UserContext.Provider value={value}>{props.children} </UserContext.Provider>
  );
}
