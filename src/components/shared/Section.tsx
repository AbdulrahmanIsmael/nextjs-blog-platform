const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={`py-15 border-t border-primary/20 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
