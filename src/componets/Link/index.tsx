import { Link } from "react-router-dom";

export default function LinkHeader({ url, text }) {
  return (
    <Link to={url} className="transition-all duration-500 hover:scale-110">
      {text}
    </Link>
  );
}
