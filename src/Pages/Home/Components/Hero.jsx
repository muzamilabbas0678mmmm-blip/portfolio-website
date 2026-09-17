import { FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Hero = ({ name, role,Discription}) => {
  return (
    <section
      className="overflow-hidden bg-cover "
      style={{ backgroundImage: "url('/profile.png')" }}>
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-16 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h1 className="mt-15 text-5xl font-bold leading-tight tracking-[0.1em] text-slate-900 sm:text-5xl lg:text-7xl bg-gradient-to-r from-blue-200 to-purple-900 to-red-700 bg-clip-text text-transparent ">Hi,I'm</h1>
            <h1 className=" text-5xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl lg:text-7xl bg-gradient-to-r from-blue-500 to-purple-500 to-red-500/50 bg-clip-text text-transparent">
              {name}
            </h1>
            <h2 className="mt-1 text-2xl font-semibold text-slate-300 sm:text-3xl">
              {role}
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-slate-300">
               {Discription}
               <span className=" font-semibold text-slate-200"> React.</span>
              
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
              <a
                href="/Projects"
                className="rounded-lg bg-purple-700 px-6 py-3.5 font-semibold text-white shadow-lg shadow-orange-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                View My Work →
              </a>

              <a
                href="#contact"
                className="text-white rounded-lg border border-blue-200  px-6 py-3.5 font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-600 hover:text-purple-600"
              >
                Contact Me🧾
              </a>
            </div>
            <p className="mt-5 text-[13px]  text-slate-300">TECH STACK</p>
            <div className=" mt-5 flex items-center gap-6 text-sm text-slate-300">
              <span className="flex flex-col items-center gap-1">
                <FaHtml5 className=" text-orange-500 text-5xl" />
                HTML
              </span>

              <span className="flex flex-col flex-col  items-center gap-1">
                <FaCss3Alt className=" text-blue-500 text-5xl" />
                CSS
              </span>

              <span className="flex flex-col items-center gap-1">
                <FaJs className=" text-yellow-500 text-5xl" />
                JavaScript
              </span>

              <span className="flex flex-col flex-col  items-center gap-1">
                <FaReact className=" text-blue-500 text-5xl" />
                React
              </span>

              <span className="flex flex-col flex-col  items-center gap-1">
                <SiTailwindcss className=" text-cyan-500 text-5xl" />
                Tailwind CSS
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -bottom-43 -left-20 rounded-2xl border border-slate-400 bg-white px-5 py-4 shadow-20xl">
              <p className="text-xs font-medium text-slate-700">
                Currently learning
              </p>
              <p className="mt-1 font-bold text-slate-900">React Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
