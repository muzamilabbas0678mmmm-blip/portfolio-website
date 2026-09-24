import { Link } from "react-router-dom";
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Hero = ({ name, role, Discription }) => {
  return (
    <section
  className=" overflow-hidden bg-slate-950 bg-[length:190%_90%] bg-[position:center_50%] bg-no-repeat lg:bg-cover lg:bg-center"
  style={{ backgroundImage: "url('/hero.png')" }}
>
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-5 py-17 sm:px-6 lg:px-8">

        <div className="grid w-full h-200 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT SIDE */}
          <div className="mb-60">

            <h1 className="mt-13 md:mt-0 text-4xl font-bold leading-tight tracking-[0.05em] bg-gradient-to-r from-blue-200 to-purple-900 bg-clip-text text-transparent sm:text-5xl lg:mt-15 lg:text-7xl">
              Hi, I'm
            </h1>

            <h1 className="text-4xl font-bold leading-tight tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent sm:text-6xl lg:text-7xl">
              {name}
            </h1>

            <h2 className="mt-2 text-xl font-semibold text-slate-300 sm:text-3xl">
              {role}
            </h2>

            <p className="mt-5 max-w-[220px] md:max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              {Discription}
              <span className="font-semibold text-slate-200">
                {" "}React.
              </span>
            </p>


            {/* BUTTONS */}
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap">

              <Link
                to="/projects"
                className="w-45  md:w-auto rounded-lg bg-purple-700 px-6 py-3.5 text-center font-semibold text-white shadow-lg shadow-orange-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                View My Work →
              </Link>

              <Link
                to="/contact"
                className="w-45  md:w-auto rounded-lg border border-blue-200 px-6 py-3.5 text-center font-semibold text-white transition hover:-translate-y-0.5 hover:border-blue-600 hover:text-purple-400"
              >
                Contact Me 🧾
              </Link>

            </div>


            {/* TECH STACK */}
            <p className="mt-8 text-[13px] text-slate-300">
              TECH STACK
            </p>

            <div className="mt-5 flex  flex-wrap items-center gap-x-5 gap-y-5 text-sm text-slate-300 sm:gap-x-6">

              {/* HTML */}
              <span className="flex flex-col items-center gap-1">
                <FaHtml5 className="text-4xl text-orange-500 sm:text-5xl" />
                HTML
              </span>

              {/* CSS */}
              <span className="flex flex-col items-center gap-1">
                <FaCss3Alt className="text-4xl text-blue-500 sm:text-5xl" />
                CSS
              </span>

              {/* JavaScript */}
              <span className="flex flex-col items-center gap-1">
                <FaJs className="text-4xl text-yellow-500 sm:text-5xl" />
                JavaScript
              </span>

              {/* React */}
              <span className="flex flex-col items-center gap-1">
                <FaReact className="text-4xl text-blue-500 sm:text-5xl" />
                React
              </span>

              {/* Tailwind */}
              <span className="flex flex-col items-center gap-1">
                <SiTailwindcss className="text-4xl text-cyan-500 sm:text-5xl" />
                Tailwind CSS
              </span>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="relative hidden lg:block mb-15">

            <div className="absolute -bottom-43 -left-20 rounded-2xl border border-slate-400 bg-white px-5 py-4 shadow-20xl">

              <p className="text-xs font-bold text-slate-700">
                Currently learning
              </p>

              <p className="mt-1 font-semibold text-slate-900">
                Node.js+express.js
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;