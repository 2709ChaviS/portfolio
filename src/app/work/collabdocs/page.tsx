"use client";

import { motion } from "framer-motion";

const LIVE = "https://collabdocs-inky.vercel.app";
const GITHUB = "https://github.com/2709ChaviS/collabdocs";

const stack = [
  "Next.js",
  "TypeScript",
  "TipTap",
  "Yjs (CRDT)",
  "WebSockets",
  "Node.js",
  "PostgreSQL",
  "Clerk",
];

const features = [
  {
    title: "Conflict-free sync",
    body: "Every edit is a Yjs CRDT operation, so all users converge to the same document regardless of the order edits arrive in.",
  },
  {
    title: "Live presence",
    body: "Colored cursors, selection highlighting and active-user indicators show who is editing and where, in real time.",
  },
  {
    title: "Offline-safe",
    body: "Edits made offline are queued locally and automatically synced when the connection returns.",
  },
  {
    title: "Persistent documents",
    body: "Document state is stored in PostgreSQL, so documents survive server restarts.",
  },
];

const architecture = [
  {
    title: "Next.js frontend",
    body: "TipTap rich-text editor, Clerk authentication and local offline storage. It never talks to the database directly.",
  },
  {
    title: "Node.js sync server",
    body: "A standalone WebSocket service speaking the Yjs protocol. It is the single source of truth for conflict resolution, presence and persistence.",
  },
  {
    title: "PostgreSQL",
    body: "Stores the binary Yjs document state so nothing is lost between sessions.",
  },
];

const limitations = [
  "The sync server trusts any valid document ID. A production version would verify a signed token per WebSocket connection.",
  "A single sync-server instance. Horizontal scale would need shared presence state, for example via Redis pub/sub.",
  "Documents are not yet scoped to a team or workspace.",
  "Free-tier hosting means a cold start of around 30-50 seconds on first load.",
];

export default function CollabDocsCaseStudy() {
  return (
    <main className="bg-[#050505] text-white">

      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-32 md:pt-40 pb-32">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.45em] text-neutral-500"
          >
            CASE STUDY / REAL-TIME SYSTEMS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-8 text-[44px] sm:text-[80px] lg:text-[110px] font-black leading-[0.88] tracking-tight"
          >
            CollabDocs
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-3 max-w-4xl text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-neutral-300"
          >
            Real-time collaborative writing,
            <br />
            without conflicts.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-10 max-w-3xl text-xl leading-10 text-neutral-400"
          >
            A Google Docs-style editor where multiple people edit the same
            document at once, with live cursors, offline support and
            conflict-free sync built on CRDTs.
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
              href={LIVE}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-5 sm:px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Live Demo
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 px-5 sm:px-8 py-4 transition hover:bg-white/5"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-32">
          <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
            THE PROBLEM
          </p>

          <h2 className="mt-8 max-w-5xl text-3xl sm:text-5xl lg:text-6xl font-black leading-[0.95]">
            Two people typing at once
            <br />
            shouldn&apos;t mean
            <br />
            someone loses their work.
          </h2>

          <p className="mt-12 max-w-3xl text-xl leading-10 text-neutral-400">
            Naive collaboration relies on locking or overwriting the whole
            document, so simultaneous edits and dropped connections cause lost
            changes. Real collaboration needs a model where every edit merges
            safely, even when it arrives late or out of order.
          </p>
        </div>
      </section>

      {/* WHAT IT DOES */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-32">
          <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
            WHAT I BUILT
          </p>

          <h2 className="mt-8 text-3xl sm:text-5xl lg:text-6xl font-black">Core capabilities.</h2>

          <div className="mt-20 grid gap-8 md:grid-cols-2">
            {features.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-10"
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">{item.title}</h3>
                <p className="mt-5 text-lg leading-9 text-neutral-400">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-32">
          <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
            ARCHITECTURE
          </p>

          <h2 className="mt-8 max-w-5xl text-3xl sm:text-5xl lg:text-6xl font-black leading-[0.95]">
            Frontend and sync engine,
            <br />
            fully decoupled.
          </h2>

          <p className="mt-10 max-w-3xl text-xl leading-10 text-neutral-400">
            The real-time layer lives in its own service, a pattern similar to
            how tools like Notion and Figma separate the client from their
            real-time backend.
          </p>

          <div className="mt-20 space-y-8">
            {architecture.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-4 md:gap-10 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-10"
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-700">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">{item.title}</h3>
                  <p className="mt-5 max-w-3xl text-lg leading-9 text-neutral-400">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-32">
          <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
            KNOWN LIMITATIONS
          </p>

          <h2 className="mt-8 text-3xl sm:text-5xl lg:text-6xl font-black">What I&apos;d improve next.</h2>

          <div className="mt-16 grid gap-4">
            {limitations.map((point) => (
              <div
                key={point}
                className="flex items-start gap-4 text-lg leading-9 text-neutral-300"
              >
                <div className="mt-4 h-2 w-2 shrink-0 rounded-full bg-white/70" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-32">
          <h2 className="max-w-5xl text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.9]">
            Real-time is a
            <br />
            systems problem,
            <br />
            not a UI problem.
          </h2>

          <div className="mt-16 flex flex-wrap gap-6">
            <a
              href={LIVE}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-5 sm:px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Live Demo
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 px-5 sm:px-8 py-4 transition hover:bg-white/5"
            >
              View Source Code
            </a>
            <a
              href="/"
              className="rounded-xl border border-white/10 px-5 sm:px-8 py-4 transition hover:bg-white/5"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}