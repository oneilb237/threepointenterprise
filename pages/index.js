import { useState } from 'react';

export default function Home() {
  const [showMain, setShowMain] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${form.name}! We'll contact you.`);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div style={{ backgroundColor: '#0f172a', color: 'white', minHeight: '100vh', fontFamily: 'system-ui' }}>
      {!showMain ? (
        <div onClick={() => setShowMain(true)} style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom, #0f172a, #1e293b)', cursor: 'pointer' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '64px', fontWeight: 'bold', color: '#fbbf24', marginBottom: '24px' }}>3PT</h1>
            <h2 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px' }}>Industrial Crating Solutions</h2>
            <p style={{ fontSize: '18px', color: '#d1d5db', marginBottom: '24px' }}>Custom and generic crates based in Miami, FL</p>
            <p style={{ color: '#fbbf24', fontWeight: 'bold' }}>TAP TO EXPLORE</p>
          </div>
        </div>
      ) : (
        <>
          <nav style={{ borderBottom: '1px solid #1e293b', padding: '20px 24px', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#fbbf24' }}>3PT</span>
            <a href="#contact" style={{ backgroundColor: '#b45309', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>Get Quote</a>
          </nav>

          <section style={{ padding: '80px 24px', maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
              <div>
                <div style={{ backgroundColor: 'rgba(251, 191, 36, 0.1)', border: '1px solid rgba(251, 191, 36, 0.3)', padding: '8px 16px', borderRadius: '24px', display: 'inline-block', marginBottom: '32px' }}>
                  <span style={{ color: '#fef08a', fontSize: '13px', fontWeight: 'bold' }}>PRECISION ENGINEERED • BASED IN MIAMI, FL</span>
                </div>
                <h1 style={{ fontSize: '56px', fontWeight: 'bold', marginBottom: '24px' }}>Built to <span style={{ color: '#fbbf24' }}>Spec</span></h1>
                <p style={{ fontSize: '18px', color: '#d1d5db', marginBottom: '32px' }}>Custom and generic crates engineered for precision, durability, and speed.</p>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
                  <a href="#contact" style={{ backgroundColor: '#b45309', color: 'white', padding: '12px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>Request Quote</a>
                  <a href="tel:754-213-0750" style={{ border: '2px solid #475569', color: 'white', padding: '10px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>Call Now</a>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', paddingTop: '24px', borderTop: '1px solid #1e293b' }}>
                  <div>
                    <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#fbbf24' }}>24hrs</div>
                    <p style={{ color: '#9ca3af', fontSize: '13px' }}>Turnaround</p>
                  </div>
                  <div>
                    <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#fbbf24' }}>100%</div>
                    <p style={{ color: '#9ca3af', fontSize: '13px' }}>Custom</p>
                  </div>
                  <div>
                    <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#fbbf24' }}>∞</div>
                    <p style={{ color: '#9ca3af', fontSize: '13px' }}>Any Size</p>
                  </div>
                </div>
              </div>
              <div style={{ backgroundColor: '#111827', border: '1px solid #1e293b', padding: '32px', borderRadius: '12px' }}>
                <h3 style={{ color: '#fbbf24', fontWeight: 'bold', marginBottom: '24px', fontSize: '12px', textTransform: 'uppercase' }}>Capabilities</h3>
                <ul style={{ listStyle: 'none' }}>
                  <li style={{ marginBottom: '12px', color: '#d1d5db' }}>✓ Custom crates</li>
                  <li style={{ marginBottom: '12px', color: '#d1d5db' }}>✓ Generic solutions</li>
                  <li style={{ marginBottom: '12px', color: '#d1d5db' }}>✓ Any size & shape</li>
                  <li style={{ color: '#d1d5db' }}>✓ Fast turnaround</li>
                </ul>
              </div>
            </div>
          </section>

          <section style={{ padding: '80px 24px', backgroundColor: '#111827', borderTop: '1px solid #1e293b', borderBottom: '1px solid #1e293b' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '48px' }}>Our Solutions</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '32px', borderRadius: '12px' }}>
                  <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px' }}>Generic Crates</h3>
                  <p style={{ color: '#d1d5db' }}>Standard designs. Fast delivery. Cost-effective solutions.</p>
                </div>
                <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '32px', borderRadius: '12px' }}>
                  <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px' }}>Custom Solutions</h3>
                  <p style={{ color: '#d1d5db' }}>Engineered for your unique needs. Any size or shape.</p>
                </div>
              </div>
            </div>
          </section>

          <section style={{ padding: '80px 24px', borderBottom: '1px solid #1e293b' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '48px' }}>Why ThreePoint</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px' }}>
                <div style={{ backgroundColor: '#111827', border: '1px solid #1e293b', padding: '32px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '40px', marginBottom: '16px' }}>⚡</div>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>Quick Turnaround</h3>
                  <p style={{ color: '#9ca3af' }}>Fast production without cutting corners</p>
                </div>
                <div style={{ backgroundColor: '#111827', border: '1px solid #1e293b', padding: '32px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '40px', marginBottom: '16px' }}>🎯</div>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>Built to Spec</h3>
                  <p style={{ color: '#9ca3af' }}>Precision engineering for exact requirements</p>
                </div>
                <div style={{ backgroundColor: '#111827', border: '1px solid #1e293b', padding: '32px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '40px', marginBottom: '16px' }}>🛠️</div>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>Expert Builder</h3>
                  <p style={{ color: '#9ca3af' }}>Full-time craftsman with deep expertise</p>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" style={{ padding: '80px 24px', backgroundColor: '#111827' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '48px' }}>Ready to Order?</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
                <div>
                  <p style={{ fontSize: '16px', color: '#d1d5db', marginBottom: '32px' }}>Get in touch. We'll provide a quote within 24 hours.</p>
                  <div style={{ marginBottom: '24px' }}>
                    <p style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 'bold', marginBottom: '4px' }}>CALL US</p>
                    <p style={{ fontWeight: 'bold' }}>754-213-0750</p>
                    <p style={{ fontWeight: 'bold' }}>305-464-0414</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 'bold', marginBottom: '4px' }}>EMAIL</p>
                    <p style={{ fontWeight: 'bold' }}>Quotes@threepointenterprise.com</p>
                  </div>
                </div>
                <form onSubmit={handleSubmit} style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '32px', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <input type="text" required placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={{ backgroundColor: '#1f2937', border: '1px solid #1e293b', borderRadius: '8px', padding: '12px', color: 'white', outline: 'none' }} />
                  <input type="email" required placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={{ backgroundColor: '#1f2937', border: '1px solid #1e293b', borderRadius: '8px', padding: '12px', color: 'white', outline: 'none' }} />
                  <input type="tel" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} style={{ backgroundColor: '#1f2937', border: '1px solid #1e293b', borderRadius: '8px', padding: '12px', color: 'white', outline: 'none' }} />
                  <textarea required placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ backgroundColor: '#1f2937', border: '1px solid #1e293b', borderRadius: '8px', padding: '12px', color: 'white', outline: 'none', height: '100px', fontFamily: 'inherit' }} />
                  <button type="submit" style={{ backgroundColor: '#b45309', color: 'white', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Send Quote Request</button>
                </form>
              </div>
            </div>
          </section>

          <footer style={{ backgroundColor: '#0f172a', borderTop: '1px solid #1e293b', padding: '32px 24px', textAlign: 'center', color: '#9ca3af', fontSize: '14px' }}>
            <p>© 2026 ThreePoint Enterprise. All rights reserved.</p>
          </footer>
        </>
      )}
    </div>
  );
}
