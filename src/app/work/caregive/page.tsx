"use client";

import { motion } from "framer-motion";

export default function CaregiveCaseStudy() {
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
            Caregive
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7, delay: .1 }}
            className="mt-3 max-w-5xl text-5xl font-semibold leading-tight text-neutral-300"
          >
            Designing trust into
            <br />
            caregiver booking.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .2 }}
            className="mt-10 max-w-3xl text-xl leading-10 text-neutral-400"
          >
            Caregive is a dual-role platform connecting parents and caregivers
            through synchronized booking and task management workflows. It is
            currently a full-stack build in progress with advanced features — this case study reflects
            the product thinking and architecture as they stand today, not a
            finished shipped product.
          </motion.p>

          <div className="mt-16 flex flex-wrap gap-4">

            {[
              "Next.js",
              "TypeScript",
              "Supabase",
              "PostgreSQL",
              "Figma",
            ].map((tech) => (
              <div
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-neutral-300"
              >
                {tech}
              </div>
            ))}

          </div>

          <div className="mt-16 flex flex-wrap gap-6">

            <a
              href="https://github.com/2709ChaviS/caregive"
              target="_blank"
              className="rounded-xl border border-white/10 px-8 py-4 transition hover:bg-white/5"
            >
              GitHub
            </a>

            <a
              href="https://caregive.vercel.app/landing"
              target="_blank"
              className="rounded-xl border border-white/10 px-8 py-4 transition hover:bg-white/5"
            >
              Live demo 
            </a>

            <div className="rounded-xl border border-white/10 px-8 py-4 text-neutral-500">
              
            </div>

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
            Finding a caregiver is fragmented.
            <br />
            Trusting one is harder.
          </motion.h2>

          <p className="mt-12 max-w-3xl text-xl leading-10 text-neutral-400">
            Parents searching for caregivers rely on scattered referrals and
            informal chats, with no structured way to compare, book, or track
            care once it begins. Once a caregiver is booked, parents lose
            visibility into what's actually happening during the engagement.
            Caregive treats booking and ongoing visibility as one connected
            problem, not two separate apps.
          </p>

          <div className="mt-24 grid gap-8 md:grid-cols-2">

            {[
              {
                title: "For Parents",
                body: "Difficulty discovering trustworthy caregivers, and no ongoing visibility once care is underway.",
              },
              {
                title: "For Caregivers",
                body: "No structured way to manage bookings, tasks, and communication with parents in one place.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-10"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-600">
                  0{index + 1}
                </p>

                <h3 className="mt-6 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-neutral-400 leading-8">
                  {item.body}
                </p>
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
            One platform,
            <br />
            two synchronized roles.
          </h2>

          <p className="mt-10 max-w-3xl text-xl leading-10 text-neutral-400">
            Rather than building a directory with a booking form bolted on,
            Caregive is designed around two roles sharing the same real-time
            backend — a parent view focused on visibility and trust, and a
            caregiver view focused on structured task execution.
          </p>

          <div className="mt-24 flex flex-wrap items-center justify-center gap-6">

            {[
              "Discovery",
              "Booking",
              "Task Pipeline",
              "Real-time Status",
            ].map((item, index) => (
              <div key={item} className="flex items-center gap-6">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-6 text-xl font-medium">
                  {item}
                </div>

                {index !== 3 && (
                  <span className="text-3xl text-neutral-700">→</span>
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
            Caregive guides parents and caregivers through a shared, synchronized
            workflow — from initial discovery to day-to-day task tracking.
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
              Caregiver Discovery
            </h3>

            <p className="mt-8 text-xl leading-10 text-neutral-400">
              Parents browse caregiver profiles built around research into what
              they actually look for when evaluating trust — experience,
              availability, and clear profile information, in one consistent
              format.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-12">
            <div className="space-y-5">
              <div className="rounded-xl bg-white/5 p-5">Caregiver Name</div>
              <div className="rounded-xl bg-white/5 p-5">Experience</div>
              <div className="rounded-xl bg-white/5 p-5">Availability</div>
              <div className="rounded-xl bg-white/5 p-5">Profile Details</div>
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
              Booking Request
            </h3>

            <p className="mt-8 text-xl leading-10 text-neutral-400">
              Parents send a booking request with the details of the care
              needed. The caregiver receives it directly, keeping both sides
              on the same record instead of a back-and-forth over chat.
            </p>
          </div>

          <div className="order-1 rounded-[32px] border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-12">
            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 p-5">Care Type</div>
              <div className="rounded-xl border border-white/10 p-5">Date & Time</div>
              <div className="rounded-xl border border-white/10 p-5">Notes for Caregiver</div>
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
              Sequential Task Pipeline
            </h3>

            <p className="mt-8 text-xl leading-10 text-neutral-400">
              Once a booking is active, the caregiver works through a
              sequential set of tasks tied to that engagement, so progress is
              structured rather than left to memory or informal updates.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-10">
            <div className="space-y-6">
              <div className="flex items-center justify-between rounded-xl bg-white/5 p-5">
                <span>Check-in</span>
                <span className="text-green-400 text-sm">Done</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/5 p-5">
                <span>Care Activity</span>
                <span className="text-neutral-500 text-sm">In Progress</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/5 p-5">
                <span>Check-out</span>
                <span className="text-neutral-500 text-sm">Pending</span>
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
              Real-time Visibility
            </h3>

            <p className="mt-8 text-xl leading-10 text-neutral-400">
              As the caregiver moves through the task pipeline, the parent's
              view updates through the shared Supabase/PostgreSQL backend,
              closing the visibility gap that exists once care begins.
            </p>
          </div>

          <div className="order-1 rounded-[32px] border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-12">
            <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-8">
              <p className="text-xl font-semibold">Live Status</p>
              <p className="mt-4 text-neutral-400">Care Activity — In Progress</p>
              <div className="mt-8 flex items-center gap-2 text-sm text-green-400">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                Synced in real time
              </div>
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
            One backend,
            <br />
            two synchronized views.
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-10 text-neutral-400">
            Parent and caregiver interfaces read from and write to the same
            PostgreSQL data model via Supabase, so a task update on the
            caregiver side reflects immediately on the parent side without a
            separate sync layer.
          </p>

          <div className="mt-24 grid gap-8 md:grid-cols-3">

            {[
              {
                title: "Shared Data Model",
                body: "Bookings, tasks, and caregiver profiles are modeled as connected entities shared across both roles.",
              },
              {
                title: "Real-time Backend",
                body: "Supabase/PostgreSQL keeps both sides of the platform in sync as task status changes.",
              },
              {
                title: "Mobile-first Interface",
                body: "Both parent and caregiver views are built responsive-first, reflecting how the product is actually used.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-10"
              >
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-6 leading-9 text-neutral-400">{item.body}</p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* REFLECTION */}

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
            What this project is teaching me.
          </h2>

          <div className="mt-20 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 p-10">
              <h3 className="text-2xl font-semibold">Dual-Role Design</h3>
              <p className="mt-6 leading-9 text-neutral-400">
                Designing two different roles on one shared data model forces
                clarity about what each side actually needs to see and when.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 p-10">
              <h3 className="text-2xl font-semibold">Research-Driven UX</h3>
              <p className="mt-6 leading-9 text-neutral-400">
                Talking through what parents and caregivers actually want
                shaped the booking and task flows more than any assumption did.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 p-10">
              <h3 className="text-2xl font-semibold">Building in the Open</h3>
              <p className="mt-6 leading-9 text-neutral-400">
                Shipping this case study while the build is still in progress
                keeps the focus on honest product thinking over a polished
                finish.
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

          <h2 className="mt-8 text-6xl font-black">Built with.</h2>

          <div className="mt-20 flex flex-wrap gap-5">

            {[
              "Next.js",
              "TypeScript",
              "Supabase",
              "PostgreSQL",
              "Tailwind CSS",
              "Framer Motion",
              "Figma",
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
            Still building.
            <br />
            Still shipping.
          </motion.h2>

          <p className="mt-10 max-w-3xl text-xl leading-10 text-neutral-400">
            Caregive is an active build. This page will be updated as the
            product moves from in-progress to shipped, with real screens
            replacing these wireframes.
          </p>

          <div className="mt-16 flex flex-wrap gap-6">

            <a
              href="https://github.com/2709ChaviS/caregive"
              target="_blank"
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

      {/* FOOTER / CLOSING SECTION */}

      <section className="relative overflow-hidden py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

        <div className="relative mx-auto max-w-5xl text-center">

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-muted-foreground backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
            In active development · Next.js · Supabase · TypeScript
          </div>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Built for parents who want
            <br />
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              visibility, not just a booking.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Caregive connects parents and caregivers on one synchronized
            platform — from discovery through booking to real-time task
            visibility.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="https://github.com/2709ChaviS/caregive"
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
                © {new Date().getFullYear()} Caregive. Designed & built by Chavi Sharma.
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
  );
}