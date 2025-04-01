import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./router";
import "./App.css";
import { ToastContainer } from "react-toastify";
export default function App() {
    return (_jsx(_Fragment, { children: _jsxs(BrowserRouter, { children: [_jsx(ToastContainer, { autoClose: 2000 }), _jsx(AppRoute, {})] }) }));
}
