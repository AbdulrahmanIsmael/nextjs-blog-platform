"use client";

import Link from "next/link";
import { notAuthenticatedNavLinks } from "@/lib/constants";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <ul className="flex items-center gap-x-5">
      {notAuthenticatedNavLinks.map((link) => (
        <li key={link.id} className="relative group" title={link.title}>
          <Link
            href={link.href}
            className={`
          relative
          text-[15px] font-medium tracking-wide
          text-primary
          transition-colors duration-300
          hover:text-primary/60
          ${pathname === link.href && "text-primary/60"}
      `}
          >
            {link.title}

            <span
              className={`
            absolute -bottom-1 left-0
            h-0.5 w-full
            bg-linear-to-r from-primary/80 to-primary
            scale-x-0
            origin-left
            transition-transform duration-300
            group-hover:scale-x-100
            rounded-full
              `}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
