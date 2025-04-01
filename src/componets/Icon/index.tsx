import { ReactNode } from "react";

interface IconsProps {
  url: string;
  children: ReactNode;
}

export default function Icon({ url, children }: IconsProps) {
  return (
    <div className="text-white transition-all duration-500 hover:scale-110 p-1  hover:bg-white hover:text-black rounded-md">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        {children}
      </a>
    </div>
  );
}
