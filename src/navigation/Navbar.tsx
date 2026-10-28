
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/IJ_Logo.png";
const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Case Study", path: "/case-study" },
  { label: "Blog", path: "/blog" },
  { label: "Photo Story", path: "/photo-story" },
  { label: "Realtor", path: "/realtor" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  return (
    <nav className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center justify-between gap-5 bg-transparent px-6 pt-7 sm:px-10 lg:px-16">
      <Link to="/" className="shrink-0">
        <img
          src={logo}
          alt="Imtiaj Jehad--logo"
          className="h-20 w-40 object-contain"
        />
      </Link>

      <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
        {navItems.map(({ label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `text-[20px] font-medium transition hover:text-[#D2223E] ${
                isActive ? "text-[#D2223E]" : "text-[#223752]"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
