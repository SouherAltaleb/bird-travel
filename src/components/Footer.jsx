import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-center p-6 bg-base-200 text-base-content">
      <div className="container mx-auto">
        <p>© 2025 BIRD Travel — Alle Rechte vorbehalten</p>
        <div className="mt-2 space-x-4">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/destinations" className="link">
            Reiseziele
          </Link>
          <Link to="/contact" className="link">
            Kontakt
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
