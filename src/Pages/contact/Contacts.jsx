
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contacts() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_pw93mzf",
        "template_aq154bm",
        e.target,
        {
          publicKey: "1FmJWC4WEKP3FzPa_",
        }
      )
      .then(
        () => {
          setStatus("success");
          setSending(false);
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("error");
          setSending(false);
        }
      );
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-200 via-white to-blue-400 px-4 py-10">
      {/* Background Blue Curves */}
      <div className="absolute -left-40 top-90 h-32 w-[600px] rotate-[-10deg] rounded-full bg-blue-500/60 blur-[1px]"></div>

      <div className="absolute -right-30 bottom-18 h-32 w-[600px] rotate-[14deg] rounded-full bg-blue-500/80"></div>

      {/* Main Contact Container */}
      <div className="relative z-10 mx-auto mt-15 max-w-6xl overflow-hidden rounded-lg border border-purple-400/20 bg-slate-950/80 shadow-2xl">
        {/* Contact Section */}
        <div className="grid gap-8 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 px-4 py-8 md:grid-cols-2 md:px-10 md:py-10">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center">
            {/* Small Label */}
            <div className="mb-4 inline-flex w-fit rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-[9px] font-medium uppercase tracking-wider text-blue-300">
              Let's connect
            </div>

            {/* Heading */}
            <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
              Get in Touch
            </h2>

            <p className="mb-6 max-w-md text-xs font-semibold leading-5 text-slate-300">
              Have questions about my work or want to discuss a project? Feel
              free to reach out and let's connect.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center gap-4 rounded-lg border border-blue-400/30 bg-blue-500/10 px-4 py-3 backdrop-blur-md transition duration-300 hover:bg-blue-500/20">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-blue-400/30 bg-blue-500/20 text-blue-300">
                  <FaEnvelope size={14} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-wider text-slate-400">
                    Email us
                  </p>

                  <p className="text-[13px] text-white">
                    muzamilabbas0678mmmm@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 rounded-lg border border-blue-400/30 bg-blue-500/10 px-4 py-3 backdrop-blur-md transition duration-300 hover:bg-blue-500/20">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-blue-400/30 bg-blue-500/20 text-blue-300">
                  <FaPhone size={14} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-wider text-slate-400">
                    Call us
                  </p>

                  <p className="text-[13px] text-white">
                    +92 206710678
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-lg border border-blue-400/30 bg-blue-500/10 px-4 py-3 backdrop-blur-md transition duration-300 hover:bg-blue-500/20">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-blue-400/30 bg-blue-500/20 text-blue-300">
                  <FaMapMarkerAlt size={14} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-wider text-slate-400">
                    Location
                  </p>

                  <p className="text-[13px] text-white">
                    Punjab, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - MESSAGE FORM */}
          <div className="rounded-xl border border-blue-300/30 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-blue-500/20 p-5 shadow-xl backdrop-blur-xl">
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[2px] text-blue-300">
              Message Me
            </p>

            <h3 className="mb-5 text-xl font-bold text-white">
              Send a Message
            </h3>

            <form onSubmit={sendEmail} className="space-y-4">
              {/* Name */}
              <div>
                <label className="mb-1 block text-[9px] font-medium uppercase tracking-wider text-slate-300">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  disabled={sending}
                  className="w-full rounded-md border border-blue-300/20 bg-blue-200/10 px-3 py-2.5 text-xs text-white outline-none placeholder:text-slate-400 backdrop-blur-md transition focus:border-blue-400 focus:bg-blue-200/20 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-1 block text-[9px] font-medium uppercase tracking-wider text-slate-300">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  disabled={sending}
                  className="w-full rounded-md border border-blue-300/20 bg-blue-200/10 px-3 py-2.5 text-xs text-white outline-none placeholder:text-slate-400 backdrop-blur-md transition focus:border-blue-400 focus:bg-blue-200/20 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-1 block text-[9px] font-medium uppercase tracking-wider text-slate-300">
                  Your Message
                </label>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me how I can help you..."
                  required
                  disabled={sending}
                  className="w-full resize-none rounded-md border border-blue-300/20 bg-blue-200/10 px-3 py-2.5 text-xs font-medium text-white outline-none placeholder:text-slate-400 backdrop-blur-md transition focus:border-blue-400 focus:bg-blue-200/20 disabled:cursor-not-allowed disabled:opacity-60"
                ></textarea>
              </div>

              {/* Status Message */}
              {status === "success" && (
                <div className="rounded-md border border-green-400/30 bg-green-500/10 px-3 py-2 text-center text-[11px] font-medium text-green-300 backdrop-blur-md">
                  ✓ Your message has been sent successfully.
                </div>
              )}

              {status === "error" && (
                <div className="rounded-md border border-red-400/30 bg-red-500/10 px-3 py-2 text-center text-[11px] font-medium text-red-300 backdrop-blur-md">
                  ✕ Something went wrong. Please try again.
                </div>
              )}

              {/* Send Button */}
              <button
                type="submit"
                disabled={sending}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-white py-2.5 text-[13px] font-bold text-slate-900 transition duration-300 hover:bg-purple-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send Message"}

                {!sending && <FaPaperPlane size={13} />}
              </button>
            </form>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
          <div className="grid md:grid-cols-3">
            
            {/* Brand */}
            <div className="p-5 md:border-r">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-xs font-bold text-white">
                  MA
                </div>

                <span className="text-sm font-semibold text-white">
                  Muzamil Abbas
                </span>
              </div>

              <p className="max-w-xs text-[12px] leading-4 text-slate-400">
                Building modern and responsive web experiences with React and
                modern frontend technologies.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex gap-10">
              <div className="flex flex-col p-6 md:border-r">
                <h3 className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-white">
                  Navigation
                </h3>

                <div className="text-[12px] text-slate-400">
                  <Link
                    to="/"
                    className="text-slate-400 transition hover:text-blue-400"
                  >
                    Home
                  </Link>
                  <br />

                  <Link
                    to="/About"
                    className="text-slate-400 transition hover:text-blue-400"
                  >
                    About
                  </Link>
                  <br />

                  <Link
                    to="/Skills"
                    className="text-slate-400 transition hover:text-blue-400"
                  >
                    Skills
                  </Link>
                  <br />

                  <Link
                    to="/Projects"
                    className="text-slate-400 transition hover:text-blue-400"
                  >
                    Projects
                  </Link>

                  <p className="cursor-pointer transition hover:text-blue-400">
                    Contact
                  </p>
                </div>
              </div>

              {/* Resume */}
              <div className="flex flex-col">
                <a
                  href="/resume.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 h-10 w-20 rounded-lg border border-slate-500 px-3 py-2 font-semibold text-white transition hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-500"
                >
                  Resume
                </a>

                <p className="mt-3 max-w-xs text-sm text-slate-400">
                  Explore my skills, education, projects, and professional
                  journey.
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="p-6">
              <h3 className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-white">
                Connect With Me
              </h3>

              <p className="mb-4 text-[12px] leading-4 text-slate-400">
                Follow me on social platforms and stay connected.
              </p>

              <div className="flex gap-2">
                <a
                  href="https://github.com/muzamilabbas0678mmmm-blip/portfolio-website.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/20 text-slate-900 transition hover:bg-blue-500 hover:text-white"
                >
                  <FaGithub size={11} />
                </a>

                <a
                  href="#"
                  className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white text-slate-900 transition hover:bg-blue-500 hover:text-white"
                >
                  <FaLinkedinIn size={11} />
                </a>

                <a
                  href="#"
                  className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/20 text-slate-900 transition hover:bg-blue-500 hover:text-white"
                >
                  <FaInstagram size={11} />
                </a>

                <a
                  href="#"
                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white text-slate-900 transition hover:bg-blue-500 hover:text-white"
                >
                  <FaFacebookF size={11} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 px-6 py-3 text-[10px] text-slate-400 md:flex-row">
            <p>© 2026 Muzamil Abbas. All Rights Reserved.</p>

            <div className="flex gap-4">
              <span>Terms of Use</span>
              <span>Privacy</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Contacts;
