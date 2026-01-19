import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";

import { GrInstagram } from "react-icons/gr";
import Link from "next/link";
import Logo from "@/components/shared/Logo";
import NavLinks from "../ui/header/NavLinks";

const socials = [
  {
    id: 1,
    logo: (
      <TiSocialFacebook
        size={35}
        className="text-primary hover:text-primary/60 hover:transition hover:duration-100 hover:ease-linear"
      />
    ),
    title: "Facebook",
    link: "https://www.facebook.com",
  },
  {
    id: 2,
    logo: (
      <GrInstagram
        size={30}
        className="text-primary hover:text-primary/60 hover:transition hover:duration-100 hover:ease-linear"
      />
    ),
    title: "Instagram",
    link: "https://www.instagram.com",
  },
  {
    id: 3,
    logo: (
      <TiSocialLinkedin
        size={35}
        className="text-primary hover:text-primary/60 hover:transition hover:duration-100 hover:ease-linear"
      />
    ),
    title: "Linkedin",
    link: "https://www.linkedin.com",
  },
];

const Footer = () => {
  return (
    <footer className="py-8 bg-secondary border-t border-t-primary/20 shadow-sm shadow-primary/30">
      <div className="container mx-auto flex items-center justify-between max-[540px]:flex-col max-[540px]:items-center max-[540px]:gap-y-5">
        <Logo />
        <p className="text-center text-[clamp(20px,1vw,2vw)]">
          Copyright &copy; {new Date().getFullYear()} Abdulrahman. All rights
          reserved
        </p>
        <div className="flex flex-col items-center gap-y-3">
          <ul className="socials flex items-center justify-between w-full">
            {socials.map((social) => (
              <li key={social.id} title={social.title}>
                <Link href={social.link} target="_blank">
                  {social.logo}
                </Link>
              </li>
            ))}
          </ul>

          <NavLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
