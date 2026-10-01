"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const coreScreens = [
  { src: "/medihelp/home.png", label: "Home Screen" },
  { src: "/medihelp/records.png", label: "Medical Records" },
  { src: "/medihelp/appointments.png", label: "Appointments" },
  { src: "/medihelp/profile.png", label: "Profile Screen" },
];

const bookingFlow = [
  { src: "/medihelp/date-time.png", label: "Date & Time" },
  { src: "/medihelp/patient-info.png", label: "Patient Information" },
  { src: "/medihelp/payment.png", label: "Booking Payment" },
  { src: "/medihelp/confirmation.png", label: "Payment Status" },
];

const FIGMA_LINK = "https://www.figma.com/design/pO4XprScn25pNwrmmg4VAS/Medihelp?node-id=0-1&t=IpyFlifNBySpRrHx-1";

function ScreenRow({ screens }: { screens: { src: string; label: string }[] }) {
  return (
    <div className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4">
      {screens.map((s, i) => (
        <motion.div
          key={s.src}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="group mx-auto w-full max-w-[240px]"
        >
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] p-3">
            <Image
              src={s.src}
              alt={s.label}
              width={0}
              height={0}
              sizes="240px"
              unoptimized
              className="h-auto w-full rounded-2xl transition duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <p className="mt-5 text-center text-sm uppercase tracking-[0.2em] text-neutral-500">
            {s.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default function MedihelpCaseStudy() {
  return (
    <main className="bg-[#050505] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-32 md:pt-40 pb-32">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.45em] text-neutral-500"
          >
            CASE STUDY / UX DESIGN
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-8 text-[44px] sm:text-[80px] lg:text-[100px] font-black leading-[0.88] tracking-tight"
          >
            Medihelp
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-3 max-w-4xl text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-neutral-300"
          >
            Simplifying healthcare
            <br />
            appointment booking.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-10 max-w-3xl text-xl leading-10 text-neutral-400"
          >
            A UX case study focused on reducing friction in clinic discovery
            and appointment scheduling — from research through a full 20+
            screen prototype and reusable design system.
          </motion.p>

          <div className="mt-16 flex flex-wrap gap-4">
            {["Figma", "UX Research", "Prototype", "Design System"].map((t) => (
              <div
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-neutral-300"
              >
                {t}
              </div>
            ))}
          </div>

          <div className="mt-16">
            <a
              href="https://www.figma.com/design/pO4XprScn25pNwrmmg4VAS/Medihelp?node-id=0-1&t=IpyFlifNBySpRrHx-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-white/10 px-5 sm:px-8 py-4 transition hover:bg-white/5"
            >
              View Figma Prototype →
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-32">
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
            className="mt-8 max-w-5xl text-3xl sm:text-5xl lg:text-6xl font-black leading-[0.95]"
          >
            Booking care shouldn't
            <br />
            feel like a chore.
          </motion.h2>

          <p className="mt-12 max-w-3xl text-xl leading-10 text-neutral-400">
            Healthcare booking experiences are cluttered and require
            unnecessary steps before confirmation — patients lose time and
            confidence navigating clinic discovery, doctor selection, and
            scheduling before they even reach payment.
          </p>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-32">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.45em] text-neutral-500"
          >
            RESEARCH
          </motion.p>

          <h2 className="mt-8 text-3xl sm:text-5xl lg:text-6xl font-black leading-[0.95]">
            Competitive UX research.
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-10 text-neutral-400">
            Studied existing healthcare booking apps to identify where
            friction was introduced — excess steps, unclear clinic
            information, and scheduling flows that didn't match how patients
            actually make decisions when choosing a doctor.
          </p>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {[
              { title: "Clarity", body: "Doctor availability, fees, and specialization visible at a glance, before tapping in." },
              { title: "Speed", body: "Fewer taps between finding a doctor and confirming a slot." },
              { title: "Trust", body: "Clear records and payment status so patients always know where they stand." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-10"
              >
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-8 text-neutral-400">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE APP SCREENS */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-32">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.45em] text-neutral-500"
          >
            CORE APP SCREENS
          </motion.p>

          <h2 className="mt-8 text-3xl sm:text-5xl lg:text-6xl font-black leading-[0.95]">
            Everything a patient needs,
            <br />
            one tab away.
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-10 text-neutral-400">
            Home surfaces the next appointment and top-rated doctors
            immediately. Records, appointments, and profile stay a single tap
            away through consistent bottom navigation.
          </p>

          <ScreenRow screens={coreScreens} />
        </div>
      </section>

      {/* BOOKING FLOW */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-32">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.45em] text-neutral-500"
          >
            BOOKING FLOW
          </motion.p>

          <h2 className="mt-8 text-3xl sm:text-5xl lg:text-6xl font-black leading-[0.95]">
            From slot to confirmed,
            <br />
            in four screens.
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-10 text-neutral-400">
            Date & time selection, patient details, payment, and confirmation
            were designed as one continuous flow rather than separate forms —
            each screen carries forward what the last one already collected.
          </p>

          <ScreenRow screens={bookingFlow} />
        </div>
      </section>

      {/* DESIGN SYSTEM */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-32">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.45em] text-neutral-500"
          >
            DESIGN SYSTEM
          </motion.p>

          <h2 className="mt-8 text-3xl sm:text-5xl lg:text-6xl font-black leading-[0.95]">
            Built once, reused everywhere.
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-10 text-neutral-400">
            A reusable component system — cards, buttons, tab bars, and
            status badges — kept all 20+ screens visually and
            interactionally consistent across the entire flow.
          </p>

          <div className="mt-16 flex flex-wrap gap-5">
            {["Buttons", "Cards", "Tab Bar", "Status Badges", "Form Inputs"].map((c) => (
              <div key={c} className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-lg">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-32">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.45em] text-neutral-500"
          >
            REFLECTION
          </motion.p>

          <h2 className="mt-8 text-3xl sm:text-5xl lg:text-6xl font-black leading-[0.95]">
            What this project taught me.
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-10 text-neutral-400">
            Reducing steps isn't just visual simplification — it means
            rethinking the underlying flow so each screen only asks for what's
            genuinely needed at that moment, and carries the rest forward.
          </p>

          <div className="mt-16 flex flex-wrap gap-6">
            <a
              href="https://www.figma.com/design/pO4XprScn25pNwrmmg4VAS/Medihelp?node-id=0-1&t=IpyFlifNBySpRrHx-1"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-5 sm:px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              View Figma Prototype
            </a>
            <a href="/" className="rounded-xl border border-white/10 px-5 sm:px-8 py-4 transition hover:bg-white/5">
              Back to Home
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}