"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import GradientBlobs from "../ui/GradientBlobs";

const projects = [
  {
    id: "tokenpay",
    number: "01",
    title: "TokenPay",
    tagline: "Milestone-first invoicing for Indian freelancers.",
    overview:
      "Designed and engineered an end-to-end invoicing workflow that converts approved milestones into GST-compliant invoices through a structured approval system.",

    problem:
      "Indian freelancers repeatedly recreate invoices after client approvals, manually calculate GST and manage communication across multiple tools.",

    highlights: [
      "Token-based milestone approval workflow",
      "One-click client approval using magic links",
      "Automatic GST calculation",
      "Razorpay payments with server-side HMAC signature verification",
      "Row-Level Security across 7+ tables for multi-tenant data isolation",
    ],

    stack: [
      "Next.js 14",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Razorpay",
      "Tailwind CSS",
    ],

    github: "https://github.com/2709ChaviS/tokenpay",
    live: "https://tokenpay-seven.vercel.app/",
    caseStudyUrl: "/work/tokenpay",
  },

  {
    id: "job-hunt-agent",
    number: "02",
    title: "Job Hunt Agent",
    tagline: "An automation agent that hunts fresher jobs for me.",

    overview:
      "A Python agent that pulls fresh listings from 5 sources, filters them, and ranks each one against my resume with TF-IDF similarity.",

    problem:
      "Fresher job hunting means checking many boards daily and sorting through irrelevant, senior, or stale listings.",

    highlights: [
      "Aggregates 5 job sources, Delhi NCR and remote",
      "3-stage filter: seniority, location, freshness",
      "TF-IDF cosine ranking against my parsed resume (0-100%)",
      "Offline dashboard with 5-stage application tracker",
    ],

    stack: [
      "Python",
      "scikit-learn",
      "pypdf",
      "JavaScript",
      "HTML/CSS",
    ],

    github: "https://github.com/2709ChaviS/job_hunt_agent",
    live: "#",
    caseStudyUrl: "/work/job-hunt-agent",
  },

  {
    id: "collabdocs",
    number: "03",
    title: "CollabDocs",
    tagline: "Real-time collaborative writing, without conflicts.",

    overview:
      "A Google Docs-style editor where multiple people write in the same document at once, with live cursors and instant sync.",

    problem:
      "Simultaneous edits usually overwrite each other, and connection drops make it worse. Collaboration needs to stay consistent even offline.",

    highlights: [
      "Conflict-free multi-user sync using Yjs (CRDT)",
      "Live presence: colored cursors and active-user indicators",
      "Handles offline and reconnect states",
      "Standalone Node.js WebSocket sync service",
    ],

    stack: [
      "Next.js",
      "TypeScript",
      "Yjs",
      "WebSockets",
      "Node.js",
    ],

    github: "https://github.com/2709ChaviS/collabdocs",
    live: "https://collabdocs-inky.vercel.app",
    caseStudyUrl: "/work/collabdocs",
  },

  {
    id: "caregive",
    number: "04",
    title: "Caregive",
    tagline: "Designing trust into caregiver booking.",

    overview:
      "A dual-role platform connecting parents and caregivers through synchronized booking and task management workflows.",

    problem:
      "Finding trustworthy caregivers is fragmented, while parents lack visibility into ongoing care.",

    highlights: [
      "Research-driven UX",
      "Shared real-time PostgreSQL backend",
      "Sequential caregiver task pipeline",
      "Responsive mobile-first interface",
    ],

    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Figma",
    ],

    github: "https://github.com/2709ChaviS/caregive",
    live: "https://caregive.vercel.app/landing",
    caseStudyUrl: "/work/caregive",
  },

  {
    id: "managein",
    number: "05",
    title: "manageIN",
    tagline: "Reimagining B2B inventory workflows.",

    overview:
      "A redesign of Modulus Sell's billing and inventory platform focused on clarity and power-user efficiency.",

    problem:
      "Existing workflows introduced unnecessary navigation and visual complexity for daily operations.",

    highlights: [
      "Information architecture redesign",
      "Power-user dashboard",
      "Scalable design system",
      "B2B workflow optimization",
    ],

    stack: [
      "Figma",
      "Design System",
      "UX Research",
    ],

    github: "#",
    live: "#",
    figmaLink: "https://www.figma.com/design/a5vEez2RZotIEg6amoFSDH/manageIN?node-id=0-1&t=PibnEVY7eSy62rUY-1",
    caseStudyUrl: "/work/managein",
  },

  {
    id: "medihelp",
    number: "06",
    title: "Medihelp",
    tagline: "Simplifying healthcare appointment booking.",

    overview:
      "A UX case study focused on reducing friction in clinic discovery and appointment scheduling.",

    problem:
      "Healthcare booking experiences are cluttered and require unnecessary steps before confirmation.",

    highlights: [
      "Competitive UX research",
      "20+ screen prototype",
      "Reusable design system",
      "Interaction design",
    ],

    stack: [
      "Figma",
      "UX Research",
      "Prototype",
    ],

    github: "#",
    live: "#",
    figmaLink: "https://www.figma.com/design/pO4XprScn25pNwrmmg4VAS/Medihelp?node-id=0-1&t=SkIGP3EoGdAQSOyA-1",
    caseStudyUrl: "/work/medihelp",
  },
];

export default function Products() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#050505] py-40 text-white"
    >
      <GradientBlobs count={6} />
      <div className="relative z-10 mx-auto max-w-7xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
            Selected Work
          </p>

          <h2 className="mt-6 text-7xl font-black leading-[0.9] tracking-tight">
            Products I've
            <br />
            <span className="bg-[linear-gradient(90deg,#a78bfa,#f472b6,#fb923c)] bg-clip-text text-transparent">Designed & Engineered.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-neutral-400">
            Every product starts with understanding the problem,
            continues through thoughtful design decisions,
            and ends with production-ready engineering.
          </p>
        </motion.div>

        <div className="mt-28">

          {projects.map((project, index) => (

            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group border-t border-white/10 py-16 transition-all duration-500 hover:bg-white/[0.02]"
            >

              <div className="grid grid-cols-[90px_1fr_auto] gap-12">

                <div>
                  <span className="text-5xl font-black text-neutral-800 transition duration-500 group-hover:text-fuchsia-400">
                    {project.number}
                  </span>
                </div>

                <div>

                  {project.caseStudyUrl ? (
                    <Link href={project.caseStudyUrl}>
                      <motion.h3
                        whileHover={{ x: 8 }}
                        className="cursor-pointer text-5xl font-bold tracking-tight transition hover:text-fuchsia-300"
                      >
                        {project.title}
                      </motion.h3>
                    </Link>
                  ) : (
                    <motion.h3
                      whileHover={{ x: 8 }}
                      className="text-5xl font-bold tracking-tight"
                    >
                      {project.title}
                    </motion.h3>
                  )}

                  <p className="mt-4 text-2xl text-neutral-300">
                    {project.tagline}
                  </p>

                  <p className="mt-8 max-w-3xl text-lg leading-9 text-neutral-500">
                    {project.overview}
                  </p>

                  <div className="mt-10">

                    <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-600">
                      Product Focus
                    </p>

                    <p className="max-w-3xl leading-8 text-neutral-400">
                      {project.problem}
                    </p>

                  </div>

                  <div className="mt-10 flex flex-wrap gap-3">

                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-300 transition group-hover:border-fuchsia-400/50 group-hover:bg-fuchsia-400/10"
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                  <div className="mt-12 grid gap-3">

                    {project.highlights.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-4 text-neutral-300"
                      >
                        <div className="h-2 w-2 rounded-full bg-white/70" />
                        <span>{point}</span>
                      </div>
                    ))}

                  </div>

                </div>

                <div className="flex flex-col items-end justify-between">

                  {project.caseStudyUrl ? (

                    <Link
                      href={project.caseStudyUrl}
                      className="rounded-full border border-white/10 px-5 py-3 text-sm uppercase tracking-[0.25em] text-neutral-300 transition hover:border-white hover:bg-white/5"
                    >
                      View Case Study →
                    </Link>

                  ) : project.github !== "#" || project.live !== "#" ? (

                    <div />

                  ) : (

                    <div className="rounded-full border border-white/10 px-5 py-3 text-sm uppercase tracking-[0.25em] text-neutral-500">
                      Coming Soon
                    </div>

                  )}

                  <div className="flex flex-col items-end gap-5">

                    {project.figmaLink ? (
                      <a
                        href={project.figmaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-300 transition hover:text-white"
                      >
                        Figma →
                      </a>
                    ) : project.github !== "#" || project.live !== "#" ? (
                      <>
                        {project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-300 transition hover:text-white"
                          >
                            GitHub →
                          </a>
                        )}

                        {project.live !== "#" && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-300 transition hover:text-white"
                          >
                            Live →
                          </a>
                        )}
                      </>
                    ) : (
                      <span className="text-sm uppercase tracking-[0.25em] text-neutral-600">
                        In Progress
                      </span>
                    )}

                  </div>

                </div>

              </div>

            </motion.article>

          ))}

          <div className="border-t border-white/10" />

        </div>

      </div>

    </section>
  );
}