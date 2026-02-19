export default function App({ Component, pageProps }) {
  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0f172a; color: white; font-family: system-ui, -apple-system, sans-serif; }
        .min-h-screen { min-height: 100vh; }
        .bg-slate-950 { background: #020617; }
        .text-white { color: white; }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
