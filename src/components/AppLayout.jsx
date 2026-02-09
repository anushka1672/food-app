import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import { useEffect } from "react";

export const AppLayout = ({ setUserInfo }) => {
  useEffect(() => {
    const data = {
      name: "anushka khewadia",
    };
    setUserInfo(data.name);
  }, []);

  return (
    <div className="app-layout">
      <Header />
      <Outlet />
    </div>
  );
};
