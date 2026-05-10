'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Mail } from 'lucide-react';

export function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-emerald-500 fill-emerald-500" />
              <span className="text-xl font-bold tracking-tight">
                Global<span className="text-emerald-500">Impact</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering communities and driving sustainable change worldwide through targeted programs and generous donations.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-emerald-500 transition-colors text-sm font-medium">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-emerald-500 transition-colors text-sm font-medium">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-emerald-500 transition-colors text-sm font-medium">LinkedIn</a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-200">Programs</h3>
            <ul className="space-y-3">
              <li><Link href="/programs/education" className="text-gray-400 hover:text-white transition-colors text-sm">Education for All</Link></li>
              <li><Link href="/programs/clean-water" className="text-gray-400 hover:text-white transition-colors text-sm">Clean Water Initiative</Link></li>
              <li><Link href="/programs/healthcare" className="text-gray-400 hover:text-white transition-colors text-sm">Global Healthcare</Link></li>
              <li><Link href="/programs" className="text-emerald-500 hover:text-emerald-400 transition-colors text-sm font-medium">View All Programs &rarr;</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-200">Organization</h3>
            <ul className="space-y-3">
              <li><Link href="/about#about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/about#impact" className="text-gray-400 hover:text-white transition-colors text-sm">Our Impact</Link></li>
              <li><Link href="/about#financial-transparency" className="text-gray-400 hover:text-white transition-colors text-sm">Financial Transparency</Link></li>
              <li><Link href="/about#careers" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-200">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">Join our newsletter to hear about our latest programs and impact.</p>
            <form className="flex gap-2" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
                required
              />
              <button 
                type="submit" 
                className="text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-800 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center cursor-pointer"
              >
                <Mail className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2026 GlobalImpact. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
