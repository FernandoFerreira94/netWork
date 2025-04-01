import { jsx as _jsx } from "react/jsx-runtime";
export const Input = (props) => {
    return (_jsx("input", { type: "text", className: "border-0 cursor-pointer  rounded-md outline-none py-1 px-2 my-2 bg-white ", ...props }));
};
export const Label = ({ text }) => {
    return (_jsx("label", { htmlFor: "", className: "text-white font-medium  mt-3 ", children: text }));
};
