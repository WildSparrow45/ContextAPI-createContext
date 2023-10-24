"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Link from "next/link";

export const BootstrapClient = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return null;
};

export const LogoutBtn = () => {
  const LogoutHandler = () => {
    alert("Logged out");
  };

  return (
    <button className="nav-link" onClick={LogoutHandler}>
      LOGOUT
    </button>
  );
};

export const LoginBtn = () => {
  return <button className="nav-link">LOGIN</button>;
};

export const Context = createContext({ user: {} });

// export const ContextProvider = ({ children }) => {
//   const [user, setUser] = useState({});

//   return (
//     <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
//   );
// };

export const LoginLogoutbtn = () => {
  // const { user } = useContext(Context);
  const dis = (
    <Context.Consumer>
      {(user) => {
        return user.id ? <LogoutBtn /> : <LoginBtn />;
      }}
    </Context.Consumer>
  );

  return dis;
  // return user.id ? <LogoutBtn /> : <LoginBtn />;
};
