import { Link } from "react-router-dom";
interface LinkProps {
  url: string;
  text: string;
}

export default function LinkHeader({ url, text }: LinkProps) {
  return (
    <Link to={url} className="transition-all duration-500 hover:scale-110">
      {text}
    </Link>
  );
}
