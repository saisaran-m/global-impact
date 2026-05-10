import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Heart className="h-6 w-6 text-emerald-600 fill-emerald-600" />
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Global<span className="text-emerald-600">Impact</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <Link href="/programs" className="hover:text-emerald-600 transition-colors">Programs</Link>
          <Link href="/about" className="hover:text-emerald-600 transition-colors">Impact & About</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link 
            href="/donate" 
            className="inline-flex h-10 items-center justify-center rounded-full bg-emerald-600 px-6 text-sm font-medium text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </header>
  );
}
