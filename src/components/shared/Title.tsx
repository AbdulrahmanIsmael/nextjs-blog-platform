const Title = ({ title, position }: { title: string; position: string }) => {
  return (
    <div className={`${position === "left" ? "text-left" : "text-right"}`}>
      <span
        className={`text-[clamp(4rem,4.5vw,6.5rem)] font-bold tracking-wide text-primary/30 inline-block ${
          position === "left" ? "-rotate-15" : "rotate-15"
        }`}
      >
        {title}
      </span>
    </div>
  );
};

export default Title;
