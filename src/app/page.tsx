'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe, Users, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6"
          >
            Empower Change.<br className="hidden md:block" />
            <span className="text-emerald-600 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              Transform Lives.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10"
          >
            Join our global initiative to provide education, clean water, and healthcare to communities in need. Every contribution creates a ripple of positive impact.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link 
              href="/donate" 
              className="inline-flex h-14 items-center justify-center rounded-full bg-emerald-600 px-8 text-base font-medium text-white shadow-lg transition-all hover:bg-emerald-700 hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
            >
              Make a Donation
            </Link>
            <Link 
              href="/programs" 
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-gray-200 bg-white px-8 text-base font-medium text-gray-900 shadow-sm transition-all hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
            >
              Explore Programs
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Global Impact</h2>
            <p className="mt-4 text-emerald-100 max-w-2xl mx-auto">Together, we are making a measurable difference in communities across the globe.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-16">
            {[
              { icon: Users, stat: '2.5M+', label: 'Lives Impacted' },
              { icon: Globe, stat: '42', label: 'Countries Reached' },
              { icon: Droplets, stat: '10K+', label: 'Water Projects' },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center p-8 bg-emerald-800 rounded-3xl border border-emerald-700 hover:border-emerald-500 transition-colors"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 mb-6">
                  <item.icon className="h-8 w-8 text-emerald-300" />
                </div>
                <div className="text-4xl font-extrabold text-white mb-2">{item.stat}</div>
                <div className="text-emerald-200 font-medium">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Initiatives</h2>
              <p className="mt-4 text-lg text-gray-600">Discover where your support is needed most right now.</p>
            </div>
            <Link href="/programs" className="hidden sm:inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
              View all programs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 'education',
                title: 'Education for All',
                desc: 'Providing school supplies and building classrooms in rural communities.',
                image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop',
                progress: 75
              },
              {
                id: 'clean-water',
                title: 'Clean Water Access',
                desc: 'Installing sustainable water filtration systems and wells in drought-prone areas.',
                image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop',
                progress: 45
              },
              {
                id: 'healthcare',
                title: 'Mobile Health Clinics',
                desc: 'Bringing essential medical care and vaccinations to remote villages.',
                image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop',
                progress: 90
              }
            ].map((program, index) => (
              <motion.div 
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1.5 rounded-full text-emerald-700">
                    Urgent
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-6 flex-1 line-clamp-2">{program.desc}</p>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span className="text-gray-900">Funded</span>
                      <span className="text-emerald-600">{program.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${program.progress}%` }}></div>
                    </div>
                  </div>

                  <Link 
                    href={`/programs/${program.id}`}
                    className="inline-flex w-full justify-center items-center h-12 rounded-full bg-gray-50 text-emerald-700 font-medium border border-gray-200 hover:bg-emerald-50 hover:border-emerald-200 transition-colors"
                  >
                    Support Program
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link href="/programs" className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
              View all programs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-600 -z-20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop')] opacity-20 bg-cover bg-center -z-10 mix-blend-overlay"></div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6">Ready to make a difference?</h2>
          <p className="text-xl text-emerald-50 mb-10">Your donation, no matter how small, can change a life forever. Join us in building a better future.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/donate" 
              className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-lg font-bold text-emerald-700 shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
