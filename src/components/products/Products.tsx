"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
      "End-to-end product ownership from research to deployment",
    ],

    stack: [
      "Next.js 14",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
    ],

    github: "https://github.com/2709ChaviS/tokenpay",
    live: "https://tokenpay.vercel.app",
    caseStudyUrl: "/work/tokenpay",
  },

  {
    id: "caregive",
    number: "02",
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
    id: "medihelp",
    number: "03",
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

    Figma: "https://www.figma.com/design/pO4XprScn25pNwrmmg4VAS/Medihelp?node-id=0-1&t=IpyFlifNBySpRrHx-1",
  
    caseStudyUrl: "/work/medihelp",
  },

  {
    id: "managein",
    number: "04",
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

    Figma: "https://www.figma.com/design/a5vEez2RZotIEg6amoFSDH/manageIN?node-id=0-1&t=zemSfICXynXCIoDT-1",
    
    caseStudyUrl: "/work/managein",
  },
];

export default function Products() {
  return (
    <section
      id="work"
      className="relative bg-[#050505] py-40 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

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
            Designed & Engineered.
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
              className="group border-t border-white/10 py-16 transition-all duration-500"
            >

              <div className="grid grid-cols-[90px_1fr_auto] gap-12">

                <div>
                  <span className="text-5xl font-black text-neutral-800 transition duration-500 group-hover:text-white">
                    {project.number}
                  </span>
                </div>

                <div>

                  {project.caseStudyUrl ? (
                    <Link href={project.caseStudyUrl}>
                      <motion.h3
                        whileHover={{ x: 8 }}
                        className="cursor-pointer text-5xl font-bold tracking-tight transition hover:text-neutral-200"
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
                        className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-300 transition group-hover:border-white/20"
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

                  ) : (

                    <div className="rounded-full border border-white/10 px-5 py-3 text-sm uppercase tracking-[0.25em] text-neutral-500">
                      
                    </div>

                  )}

                  <div className="flex flex-col items-end gap-5">

                    {project.github !== "#" || project.live !== "#" ? (
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