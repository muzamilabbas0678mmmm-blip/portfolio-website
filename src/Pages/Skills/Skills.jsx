import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiTailwindcss,SiVisualstudiocode } from "react-icons/si";

const Skills = () => {
  return (
    <div className="min-h-screen bg-slate-950 px-5 py-28 text-slate-200">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-blue-400">
            My Skills
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Work With
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            I am continuously learning and improving my skills to build modern,
            responsive and user-friendly web applications.
          </p>
        </div>

        <section>
          <h2 className="mb-7 text-2xl font-bold text-white">
            Frontend Development
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-orange-500">
              <FaHtml5 className="mx-auto text-5xl text-orange-500 transition group-hover:scale-110" />

              <h3 className="mt-4 text-lg font-semibold text-white">HTML</h3>

              <p className="mt-2 text-sm text-slate-500">
                Creating structured and semantic web pages.
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-500">
              <FaCss3Alt className="mx-auto text-5xl text-blue-500 transition group-hover:scale-110" />

              <h3 className="mt-4 text-lg font-semibold text-white">CSS</h3>

              <p className="mt-2 text-sm text-slate-500">
                Styling, layouts and responsive designs.
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-yellow-500">
              <FaJs className="mx-auto text-5xl text-yellow-400 transition group-hover:scale-110" />

              <h3 className="mt-4 text-lg font-semibold text-white">
                JavaScript
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Logic, events, DOM and modern ES6 concepts.
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-500">
              <FaReact className="mx-auto text-5xl text-cyan-400 transition group-hover:scale-110" />

              <h3 className="mt-4 text-lg font-semibold text-white">React</h3>

              <p className="mt-2 text-sm text-slate-500">
                Components, props, routing and modern UI development.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="mb-7 text-2xl font-bold text-white">Styling & UI</h2>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {/* Tailwind */}
            <div className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-blue-950/40 to-slate-900 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-500">
              <SiTailwindcss className="text-5xl text-cyan-400 transition group-hover:scale-110" />

              <h3 className="mt-5 text-xl font-semibold text-white">
                Tailwind CSS
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Building modern and responsive interfaces with utility classes.
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-purple-950/40 to-slate-900 p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-500">
              <div className="text-5xl">📱</div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                Responsive Design
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Making websites work smoothly on mobile, tablet and desktop
                screens.
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-blue-950/40 to-purple-950/40 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500">
              <div className="text-5xl">🎨</div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                Modern UI
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Creating clean, attractive and easy-to-use interfaces.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="mb-7 text-2xl font-bold text-white">
            Tools & Workflow
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {/* Git */}
            <div className="flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-orange-500">
              <FaGitAlt className="text-5xl text-orange-500" />

              <div>
                <h3 className="font-semibold text-white">Git</h3>

                <p className="mt-1 text-sm text-slate-500">
                  Version control for development projects.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-purple-500">
              <FaGithub className="text-5xl text-white" />

              <div>
                <h3 className="font-semibold text-white">GitHub</h3>

                <p className="mt-1 text-sm text-slate-500">
                  Managing and sharing development projects.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-blue-500">
              <SiVisualstudiocode className="text-5xl text-blue-400" />

              <div>
                <h3 className="font-semibold text-white">VS Code</h3>

                <p className="mt-1 text-sm text-slate-500">
                  My primary code editor and development environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-slate-800 bg-gradient-to-r from-blue-950/60 to-purple-950/60 p-8 md:p-10">
          <div className="md:flex md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[3px] text-purple-400">
                Currently Learning
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white">
                Improving My React & JavaScript Skills
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                I am currently focusing on deeper JavaScript concepts and React
                development. My goal is to understand how things work instead of
                simply memorizing syntax.
              </p>
            </div>

            <div className="mt-7 md:mt-0">
              <div className="rounded-xl border border-slate-700 bg-slate-950/60 px-6 py-5 text-center">
                <p className="text-sm text-slate-500">Current Focus</p>

                <p className="mt-1 text-xl font-bold text-blue-400">
                  React + JavaScript
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="py-16 text-center">
          <h2 className="text-3xl font-bold text-white">
            Skills Grow With Practice.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            I am continuously learning, building projects and improving my
            development skills one step at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
