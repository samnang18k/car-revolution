import logo from "../assets/imagescars/logo.jpg"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Map, User  } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Inventory", path: "/inventory" },
  { name: "Special", path: "/special" },
  { name: "Service", path: "/service" },
  { name: "About", path: "/about" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `block rounded-sm px-4 py-2.5 text-lg font-semibold transition-all duration-200 uppercase ${
      isActive
        ? "bg-blue-400 text-white shadow-md"
        : "text-gray-600 hover:bg-blue-50 hover:text-blue-400"
    }`;
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md font[inter]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2"
        >
         <img src={logo} alt="" className="w-15" />

          <span className="text-2xl font-extrabold tracking-tight text-gray-800">
            CAR<span className="text-blue-400">2.0</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={linkStyle}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:flex md:gap-7 ">
             <NavLink className='text-gray-500 hover:bg-gray-200 p-2 rounded-full'>
              <Map size={25} />
             </NavLink>
             <NavLink className='text-gray-500 hover:bg-gray-200 p-2 rounded-full'>
              <User size={25} />
             </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-gray-800 transition hover:bg-gray-100 md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-5 pt-3 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setIsOpen(false)}
                className={linkStyle}
              >
                {item.name}
              </NavLink>
            ))}

            
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;