'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Globe, Users, TrendingUp, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-emerald-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop')] opacity-30 bg-cover bg-center mix-blend-multiply"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Transparency & Impact
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-emerald-100 max-w-3xl mx-auto"
          >
            We believe that lasting change starts with accountability. Discover our mission, meet our team, and see exactly where your donations go.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                GlobalImpact was founded on a simple premise: everyone deserves access to basic human needs. We work alongside local leaders to empower communities through education, healthcare, and sustainable infrastructure.
              </p>
              <div className="flex gap-4 items-start">
                <div className="bg-emerald-100 p-3 rounded-xl mt-1">
                  <ShieldCheck className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">100% Transparency</h3>
                  <p className="text-gray-600">We publish quarterly reports detailing our financials and impact metrics.</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop" alt="Volunteers" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Financial Breakdown */}
      <section id="financial-transparency" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Where Your Money Goes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We maximize the impact of every dollar. Private donors cover our operating costs so 100% of public donations fund our programs.</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="w-64 h-64 relative">
              {/* Simple CSS Pie Chart simulation */}
              <div className="absolute inset-0 rounded-full border-[30px] border-emerald-500" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0, 20% 0)' }}></div>
              <div className="absolute inset-0 rounded-full border-[30px] border-emerald-300" style={{ clipPath: 'polygon(50% 50%, 0 0, 20% 0)' }}></div>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-3xl font-bold text-gray-900">100%</span>
                <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Public</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-md bg-emerald-500"></div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl">85% Field Programs</h4>
                  <p className="text-gray-600">Directly funds materials and local implementation.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-md bg-emerald-300"></div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl">15% Logistics & Training</h4>
                  <p className="text-gray-600">Ensures sustainable management and community training.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Timeline */}
      <section id="impact" className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-12 w-12 text-emerald-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Journey</h2>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-emerald-200 before:to-transparent">
            {[
              { year: '2022', title: 'The Beginning', desc: 'Started with a single water well project in Kenya.' },
              { year: '2024', title: 'Global Expansion', desc: 'Reached 1 million beneficiaries across 15 countries.' },
              { year: '2026', title: 'Sustainable Future', desc: 'Launched comprehensive education and health initiatives globally.' }
            ].map((item, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-gray-100 bg-white shadow-sm text-left">
                  <span className="font-bold text-emerald-600 mb-1 block">{item.year}</span>
                  <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-24 bg-emerald-900 text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">We are always looking for passionate individuals to help us drive global change. Apply today and be part of something bigger.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { role: 'Field Program Manager', location: 'Nairobi, Kenya', type: 'Full-time', dept: 'Programs' },
              { role: 'Digital Marketing Specialist', location: 'Remote', type: 'Full-time', dept: 'Marketing' },
              { role: 'Water & Sanitation Engineer', location: 'Jakarta, Indonesia', type: 'Contract', dept: 'Engineering' },
              { role: 'Community Outreach Coordinator', location: 'Mumbai, India', type: 'Full-time', dept: 'Partnerships' },
            ].map((job) => (
              <div key={job.role} className="bg-emerald-800/60 border border-emerald-700 rounded-2xl p-6 flex flex-col gap-4 hover:border-emerald-400 transition-colors">
                <div>
                  <span className="inline-block text-xs font-bold bg-emerald-500/30 text-emerald-300 px-3 py-1 rounded-full mb-3">{job.dept}</span>
                  <h3 className="text-lg font-bold text-white mb-1">{job.role}</h3>
                  <p className="text-emerald-300 text-sm">{job.location} &middot; {job.type}</p>
                </div>
                <a
                  href={`mailto:careers@globalimpact.example.com?subject=Application for ${encodeURIComponent(job.role)}`}
                  className="inline-flex items-center justify-center h-10 rounded-full bg-white text-emerald-900 font-semibold text-sm px-6 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-emerald-200 mb-4">Don&apos;t see a role that fits? Send us your resume anyway.</p>
            <a
              href="mailto:careers@globalimpact.example.com?subject=General Application — GlobalImpact"
              className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white text-white font-semibold px-8 transition-transform hover:scale-105 hover:bg-white hover:text-emerald-900 active:scale-95"
            >
              Send General Application
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
