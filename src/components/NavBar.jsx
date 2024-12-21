import { useState } from "react";
import { navLinks } from "../data"; // Ensure `navLinks` is correctly imported
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { logo } from "../assets/icons"; // Ensure `logo` points to a valid image
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage the hamburger menu

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev); // Toggle menu visibility
  };

  return (
    <header
      className="fixed w-full bg-[#E6F6F4] z-50 shadow-sm"
      style={{
        height: "70px",
      }}
    >
      <nav className="flex justify-between items-center max-w-[1200px] mx-auto px-4 sm:px-8">
        {/* Logo */}
        <Link to="/" aria-label="Home" className="text-[30px]">
          <img
            src={logo}
            style={{ height: "50px", width: "70px" }}
            alt="Company logo"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex flex-1 gap-10 justify-center items-center">
          {navLinks.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className="text-sm hover:text-[#0A6535] transition-colors duration-300"
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Login/Register */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            to="#"
            className="py-2 px-6 text-white bg-[#0A6535] rounded-3xl hover:bg-[#085827] transition-all duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="lg:hidden text-[30px] text-[#0A6535]"
          onClick={handleMenuToggle}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#E6F6F4] shadow-lg z-10 flex flex-col items-start py-4 px-6 lg:hidden">
            <ul className="w-full">
              {navLinks.map(({ name, path }, index) => (
                <li key={index} className="w-full py-2">
                  <NavLink
                    to={path}
                    className="block w-full text-sm py-2 px-4 hover:bg-gray-200 rounded"
                    onClick={handleMenuToggle}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="w-full mt-4">
              <Link
                to="#"
                className="w-full flex justify-center items-center py-3 px-4 bg-[#0A6535] rounded-3xl text-white text-center hover:bg-[#085827] transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
