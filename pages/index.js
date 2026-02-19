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

      <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { 
          background: #0f172a; 
          color: white; 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }
        a { color: #fbbf24; text-decoration: none; }
        a:hover { color: #f59e0b; }
        button { cursor: pointer; }
        input, textarea { font-family: inherit; }
      `}</style>

      <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: 'white' }}>
        <div onClick={() => setShowMain(true)} style={{ 
          position: 'fixed', 
          inset: 0, 
          zIndex: 50, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          cursor: 'pointer',
          background: 'linear-gradient(to bottom, #0f172a, #111827, #0f172a)',
          opacity: showMain ? 0 : 1,
          pointerEvents: showMain ? 'none' : 'auto',
          transition: 'opacity 1s'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px', color: '#fbbf24' }}>3PT</h1>
            <h2 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px' }}>Industrial Crating Solutions</h2>
            <p style={{ fontSize: '20px', color: '#d1d5db', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>Custom and generic crates engineered for precision, durability, and speed. Based in Miami, FL.</p>
            <p style={{ color: '#fbbf24', animation: 'pulse 2s infinite', marginBottom: '16px' }}>TAP TO EXPLORE</p>
          </div>
        </div>

        {showMain && (
          <div style={{ opacity: 1, transition: 'opacity 1s' }}>
            <nav style={{ borderBottom: '1px solid #1e293b', position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(12px)' }}>
              <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '24px', fontWeight: 'black' }}><span style={{ color: '#fbbf24' }}>3PT</span></span>
                <a href="#contact" style={{ backgroundColor: '#b45309', padding: '8px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: 'bold', color: 'white' }}>Get Quote</a>
              </div>
            </nav>

            <section style={{ padding: '80px 24px', maxWidth: '80rem', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '8px 16px', backgroundColor: 'rgba(251, 191, 36, 0.1)', border: '1px solid rgba(251, 191, 36, 0.3)', borderRadius: '24px', width: 'fit-content' }}>
                    <span style={{ width: '8px', height: '8px', backgroundColor: '#fbbf24', borderRadius: '50%' }}></span>
                    <span style={{ color: '#fef08a', fontSize: '14px', fontWeight: 'bold' }}>PRECISION ENGINEERED</span>
                  </div>
                  
                  <div>
                    <h1 style={{ fontSize: '60px', fontWeight: 'black', lineHeight: 1.2, marginBottom: '16px' }}>Built to <span style={{ color: '#fbbf24' }}>Spec</span></h1>
                    <p style={{ fontSize: '18px', color: '#d1d5db', lineHeight: 1.6, maxWidth: '500px' }}>Custom and generic crates for any part. Quick turnaround. Expert craftsmanship. Based
