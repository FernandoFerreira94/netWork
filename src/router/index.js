import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PageError from "../pages/pageError";
import Login from "../pages/Login";
import NetWorks from "../pages/netWorks";
import Admin from "../pages/Admin";
import { Private } from "./Private";
export default function AppRoute() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/admin", element: _jsx(Private, { children: _jsx(Admin, {}) }) }), _jsx(Route, { path: "/admin/social", element: _jsx(Private, { children: _jsx(NetWorks, {}) }) }), _jsx(Route, { path: "*", element: _jsx(PageError, {}) })] }));
}
