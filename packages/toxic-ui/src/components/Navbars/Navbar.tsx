import { navbarI } from "../../interfaces/interfaceNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export const Navbar = ({
  brand,
  urls,
  padding,
  textColor,
  rounded,
  background,
}: navbarI) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav
      className={`relative w-full
        ${textColor ? textColor : "text-dark"}
        ${padding ? padding : "lg:px-3 lg:py-2"}
        ${rounded ? rounded : "rounded"}
        ${background ? background : "bg-light"}
      `}
    >
      {/* laptops-pcs */}
      <ul className="hidden w-full justify-between lg:flex">
        <li className="flex items-center gap-1">
          <span>{brand.text}</span>
          {brand.logo && <img src={brand.logo} alt={brand.text} />}
        </li>
        <div className="flex gap-10">
          {urls.map((link) => {
            return <li key={link.id}>{link.text}</li>;
          })}
        </div>
      </ul>

      {/* mobile-tablets */}
      <button
        onClick={handleClick}
        className={`absolute right-3 top-0 z-10 text-xl md:text-3xl lg:hidden
          ${textColor ? textColor : "text-primary"}
        `}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <aside
        className={`flex h-screen items-center justify-center  bg-gradient-to-br from-gray-950/95 to-neutral-950/95 transition-all duration-300 ease-in-out lg:hidden
      ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="flex flex-col gap-10 font-medium uppercase text-gray-100 md:text-xl">
          <li className="flex items-center">
            <span>{brand.text}</span>
            {brand.logo && <img src={brand.logo} alt={brand.text} />}
          </li>
          <div className="flex flex-col gap-10">
            {urls.map((link) => {
              return <li key={link.id}>{link.text}</li>;
            })}
          </div>
        </ul>
      </aside>
    </nav>
  );
};
