import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
export default function LinkHeader({ url, text }) {
    return (_jsx(Link, { to: url, className: "transition-all duration-500 hover:scale-110", children: text }));
}
