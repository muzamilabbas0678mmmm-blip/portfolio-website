
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaJs,
  FaHtml5,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const projects = [
  {
    title: "Weather App",
    description:
      "A responsive weather application built with React that displays weather information in a clean and interactive interface.",
    image: "weather-app.png",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },

  {
    title: "JavaScript Calculator",
    description:
      "A simple calculator built with HTML, CSS and JavaScript to practice DOM manipulation, events and JavaScript logic.",
    image: "calculator.png",
    technologies: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaHtml5 /> },
      { name: "JavaScript", icon: <FaJs /> },
    ],
  },

  {
    title: "Amazon Clone",
    description:
      "A simple Amazon-inspired website created with HTML and CSS to practice webpage structure, layouts and responsive design.",
    image: "/projects/amazon-clone.png",
    technologies: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaHtml5 /> },
    ],
  },

  {
    title: "Sundown Studio",
    description:
      "A creative website recreated with HTML, CSS and JavaScript to practice modern layouts, animations and interactive web elements.",
    image: "sundown-studio.png",
    technologies: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaHtml5 /> },
      { name: "JavaScript", icon: <FaJs /> },
    ],
  },
];

function Projects() {
  return (
    <section className="min-h-screen bg-slate-950 px-6 py-28 text-white">

      {/* Heading */}
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          My Work
        </p>

        <h1 className="text-4xl font-bold sm:text-5xl">
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-slate-400">
          Here are some of the projects I have built while learning and
          improving my frontend development skills.
        </p>
      </div>

      {/* Project Cards */}
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

        {projects.map((project, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-950/30"
          >

            {/* Project Image */}
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-950 to-purple-950">

              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full rounded-2xl  transition duration-800 group-hover:scale-90"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-350 via-transparent to-transparent opacity-100" />

            </div>

            {/* Project Content */}
            <div className="p-6">

              <h2 className="text-2xl font-bold transition duration-300 group-hover:text-blue-400">
                {project.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-300 transition hover:border-purple-500/50 hover:text-purple-300"
                  >
                    <span className="text-blue-400">
                      {tech.icon}
                    </span>

                    {tech.name}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-7 flex gap-3">

                <a
                  href="#"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-sm font-semibold transition duration-300 hover:from-blue-500 hover:to-purple-600"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Live Demo
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center rounded-xl border border-slate-700 px-5 py-3 text-slate-300 transition duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-300"
                >
                  <FaGithub />
                </a>

              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Bottom */}
      <div className="mx-auto mt-16 h-px max-w-5xl bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <p className="mt-6 text-center text-sm text-slate-500">
        More projects coming soon...
      </p>

    </section>
  );
}

export default Projects;
