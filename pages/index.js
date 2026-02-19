import React, { useState } from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import Head from 'next/head';

export default function Home() {
  const [showMain, setShowMain] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll be in touch.`);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      <Head>
        <title>ThreePoint Enterprise - Crating Solutions</title>
        <meta name="description" content="Industrial crating solutions based in Miami, FL" />
      </Head>

      <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: 'white' }}>
        <div onClick={() => setShowMain(true)} className={`fixed inset-0 z-50 flex items-center justify-center cursor-pointer bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 transition-opacity duration-1000 ${showMain ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="text-center">
            <h1 className="text-6xl font-black mb-4"><span className="text-amber-500">3PT</span></h1>
            <h2 className="text-5xl font-black mb-6">Industrial Crating <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text">Solutions</span></h2>
            <p className="text-xl text-slate-300 mb-8 max-w-xl mx-auto">Custom and generic crates engineered for precision, durability, and speed. Based in Miami, FL.</p>
            <p className="text-amber-400 animate-pulse mb-4">TAP TO EXPLORE</p>
          </div>
        </div>

        {showMain && (
          <div className="transition-opacity duration-1000">
            <nav className="border-b border-slate-800 sticky top-0 z-50 bg-slate-950/90 backdrop-blur">
              <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                <span className="text-3xl font-black"><span className="text-amber-500">3PT</span></span>
                <a href="#contact" className="bg-amber-600 hover:bg-amber-700 px-6 py-2 rounded font-bold transition">Get Quote</a>
              </div>
            </nav>

            <section className="py-20 px-6 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
                    <span className="text-amber-300 text-sm font-bold">PRECISION ENGINEERED</span>
                  </div>
                  <h1 className="text-6xl font-black">Built to <span className="text-amber-400">Spec</span></h1>
                  <p className="text-lg text-slate-300">Custom and generic crates for any part. Quick turnaround. Expert craftsmanship. Based in Miami, FL.</p>
                  <div className="flex gap-4">
                    <a href="#contact" className="bg-amber-600 hover:bg-amber-700 px-8 py-3 rounded font-bold transition inline-flex items-center gap-2">
                      Request Quote <ArrowRight className="w-4 h-4" />
                    </a>
                    <a href="tel:754-213-0750" className="border-2 border-slate-600 hover:border-amber-500 px-8 py-3 rounded font-bold transition inline-flex items-center gap-2">
                      <Phone className="w-4 h-4" /> Call
                    </a>
                  </div>
                </div>
                <div className="bg-slate-900 border border-slate-700 p-8 rounded-lg">
                  <h3 className="text-amber-400 font-bold mb-6">CAPABILITIES</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li>✓ Custom aircraft part crates</li>
                    <li>✓ Generic standard solutions</li>
                    <li>✓ Any size & configuration</li>
                    <li>✓ Fast turnaround guaranteed</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="py-20 px-6 bg-slate-900/50 border-t border-slate-800">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-black mb-12">Our Solutions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-900 border border-slate-700 p-8 rounded-lg hover:border-amber-500 transition">
                    <h3 className="text-2xl font-black mb-4">Generic Crates</h3>
                    <p className="text-slate-300">Standard, proven designs for routine shipments. Fast delivery. Cost-effective.</p>
                  </div>
                  <div className="bg-slate-900 border border-slate-700 p-8 rounded-lg hover:border-amber-500 transition">
                    <h3 className="text-2xl font-black mb-4">Custom Solutions</h3>
                    <p className="text-slate-300">Engineered for your unique needs. Any size or shape. Precision built.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20 px-6 border-t border-slate-800">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-black mb-12">Why ThreePoint</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-slate-900 border border-slate-700 p-8 rounded-lg">
                    <div className="text-4xl mb-4">⚡</div>
                    <h3 className="text-xl font-black mb-2">Quick Turnaround</h3>
                    <p className="text-slate-400">Fast production without cutting corners</p>
                  </div>
                  <div className="bg-slate-900 border border-slate-700 p-8 rounded-lg">
                    <div className="text-4xl mb-4">🎯</div>
                    <h3 className="text-xl font-black mb-2">Built to Spec</h3>
                    <p className="text-slate-400">Precision engineering for exact requirements</p>
                  </div>
                  <div className="bg-slate-900 border border-slate-700 p-8 rounded-lg">
                    <div className="text-4xl mb-4">🛠️</div>
                    <h3 className="text-xl font-black mb-2">Expert Builder</h3>
                    <p className="text-slate-400">Full-time craftsman with deep expertise</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="contact" className="py-20 px-6 bg-slate-900/50 border-t border-slate-800">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-black mb-12">Ready to Order?</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <p className="text-lg text-slate-300 mb-8">Get in touch. We'll discuss your requirements and provide a quote within 24 hours.</p>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <Phone className="w-6 h-6 text-amber-500 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-slate-500">CALL US</p>
                          <p className="font-bold">754-213-0750 / 305-464-0414</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Mail className="w-6 h-6 text-amber-500 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-slate-500">EMAIL</p>
                          <p className="font-bold">Quotes@threepointenterprise.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-700 p-8 rounded-lg space-y-4">
                    <input type="text" required placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-800 border border-slate-600 rounded px-4 py-2 text-white placeholder-slate-500 focus:border-amber-500 outline-none" />
                    <input type="email" required placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-800 border border-slate-600 rounded px-4 py-2 text-white placeholder-slate-500 focus:border-amber-500 outline-none" />
                    <input type="tel" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-slate-800 border border-slate-600 rounded px-4 py-2 text-white placeholder-slate-500 focus:border-amber-500 outline-none" />
                    <textarea required placeholder="Your message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-slate-800 border border-slate-600 rounded px-4 py-2 text-white placeholder-slate-500 focus:border-amber-500 outline-none h-24 resize-none"></textarea>
                    <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 py-2 rounded font-bold transition">Send Quote Request</button>
                  </form>
                </div>
              </div>
            </section>

            <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6 text-center text-slate-500 text-sm">
              <p>© 2026 ThreePoint Enterprise. All rights reserved.</p>
            </footer>
          </div>
        )}
      </div>
    </>
  );
}
