import React, { useState } from 'react';
import { Phone, Mail, ArrowRight, CheckCircle, Zap } from 'lucide-react';

export default function ThreePointIndustrial() {
  const [contactForm, setContactForm] = useState({ name: '', company: '', email: '', phone: '', details: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send to your email
    alert(`Thank you, ${contactForm.name}! We'll contact you at ${contactForm.email} soon.`);
    setContactForm({ name: '', company: '', email: '', phone: '', details: '' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="border-b border-slate-800 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-amber-500">THREEPOINT</span> ENTERPRISE
          </div>
          <a href="#contact" className="bg-amber-600 hover:bg-amber-700 px-6 py-2 rounded text-sm font-semibold transition">
            Get Quote
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-amber-600 bg-opacity-20 rounded text-amber-400 text-sm font-semibold">
                PRECISION ENGINEERING
              </div>
              <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-tight">
                Industrial Crating Solutions <span className="text-amber-500">Built to Spec</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                Custom and generic aircraft part crates engineered for precision, durability, and speed. From concept to shipment, we deliver exactly what you need.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#contact" className="bg-amber-600 hover:bg-amber-700 px-8 py-3 rounded font-semibold flex items-center gap-2 transition group">
                  Request Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </a>
                <a href="#contact" className="border border-slate-600 hover:border-amber-500 px-8 py-3 rounded font-semibold flex items-center gap-2 transition">
                  <Phone className="w-4 h-4" /> Call Us
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg opacity-10 blur-3xl"></div>
              <div className="relative bg-slate-900 border border-slate-800 rounded-lg p-8 space-y-4">
                <div className="text-3xl font-bold text-amber-500">QUICK TURNAROUND</div>
                <p className="text-slate-300">Rapid production without compromising precision. We build what you need, when you need it.</p>
                <div className="space-y-3 pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                    <span>Custom & generic crate solutions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                    <span>For any aircraft part</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                    <span>Built to your exact specifications</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-lg hover:border-amber-600 transition">
              <Zap className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Generic Crates</h3>
              <p className="text-slate-300 leading-relaxed">
                Standard crate solutions for common aircraft part sizes and shipping requirements. Reliable, proven designs that work for routine shipments.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-lg hover:border-amber-600 transition">
              <Zap className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Custom Solutions</h3>
              <p className="text-slate-300 leading-relaxed">
                Engineered crates tailored to your unique parts and specifications. Whether oversized, oddly shaped, or requiring special handling—we build it right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12">Why Three Point Industrial</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-black text-amber-500 mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2">Quick Turnaround</h3>
              <p className="text-slate-400">Fast production to fit your timeline, without cutting corners on quality.</p>
            </div>
            <div>
              <div className="text-4xl font-black text-amber-500 mb-3">🎯</div>
              <h3 className="text-xl font-bold mb-2">Built to Spec</h3>
              <p className="text-slate-400">Precision engineering ensures every crate meets your exact requirements perfectly.</p>
            </div>
            <div>
              <div className="text-4xl font-black text-amber-500 mb-3">🛠️</div>
              <h3 className="text-xl font-bold mb-2">Expert Builder</h3>
              <p className="text-slate-400">Dedicated full-time craftsman with deep aviation industry expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12">How It Works</h2>
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-600 text-white font-bold">1</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Request a Quote</h3>
                <p className="text-slate-400">Tell us about your part, dimensions, and shipping needs. We'll provide a fast quote.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-600 text-white font-bold">2</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Design & Build</h3>
                <p className="text-slate-400">We engineer and construct your crate to exact specifications with precision and care.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-600 text-white font-bold">3</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Ship & Deliver</h3>
                <p className="text-slate-400">Your crate is ready and shipped on time, protecting your parts throughout transit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-black mb-6">Get Your Quote Today</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Contact us now to discuss your crating needs. We're here to help with fast, reliable solutions built to your specifications.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-500" />
                  <div>
                    <p className="text-sm text-slate-500">Call us</p>
                    <p className="font-semibold">754-213-0750 / 305-464-0414</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-500" />
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="font-semibold">Quotes@threepointindustrial.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input 
                    type="text" 
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Company</label>
                  <input 
                    type="text"
                    value={contactForm.company}
                    onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                    className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input 
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <input 
                    type="tel"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                    className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    placeholder="Your phone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Project Details</label>
                  <textarea 
                    required
                    value={contactForm.details}
                    onChange={(e) => setContactForm({...contactForm, details: e.target.value})}
                    className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 h-24 resize-none"
                    placeholder="Tell us about your crating needs..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 py-3 rounded font-semibold transition"
                >
                  Send Quote Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p className="mb-2"><span className="font-bold text-white">THREEPOINT ENTERPRISE</span></p>
          <p>Industrial Crating Solutions Built to Spec</p>
          <p className="text-sm mt-4">© 2026 ThreePoint Enterprise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}