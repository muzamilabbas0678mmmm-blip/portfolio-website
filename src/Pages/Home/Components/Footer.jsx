import {
  FaHome,
  FaUser,
  FaCode,
  FaFolderOpen,
  FaReact,
  FaJsSquare,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaArrowRight,
  FaArrowUp,
  FaGraduationCap,
} from "react-icons/fa";
import { MdDns } from "react-icons/md";

import { SiTailwindcss } from "react-icons/si";

const Footer = () => {
  // Back to Top
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#02052b] px-4 py-12 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[140px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[130px]" />

      {/* Glass Container */}
      <div
        className="
          relative mx-auto max-w-6xl
          overflow-hidden
          rounded-2xl
          border border-blue-300/40
          bg-slate-950/50
          backdrop-blur-2xl
          shadow-[0_0_40px_rgba(37,99,235,0.25),0_0_80px_rgba(124,58,237,0.18)]
        "
      >
        {/* Top Glow Line */}
        <div
          className="
            absolute left-0 top-0 h-[2px] w-full
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            via-purple-500
            to-fuchsia-500
            shadow-[0_0_15px_rgba(59,130,246,0.9)]
          "
        />

        {/* ================= TOP SECTION ================= */}

      <div className="grid grid-cols-2 gap-8 px-5 py-10 sm:gap-10 sm:px-8 sm:py-12 lg:grid-cols-4 lg:px-12">
          {/* ================= EXPLORE ================= */}

          <div className="lg:border-r lg:border-blue-400/20 lg:pr-10">
            <div className="mb-7 justify-center gap-4 sm:justify-start">
              <div
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-lg
                  border border-blue-400/50
                  bg-blue-500/10
                  text-blue-400
                  shadow-[0_0_25px_rgba(59,130,246,0.5)]
                  backdrop-blur-xl
                "
              >
                <FaHome size={23} />
              </div>

              <h3 className="text-1xl font-bold text-blue-400">
                Explore
              </h3>
            </div>

            <div className="space-y-3">
              <a
                href="/"
                className="group flex items-center gap-3 text-slate-500 transition hover:text-white"
              >
                <FaArrowRight className="text-blue-400 transition group-hover:translate-x-1" />
                Home
              </a>

              <a
                href="/about"
                className="group flex items-center gap-3 text-slate-500 transition hover:text-white"
              >
                <FaArrowRight className="text-blue-400 transition group-hover:translate-x-1" />
                About
              </a>

              <a
                href="/skills"
                className="group flex items-center gap-3 text-slate-500 transition hover:text-white"
              >
                <FaArrowRight className="text-blue-400 transition group-hover:translate-x-1" />
                Skills
              </a>

              <a
                href="/projects"
                className="group flex items-center gap-3 text-slate-500 transition hover:text-white"
              >
                <FaArrowRight className="text-blue-400 transition group-hover:translate-x-1" />
                Projects
              </a>
            </div>
          </div>

          {/* ================= RESOURCES ================= */}

          <div className="lg:border-r lg:border-blue-400/20 lg:pr-10">
            <div className="mb-7 flex items-center gap-4">
              <div
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-lg
                  border border-blue-400/50
                  bg-blue-500/10
                  text-blue-400
                  shadow-[0_0_25px_rgba(59,130,246,0.5)]
                  backdrop-blur-xl
                "
              >
                <FaCode size={23} />
              </div>

              <h3 className="text-1xl font-bold text-blue-400">
                Resources
              </h3>
            </div>

            <div className="space-y-4">
              <div className="group flex items-center gap-3 text-slate-500 transition hover:text-white">
                <FaArrowRight className="text-blue-400 transition group-hover:translate-x-1" />
                React
              </div>

              <div className="group flex items-center gap-3 text-slate-500 transition hover:text-white">
                <FaArrowRight className="text-blue-400 transition group-hover:translate-x-1" />
                JavaScript
              </div>

              <div className="group flex items-center gap-3 text-slate-500 transition hover:text-white">
                <FaArrowRight className="text-blue-400 transition group-hover:translate-x-1" />
                Tailwind CSS
              </div>

              <div className="group flex items-center gap-3 text-slate-500 transition hover:text-white">
                <FaArrowRight className="text-blue-400 transition group-hover:translate-x-1" />
                GitHub
              </div>
            </div>
          </div>

          {/* ================= CONNECT ================= */}

          <div className="lg:border-r lg:border-blue-400/20 lg:pr-10">
            <div className="mb-7 flex items-center gap-4">
              <div
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-lg
                  border border-fuchsia-400/50
                  bg-fuchsia-500/10
                  text-fuchsia-400
                  shadow-[0_0_25px_rgba(168,85,247,0.5)]
                  backdrop-blur-xl
                "
              >
                <FaEnvelope size={23} />
              </div>

              <h3 className="text-1xl font-bold text-blue-400">
                Connect
              </h3>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:muzamilabbas0678mmmm@gmail.com"
                className="group flex items-center gap-3 text-slate-300 transition hover:text-white"
              >
                <FaArrowRight className="text-red-400 transition group-hover:translate-x-1" />

                <FaEnvelope className="text-red-500" />

                <span>Email</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/muzamilabbas0678mmmm-blip/portfolio-website.git"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-slate-300 transition hover:text-white"
              >
                <FaArrowRight className="text-blue-300 transition group-hover:translate-x-1" />

                <FaGithub className="text-white" size={20} />

                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="group flex items-center gap-3 text-slate-300 transition hover:text-white"
              >
                <FaArrowRight className="text-cyan-400 transition group-hover:translate-x-1" />

                <FaLinkedin className="text-blue-500" size={20} />

                <span>LinkedIn</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/923206710678"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-slate-300 transition hover:text-white"
              >
                <FaArrowRight className="text-cyan-400 transition group-hover:translate-x-1" />

                <FaWhatsapp className="text-green-500" size={21} />

                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* ================= CURRENTLY LEARNING ================= */}

          <div>
            <div className="mb-7 flex items-center gap-4">
              <div
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-lg
                  border border-blue-400/50
                  bg-blue-500/10
                  text-blue-400
                  shadow-[0_0_25px_rgba(59,130,246,0.5)]
                  backdrop-blur-xl
                "
              >
                <FaGraduationCap size={24} />
              </div>

              <h3 className="text-1xl font-bold">
                <span className="text-blue-400">Currently</span>{" "}
                <span className="text-purple-400">Learning</span>
              </h3>
            </div>

            <div className="space-y-3">
              {/* React */}


           


              {/* JavaScript */}
              <div
                className="
                  flex items-center gap-4
                  rounded-lg
                  border border-purple-400/60
                  bg-purple-500/10
                  px-5 py-3
                  shadow-[0_0_20px_rgba(168,85,247,0.25)]
                  backdrop-blur-xl
                "
              >
                <MdDns  className="text-yellow-400" size={25} />

                <span className="text-slate-200">
                   Backend
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= GLOWING DIVIDER ================= */}

        <div className="px-8 lg:px-12">
          <div
            className="
              h-[2px] w-full
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              via-purple-500
              to-fuchsia-500
              shadow-[0_0_15px_rgba(59,130,246,0.9)]
            "
          />
        </div>

        {/* ================= BOTTOM SECTION ================= */}

        <div className="flex flex-col items-center justify-between gap-6 px-5 py-7 sm:px-8 sm:py-8 md:flex-row lg:px-12">
          {/* Logo + Name */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* MA Logo */}
            <div
              className="
                flex h-14 w-16 items-center justify-center sm:h-16 sm:w-20
                text-4xl font-black italic
                text-transparent
                bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
                bg-clip-text
                drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]
              "
            >
              MA
            </div>

            <div className="h-12 w-px bg-blue-400/40" />

            <div>
              <h2
                className="
                  text-2xl font-bold
                  text-transparent
                  bg-gradient-to-r from-blue-400 to-purple-400
                  bg-clip-text
                "
              >
                Muzamil Abbas
              </h2>

              <p className="mt-1 text-sm text-blue-300">
                Frontend Developer
              </p>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm text-blue-300">
            © 2026 Muzamil Abbas. All rights reserved.
          </p>

          {/* Back To Top */}
          <button
            onClick={goToTop}
            className="
              group
              flex items-center gap-3
              rounded-full
              border border-blue-400/60
              bg-blue-500/10
              px-5 py-3
              text-blue-300
              backdrop-blur-xl
              shadow-[0_0_25px_rgba(59,130,246,0.35)]
              transition-all duration-300
              hover:scale-105
              hover:border-purple-400
              hover:text-white
              hover:shadow-[0_0_35px_rgba(168,85,247,0.55)]
            "
          >
            <span
              className="
                flex h-8 w-8 items-center justify-center
                rounded-full
                border border-blue-400/60
                bg-blue-500/10
                text-blue-400
                transition
                group-hover:bg-purple-500/20
                group-hover:text-purple-300
              "
            >
              <FaArrowUp size={14} />
            </span>

            <span className="hidden sm:block">
              Back to Top
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;