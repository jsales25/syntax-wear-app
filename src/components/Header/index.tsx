import Logo from "@/assets/images/logo.png";
import IconUser from "@/assets/images/icon-user.png";
import IconAbout from "@/assets/images/icon-about.png";
import { Link } from "@tanstack/react-router";
import { ShoppingCart } from "../ShoppingCart";
import { MenuMobile } from "../MenuMobile";

export interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  {name: "Masculino", href: "/products/category/masculino"},
  {name: "Feminino", href: "/products/category/feminino"},
  {name: "Outlet", href: "/products/category/outlet"},
]

export const Header = () => {
  return (
    <div className="relative">
      <header className="fixed top-5 left-0 right-0 z-10 mx-10">
        <div className="bg-white text-black max-w-[1320px] mx-auto flex justify-between items-center py-3 px-7 rounded-2xl mt-5">
          <Link to="/">
            <img src={Logo} alt="Logo SyntaxWear" className="w-32 md:w-36" />
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex gap-10">
              {navLinks.map((link) => (
                <Link to={link.href} key={link.name}>
                  {link.name}
                </Link>
              ))}
            </ul>
          </nav>

          <nav>
            <ul className="flex gap-4 md:gap-10 items-center">
              <li className="hidden lg:block">
                <Link to="/our-stores">Nossas lojas</Link>
              </li>
              <li className="hidden lg:block">
                <Link to="/about">Sobre</Link>
              </li>
              <li className="lg:hidden">
                <MenuMobile navLinks={navLinks}/>
              </li>
              <li className="hidden lg:block">
                <Link to="/sign-up">
                  <img src={IconUser} alt="Ícone de login" />
                </Link>
              </li>
              <li className="hidden lg:block">
                <Link to="/about">
                  <img src={IconAbout} alt="Ícone de sobre" />
                </Link>
              </li>
              <li>
                <ShoppingCart />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
