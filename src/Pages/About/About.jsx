import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-950 px-5 py-28 text-slate-200">
      <div className="mx-auto max-w-6xl">

        <div className="mb-18  text-center">
          <p className=" mb-3 text-sm font-semibold uppercase tracking-[6px] text-blue-400">
            About Me💀
          </p>

          <h1 className="text-4xl font-bold md:text-7xl">
            Building My Future With{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Code
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-slate-300 font-bold">
            I'm Muzamil Abbas, a frontend developer focused on building
            modern, responsive and user-friendly web experiences.
          </p>
        </div>


        <div className="grid gap-8 md:grid-cols-2">
            
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg">
            <h2 className=" text-2xl font-bold text-white">
              Who I Am
            </h2>

            <p className="leading-7 text-slate-300">
              I'm a passionate web developer who enjoys turning ideas into
              clean and useful digital experiences. My main focus is
              frontend development, especially creating interfaces with
              JavaScript, React and modern CSS technologies.
            </p>

            <p className="mt-8 leading-7 text-slate-400">
              I believe good development is not only about writing code.
              It's also about understanding problems, creating simple
              solutions and continuously improving the final experience.
            </p>
          </div>


          {/* Learning Journey */}
          <div className=" rounded-2xl border border-purple-900/50 bg-gradient-to-br from-blue-950/30 to-purple-900/60 p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-white">
              My Learning Journey
            </h2>

            <p className="leading-7 text-slate-300">
              My journey started with the fundamentals of web development.
              I learned HTML and CSS and then moved into JavaScript to
              understand how websites become interactive.
            </p>

            <p className="mt-4 leading-7 text-slate-400">
              I'm now developing my skills with React and learning how to
              build reusable components, dynamic interfaces and complete
              web applications.
            </p>
          </div>

        </div>


        {/* Skills Overview */}
        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-8">
          <h2 className="mb-6 text-2xl font-bold text-white">
            What I Work With
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2">

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-8 text-center transition hover:-translate-y-1 hover:border-blue-500">
              <h3 className="font-semibold text-blue-400">
                HTML
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Structure & Semantics
              </p>
            </div>


            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 text-center transition hover:-translate-y-1 hover:border-blue-500">
              <h3 className="font-semibold text-blue-400">
                CSS && Tailwind
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Styling & Responsive UI
              </p>
            </div>


            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 text-center transition hover:-translate-y-1 hover:border-purple-500">
              <h3 className="font-semibold text-purple-400">
                JavaScript
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Logic & Interactivity
              </p>
            </div>


            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 text-center transition hover:-translate-y-1 hover:border-purple-500">
              <h3 className="font-semibold text-purple-400">
                React
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Modern UI Development
              </p>
            </div>

          </div>
        </div>



        <div className="mt-8 grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
            <h2 className="mb-4 text-3xl font-bold ">
              Career Focus
            </h2>

            <p className="leading-8 text-slate-300">
              My current goal is to become a strong professional frontend
              developer and gain real-world experience by working on
              meaningful projects.
            </p>

            <p className="mt-4 leading-7 text-slate-400">
              In the future, I plan to expand my knowledge toward full-stack
              development and work with modern technologies used in the
              professional software industry.
            </p>
          </div>


          <div className=" rounded-3xl border border-blue-900/50 bg-gradient-to-br from-blue-950/50 to-purple-950/50 p-8">
            <h2 className="mb-4 text-3xl font-bold ">
              My Approach
            </h2>

            <p className="leading-7 text-slate-300">
              I prefer learning by building real projects instead of only
              studying theory. Every project gives me an opportunity to
              understand a new concept and improve my problem-solving skills.
            </p>

            <p className="mt-4 leading-7 text-slate-400">
              I'm continuously learning updated & modern technologies, experimenting and improving my
              development workflow.
            </p>
          </div>

        </div>


        {/* CTA */}
        <div className="mt-10 rounded-2xl border border-slate-800 bg-gradient-to-r from-blue-950/60 to-purple-900 px-6 py-12 text-center">

          <h2 className="text-3xl font-bold text-white">
            Want to See What I Build?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Explore my projects and see how I'm applying what I learn
            to real web development.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/projects"
              className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20"
            >
              View My Projects →
            </Link>

            <Link
              to="/contact"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
            >
              Let's Talk
            </Link>

          </div>

        </div>


        
        <div className="py-16 text-center">

          <h2 className="text-3xl font-bold text-white">
            Always Learning. Always Building.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400 font-bold">
            My journey in web development is still growing, and I'm excited
            to keep learning new technologies, building better projects and
            turning ideas into real digital experiences.
          </p>

        </div>

      </div>
    </div>
  );
};

export default About;