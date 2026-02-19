import React, { useState } from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';

const colors = {
  bg: '#0f172a',
  bgSecondary: '#111827',
  bgTertiary: '#1f2937',
  border: '#1e293b',
  text: '#ffffff',
  textMuted: '#d1d5db',
  textDark: '#9ca3af',
  accent: '#fbbf24',
  accentDark: '#b45309',
  accentLight: '#fef08a',
};

export default function Home() {
  const [showMain, setShowMain] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${form.name}! We'll contact you at ${form.email}`);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div style={{ backgroundColor: colors.bg, color: colors.text, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* SPLASH PAGE */}
      {!showMain && (
        <div onClick={() => setShowMain(true)} style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(to bottom, #0f172a, #1e293b, #0f172a)',
          cursor: 'pointer'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '600px' }}>
            <div style={{ fontSize: '64px', fontWeight: 'bold', marginBottom: '24px' }}>
              <span style={{ color: colors.accent }}>3PT</span>
            </div>
            <h1 style={{ fontSize: '56px', fontWeight: 'bold', marginBottom: '24px', lineHeight: 1.2 }}>
              Industrial Crating <span style={{ backgroundImage: 'linear-gradient(to right, #fbbf24, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Solutions</span>
            </h1>
            <p style={{ fontSize: '20px', color: colors.textMuted, marginBottom: '32px' }}>
              Custom and generic crates engineered for precision, durability, and speed. Based in Miami, FL.
            </p>
            <p style={{ color: colors.accent, fontSize: '16px', fontWeight: 'bold', animation: 'pulse 2s infinite' }}>
              TAP TO EXPLORE OUR SOLUTIONS
            </p>
          </div>
        </div>
      )}

      {/* MAIN SITE */}
      {showMain && (
        <>
          {/* NAV */}
          <nav style={{
            borderBottom: `1px solid ${colors.border}`,
            position: 'sticky',
            top: 0,
            zIndex: 40,
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            backdropFilter: 'blur(12px)'
          }}>
            <div style={{
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '20px 24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{ fontSize: '28px', fontWeight: 'black' }}>
                <span style={{ color: colors.accent }}>3PT</span>
              </div>
              <a href="#contact" style={{
                backgroundColor: colors.accentDark,
                color: 'white',
                padding: '10px 28px',
                borderRadius: '8px',
                fontWeight: 'bold',
                textDecoration: 'none',
                cursor: 'pointer'
              }}>
                Get Quote
              </a>
            </div>
          </nav>

          {/* HERO */}
          <section style={{ padding: '80px 24px', borderBottom: `1px solid ${colors.border}` }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
                <div>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '8px 16px',
                    backgroundColor: 'rgba(251, 191, 36, 0.1)',
                    border: `1px solid rgba(251, 191, 36, 0.3)`,
                    borderRadius: '24px',
                    marginBottom: '32px'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: colors.accent,
                      borderRadius: '50%'
                    }}></span>
                    <span style={{ color: colors.accentLight, fontSize: '13px', fontWeight: 'bold' }}>PRECISION ENGINEERED • BASED IN MIAMI, FL</span>
                  </div>

                  <h1 style={{
                    fontSize: '64px',
                    fontWeight: 'black',
                    lineHeight: 1.2,
                    marginBottom: '24px'
                  }}>
                    Built to <span style={{ color: colors.accent }}>Spec</span>
                  </h1>

                  <p style={{
                    fontSize: '18px',
                    color: colors.textMuted,
                    lineHeight: 1.6,
                    marginBottom: '32px',
                    maxWidth: '500px'
                  }}>
                    Custom and generic crates engineered for precision, durability, and speed. From concept to shipment, we deliver exactly what you need.
                  </p>

                  <div style={{ display: 'flex', gap: '16px', marginBottom: '48px', flexWrap: 'wrap' }}>
                    <a href="#contact" style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      backgroundColor: colors.accentDark,
                      color: 'white',
                      padding: '14px 32px',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      textDecoration: 'none',
                      cursor: 'pointer'
                    }}>
                      Request Quote <ArrowRight size={18} />
                    </a>
                    <a href="tel:754-213-0750" style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      border: `2px solid ${colors.border}`,
                      color: 'white',
                      padding: '12px 32px',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      textDecoration: 'none',
                      cursor: 'pointer'
                    }}>
                      <Phone size={18} /> Call Now
                    </a>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: '32px',
                    paddingTop: '32px',
                    borderTop: `1px solid ${colors.border}`
                  }}>
                    <div>
                      <div style={{ fontSize: '32px', fontWeight: 'black', color: colors.accent }}>24hrs</div>
                      <p style={{ color: colors.textDark, fontSize: '14px' }}>Quick Turnaround</p>
                    </div>
                    <div>
                      <div style={{ fontSize: '32px', fontWeight: 'black', color: colors.accent }}>100%</div>
                      <p style={{ color: colors.textDark, fontSize: '14px' }}>Custom Built</p>
                    </div>
                    <div>
                      <div style={{ fontSize: '32px', fontWeight: 'black', color: colors.accent }}>∞</div>
                      <p style={{ color: colors.textDark, fontSize: '14px' }}>Any Part Size</p>
                    </div>
                  </div>
                </div>

                <div style={{
                  backgroundColor: colors.bgSecondary,
                  border: `1px solid ${colors.border}`,
                  padding: '32px',
                  borderRadius: '12px'
                }}>
                  <h3 style={{ color: colors.accent, fontWeight: 'bold', marginBottom: '24px', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px' }}>Capabilities</h3>
                  <ul style={{ listStyle: 'none' }}>
                    {['Custom crates', 'Generic standard solutions', 'Any size & configuration', 'Fast turnaround guaranteed'].map((item, i) => (
                      <li key={i} style={{ marginBottom: '12px', color: colors.textMuted, fontSize: '15px' }}>✓ {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section style={{
            padding: '80px 24px',
            backgroundColor: colors.bgSecondary,
            borderBottom: `1px solid ${colors.border}`
          }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '48px', fontWeight: 'black', marginBottom: '48px' }}>Our Solutions</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                {[
                  { title: 'Generic Crates', desc: 'Standard, proven designs for routine shipments. Quick ordering, reliable solutions for common requirements.' },
                  { title: 'Custom Solutions', desc: 'Engineered specifically for your unique needs. Oversized, oddly shaped, or specialized handling—we design it perfectly.' }
                ].map((item, i) => (
                  <div key={i} style={{
                    backgroundColor: colors.bg,
                    border: `1px solid ${colors.border}`,
                    padding: '32px',
                    borderRadius: '12px',
                    transition: 'border-color 0.3s'
                  }}>
                    <h3 style={{ fontSize: '24px', fontWeight: 'black', marginBottom: '16px' }}>{item.title}</h3>
                    <p style={{ color: colors.textMuted, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WHY THREEPOINT */}
          <section style={{ padding: '80px 24px', borderBottom: `1px solid ${colors.border}` }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '48px', fontWeight: 'black', marginBottom: '48px' }}>Why ThreePoint</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px' }}>
                {[
                  { emoji: '⚡', title: 'Quick Turnaround', desc: 'Fast production to fit your timeline without cutting corners' },
                  { emoji: '🎯', title: 'Built to Spec', desc: 'Precision engineering ensures every crate meets your exact requirements' },
                  { emoji: '🛠️', title: 'Expert Builder', desc: 'Dedicated full-time craftsman with deep industry expertise' }
                ].map((item, i) => (
                  <div key={i} style={{
                    backgroundColor: colors.bgSecondary,
                    border: `1px solid ${colors.border}`,
                    padding: '32px',
                    borderRadius: '12px'
                  }}>
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>{item.emoji}</div>
                    <h3 style={{ fontSize: '20px', fontWeight: 'black', marginBottom: '12px' }}>{item.title}</h3>
                    <p style={{ color: colors.textDark, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" style={{
            padding: '80px 24px',
            backgroundColor: colors.bgSecondary,
            borderBottom: `1px solid ${colors.border}`
          }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '48px', fontWeight: 'black', marginBottom: '48px' }}>Ready to Order?</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
                <div>
                  <p style={{ fontSize: '18px', color: colors.textMuted, marginBottom: '32px', lineHeight: 1.6 }}>Get in touch with our team. We'll discuss your requirements and provide a custom quote within 24 hours.</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <Phone style={{ color: colors.accent, flexShrink: 0 }} size={24} />
                      <div>
                        <p style={{ fontSize: '12px', color: colors.textDark, fontWeight: 'bold', marginBottom: '4px' }}>CALL US</p>
                        <p style={{ fontWeight: 'bold' }}>754-213-0750</p>
                        <p style={{ fontWeight: 'bold' }}>305-464-0414</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <Mail style={{ color: colors.accent, flexShrink: 0 }} size={24} />
                      <div>
                        <p style={{ fontSize: '12px', color: colors.textDark, fontWeight: 'bold', marginBottom: '4px' }}>EMAIL</p>
                        <p style={{ fontWeight: 'bold' }}>Quotes@threepointenterprise.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSubmit} style={{
                  backgroundColor: colors.bg,
                  border: `1px solid ${colors.border}`,
                  padding: '32px',
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: colors.bgTertiary,
                      border: `1px solid ${colors.border}`,
                      borderRadius: '8px',
                      padding: '12px 16px',
                      color: 'white',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: colors.bgTertiary,
                      border: `1px solid ${colors.border}`,
                      borderRadius: '8px',
                      padding: '12px 16px',
                      color: 'white',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: colors.bgTertiary,
                      border: `1px solid ${colors.border}`,
                      borderRadius: '8px',
                      padding: '12px 16px',
                      color: 'white',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                  <textarea
                    required
                    placeholder="Tell us about your project"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: colors.bgTertiary,
                      border: `1px solid ${colors.border}`,
                      borderRadius: '8px',
                      padding: '12px 16px',
                      color: 'white',
                      fontSize: '14px',
                      outline: 'none',
                      height: '120px',
                      resize: 'none',
                      fontFamily: 'inherit'
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      backgroundColor: colors.accentDark,
                      color: 'white',
                      padding: '12px',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background 0.3s'
                    }}
                  >
                    Send Quote Request
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer style={{
            backgroundColor: colors.bgSecondary,
            borderTop: `1px solid ${colors.border}`,
            padding: '48px 24px',
            textAlign: 'center',
            color: colors.textDark,
            fontSize: '14px'
          }}>
            <p>© 2026 ThreePoint Enterprise. All rights reserved.</p>
          </footer>
        </>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
