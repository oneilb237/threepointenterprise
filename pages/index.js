import React, { useState } from 'react';
import { Phone, Mail, ArrowRight, CheckCircle } from 'lucide-react';
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
        {/* Splash Page */}
        <div 
          onClick={() => setShowMain(true)}
          className={`fixed inset-0 z-50 flex items-center justify-center cursor-pointer transition-opacity duration-1000 ${showMain ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
          
          {/* Animated background hammers and nails */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Hammer - top left */}
            <div className="absolute top-12 left-8 w-32 h-32 transform -rota
