import { useState, useEffect, useContext } from "react";
import { navLinks } from "../data"; // Ensure `navLinks` is correctly imported
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa"; // Import dropdown icon
import { logo } from "../assets/icons"; // Ensure `logo` points to a valid image
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";
import './NavBar.css'


const NavBar = () => {
  



  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false); // State to manage the hamburger menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown menu
  const [scrolled, setScrolled] = useState(false); // State to track scroll

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev); // Toggle menu visibility
  };

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev); // Toggle dropdown visibility
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${ scrolled ? "bg-[#E6F6F4] shadow-md" : "bg-transparent"}`} style={{ height: "70px" }}>
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
        <ul
          className={`hidden lg:flex flex-1 gap-10 justify-center items-center ${
            scrolled ? "text-gray-600" : "text-gray-300"
          }`}
        >
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
              <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white text-gray-600 shadow-md py-2 rounded-lg w-48 text-sm text-center">
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
                    to="/pr"
                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Pr Page
                  </NavLink>
                </li>
                <hr />

                <li>
                  <NavLink
                    to="/termsofuse"
                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Terms of use
                  </NavLink>
                </li>
                <hr />
                <li>
                  <NavLink
                    to="/expomarketing"
                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Expo Marketing
                  </NavLink>
                </li>
                <hr />
                <li>
                  <NavLink
                    to="/mediaplanning"
                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Media Planning
                  </NavLink>
                </li>
                <hr />
                
                <li>
                  <NavLink
                    to="/advertisingagency"
                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Advertising Agency
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/creativecommunication"
                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Creative Communication
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/digitalmarketing"
                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Digital Marketing 
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

        {/* Desktop Login/Register */}
        <div className="hidden lg:flex items-center gap-6">
        
        <input id="checkboxInput" type="checkbox"  onClick={toggleTheme}/>
            <label className="toggleSwitch px-[5%]" for="checkboxInput">
            
            </label>
       
          <Link
            to="#"
            className="py-2 px-6 text-white bg-[#0A6535] rounded-3xl hover:bg-[#085827] transition-all duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
      
        <div className="md:hidden pt-4">
        <label class="switch" >
            <input type="checkbox" onClick={toggleTheme}/>
            <span class="slider">
            <svg class="slider-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg> 
            </span>
        </label>
        </div>
        
        <button
          className={`lg:hidden text-[30px] ${
            scrolled ? "text-gray-600" : "text-white"
          }`}
          onClick={handleMenuToggle}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >

          {menuOpen ? <IoMdClose className="text-[#0A6535]" /> : <GiHamburgerMenu className="text-[#0A6535]" />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg z-10 flex flex-col items-start py-4 px-6 lg:hidden">
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
                        onClick={() => setMenuOpen(false)}
                      >
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
                        onClick={() => setMenuOpen(false)}
                      >
                        Order For Printing
                      </NavLink>
                    </li>
                    <hr />
                    <li>
                      <NavLink
                        to="/orderforinstallation"
                        className="block px-4 py-2 text-sm hover:bg-gray-200"
                        onClick={() => setMenuOpen(false)}
                      >
                        Order For Installation
                      </NavLink>
                    </li>
                    <hr />
                    <li>
                      <NavLink
                        to="/orderfordeployent"
                        className="block px-4 py-2 text-sm hover:bg-gray-200"
                        onClick={() => setMenuOpen(false)}
                      >
                        Order For Deployment
                      </NavLink>
                    </li>
                    <hr />
                    <li>
                      <NavLink
                        to="/radioandtv"
                        className="block px-4 py-2 text-sm hover:bg-gray-200"
                        onClick={() => setMenuOpen(false)}
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
