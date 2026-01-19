import Link from "next/link";

const Button = ({
  type,
  children,
  title,
  path,
  handler,
  className,
}: {
  type: string;
  children: React.ReactNode;
  title?: string;
  path?: string;
  handler?: () => void;
  className?: string;
}) => {
  return (
    <>
      {type === "link" ? (
        <Link
          href={path || "/"}
          title={title}
          className={`cursor-pointer px-5 py-2 rounded-2xl bg-secondary/10 backdrop-blur-md border border-primary/20 text-primary font-medium transition-all duration-300 hover:bg-primary/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] active:scale-95 ${className} focus:outline-2 focus:outline-solid focus:outline-primary`}
        >
          {children}
        </Link>
      ) : (
        <button
          type="button"
          title={title}
          className={`cursor-pointer px-5 py-2 rounded-2xl bg-secondary/10 backdrop-blur-md border border-primary/20 text-primary font-medium transition-all duration-300 hover:bg-primary/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] active:scale-95 ${className}`}
          onClick={handler}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
