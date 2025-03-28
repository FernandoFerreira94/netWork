import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import PageError from "../pages/pageError";
import Login from "../pages/Login";
import NetWorks from "../pages/netWorks";
import Admin from "../pages/Admin";

import { Private } from "./Private";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <Private>
            <Admin />
          </Private>
        }
      />
      <Route
        path="/admin/social"
        element={
          <Private>
            <NetWorks />
          </Private>
        }
      />
      <Route path="*" element={<PageError />} />
    </Routes>
  );
}
