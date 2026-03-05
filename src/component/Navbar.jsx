import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";

export default function Navbar() {
  const [color, setColor] = useState(false);
  const {user,logout}=useContext(AuthContext)

  function handleclick() {
    document.documentElement.classList.toggle("dark");
    setColor(!color);
  }

  return (
    <div className="flex flex-col bg-[var(--color-background)] ">
      <div className="mb-8 flex justify-between px-5 py-3 md:px-9 py-5 text-[var(--color-primary)] shadow-lg ">
        <NavLink to="/" className="xl:text-2xl md:text-xl text-sm font-bold">
          Over <span className="text-[var(--color-mimo)]">Shop</span>
        </NavLink>

        <nav className="flex justify-center gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "xl:text-2xl md:text-xl text-md font-bold text-[var(--color-mimo)]"
                : "xl:text-2xl md:text-xl text-md hover:text-[var(--color-mimo)]"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/Checkout"
            className={({ isActive }) =>
              isActive
                ? "xl:text-2xl md:text-xl text-md font-bold text-[var(--color-mimo)]"
                : "xl:text-2xl md:text-xl text-md hover:text-[var(--color-mimo)]"
            }
          >
            Cart
          </NavLink>

          {!user?(<NavLink
            to="/Auth"
            className={({ isActive }) =>
              isActive
                ? "xl:text-2xl md:text-xl text-md font-bold text-[var(--color-mimo)]"
                : "xl:text-2xl md:text-xl text-md hover:text-[var(--color-mimo)]"
            }
          >
            Login
          </NavLink>):(<NavLink
          onClick={logout}
          className="xl:text-2xl md:text-xl text-md hover:text-[var(--color-mimo)]"            
          >
            Logout
          </NavLink>

          )}

          <div className="flex px-6 gap-8 xl:text-2xl md:text-xl text-md ">
            <button onClick={handleclick}>
              {color ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
