"use client";

import { motion } from "framer-motion";

const GITHUB = "https://github.com/2709ChaviS/job_hunt_agent";

const stack = [
  "Python",
  "scikit-learn",
  "pypdf",
  "RapidAPI (JSearch)",
  "JavaScript",
  "HTML/CSS",
];

const numbers = [
  { value: "700", label: "lines of Python" },
  { value: "5", label: "job sources" },
  { value: "85", label: "skills recognized" },
  { value: "58h", label: "freshness window" },
];

const pipeline = [
  {
    title: "Aggregate",
    body: "Pulls listings from RemoteOK, Arbeitnow, JSearch, Jobicy and Himalayas. JSearch runs 8 targeted queries across 2 pages each, covering Indeed, LinkedIn and Glassdoor for Delhi NCR and remote fresher roles.",
  },
  {
    title: "Filter",
    body: "A 3-stage pipeline removes senior roles using 14 seniority keywords, applies 8 NCR/remote location rules, and drops anything older than a 58-hour freshness window.",
  },
  {
    title: "Rank",
    body: "Survivors are scored 0-100% using TF-IDF cosine similarity (5,000-feature vectorizer) against a profile built by parsing my resume PDF for 85 recognized skills.",
  },
  {
    title: "Track",
    body: "URL-based deduplication feeds a 9-column application tracker CSV, so re-runs never create repeats.",
  },
];

const dashboard = [
  "200-line offline dashboard, no server needed",
  "5-stage application status workflow",
  "Live search and source filters",
  "One-click Windows launcher",
];

export default function JobHuntAgentCaseStudy() {
  return (
    <main className="bg-[#050505] text-white">

      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-8 pt-40 pb-32">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.45em] text-neutral-500"
          >
            CASE STUDY / AUTOMATION
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-8 text-[100px] font-black leading-[0.88] tracking-tight"
          >
            Job Hunt Agent
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-3 max-w-4xl text-5xl font-semibold leading-tight text-neutral-300"
          >
            An agent that hunts
            <br />
            fresher jobs for me.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-10 max-w-3xl text-xl leading-10 text-neutral-400"
          >
            A Python automation agent that aggregates fresh listings, filters
            out the noise, ranks every job against my resume and tracks each
            application end to end.
          </motion.p>

          <div className="mt-16 flex flex-wrap gap-4">
            {stack.map((tech) => (
              <div
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-neutral-300"
              >
                {tech}
              </div>
            ))}
          </div>

          <div className="mt-16 flex gap-6">
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-8 py-32">
          <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
            THE PROBLEM
          </p>

          <h2 className="mt-8 max-w-5xl text-6xl font-black leading-[0.95]">
            Job hunting is mostly
            <br />
            scrolling, not applying.
          </h2>

          <p className="mt-12 max-w-3xl text-xl leading-10 text-neutral-400">
            Fresher roles are spread across many boards, buried under senior
            listings and stale posts. Checking each one daily costs hours that
            should go into applications, so I automated the search itself.
          </p>

          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
            {numbers.map((n) => (
              <div
                key={n.label}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
              >
                <p className="text-6xl font-black">{n.value}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-neutral-500">
                  {n.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PIPELINE */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-8 py-32">
          <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
            HOW IT WORKS
          </p>

          <h2 className="mt-8 text-6xl font-black">The pipeline.</h2>

          <div className="mt-20 space-y-8">
            {pipeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-10 rounded-3xl border border-white/10 bg-white/[0.02] p-10"
              >
                <span className="text-5xl font-black text-neutral-700">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-3xl font-semibold">{item.title}</h3>
                  <p className="mt-5 max-w-3xl text-lg leading-9 text-neutral-400">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-8 py-32">
          <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
            TRACKING
          </p>

          <h2 className="mt-8 max-w-5xl text-6xl font-black leading-[0.95]">
            From listing to
            <br />
            application, in one place.
          </h2>

          <div className="mt-16 grid gap-4">
            {dashboard.map((point) => (
              <div
                key={point}
                className="flex items-center gap-4 text-lg text-neutral-300"
              >
                <div className="h-2 w-2 shrink-0 rounded-full bg-white/70" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section>
        <div className="mx-auto max-w-7xl px-8 py-32">
          <h2 className="max-w-5xl text-7xl font-black leading-[0.9]">
            Automate the search,
            <br />
            spend time
            <br />
            on the applying.
          </h2>

          <div className="mt-16 flex flex-wrap gap-6">
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              View Source Code
            </a>
            <a
              href="/"
              className="rounded-xl border border-white/10 px-8 py-4 transition hover:bg-white/5"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}