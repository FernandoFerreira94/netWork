import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Section({ title, link, bg, color }) {
    return (_jsx("section", { style: { background: bg, color: color }, className: "bg-white mb-4 w-full py-2 rounded-lg select-none transition-trasform hover:scale-105 cursor-pointer duration-500", children: _jsxs("a", { href: link, target: "_blank", children: [" ", _jsx("p", { className: "text-base md:text-md", children: title })] }) }));
}
