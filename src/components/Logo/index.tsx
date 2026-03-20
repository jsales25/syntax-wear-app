import { Link } from "@tanstack/react-router";
import LogoImage from "@/assets/images/logo.png";

export const Logo = () => {
  return (
    <Link to="/" className="self-center">
      <img src={LogoImage} alt="Logo SyntaxWear" className="w-40" />
    </Link>
  );
};
