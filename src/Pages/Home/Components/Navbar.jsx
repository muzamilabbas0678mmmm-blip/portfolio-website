import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-[9999] w-full border-b border-slate-50/50 bg-slate-950/95 backdrop-blur-md">
      
      <div className="mx-auto flex max-w-9xl items-center justify-between px-5 py-5 lg:px-8">

        {/* Logo */}
        <div className="text-3xl font-bold text-slate-300">
          <span>
            <img
              className="h-10 w-17"
              src="Navbar designed blue purple stylish logo.png"
              alt="MA Logo"
            />
          </span>
        </div>


        {/* Desktop Menu */}
        <div className="hidden items-center gap-10 rounded-lg border border-slate-700 bg-gradient-to-r from-blue-800/40 to-purple-700/70 to-red-900/70 px-4 py-2 text-slate-200 md:flex">

          <Link
            to="/"
            className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium text-slate-200 transition hover:text-blue-400"
          >
            About
          </Link>

          <Link
            to="/skills"
            className="text-sm font-medium text-slate-200 transition hover:text-blue-400"
          >
            Skills
          </Link>

          <Link
            to="/projects"
            className="text-sm font-medium text-slate-200 transition hover:text-blue-400"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="text-sm font-medium text-slate-200 transition hover:text-blue-400"
          >
            Contact
          </Link>

        </div>


        {/* Desktop Let's Talk */}
        <Link
          to="/contact"
          className="hidden rounded-lg border border-slate-500 px-4 py-2 font-semibold text-white transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-300 md:block"
        >
          Let's Talk
        </Link>


        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-slate-600 px-3 py-2 text-xl text-slate-200 transition hover:border-blue-400 hover:text-blue-400 md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950/98 px-5 py-5 md:hidden">

          <div className="flex flex-col gap-2">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-blue-400 transition hover:bg-blue-500/10"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-slate-200 transition hover:bg-blue-500/10 hover:text-blue-400"
            >
              About
            </Link>

            <Link
              to="/skills"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-slate-200 transition hover:bg-blue-500/10 hover:text-blue-400"
            >
              Skills
            </Link>

            <Link
              to="/projects"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-slate-200 transition hover:bg-blue-500/10 hover:text-blue-400"
            >
              Projects
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-slate-200 transition hover:bg-blue-500/10 hover:text-blue-400"
            >
              Contact
            </Link>

            {/* Mobile Let's Talk */}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg border border-blue-500 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-center font-semibold text-white transition hover:-translate-y-0.5"
            >
              Let's Talk
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;