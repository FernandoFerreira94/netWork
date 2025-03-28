export default function Section({ title, link, bg, cor }) {
  return (
    <section
      style={{ background: bg, color: cor }}
      className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-trasform hover:scale-105 cursor-pointer"
    >
      <a href={link} target="_blank">
        {" "}
        <p className="text-base md:text-md">{title}</p>
      </a>
    </section>
  );
}
