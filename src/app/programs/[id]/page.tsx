'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Target, Users, Calendar, MapPin, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock database (in a real app, this would be fetched from an API/CMS)
const ALL_PROGRAMS = [
  { id: 'education', category: 'Education', title: 'Education for All', desc: 'Providing school supplies and building classrooms in rural communities.', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop', progress: 75, goal: '$50,000', raised: '$37,500', location: 'Sub-Saharan Africa', beneficiaries: '5,000+ Children', date: 'Ongoing' },
  { id: 'clean-water', category: 'Water', title: 'Clean Water Access', desc: 'Installing sustainable water filtration systems and wells in drought-prone areas.', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop', progress: 45, goal: '$100,000', raised: '$45,000', location: 'Southeast Asia', beneficiaries: '10,000+ Families', date: 'Est. completion Dec 2026' },
  { id: 'healthcare', category: 'Health', title: 'Mobile Health Clinics', desc: 'Bringing essential medical care and vaccinations to remote villages.', image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop', progress: 90, goal: '$75,000', raised: '$67,500', location: 'South America', beneficiaries: '15,000+ Patients', date: 'Monthly Missions' },
];

export default function ProgramDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  const id = resolvedParams.id;
  const program = ALL_PROGRAMS.find(p => p.id === id);

  if (!program) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Program Not Found</h1>
        <p className="text-gray-600 mb-8">The program you are looking for does not exist or has been completed.</p>
        <Link href="/programs" className="text-emerald-600 font-medium hover:text-emerald-700">
          &larr; Back to all programs
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white pb-20">
      {/* Hero Image */}
      <div className="w-full h-[40vh] md:h-[60vh] relative">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 z-20 flex flex-col justify-end pb-12">
          <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
            <Link href="/programs" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to Programs
            </Link>
            <span className="inline-block px-3 py-1 bg-emerald-500 text-white text-sm font-bold rounded-full mb-4 shadow-sm">
              {program.category}
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold text-white tracking-tight"
            >
              {program.title}
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About this initiative</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {program.desc} This initiative aims to tackle the root causes of inequality by providing direct resources and training. 
                By working closely with local leaders, we ensure our interventions are culturally sensitive and sustainable in the long term.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Your support directly funds materials, logistics, and personnel required to execute this mission. 
                Transparency is our core value, and we provide quarterly impact reports to all our donors.
              </p>
            </section>
            
            <section className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Program Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">{program.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Beneficiaries</h4>
                    <p className="text-gray-600">{program.beneficiaries}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Timeline</h4>
                    <p className="text-gray-600">{program.date}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Goal</h4>
                    <p className="text-gray-600">{program.goal}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar / Donation Widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
              <div className="mb-6">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-3xl font-extrabold text-gray-900">{program.raised}</span>
                  <span className="text-gray-500 mb-1">raised of {program.goal}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 mb-2 overflow-hidden">
                  <div className="bg-emerald-500 h-3 rounded-full relative" style={{ width: `${program.progress}%` }}>
                    <div className="absolute top-0 bottom-0 right-0 left-0 bg-white/20 w-full animate-pulse"></div>
                  </div>
                </div>
                <p className="text-right text-sm font-medium text-emerald-600">{program.progress}% Funded</p>
              </div>

              <Link 
                href="/donate" 
                className="w-full flex items-center justify-center h-14 rounded-full bg-emerald-600 text-white font-bold text-lg shadow-lg hover:bg-emerald-700 hover:-translate-y-1 transition-all active:translate-y-0 mb-4"
              >
                Donate to this program
              </Link>
              
              <button className="w-full flex items-center justify-center gap-2 h-12 rounded-full bg-gray-50 text-gray-700 font-medium border border-gray-200 hover:bg-gray-100 transition-colors">
                <Share2 className="h-4 w-4" /> Share Initiative
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
