import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="max-w-3xl mx-auto px-4 py-3backdrop-blur-md rounded-xl flex flex-wrap items-center justify-center gap-2">
      {/* Home Link */}
      <Link
        to="/"
        className="text-white font-medium rounded-full hover:scale-120 transition-all duration-200 uppercase"
      >
        Home
      </Link>

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <span key={index} className="flex items-center gap-2">
            {/* Arrow */}
            <span className="text-4xl text-gray-200 font-bold select-none">/</span>

            {isLast ? (
              <span className="text-white font-medium rounded-full scale-120 transition-all duration-200 uppercase">
                {name.replace("-", " ")}
              </span>
            ) : (
              <Link
                to={routeTo}
                className="text-white"
              >
                {name.replace("-", " ")}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
}
