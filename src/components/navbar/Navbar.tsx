"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-[0.35em] text-white"
        >
          CHAVI SHARMA
        </Link>

        <nav className="flex items-center gap-12 text-[17px] text-neutral-400">
          <a href="#">Products</a>
          <a href="#">Thinking</a>
          <a href="#">Engineering</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
}