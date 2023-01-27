import React from "react";
import { Link } from "react-router-dom";
import footerLinks from "../constants/footerLinks";

function Footer() {
  return (
    <div className="bg-black px-8 py-8 w-full">
      <div className="mb-8 font-light">
        {footerLinks.map((link) => (
          <Link
            to={link.url}
            key={link.label}
            className="text-white inline max-[768px]:block mb-3 mr-6"
          >
            {link.label}
          </Link>
        ))}
        <div className="text-white inline min-[1024px]:float-right min-[1024px]:my-3 text-sm font-light">
          Find us on{" "}
        </div>
      </div>
      <hr className="bg-white text-white mb-8" />
      <div className="mb-3">
        <div className="text-white inline max-[768px]:block font-semibold">
          Copyright &copy; 2022 IZY Points. All rights reserved.{" "}
        </div>
        <div className="text-white inline max-[768px]:block min-[1024px]:float-right min-[1024px]:my-3 text-sm font-light">
          Powered by{" "}
        </div>
      </div>
    </div>
  );
}

export default Footer;
