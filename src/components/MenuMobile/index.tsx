import IconMenu from "@/assets/images/icone-menu.png";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

import type { NavLink } from "../Header";
import { IoMdClose } from "react-icons/io";

interface MenuMobileProps {
  navLinks: NavLink[];
}

export const MenuMobile = ({ navLinks }: MenuMobileProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className="cursor-pointer"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <img src={IconMenu} alt="Ícone menu" />
      </button>

      {/* { Overlay } */}
      <div
        className={`${menuIsOpen ? "bg-black/70 visible" : "bg-transparent invisible"} fixed top-0 bottom-0 left-0 right-0 z-30`}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        {/* { Drawer } */}
        <div
          className={`${menuIsOpen ? "translate-x-0" : "-translate-x-full"} absolute top-0 bottom-0 bg-white pt-6 transition-all duration-500 ease-in-out w-full`}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="bg-black py-5 px-5 text-white">
            <nav className="flex justify-between">
              <Link to="/sign-in" className="flex items-center gap-3">
                <FaRegUserCircle className="h-6 w-6" />
                <p>Olá! Faça seu login</p>
              </Link>
              <IoMdClose className="cursor-pointer text-2xl" onClick={() => setMenuIsOpen(!menuIsOpen)} />
            </nav>
          </header>

          <ul className="p-4 overflow-y-auto scrollbar-hide h-[calc(100%_-_140px)] flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                to={link.href}
                key={link.name}
                onClick={() => setMenuIsOpen(!menuIsOpen)}
              >
                {link.name}
              </Link>
            ))}

            <li>
              <Link to="/our-stores" onClick={() => setMenuIsOpen(!menuIsOpen)}>Nossas lojas</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuIsOpen(!menuIsOpen)}>Sobre</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
