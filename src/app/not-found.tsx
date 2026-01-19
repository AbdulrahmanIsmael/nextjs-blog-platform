import Button from "@/components/shared/Button";
import { FaRegFrown } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="flex flex-col mt-30 items-center gap-y-5 h-full">
      <FaRegFrown
        aria-label="Page Not Found"
        size={150}
        className="text-primary"
      />
      <p
        className="text-[4vw] font-bold tracking-widest"
        aria-label="Page Not Found"
      >
        Page Not Found
      </p>

      <Button
        className="py-3 px-4 mt-5"
        type="link"
        path="/"
        title="Go back to home page"
      >
        Back To Home
      </Button>
    </section>
  );
};

export default NotFound;
