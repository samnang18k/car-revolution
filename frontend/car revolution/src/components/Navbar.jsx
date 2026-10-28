import logo from "../assets/imagescars/logo.jpg"
import { useState ,useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Map, User,Sun,Moon  } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Inventory", path: "/inventory" },
  { name: "Special", path: "/special" },
  { name: "Service", path: "/service" },
  { name: "About", path: "/about" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);

    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
     };
  const linkStyle = ({ isActive }) =>
    `block rounded-sm px-4 py-2.5 text-lg font-semibold transition-all duration-200 uppercase ${
      isActive
        ? "bg-blue-400 text-white shadow-md"
        : "text-gray-600 hover:bg-blue-50 hover:text-blue-400 dark:text-white"
    }`;
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95  shadow-sm backdrop-blur-md dark:bg-gray-800 font[inter]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2"
        >
         <img src={logo} alt="" className="w-15" />

          <span className="text-2xl font-extrabold tracking-tight text-gray-800 dark:text-white">
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
              <button
                onClick={toggleDarkMode}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                className="rounded-full bg-gray-100 p-3 transition hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
               >
                {darkMode ? (
                  <Sun size={22} className="text-blue-400" />
                ) : (
                  <Moon size={22} className="text-gray-700" />
                )}
             </button>
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
        <div className="absolute border-t border-gray-100 bg-white shadow-lg w-90 right-0 px-4 pb-5 pt-3 md:hidden">
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