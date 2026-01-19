import Button from "@/components/shared/Button";

const Showcase = () => {
  return (
    <section className="w-screen ml-[calc(-50vw+50%)] relative py-24 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-primary/50 via-transparent to-transparent blur-3xl" />

      <p className="max-w-6xl text-[clamp(2rem,4vw,3.5rem)] leading-tight font-extrabold tracking-tight text-primary">
        Dive into tech stories <br />
        and be part of the{" "}
        <span className="text-primary">developer community</span>
      </p>

      <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-primary">
        Read, learn, and explore high-quality articles about programming,
        technology, and modern web development
      </p>

      <div className="mt-10">
        <Button
          type="button"
          title="Go to articles"
          path="/articles"
          className="px-8 py-4 text-lg"
        >
          Start Reading
        </Button>
      </div>
    </section>
  );
};

export default Showcase;
