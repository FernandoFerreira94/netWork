import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  return (
    <input
      type="text"
      className="border-0 cursor-pointer  rounded-md outline-none py-1 px-2 my-2 bg-white "
      {...props}
    />
  );
};

interface LabelProps {
  text: string;
}

export const Label = ({ text }: LabelProps) => {
  return (
    <label htmlFor="" className="text-white font-medium  mt-3 ">
      {text}
    </label>
  );
};
