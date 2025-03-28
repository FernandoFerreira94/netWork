export default function Icon({ url, children }) {
  return (
    <div className="text-white transition-transform hover:scale-110 ">
      <a href={url} target="_blank" className="cursor-pointer">
        {children}
      </a>
    </div>
  );
}
