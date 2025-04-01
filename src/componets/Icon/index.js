import { jsx as _jsx } from "react/jsx-runtime";
export default function Icon({ url, children }) {
    return (_jsx("div", { className: "text-white transition-all duration-500 hover:scale-110 p-1  hover:bg-white hover:text-black rounded-md", children: _jsx("a", { href: url, target: "_blank", rel: "noopener noreferrer", className: "cursor-pointer", children: children }) }));
}
