import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  return (
    <input
      type="text"
      className="border-0  rounded-md outline-none py-1 px-2 my-2 bg-white "
      {...props}
    />
  );
};
