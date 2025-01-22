import { useState } from "react";
import { navLinks } from "../data"; // Ensure `navLinks` is correctly imported
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa"; // Import dropdown icon
import { logo } from "../assets/icons"; // Ensure `logo` points to a valid image
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage the hamburger menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown menu

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev); // Toggle menu visibility
  };

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev); // Toggle dropdown visibility
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
        <ul className="hidden text-sm text-gray-600 lg:flex flex-1 gap-10 justify-center items-center">
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
          {/* Services Dropdown */}
          <li className="relative">
            <button
              className="flex items-center text-sm hover:text-[#0A6535] transition-colors duration-300"
              onClick={handleDropdownToggle}
            >
              Value Added Services <FaChevronDown className="ml-1" />
            </button>
            {dropdownOpen && (
              <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-md py-2 rounded-lg w-48 text-sm text-center">
                <li>
                  <NavLink
                    to="/campaignmonitoring"
                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                    onClick={() => setMenuOpen(false)}                  >
                    Monitoring
                  </NavLink>
                </li>
                <hr />
                <li>
                  <NavLink
                    to="/paidoutdoors"
                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    Paid Outdoor Monitoring
                  </NavLink>
                </li>
                <hr />
                <li>
                  <NavLink
                    to="/orderforprinting"
                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                    onClick={() => setMenuOpen(false)}                  >
                    Order For Printing
                  </NavLink>
                </li>
                <hr />
                <li>
                  <NavLink
                    to="/orderforinstallation"
                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                    onClick={() => setMenuOpen(false)}                  >
                    Order For Installation
                  </NavLink>
                </li>
                <hr />
                <li>
                  <NavLink
                    to="/orderfordeployent"
                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                    onClick={() => setMenuOpen(false)}                  >
                    Order For Deployment
                  </NavLink>
                </li>
                <hr />
                <li>
                  <NavLink
                    to="/radioandtv"
                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                    onClick={() => setMenuOpen(false)}                  >
                    Radio and Tv
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
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
              {/* Services Dropdown */}
              <li className="w-full py-2">
                <button
                  className="flex items-center w-full text-sm py-2 px-4 hover:bg-gray-200 rounded text-left"
                  onClick={handleDropdownToggle}
                >
                 Value Added Services <FaChevronDown className="ml-1" />
                </button>
                {dropdownOpen && (
                  <ul className="pl-4 mt-2 w-full">
                      <li>
                  <NavLink
                    to="/campaignmonitoring"
                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Monitoring
                  </NavLink>
                </li>
                <hr />
                <li>
                  <NavLink
                    to="/paidoutdoors"
                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Paid Outdoor Monitoring
                  </NavLink>
                </li>
                <hr />
                <li>
                  <NavLink
                    to="/orderforprinting"
                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Order For Printing
                  </NavLink>
                </li>
                <hr />
                <li>
                  <NavLink
                    to="/orderforinstallation"
                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Order For Installation
                  </NavLink>
                </li>
                <hr />
        
                <li>
                  <NavLink
                    to="/orderfordeployent"
                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Order For Deployment
                  </NavLink>
                </li>
                <hr />
                <li>
                  <NavLink
                    to="/radioandtv"
                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Radio and Tv
                  </NavLink>
                </li>
                  </ul>
                )}
              </li>
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
