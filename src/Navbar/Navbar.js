import React, { useState } from "react";
import LInk from "../components/LInk/LInk";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Products", path: "/products" },
    { id: 3, name: "Orders", path: "/orders" },
    { id: 4, name: "Contract", path: "/contract" },
    { id: 5, name: "Abouto", path: "/about" },
  ];
  return (
    <nav className="w-full bg-red-300">
      <div
        onClick={() => setOpen(!open)}
        className=" bg-red-300 h-6 w-6 md:hidden "
      >
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>
      <ul
        className={`bg-red-300 md:flex w-full justify-center absolute duration-500 md:static  ${
          open ? "top-6" : "top-[-140px]"
        }`}
      >
        {routes.map((route) => (
          <LInk key={route.id} route={route}></LInk>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
