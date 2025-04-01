import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Form from "../../componets/Forn";
import Header from "../../componets/Header";
export default function Admin() {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "w-full min-h-screen  flex flex-col items-center  pb-7 px-2", children: [_jsx(Header, {}), _jsx(Form, {})] }) }));
}
