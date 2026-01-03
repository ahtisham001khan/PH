import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [iconRight, setIconRight] = useState(false);

  const handleSearch = () => {
    if (search.trim() === "") return;
    alert(`Searching for: ${search}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const menuItems = ["Home", "About", "Courses", "Internship", "Blogs", "Contact"];

  return (
    <header className="w-full z-50 backdrop-blur-md transition-all">
      <div className="max-w-[90rem] mx-auto p-3 sm:px-5 md:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 select-none">
            <img
              src="src/assets/images/IPH-logo.webp"
              alt="Site_Logo"
              className="h-10 sm:h-14 md:h-14 lg:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {menuItems.map((item) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              return (
                <Link
                  key={item}
                  to={path}
                  className="relative text-[17px] text-gray-700 font-[600] hover:text-[#1076BC] transition-all duration-300 
                             after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-[2px] 
                             after:bg-[#1076BC] after:rounded-full after:transition-all after:duration-300 
                             hover:after:w-full hover:after:left-0"
                >
                  {item}
                </Link>
              );
            })}
          </nav>

          {/* Search + CTA Desktop */}
          <div className="hidden lg:flex justify-end items-center flex-1 max-w-[40%]">
            <div className="relative w-full mr-5 max-w-[280px] xl:max-w-[340px] 2xl:max-w-[400px]">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setIconRight(true)}
                onBlur={() => !search && setIconRight(false)}
                onKeyDown={handleKeyDown}
                className="w-full border border-blue-200 rounded-full pl-10 pr-10 py-2.5 text-[15px] font-[600] text-gray-700 bg-white/70 backdrop-blur-md shadow-inner focus:outline-none"
              />
              <button
                onClick={(e) => { e.preventDefault(); handleSearch(); }}
                className={`absolute top-2.5 left-3 text-[#1076BC] cursor-pointer transform transition-transform duration-700 ease-in-out ${iconRight ? "translate-x-[220px] xl:translate-x-[290px] 2xl:translate-x-[360px]" : "translate-x-0"} hover:scale-110 active:rotate-12`}
              >
                <svg className="h-5 w-5 sm:h-[22px] sm:w-[22px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                </svg>
              </button>
            </div>
            <Button />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center">
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="p-2 text-[#1076BC] rounded-md focus:outline-none">
              <svg className={`w-7 h-7 transition-transform duration-300 ${open ? "rotate-90" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-full opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200 rounded-b-2xl">
            {/* Mobile Search */}
            <div className="p-3 border-b border-gray-200">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full border border-blue-200 rounded-full pl-9 pr-9 py-2 text-[14px] font-[600] bg-white/70 focus:outline-none"
                />
                <button
                  onClick={(e) => { e.preventDefault(); handleSearch(); }}
                  className="absolute right-2.5 top-2.5 text-[#1076BC] cursor-pointer"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Menu Items */}
            <nav className="text-3xl flex flex-col gap-3 px-5 py-4 text-center">
              {menuItems.map((item) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                return (
                  <Link
                    key={item}
                    to={path}
                    className="relative text-gray-700 font-[600] py-2 md:text-[20px] sm:text-[20px] text-[17px] hover:text-blue-600 transition-all duration-300
                               after:content-[''] after:absolute after:left-1/2 after:-bottom-0.5 after:w-0 after:h-[2px] 
                               after:bg-[#1076BC] after:rounded-full after:transition-all after:duration-300 
                               hover:after:w-full hover:after:left-0"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </Link>
                );
              })}
              <div className="flex justify-center items-center w-full mt-2">
                <button className="sm:w-auto min-w-[170px] px-8 bg-[#1076BC] text-white py-2.5 rounded-full text-[15px] font-medium hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out">
                  Admission
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

