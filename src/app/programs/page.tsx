'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const ALL_PROGRAMS = [
  { id: 'education', category: 'Education', title: 'Education for All', desc: 'Providing school supplies and building classrooms in rural communities.', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop', progress: 75 },
  { id: 'clean-water', category: 'Water', title: 'Clean Water Access', desc: 'Installing sustainable water filtration systems and wells in drought-prone areas.', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop', progress: 45 },
  { id: 'healthcare', category: 'Health', title: 'Mobile Health Clinics', desc: 'Bringing essential medical care and vaccinations to remote villages.', image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop', progress: 90 },
  { id: 'agriculture', category: 'Livelihood', title: 'Sustainable Farming', desc: 'Training farmers with modern techniques to increase crop yields organically.', image: 'https://images.unsplash.com/photo-1595841696650-dbf1d4310c34?q=80&w=2074&auto=format&fit=crop', progress: 30 },
  { id: 'disaster-relief', category: 'Emergency', title: 'Earthquake Relief', desc: 'Emergency response providing shelter, food, and medical aid to affected areas.', image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop', progress: 60 },
  { id: 'womens-empowerment', category: 'Livelihood', title: 'Women in Business', desc: 'Micro-loans and business training for women entrepreneurs in developing nations.', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop', progress: 85 }
];

const CATEGORIES = ['All', 'Education', 'Water', 'Health', 'Livelihood', 'Emergency'];

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPrograms = ALL_PROGRAMS.filter(program => {
    const matchesCategory = activeCategory === 'All' || program.category === activeCategory;
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          program.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Our <span className="text-emerald-600">Programs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Explore our active initiatives and see how we are working together to make a sustainable impact worldwide.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm transition-all"
              placeholder="Search programs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.length > 0 ? (
            filteredPrograms.map((program, index) => (
              <motion.div 
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all"
              >
                <Link href={`/programs/${program.id}`} className="block relative h-60 w-full overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1.5 rounded-full text-gray-800">
                    {program.category}
                  </div>
                </Link>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-emerald-600 transition-colors">
                    <Link href={`/programs/${program.id}`}>{program.title}</Link>
                  </h3>
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
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="mx-auto h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <Filter className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No programs found</h3>
              <p className="text-gray-500">We couldn't find any programs matching your search criteria.</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-6 text-emerald-600 font-medium hover:text-emerald-700"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
