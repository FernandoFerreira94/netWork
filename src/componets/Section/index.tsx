interface LinkProps {
  title: string;
  link: string;
  bg: string;
  color: string;
}

export default function Section({ title, link, bg, color }: LinkProps) {
  return (
    <section
      style={{ background: bg, color: color }}
      className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-trasform hover:scale-105 cursor-pointer duration-500"
    >
      <a href={link} target="_blank">
        {" "}
        <p className="text-base md:text-md">{title}</p>
      </a>
    </section>
  );
}
