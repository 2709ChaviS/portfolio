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

       
        
      </div>
    </header>
  );
}