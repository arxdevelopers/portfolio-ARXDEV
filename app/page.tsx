"use client";

import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(true);

  return (
    <main
      className={`min-h-screen transition-all duration-500 ${
       dark
  ? "bg-slate-950 text-white"
  : "bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 backdrop-blur border-b ${
          dark
            ? "bg-slate-950/80 border-slate-800"
            : "bg-white/80 border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="font-bold text-xl tracking-wide animate-fade">
            Aditya Roy
          </h1>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDark(!dark)}
              className={`px-4 py-2 rounded-xl font-medium transition ${
                dark
                  ? "bg-slate-800"
                  : "bg-slate-200"
              }`}
            >
              {dark ? "☀ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-28 relative overflow-hidden">
        <div
          className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            dark ? "bg-blue-500" : "bg-blue-400"
          }`}
        />

        <div className="relative max-w-4xl">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold animate-fade-up">
            Web Application Developer • Automation Expert
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight animate-fade-up">
            Building Reliable
            <br />
            Web Applications,
            <br />
            Automation Systems
            <br />
            & Industry-Level Bots.
          </h1>

          <p
            className={`mt-8 text-xl leading-relaxed max-w-3xl animate-fade-up ${
              dark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Hi, I'm Aditya Roy. I specialize in custom web development,
            international payment systems, business automation,
            workflow optimization, and industry-level bot development.
            With over 3 years of experience and contributions to
            17+ large-scale projects, I help businesses build
            scalable digital solutions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up">
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-blue-700 text-white font-semibold hover:scale-105 transition"
            >
              Contact Me
            </a>

            <a
              href="#about"
              className={`px-8 py-4 rounded-xl border font-semibold hover:scale-105 transition ${
                dark
                  ? "border-slate-700"
                  : "border-slate-300"
              }`}
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["3+", "Years of Experience"],
            ["17+", "Large Scale Projects"],
            ["100%", "Custom Solutions"],
          ].map(([num, text]) => (
            <div
              key={num}
              className={`rounded-3xl p-8 hover:-translate-y-2 transition duration-300 ${
                dark
                  ? "bg-slate-900 border border-slate-800"
                  : "bg-white border border-slate-200"
              }`}
            >
              <h3 className="text-5xl font-bold">{num}</h3>
              <p
                className={`mt-3 ${
                  dark
                    ? "text-slate-400"
                    : "text-slate-600"
                }`}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <p
          className={`text-lg leading-relaxed max-w-4xl ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          I'm Aditya Roy, a Web Application Developer and Automation expert
          with expertise in custom web applications, automation systems,
          international payment bots, backend development, API integration,
          WordPress solutions, and database architecture.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-12">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Languages",
              items: ["Python", "JavaScript", "PHP", "HTML",],
            },
            {
              title: "Databases",
              items: ["SQL", "MySQL", "MongoDB"],
            },
            {
              title: "Expertise",
              items: [
                "Automation Systems",
                "Bot Development",
                "WordPress",
                "REST APIs",
              ],
            },
          ].map((card) => (
            <div
              key={card.title}
              className={`rounded-3xl p-8 hover:-translate-y-2 transition duration-300 ${
                dark
                  ? "bg-slate-900 border border-slate-800"
                  : "bg-white border border-slate-200"
              }`}
            >
              <h3 className="text-xl font-bold mb-5">
                {card.title}
              </h3>

              <ul className="space-y-3">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className={
                      dark
                        ? "text-slate-300"
                        : "text-slate-600"
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-12">
          Services
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Custom Web Application Development",
            "Industry-Level Bot Development",
            "International Payment Automation",
            "Workflow Automation",
            "Database Architecture",
            "WordPress Solutions",
          ].map((service) => (
            <div
              key={service}
              className={`rounded-3xl p-8 hover:-translate-y-2 hover:shadow-xl transition duration-300 ${
                dark
                  ? "bg-slate-900 border border-slate-800"
                  : "bg-white border border-slate-200"
              }`}
            >
              <h3 className="font-semibold text-lg">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-[40px] p-12">
          <h2 className="text-4xl font-bold">
            Let's Build Something Great
          </h2>

          <p className="mt-6 text-blue-100 text-lg">
            Looking for a custom web application,
            automation system or industry-level bot?
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://github.com/arxdevelopers"
              target="_blank"
              className="px-6 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              GitHub
            </a>

            <a
              href="mailto:arxdevelopers1@gmail.com"
              className="px-6 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              Email
            </a>

            <a
              href="https://t.me/a_r_k_190"
              target="_blank"
              className="px-6 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              Telegram
            </a>

            <a
              href="https://wa.me/8801612842749"
              target="_blank"
              className="px-6 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer
        className={`text-center py-10 border-t ${
          dark
            ? "border-slate-800 text-slate-500"
            : "border-slate-200 text-slate-500"
        }`}
      >
        Designed & Developed by Aditya Roy
      </footer>
    </main>
  );
}