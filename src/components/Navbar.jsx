import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar bg-base-200 shadow-md">
      <div className="container mx-auto">
        <div className=" flex-1 flex items-center justify-between">
          <Link to="/" className="normal-case text-xl flex items-center gap-2">
            <img
              src={logo}
              alt="Bird Travel Logo"
              className="w-auto object-contain"
            />
          </Link>

          <div className="flex-none space-x-3">
            <Link to="/destinations" className="btn btn-ghost navbar-center">
              Reiseziele
            </Link>
            <Link to="/about" className="btn btn-ghost">
              Über uns
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
