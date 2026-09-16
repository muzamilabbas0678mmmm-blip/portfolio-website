import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full border-b border-slate-50/50 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-9xl items-center justify-between px-5 py-5 lg:px-8">

        <div className="text-3xl blue font-bold text-slate-300">
          {/* <span className="logo"> M/A🧣 </span> */}
          <span>
            <img
              className="w-17 h-10"
              src="Navbar designed blue purple stylish logo.png"
              alt=""
            />
          </span>
        </div>

        <div className="hidden items-center gap-10 md:flex text-slate-200 rounded-lg border border-slate-700 px-4 py-2 bg-gradient-to-r from-blue-800/40 to-purple-800/70 to-red-800/50">

          <Link
            to="/"
            className="text-sm font-medium text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium text-slate-200 transition hover:text-blue-600"
          >
            About
          </Link>

          <Link
            to="/skills"
            className="text-sm font-medium text-slate-200 transition hover:text-blue-600"
          >
            Skills
          </Link>

          <Link
            to="/Projects"
            className="text-sm font-medium text-slate-200 transition hover:text-blue-600"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="text-sm font-medium text-slate-200 transition hover:text-blue-600"
          >
            Contact
          </Link>

        </div>

        <Link
          to="/contact"
          className="text-white rounded-lg border border-slate-500 px-4 py-2 font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-white-900"
        >
          Let's Talk
        </Link>

        <button className="rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden">
          ☰
        </button>

      </div>
    </nav>
  );
};

export default Navbar;