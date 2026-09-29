"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Frontend Engineering",
    description:
      "Building responsive, production-ready interfaces with Next.js, TypeScript and Tailwind CSS, balancing performance, accessibility and maintainable component architecture.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },

  {
    title: "Backend Systems",
    description:
      "Designing secure backend workflows with Supabase, Razorpay payments, Row-Level Security, relational database design and real-time sync over WebSockets that support real-world product requirements.",
    technologies: [
      "Supabase",
      "PostgreSQL",
      "Authentication",
      "Row Level Security",
      "REST APIs",
      "WebSockets",
      "Razorpay",
    ],
  },

  {
    title: "Product Design",
    description:
      "Researching user problems, creating wireframes, designing scalable interfaces and translating them directly into production without handoff friction.",
    technologies: [
      "Figma",
      "Design Systems",
      "UX Research",
      "Prototyping",
      "Interaction Design",
    ],
  },

  {
    title: "Shipping Products",
    description:
      "Owning the complete product lifecycle from idea to deployment, including Git workflows, CI/CD, production hosting and continuous iteration.",
    technologies: [
      "Git",
      "GitHub",
      "Vercel",
      "CI/CD",
      "Production Deployment",
    ],
  },
];

export default function Engineering() {
  return (
    <section
      id="engineering"
      className="bg-[#050505] py-36 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
            Technical Capabilities
          </p>

          <h2 className="mt-6 max-w-5xl text-6xl font-black leading-[0.95] tracking-tight">
            Building products
            <br />
            from concept
            <br />
            to production.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-neutral-400">
            I work across product strategy, interface design and software
            engineering, enabling ideas to move from research to production
            without losing quality between design and implementation.
          </p>
        </motion.div>

        <div className="mt-24 grid gap-8">

          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">

                <div className="max-w-2xl">

                  <h3 className="text-3xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-lg leading-9 text-neutral-400">
                    {item.description}
                  </p>

                </div>

                <div className="flex max-w-md flex-wrap content-start gap-3">

                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}