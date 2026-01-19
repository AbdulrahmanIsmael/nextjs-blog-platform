import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="relative text-[28px] sm:text-3xl font-extrabold tracking-[0.25em] uppercase text-transparent bg-clip-text bg-linear-to-r from-primary via-primary/80 to-primary drop-shadow-[0_1px_6px_rgba(0,0,0,0.15)]">
        READORA
        <span className="absolute inset-0 bg-linear-to-r from-white/40 via-white/10 to-transparent opacity-40 blur-sm pointer-events-none" />
      </h1>
    </Link>
  );
};

export default Logo;
