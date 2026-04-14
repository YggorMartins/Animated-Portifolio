import { motion } from "framer-motion";

const features = [
  {
    title: "Frontend Mastery",
    description:
      "React, Tailwind, and Framer Motion for polished, performant user experiences.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6 fill-cyan-200"
      >
        <path d="M4 5h16v2H4V5Zm0 5h16v2H4v-2Zm0 5h10v2H4v-2Z" />
      </svg>
    ),
  },
  {
    title: "Backend Architecture",
    description:
      "Node.js, TypeScript, Prisma, and Docker powering resilient APIs and services.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6 fill-cyan-200"
      >
        <path d="M4 5h16v14H4V5Zm2 2v10h12V7H6Zm2 2h8v2H8V9Zm0 4h5v2H8v-2Z" />
      </svg>
    ),
  },
  {
    title: "Cloud & DevOps",
    description:
      "Git, CI/CD, and deployment workflows for fast, reliable delivery.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6 fill-cyan-200"
      >
        <path d="M7 12h10v2H7v-2Zm-2 4h14v2H5v-2Zm3-8h8v2H8V8Z" />
      </svg>
    ),
  },
];

const motionProps = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.92, ease: [0.16, 1, 0.3, 1] },
};

function App() {
  return (
    <div className="min-h-screen bg-bg text-white selection:bg-cyan-300 selection:text-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(60,175,255,0.26),_transparent_18%),radial-gradient(circle_at_20%_22%,_rgba(178,94,255,0.14),_transparent_16%),radial-gradient(circle_at_80%_10%,_rgba(59,214,220,0.18),_transparent_18%),linear-gradient(180deg,_#020506_0%,_#080b12_100%)] animate-glow pointer-events-none" />
      <main className="relative overflow-hidden">
        <section className="relative px-6 pt-24 pb-20 sm:px-10 lg:px-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
            <motion.div {...motionProps} className="space-y-8 lg:max-w-2xl">
              <span className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200 backdrop-blur">
                Developer portfolio
              </span>
              <div className="space-y-6">
                <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:tracking-[0.01em] text-white sm:text-6xl">
                  Building digital products with{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                    Full Stack precision.
                  </span>
                </h1>
                <p className="max-w-2xl text-lg text-slate-300">
                  I am Yggor Martins, a developer focused on creating performant
                  applications with React, Node.js, and modern ecosystems.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://github.com/YggorMartins"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:bg-cyan-300"
                  whileHover={{ y: -5, scale: 1.1 }}
                  style={{
                    filter: "drop-shadow(0 0 20px rgba(56, 189, 248, 0.3))",
                  }}
                >
                  View My Work
                </motion.a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>

            <motion.aside
              {...motionProps}
              transition={{ ...motionProps.transition, delay: 0.15 }}
              className="glass-panel relative w-full max-w-xl rounded-[32px] p-8 shadow-[0_0_120px_rgba(56,189,248,0.08)] sm:p-10"
            >
              <div
                className="absolute -inset-x-24 -inset-y-20 rounded-[40px] bg-cyan-400/10 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-300" />
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                  </div>
                  <h2 className="text-sm uppercase tracking-[0.26em] text-cyan-200">
                    Yggor Martins
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-3xl bg-white/5 px-4 py-3 text-sm text-slate-300">
                    <span className="live-pulse rounded-full bg-cyan-400/15 px-3 py-1 text-cyan-100 shadow-[0_0_18px_rgba(56,189,248,0.18)]">
                      Live preview
                    </span>
                    <span>Dev mode</span>
                  </div>
                  <div className="glass-panel rounded-[28px] p-6 ring-1 ring-white/10">
                    <div className="relative overflow-hidden rounded-[24px] bg-slate-900/90 p-8">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,_rgba(108,247,255,0.14),_transparent_28%),radial-gradient(circle_at_30%_70%,_rgba(138,255,253,0.1),_transparent_24%)]" />
                      <div className="relative flex h-44 items-center justify-center">
                        <div className="pointer-events-none rounded-full bg-white/10 p-4 text-5xl text-white/90 shadow-[0_0_60px_rgba(108,249,255,0.25)]">
                          ▶
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-sky-500 animate-progress"
                        style={{ width: "92%" }}
                      />
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-sky-500 animate-progress delay-150"
                        style={{ width: "68%" }}
                      />
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-sky-500 animate-progress delay-300"
                        style={{ width: "82%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </section>

        <section id="skills" className="px-6 pb-20 sm:px-10 lg:px-16">
          <motion.div
            {...motionProps}
            className="mx-auto max-w-3xl space-y-4 text-center"
          >
            <span className="text-sm uppercase tracking-[0.28em] text-cyan-300">
              Skills
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Core capabilities for modern product engineering.
            </h2>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                {...motionProps}
                transition={{ ...motionProps.transition, delay: 0.15 * index }}
                className="glass-panel rounded-[28px] p-8 transition hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(56,189,248,0.16)]"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-7 text-slate-300">
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="px-6 pb-24 sm:px-10 lg:px-16">
          <motion.div
            {...motionProps}
            className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="space-y-4 lg:max-w-xl">
              <span className="text-sm uppercase tracking-[0.28em] text-cyan-300">
                Featured Project
              </span>
              <div className="space-y-3">
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  <motion.a
                    href="https://github.com/YggorMartins/OliveiraLog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-300 transition-colors"
                    whileHover={{ y: -5, scale: 1.05 }}
                    style={{
                      filter: "drop-shadow(0 0 20px rgba(56, 189, 248, 0.3))",
                    }}
                  >
                    Featured Project: OliveiraLog
                  </motion.a>
                </h2>
                <p className="max-w-2xl text-lg text-slate-300">
                  A full-stack logistics application built with a focus on
                  reliability, observability, and cloud-ready deployment.
                </p>
              </div>
            </div>
            <motion.button
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              whileHover={{ y: -5, scale: 1.1 }}
              style={{
                filter: "drop-shadow(0 0 20px rgba(56, 189, 248, 0.3))",
              }}
              onClick={() =>
                window.open(
                  "https://github.com/YggorMartins/OliveiraLog",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              Open case study
            </motion.button>
          </motion.div>

          <motion.div
            {...motionProps}
            transition={{ ...motionProps.transition, delay: 0.12 }}
            className="mt-10 glass-panel rounded-[36px] p-10 shadow-[0_0_120px_rgba(56,189,248,0.08)]"
          >
            <div className="grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
              <div className="space-y-6">
                <div className="glass-panel rounded-[32px] p-6 ring-1 ring-white/10">
                  <div className="mb-5 flex items-center gap-3 text-sm text-slate-400">
                    <span className="h-3 w-16 rounded-full bg-white/10" />
                    <span className="h-3 w-10 rounded-full bg-white/10" />
                    <span className="h-3 w-20 rounded-full bg-cyan-400/20" />
                  </div>
                  <div className="space-y-3 rounded-[28px] bg-slate-900/90 p-4">
                    {Array.from({ length: 6 }).map((_, row) => (
                      <div key={row} className="flex items-center gap-3">
                        <div className="h-3 w-16 rounded-full bg-slate-800/80" />
                        <div className="h-3 flex-1 rounded-full bg-white/10" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="glass-panel rounded-[32px] p-6 ring-1 ring-white/10">
                  <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
                    <span>Live dashboard</span>
                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-cyan-100">
                      Connected
                    </span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { label: "Users online", value: "1.2k" },
                      { label: "Requests/sec", value: "312" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-3xl bg-slate-950/90 p-4 text-sm text-slate-300 ring-1 ring-white/10"
                      >
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                          {item.label}
                        </p>
                        <p className="mt-3 text-xl font-semibold text-white">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[32px] bg-slate-900/90 p-6 ring-1 ring-white/10">
                  <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
                    <span>System Health</span>
                    <strong className="text-white">92%</strong>
                  </div>
                  <div className="h-4 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-500"
                      initial={{ width: "40%" }}
                      animate={{ width: ["40%", "90%", "40%"] }}
                      transition={{
                        duration: 12,
                        ease: [0.16, 1, 0.3, 1],
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    />
                  </div>
                </div>
                <div className="rounded-[32px] bg-slate-900/90 p-6 ring-1 ring-white/10">
                  <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
                    <span>API Latency</span>
                    <strong className="text-white">78ms</strong>
                  </div>
                  <div className="h-4 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400"
                      initial={{ width: "40%" }}
                      animate={{ width: ["40%", "78%", "40%"] }}
                      transition={{
                        duration: 14,
                        ease: [0.16, 1, 0.3, 1],
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    />
                  </div>
                </div>
                <div className="rounded-[32px] bg-slate-900/90 p-6 ring-1 ring-white/10">
                  <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
                    <span>Build Progress</span>
                    <strong className="text-white">64%</strong>
                  </div>
                  <div className="h-4 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-rose-400 to-orange-300"
                      initial={{ width: "40%" }}
                      animate={{ width: ["40%", "65%", "40%"] }}
                      transition={{
                        duration: 10,
                        ease: [0.16, 1, 0.3, 1],
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Projects", value: "18" },
                { label: "Live apps", value: "6" },
                { label: "Integrations", value: "24" },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="glass-panel rounded-3xl p-5 text-sm text-slate-300"
                >
                  <span className="block text-xs uppercase tracking-[0.24em] text-slate-500">
                    {metric.label}
                  </span>
                  <strong className="mt-3 block text-2xl text-white">
                    {metric.value}
                  </strong>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <footer id="contact" className="px-6 pb-20 sm:px-10 lg:px-16">
          <motion.div
            {...motionProps}
            className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[32px] border border-white/10 bg-white/5 p-8 text-slate-300 shadow-[0_0_120px_rgba(56,189,248,0.06)] backdrop-blur-xl"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
                  Connect with me
                </p>
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  Built with React & Framer Motion
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="https://github.com/YggorMartins"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-slate-950/90 p-3 text-white transition hover:bg-white/10"
                  whileHover={{ y: -5, scale: 1.1 }}
                  style={{
                    filter: "drop-shadow(0 0 20px rgba(56, 189, 248, 0.3))",
                  }}
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/yggormartins/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-slate-950/90 p-3 text-white transition hover:bg-white/10"
                  whileHover={{ y: -5, scale: 1.1 }}
                  style={{
                    filter: "drop-shadow(0 0 20px rgba(56, 189, 248, 0.3))",
                  }}
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/yggormartins/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-slate-950/90 p-3 text-white transition hover:bg-white/10"
                  whileHover={{ y: -5, scale: 1.1 }}
                  style={{
                    filter: "drop-shadow(0 0 20px rgba(56, 189, 248, 0.3))",
                  }}
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </footer>
      </main>
    </div>
  );
}

export default App;
