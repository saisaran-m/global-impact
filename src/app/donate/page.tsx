'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Heart, Lock } from 'lucide-react';

export default function DonatePage() {
  const [amount, setAmount] = useState<number | 'custom'>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('monthly');
  const [step, setStep] = useState(1); // 1: Amount, 2: Details, 3: Success
  const [email, setEmail] = useState('');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
    window.location.href = `mailto:${email}?subject=Thank you for your donation to GlobalImpact!&body=Dear Donor,%0A%0AWe have successfully received your donation of $${currentAmount}.%0A%0AThank you for making a difference!%0A%0A- GlobalImpact Team`;
  };

  const currentAmount = amount === 'custom' ? (customAmount || '0') : amount.toString();

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="mx-auto max-w-4xl flex flex-col md:flex-row gap-12">
        
        {/* Left Side: Story / Impact */}
        <div className="w-full md:w-1/2 pt-8">
          <Heart className="h-12 w-12 text-emerald-600 mb-6" />
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Your support changes lives.</h1>
          <p className="text-lg text-gray-600 mb-8">
            Every donation directly funds our field programs. By giving monthly, you provide sustainable support that allows us to plan long-term interventions.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
              <p className="text-gray-700"><strong>$25</strong> provides clean water for a family for a year.</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
              <p className="text-gray-700"><strong>$50</strong> supplies a rural classroom with essential learning materials.</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
              <p className="text-gray-700"><strong>$100</strong> funds a mobile health clinic's operation for a day.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Donation Form */}
        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 overflow-hidden relative">
            
            {step === 1 && (
              <motion.form 
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                onSubmit={handleNext}
              >
                <div className="flex bg-gray-100 p-1 rounded-full mb-8">
                  <button type="button" onClick={() => setFrequency('once')} className={`flex-1 py-2 rounded-full text-sm font-medium transition-all ${frequency === 'once' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}>Give Once</button>
                  <button type="button" onClick={() => setFrequency('monthly')} className={`flex-1 py-2 rounded-full text-sm font-medium transition-all ${frequency === 'monthly' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}>Monthly</button>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[25, 50, 100, 250, 500].map((val) => (
                    <button
                      key={val} type="button"
                      onClick={() => setAmount(val)}
                      className={`py-3 rounded-xl border-2 font-bold transition-all ${amount === val ? 'border-emerald-600 bg-emerald-50 text-emerald-700' : 'border-gray-200 text-gray-700 hover:border-gray-300'}`}
                    >
                      ${val}
                    </button>
                  ))}
                  <button
                    type="button" onClick={() => setAmount('custom')}
                    className={`py-3 rounded-xl border-2 font-bold transition-all ${amount === 'custom' ? 'border-emerald-600 bg-emerald-50 text-emerald-700' : 'border-gray-200 text-gray-700 hover:border-gray-300'}`}
                  >
                    Custom
                  </button>
                </div>

                {amount === 'custom' && (
                  <div className="mb-6 relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
                    <input type="number" min="1" placeholder="Enter amount" value={customAmount} onChange={(e) => setCustomAmount(e.target.value)} required className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 font-bold" />
                  </div>
                )}

                <button type="submit" disabled={amount === 'custom' && !customAmount} className="w-full h-14 bg-emerald-600 text-white rounded-full font-bold text-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4 flex items-center justify-center gap-2">
                  Donate ${currentAmount} {frequency === 'monthly' ? 'Monthly' : ''}
                </button>
              </motion.form>
            )}

            {step === 2 && (
              <motion.form 
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                onSubmit={handleDonate}
              >
                <div className="mb-6 flex justify-between items-center pb-6 border-b border-gray-100">
                  <div>
                    <p className="text-sm text-gray-500">You are donating</p>
                    <p className="font-bold text-xl">${currentAmount} <span className="text-gray-500 text-sm font-normal">{frequency === 'monthly' ? '/ month' : 'once'}</span></p>
                  </div>
                  <button type="button" onClick={() => setStep(1)} className="text-sm text-emerald-600 font-medium">Edit</button>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Card Details (Demo)</label>
                    <div className="flex border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-emerald-500">
                      <input type="text" placeholder="Card number" className="w-full px-4 py-3 outline-none" required />
                      <input type="text" placeholder="MM/YY" className="w-24 px-4 py-3 border-l border-gray-200 outline-none" required />
                      <input type="text" placeholder="CVC" className="w-20 px-4 py-3 border-l border-gray-200 outline-none" required />
                    </div>
                  </div>
                </div>

                <button type="submit" className="w-full h-14 bg-emerald-600 text-white rounded-full font-bold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2">
                  <Lock className="h-4 w-4" /> Complete Donation
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">Secure encrypted payment. This is a hackathon demo.</p>
              </motion.form>
            )}

            {step === 3 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-emerald-600 fill-emerald-600 animate-pulse" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
                <p className="text-gray-600 mb-8">
                  Your generous donation of <strong>${currentAmount}</strong> has been successfully processed. An email receipt has been sent to you.
                </p>
                <button 
                  onClick={() => { setStep(1); setAmount(50); setFrequency('monthly'); setCustomAmount(''); }}
                  className="text-emerald-600 font-medium hover:text-emerald-700"
                >
                  Make another donation
                </button>
              </motion.div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
