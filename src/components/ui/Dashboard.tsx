"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Project Workspace",
    description:
      "Organize freelance projects in a dedicated workspace before invoice generation.",
  },
  {
    title: "Client Management",
    description:
      "Store client information once and reuse it across multiple projects.",
  },
  {
    title: "Milestone Builder",
    description:
      "Create custom milestones with independent pricing instead of editing invoices manually.",
  },
  {
    title: "GST Invoice Generation",
    description:
      "Generate GST-compliant invoices directly from approved milestones.",
  },
];

const tech = [
  "Next.js 14",
  "TypeScript",
  "Supabase",
  "Tailwind CSS",
];

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative h-[720px] w-full overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0B0B]"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:34px_34px]" />

      {/* Content */}

      <div className="relative flex h-full flex-col p-10">

        <div>

          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Featured Product
          </p>

          <h2 className="mt-3 text-5xl font-bold text-white">
            TokenPay 
          </h2>
          <a
              href="https://tokenpay-seven.vercel.app/"
              target="_blank"
              className="rounded-xl border border-white/5 px-1 py-1 transition hover:bg-white/5"
            >
              Live link
            </a>

          <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-400">
            An invoicing workflow designed for Indian freelancers.
            Instead of manually recreating invoices after every client approval,
            TokenPay converts project milestones into GST-ready invoices through
            a structured workflow.
          </p>

        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-white/10" />

        {/* Problem */}

        <div>

          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Problem
          </p>

          <p className="mt-4 leading-8 text-neutral-300">
            Freelancers often manage projects, milestones, approvals and
            invoices across spreadsheets, chat applications and PDF editors.
            The workflow is repetitive, fragmented and prone to manual errors.
          </p>

        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-white/10" />

        {/* Features */}

        <div className="grid grid-cols-2 gap-5">

          {features.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{
                y: -6,
                borderColor: "rgba(255,255,255,.25)",
              }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition"
            >
              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-neutral-400">
                {feature.description}
              </p>

            </motion.div>
          ))}

        </div>

        <div className="mt-auto">

          <div className="mb-5 h-px bg-white/10" />

          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-neutral-500">
            Built With
          </p>

          <div className="flex flex-wrap gap-3">

            {tech.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-neutral-300"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </div>
    </motion.div>
  );
}