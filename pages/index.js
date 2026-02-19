import React, { useState } from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import Head from 'next/head';

export default function Home() {
  const [contactForm, setContactForm] = useState({ name: '', company: '', email: '', phone: '', details: '' });
  const [showMain, setShowMain] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${contactForm.name}! We'll contact you at ${contactForm.email} soon.`);
    setContactForm({ name: '', company: '', email: '', phone: '', details: '' });
  };

  return (
    <>
      <Head>
        <title>ThreePoint Enterprise - Industrial Crating Solutions</title>
        <meta name="description" content="Custom and generic crates engineered for precision, durability, and speed. Based in Miami, FL." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
        <div onClick={() => setShowMain(true)} className={`fixed inset-0 z-50 flex items-center justify-center cursor-pointer transition-opacity duration-1000 ${showMain ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
          
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-12 left-8 w-32 h-32 transform -rotate-45 opacity-20 hover:opacity-30 transition">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-amber-600 rounded-sm shadow-lg"></div>
              <div className="absolute top-8 left-1/2 transform -translate-x-1 w-2 h-20 bg-amber-800 rounded-full"></div>
            </div>

            <div className="absolute top-20 right-12 opacity-25 hover:opacity-35 transition">
              <div className="relative w-24 h-24">
                <div className="absolute top-0 left-4 w-1 h-16 bg-gradient-to-b from-slate-400 to-slate-500 transform -rotate-12 rounded-full">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-slate-500 rounded-t-full"></div>
                </div>
                <div className="absolute top-2 left-8 w-1 h-20 bg-gradient-to-b from-slate-300 to-slate-400 transform rotate-6 rounded-full">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-slate-400 rounded-t-full"></div>
                </div>
                <div className="absolute top-4 right-2 w-1 h-18 bg-gradient-to-b from-slate-400 to-slate-500 transform rotate-25 rounded-full">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-slate-500 rounded-t-full"></div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-16 right-20 w-40 h-40 transform rotate-25 opacity-15 hover:opacity-25 transition">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-10 bg-gradient-to-b from-amber-600 to-amber-700 rounded shadow-2xl"></div>
              <div className="absolute top-10 left-1/2 transform -translate-x-1.5 w-3 h-32 bg-gradient-to-b from-amber-900 to-amber-950 rounded-full"></div>
            </div>

            <div className="absolute top-1/3 right-1/3 opacity-20 hover:opacity-30 transition">
              <div className="w-1 h-24 bg-gradient-to-b from-slate-300 to-slate-500 transform -rotate-45 rounded-full">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-slate-400 rounded-t-full"></div>
              </div>
            </div>

            <div className="absolute top-1/4 left-1/4 w-0.5 h-20 bg-slate-400 transform -rotate-60 opacity-15"></div>
            <div className="absolute bottom-1/4 left-1/3 w-0.5 h-16 bg-slate-300 transform rotate-30 opacity-20"></div>
          </div>

          <div className="relative z-10 text-center max-w-2xl px-6">
            <div className="mb-8">
              <div className="text-6xl font-black tracking-tighter mb-4"><span className="text-amber-500">3PT</span></div>
              <h1 className="text-5xl lg:text-6xl font-black tracking-tight mb-6">Industrial Crating <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text">Solutions</span></h1>
            </div>
            <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto">Custom and generic crates engineered for precision, durability, and speed. From concept to shipment, we deliver exactly what you need—<span className="text-amber-400 font-semibold">built to spec</span>.</p>
            <div className="space-y-4">
              <p className="text-amber-400 text-sm font-semibold tracking-wide animate-pulse">TAP TO EXPLORE OUR SOLUTIONS</p>
              <div className="flex justify-center">
                <div className="w-1 h-8 bg-gradient-to-b from-amber-500 to-transparent animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>

        <div className={`transition-opacity duration-1000 ${showMain ? 'opacity-100' : 'opacity-0'}`}>
          <nav className="border-b border-slate-800 backdrop-blur-md sticky top-0 z-50 bg-slate-950/90">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
              <div className="text-3xl font-black tracking-tighter"><span className="text-amber-500">3PT</span></div>
              <a href="#contact" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 px-7 py-2.5 rounded-lg text-sm font-bold transition shadow-lg hover:shadow-orange-500/20">Get Quote</a>
            </div>
          </nav>

          <section className="relative min-h-[90vh] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
            <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
            
            <div className="max-w-7xl mx-auto relative z-10 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="flex gap-4 flex-wrap">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full w-fit">
                      <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                      <span className="text-amber-300 text-sm font-semibold tracking-wide">PRECISION ENGINEERED</span>
                    </div>
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full w-fit">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span className="text-orange-300 text-sm font-semibold tracking-wide">BASED IN MIAMI, FL</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h1 className="text-6xl lg:text-7xl font-black tracking-tight leading-tight">Built to <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text">Spec</span></h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-lg">Custom and generic crates engineered for precision, durability, and speed. From concept to shipment, we deliver exactly what you need.</p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-6">
                    <a href="#contact" className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg font-bold text-white shadow-lg hover:shadow-orange-500/30 transition overflow-hidden">
                      <span className="relative z-10">Request Quote</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700 opacity-0 group-hover:opacity-100 transition"></div>
                    </a>
                    <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-600 hover:border-amber-500 rounded-lg font-bold transition group">
                      <Phone className="w-5 h-5" /> 
                      <span>Call Now</span>
                    </a>
                  </div>

                  <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-800">
                    <div>
                      <div className="text-3xl font-black text-amber-400">24hrs</div>
                      <p className="text-slate-400 text-sm">Quick Turnaround</p>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-amber-400">100%</div>
                      <p className="text-slate-400 text-sm">Custom Built</p>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-amber-400">∞</div>
                      <p className="text-slate-400 text-sm">Any Part Size</p>
                    </div>
                  </div>
                </div>

                <div className="relative hidden lg:flex items-center justify-center">
                  <div className="relative w-full aspect-square">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-3xl blur-2xl"></div>
                    
                    <div className="absolute inset-8 bg-slate-900/80 border border-slate-700/50 rounded-2xl p-8 flex flex-col justify-between backdrop-blur-sm">
                      <div>
                        <h3 className="text-amber-400 text-sm font-bold tracking-widest mb-6">CAPABILITIES</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-1 h-1 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-200">Custom crates</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-1 h-1 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-200">Generic standard solutions</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-1 h-1 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-200">Any size & configuration</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-1 h-1 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-200">Fast turnaround guaranteed</span>
                          </div>
                        </div>
                      </div>
                      <div className="pt-6 border-t border-slate-700">
                        <p className="text-amber-400 font-bold text-lg">THREEPOINT ENTERPRISE</p>
                        <p className="text-slate-400 text-sm">Industrial Crating Solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16">
                <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-4">Our Solutions</h2>
                <p className="text-xl text-slate-400 max-w-2xl">We provide both standardized and fully custom crating solutions tailored to your exact specifications</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group relative bg-slate-900/50 border border-slate-700 p-10 rounded-2xl hover:border-amber-500/50 transition duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl mb-6 flex items-center justify-center text-2xl">⚙️</div>
                    <h3 className="text-2xl font-black mb-4">Generic Crates</h3>
                    <p className="text-slate-300 leading-relaxed mb-6">Standard, proven designs for routine shipments. Quick ordering, reliable solutions for common requirements.</p>
                    <ul className="space-y-3 text-slate-400 text-sm">
                      <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Standard dimensions</li>
                      <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Fast delivery</li>
                      <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Cost-effective</li>
                    </ul>
                  </div>
                </div>

                <div className="group relative bg-slate-900/50 border border-slate-700 p-10 rounded-2xl hover:border-amber-500/50 transition duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl mb-6 flex items-center justify-center text-2xl">🎯</div>
                    <h3 className="text-2xl font-black mb-4">Custom Solutions</h3>
                    <p className="text-slate-300 leading-relaxed mb-6">Engineered specifically for your unique needs. Oversized, oddly shaped, or specialized handling—we design it perfectly.</p>
                    <ul className="space-y-3 text-slate-400 text-sm">
                      <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Any size & shape</li>
                      <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Precision engineered</li>
                      <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Fast turnaround</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-28 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16">
                <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-4">Why ThreePoint</h2>
                <p className="text-xl text-slate-400 max-w-2xl">We're not just another vendor. We're partners in precision.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 to-orange-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-slate-900 border border-slate-700 p-10 rounded-2xl">
                    <div className="text-5xl font-black text-amber-500 mb-4">⚡</div>
                    <h3 className="text-xl font-black mb-3">Quick Turnaround</h3>
                    <p className="text-slate-400 leading-relaxed">Fast production to fit your timeline. We understand deadline pressure and deliver without cutting corners.</p>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 to-orange-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-slate-900 border border-slate-700 p-10 rounded-2xl">
                    <div className="text-5xl font-black text-amber-500 mb-4">🎯</div>
                    <h3 className="text-xl font-black mb-3">Built to Spec</h3>
                    <p className="text-slate-400 leading-relaxed">Precision engineering ensures every crate meets your exact requirements. No compromises, just results.</p>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 to-orange-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-slate-900 border border-slate-700 p-10 rounded-2xl">
                    <div className="text-5xl font-black text-amber-500 mb-4">🛠️</div>
                    <h3 className="text-xl font-black mb-3">Expert Builder</h3>
                    <p className="text-slate-400 leading-relaxed">Dedicated full-time craftsman with deep industry expertise. You get a partner who understands your business.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900 border-b border-slate-800">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16">
                <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-4">The Process</h2>
                <p className="text-xl text-slate-400 max-w-2xl">From quote to delivery in three simple steps</p>
              </div>
              <div className="space-y-12">
                <div className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white font-black text-2xl shadow-lg shadow-orange-500/20">1</div>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-black mb-3">Request & Quote</h3>
                    <p className="text-slate-300 leading-relaxed max-w-xl">Tell us about your part—dimensions, specifications, quantity. We'll respond quickly with a detailed quote that fits your timeline and budget.</p>
                  </div>
                </div>

                <div className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white font-black text-2xl shadow-lg shadow-orange-500/20">2</div>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-black mb-3">Design & Build</h3>
                    <p className="text-slate-300 leading-relaxed max-w-xl">Our expert builder engineers and constructs your crate with precision. Every detail matters. We keep you updated on progress.</p>
                  </div>
                </div>

                <div className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white font-black text-2xl shadow-lg shadow-orange-500/20">3</div>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-black mb-3">Ship & Deliver</h3>
                    <p className="text-slate-300 leading-relaxed max-w-xl">Your finished crate is ready and ships on schedule. Your parts arrive safely, protected and ready for use.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-6">Ready to Order?</h2>
                  <p className="text-xl text-slate-400 leading-relaxed mb-10">Get in touch with our team. We'll discuss your requirements and provide a custom quote within 24 hours.</p>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-slate-500 font-semibold mb-1">CALL US</p>
                        <p className="text-lg font-bold">754-213-0750</p>
                        <p className="text-lg font-bold">305-464-0414</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-slate-500 font-semibold mb-1">EMAIL</p>
                        <p className="text-lg font-bold">Quotes@threepointenterprise.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-orange-600/20 rounded-3xl blur-2xl opacity-50"></div>
                  <div className="relative bg-slate-900/80 border border-slate-700 p-10 rounded-2xl backdrop-blur-sm">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-sm font-bold mb-2 text-slate-200">Your Name</label>
                        <input type="text" required value={contactForm.name} onChange={(e) => setContactForm({...contactForm, name: e.target.value})} className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition" placeholder="John Smith" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2 text-slate-200">Company</label>
                        <input type="text" value={contactForm.company} onChange={(e) => setContactForm({...contactForm, company: e.target.value})} className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition" placeholder="Your Company" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2 text-slate-200">Email</label>
                        <input type="email" required value={contactForm.email} onChange={(e) => setContactForm({...contactForm, email: e.target.value})} className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition" placeholder="you@company.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2 text-slate-200">Phone</label>
                        <input type="tel" value={contactForm.phone} onChange={(e) => setContactForm({...contactForm, phone: e.target.value})} className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition" placeholder="+1 (555) 000-0000" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2 text-slate-200">Tell Us About Your Project</label>
                        <textarea required value={contactForm.details} onChange={(e) => setContactForm({...contactForm, details: e.target.value})} className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition h-28 resize-none" placeholder="Describe your part, dimensions, quantity, timeline..." />
                      </div>
                      <button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 py-3 rounded-lg font-bold text-white transition shadow-lg hover:shadow-orange-500/30 text-base">Send Quote Request</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="bg-slate-900 border-t border-slate-800 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                <div>
                  <p className="text-3xl font-black mb-2"><span className="text-amber-500">3PT</span></p>
                  <p className="text-slate-400">Industrial Crating Solutions Built to Spec</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 mb-3">QUICK LINKS</p>
                  <ul className="space-y-2 text-slate-400">
                    <li><a href="#" className="hover:text-amber-400 transition">Our Services</a></li>
                    <li><a href="#contact" className="hover:text-amber-400 transition">Get a Quote</a></li>
                    <li><a href="#contact" className="hover:text-amber-400 transition">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 mb-3">CONTACT INFO</p>
                  <p className="text-slate-400 text-sm mb-2">754-213-0750</p>
                  <p className="text-slate-400 text-sm">Quotes@threepointenterprise.com</p>
                </div>
              </div>
              <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                <p>© 2026 ThreePoint Enterprise. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
