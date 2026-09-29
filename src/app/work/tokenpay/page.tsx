"use client";

import { motion } from "framer-motion";

export default function TokenPayCaseStudy() {
  return (
    <main className="bg-[#050505] text-white">

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-white/10">

        <div className="mx-auto max-w-7xl px-8 pt-40 pb-32">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.45em] text-neutral-500"
          >
            CASE STUDY / PRODUCT
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            className="mt-8 text-[110px] font-black leading-[0.88] tracking-tight"
          >
            TokenPay
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: .7,
              delay: .1
            }}
            className="mt-3 max-w-5xl text-5xl font-semibold leading-tight text-neutral-300"
          >
            Milestone-first invoicing
            <br />
            for Indian freelancers.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay:.2
            }}
            className="mt-10 max-w-3xl text-xl leading-10 text-neutral-400"
          >
            TokenPay is a full-stack SaaS product that transforms project
            milestones into GST-compliant invoices through a structured
            approval workflow, eliminating repetitive manual invoicing for
            independent professionals.
          </motion.p>

          <div className="mt-16 flex flex-wrap gap-4">

            {[
              "Next.js 14",
              "TypeScript",
              "Supabase",
              "PostgreSQL",
              "Razorpay",
              "Tailwind CSS",
            ].map((tech)=>(

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
              href="https://tokenpay-seven.vercel.app/"
              target="_blank"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/2709ChaviS/tokenpay"
              target="_blank"
              className="rounded-xl border border-white/10 px-8 py-4 transition hover:bg-white/5"
            >
              GitHub
            </a>

          </div>

        </div>

      </section>

            {/* PROBLEM */}

      <section className="border-b border-white/10">

        <div className="mx-auto max-w-7xl px-8 py-32">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.45em] text-neutral-500"
          >
            THE PROBLEM
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8 max-w-5xl text-6xl font-black leading-[0.95]"
          >
            Freelancers don't struggle
            <br />
            with creating invoices.
            <br />
            They struggle with everything
            <br />
            before an invoice exists.
          </motion.h2>

          <p className="mt-12 max-w-3xl text-xl leading-10 text-neutral-400">
            The actual problem isn't generating a PDF. It's managing projects,
            milestones, approvals and invoices across different tools. Every
            project repeats the same manual workflow, increasing friction and
            opportunities for mistakes.
          </p>

          <div className="mt-24 grid gap-8 md:grid-cols-4">

            {[
              "Project Discussion",
              "Milestone Tracking",
              "Client Approval",
              "Invoice Creation",
            ].map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-600">
                  0{index + 1}
                </p>

                <h3 className="mt-6 text-2xl font-semibold">
                  {step}
                </h3>

                <p className="mt-4 text-neutral-400 leading-8">
                  Managed separately, forcing freelancers to switch contexts
                  throughout the project lifecycle.
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* EXISTING WORKFLOW */}

      <section className="border-b border-white/10">

        <div className="mx-auto max-w-7xl px-8 py-32">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.45em] text-neutral-500"
          >
            EXISTING WORKFLOW
          </motion.p>

          <h2 className="mt-8 text-5xl font-black">
            Fragmented workflow.
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-10 text-neutral-400">
            Most freelancers rely on a collection of disconnected tools.
            Information gets copied manually from one place to another before an
            invoice can finally be generated.
          </p>

          <div className="mt-24 flex flex-wrap items-center justify-center gap-8">

            {[
              "WhatsApp",
              "Spreadsheet",
              "Notes",
              "Invoice Template",
              "PDF",
              "Email",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="rounded-2xl border border-white/10 px-8 py-6 text-lg text-neutral-300"
              >
                {item}
              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* PRODUCT VISION */}

      <section className="border-b border-white/10">

        <div className="mx-auto max-w-7xl px-8 py-32">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.45em] text-neutral-500"
          >
            PRODUCT VISION
          </motion.p>

          <h2 className="mt-8 max-w-5xl text-6xl font-black leading-[0.95]">
            Replace fragmented tools
            <br />
            with one structured workflow.
          </h2>

          <p className="mt-10 max-w-3xl text-xl leading-10 text-neutral-400">
            TokenPay keeps project planning, milestones, client approvals and
            invoice generation inside a single product. Instead of recreating
            information at every stage, the workflow progresses naturally from
            project creation to invoice generation.
          </p>

          <div className="mt-24 flex flex-wrap items-center justify-center gap-6">

            {[
              "Project",
              "Milestones",
              "Approval",
              "Invoice",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-6"
              >
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-6 text-xl font-medium">
                  {item}
                </div>

                {index !== 3 && (
                  <span className="text-3xl text-neutral-700">
                    →
                  </span>
                )}
              </div>
            ))}

          </div>

        </div>

      </section>

            {/* FEATURE WALKTHROUGH */}

      <section className="border-b border-white/10">

        <div className="mx-auto max-w-7xl px-8 py-32">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.45em] text-neutral-500"
          >
            FEATURE WALKTHROUGH
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-6xl font-black leading-[0.95]"
          >
            The workflow.
          </motion.h2>

          <p className="mt-8 max-w-3xl text-xl leading-10 text-neutral-400">
            TokenPay removes repetitive manual work by guiding every project
            through a structured workflow instead of disconnected tools.
          </p>

        </div>

      </section>

      {/* STEP 01 */}

      <section className="border-b border-white/10">

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-20 px-8 py-28">

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-neutral-600">
              STEP 01
            </p>

            <h3 className="mt-6 text-5xl font-bold">
              Project Workspace
            </h3>

            <p className="mt-8 text-xl leading-10 text-neutral-400">
              Every engagement begins as a structured project instead of an
              isolated invoice. Project information is stored once and reused
              throughout the workflow.
            </p>

          </div>

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-12">

            <div className="space-y-5">

              <div className="rounded-xl bg-white/5 p-5">
                Project Name
              </div>

              <div className="rounded-xl bg-white/5 p-5">
                Client
              </div>

              <div className="rounded-xl bg-white/5 p-5">
                Description
              </div>

              <div className="rounded-xl bg-white/5 p-5">
                Status
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STEP 02 */}

      <section className="border-b border-white/10">

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-20 px-8 py-28">

          <div className="order-2">

            <p className="text-sm uppercase tracking-[0.3em] text-neutral-600">
              STEP 02
            </p>

            <h3 className="mt-6 text-5xl font-bold">
              Client Management
            </h3>

            <p className="mt-8 text-xl leading-10 text-neutral-400">
              Client information is entered once and reused across projects,
              avoiding repetitive data entry and maintaining consistency.
            </p>

          </div>

          <div className="order-1 rounded-[32px] border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-12">

            <div className="space-y-4">

              <div className="rounded-xl border border-white/10 p-5">
                Acme Studio
              </div>

              <div className="rounded-xl border border-white/10 p-5">
                contact@client.com
              </div>

              <div className="rounded-xl border border-white/10 p-5">
                GST Details
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STEP 03 */}

      <section className="border-b border-white/10">

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-20 px-8 py-28">

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-neutral-600">
              STEP 03
            </p>

            <h3 className="mt-6 text-5xl font-bold">
              Milestone Planning
            </h3>

            <p className="mt-8 text-xl leading-10 text-neutral-400">
              Projects are divided into milestones with individual values,
              creating a structured approval process before invoicing.
            </p>

          </div>

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-10">

            <div className="space-y-6">

              <div className="flex items-center justify-between rounded-xl bg-white/5 p-5">
                <span>Wireframes</span>
                <span>₹10,000</span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white/5 p-5">
                <span>UI Design</span>
                <span>₹18,000</span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white/5 p-5">
                <span>Development</span>
                <span>₹32,000</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STEP 04 */}

      <section className="border-b border-white/10">

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-20 px-8 py-28">

          <div className="order-2">

            <p className="text-sm uppercase tracking-[0.3em] text-neutral-600">
              STEP 04
            </p>

            <h3 className="mt-6 text-5xl font-bold">
              Client Approval
            </h3>

            <p className="mt-8 text-xl leading-10 text-neutral-400">
              Once a milestone is complete, the client receives an approval
              request through a unique link. No additional account creation is
              required before responding.
            </p>

          </div>

          <div className="order-1 rounded-[32px] border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-12">

            <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-8">

              <p className="text-xl font-semibold">
                Homepage Design
              </p>

              <p className="mt-4 text-neutral-400">
                Waiting for approval
              </p>

              <button className="mt-8 rounded-xl bg-white px-6 py-3 font-medium text-black">
                Approve Milestone
              </button>

            </div>

          </div>

        </div>

      </section>


            {/* TECHNICAL ARCHITECTURE */}

      <section className="border-b border-white/10">

        <div className="mx-auto max-w-7xl px-8 py-32">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.45em] text-neutral-500"
          >
            TECHNICAL ARCHITECTURE
          </motion.p>

          <h2 className="mt-8 text-6xl font-black leading-[0.95]">
            Designed around a
            <br />
            relational data model.
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-10 text-neutral-400">
            TokenPay models the freelancer workflow as connected entities rather
            than isolated screens. Each stage builds upon the previous one,
            keeping data consistent throughout the product.
          </p>

          <div className="mt-24 flex flex-wrap items-center justify-center gap-5">

            {[
              "Users",
              "Clients",
              "Projects",
              "Milestones",
              "Invoices",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-5"
              >
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-6">
                  {item}
                </div>

                {index !== 4 && (
                  <span className="text-3xl text-neutral-700">
                    →
                  </span>
                )}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* DATABASE */}

      <section className="border-b border-white/10">

        <div className="mx-auto max-w-7xl px-8 py-32">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.45em] text-neutral-500"
          >
            DATABASE DESIGN
          </motion.p>

          <h2 className="mt-8 text-5xl font-black">
            Relational structure.
          </h2>

          <div className="mt-20 rounded-[32px] border border-white/10 bg-white/[0.02] p-10">

            <div className="grid gap-8 md:grid-cols-2">

              <div className="rounded-2xl border border-white/10 p-8">
                <h3 className="text-2xl font-semibold">
                  Users
                </h3>

                <ul className="mt-6 space-y-3 text-neutral-400">
                  <li>• Authentication</li>
                  <li>• Account ownership</li>
                  <li>• Freelancer profile</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 p-8">
                <h3 className="text-2xl font-semibold">
                  Clients
                </h3>

                <ul className="mt-6 space-y-3 text-neutral-400">
                  <li>• Contact information</li>
                  <li>• GST details</li>
                  <li>• Linked to freelancer</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 p-8">
                <h3 className="text-2xl font-semibold">
                  Projects
                </h3>

                <ul className="mt-6 space-y-3 text-neutral-400">
                  <li>• Project metadata</li>
                  <li>• Connected client</li>
                  <li>• Multiple milestones</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 p-8">
                <h3 className="text-2xl font-semibold">
                  Invoices
                </h3>

                <ul className="mt-6 space-y-3 text-neutral-400">
                  <li>• Generated after approval</li>
                  <li>• GST calculation</li>
                  <li>• Invoice status</li>
                </ul>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ENGINEERING DECISIONS */}

      <section className="border-b border-white/10">

        <div className="mx-auto max-w-7xl px-8 py-32">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.45em] text-neutral-500"
          >
            ENGINEERING DECISIONS
          </motion.p>

          <h2 className="mt-8 text-6xl font-black leading-[0.95]">
            Decisions made
            <br />
            during development.
          </h2>

          <div className="mt-20 grid gap-8">

            {[
              {
                title: "Next.js App Router",
                body: "Selected for modern routing, server rendering capabilities and a scalable application structure."
              },
              {
                title: "Supabase",
                body: "Provides authentication, PostgreSQL and storage in a unified backend platform suitable for rapid product iteration."
              },
              {
                title: "PostgreSQL",
                body: "Used to model relationships between users, clients, projects, milestones and invoices while maintaining data integrity."
              },
              {
                title: "Tailwind CSS",
                body: "Enabled a consistent design system and faster implementation without sacrificing maintainability."
              }
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-3xl border border-white/10 p-10"
              >

                <h3 className="text-3xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-6 max-w-3xl text-lg leading-9 text-neutral-400">
                  {item.body}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

            {/* ROADMAP */}

      <section className="border-b border-white/10">

        <div className="mx-auto max-w-7xl px-8 py-32">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.45em] text-neutral-500"
          >
            PRODUCT ROADMAP
          </motion.p>

          <h2 className="mt-8 text-6xl font-black leading-[0.95]">
            Planned improvements.
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-10 text-neutral-400">
            The current version validates the core invoicing workflow and
            already collects payments through Razorpay. Future iterations focus
            on document generation and communication automation.
          </p>

          <div className="mt-20 space-y-8">

            {[
              {
                title: "PDF Invoice Export",
                body: "Generate downloadable GST-ready invoices for record keeping and sharing."
              },
              {
                title: "WhatsApp Business API",
                body: "Automate milestone approval requests and invoice notifications."
              }
            ].map((item) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-10"
              >

                <h3 className="text-3xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-3xl text-lg leading-9 text-neutral-400">
                  {item.body}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* WHAT I LEARNED */}

      <section className="border-b border-white/10">

        <div className="mx-auto max-w-7xl px-8 py-32">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.45em] text-neutral-500"
          >
            REFLECTION
          </motion.p>

          <h2 className="mt-8 text-6xl font-black leading-[0.95]">
            What this project taught me.
          </h2>

          <div className="mt-20 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 p-10">

              <h3 className="text-2xl font-semibold">
                Product Thinking
              </h3>

              <p className="mt-6 leading-9 text-neutral-400">
                Solving the workflow proved more valuable than simply generating
                invoices. Understanding user behavior shaped the product
                architecture from the beginning.
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 p-10">

              <h3 className="text-2xl font-semibold">
                System Design
              </h3>

              <p className="mt-6 leading-9 text-neutral-400">
                Modeling relationships between users, clients, projects and
                invoices highlighted the importance of a well-structured
                relational database.
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 p-10">

              <h3 className="text-2xl font-semibold">
                End-to-End Ownership
              </h3>

              <p className="mt-6 leading-9 text-neutral-400">
                Designing the interface, implementing the application and
                deploying it reinforced the value of owning the complete product
                lifecycle.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* TECHNOLOGY */}

      <section className="border-b border-white/10">

        <div className="mx-auto max-w-7xl px-8 py-32">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.45em] text-neutral-500"
          >
            TECHNOLOGY
          </motion.p>

          <h2 className="mt-8 text-6xl font-black">
            Built with.
          </h2>

          <div className="mt-20 flex flex-wrap gap-5">

            {[
              "Next.js 14",
              "React",
              "TypeScript",
              "Supabase",
              "PostgreSQL",
              "Razorpay",
              "Tailwind CSS",
              "Framer Motion",
              "Vercel"
            ].map((tech) => (

              <div
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-lg"
              >
                {tech}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* NEXT PROJECT */}

      <section>

        <div className="mx-auto max-w-7xl px-8 py-32">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl text-7xl font-black leading-[0.9]"
          >
            Building products
            <br />
            means continuously
            <br />
            improving them.
          </motion.h2>

          <p className="mt-10 max-w-3xl text-xl leading-10 text-neutral-400">
            TokenPay represents one step in an ongoing journey of designing,
            engineering and shipping products that solve real user problems.
          </p>

          <div className="mt-16 flex flex-wrap gap-6">

            <a
              href="https://github.com/2709ChaviS/tokenpay"
              target="_blank"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              View Source Code
            </a>

            <a
              href="https://tokenpay-seven.vercel.app/"
              target="_blank"
              className="rounded-xl border border-white/10 px-8 py-4 transition hover:bg-white/5"
            >
              Live Demo
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

      {/* =========================
    FOOTER / CLOSING SECTION
========================= */}

<section className="relative overflow-hidden py-32 px-6">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

  <div className="relative mx-auto max-w-5xl text-center">

    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-muted-foreground backdrop-blur">
      <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
      Built with Next.js · Supabase · TypeScript
    </div>

    <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
      Built for freelancers who want
      <br />
      <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
        less paperwork and more growth.
      </span>
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
      TokenPay turns approved project milestones into professional,
      GST-ready invoices automatically — removing repetitive billing
      work so freelancers can focus on delivering great work.
    </p>

    <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

      <a
        href="https://tokenpay-seven.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3 font-medium text-primary-foreground transition hover:scale-105"
      >
        View Live Product

        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>

      </a>


      <a
        href="https://github.com/2709ChaviS/tokenpay"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-xl border border-border px-7 py-3 font-medium transition hover:bg-muted"
      >
        View Source Code
      </a>

    </div>


    <div className="mt-24 border-t border-border pt-8">

      <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">

        <p>
          © {new Date().getFullYear()} TokenPay. Designed & built by Chavi Sharma.
        </p>

        <div className="flex gap-6">

          <a
            href="https://github.com/2709ChaviS"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-foreground"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/chavi-sharma-923232256/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-foreground"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </div>

  </div>
</section>


</main>
)
}