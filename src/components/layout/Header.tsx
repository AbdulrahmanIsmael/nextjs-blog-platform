"use client";

import React, { useEffect, useState } from "react";

import Button from "@/components/shared/Button";
import { FaUser } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import Logo from "@/components/shared/Logo";
import NavLinks from "../ui/header/NavLinks";
import ThemeToggler from "../shared/ThemeToggler";

const Header = () => {
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsNarrow(window.innerWidth <= 640);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <header className="py-5 border-b border-primary/20 shadow-sm shadow-primary/20">
      <div className="container mx-auto flex justify-between max-[540px]:flex-col max-[540px]:items-center max-[540px]:gap-y-5">
        <Logo />

        <NavLinks />

        <div className="flex gap-x-5 items-center">
          <Button type="link" path="/signin" title="Sign In">
            {isNarrow ? <IoLogIn size={20} /> : "Sign In"}
          </Button>
          <Button type="link" path="/register" title="Register">
            {isNarrow ? <FaUser size={20} /> : "Register"}
          </Button>
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
};

export default Header;
