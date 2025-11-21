import Spline from '@splinetool/react-spline'

function Hero() {
  const handleScrollToConsult = () => {
    const el = document.getElementById('consult')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10">
        <div className="min-h-[80vh] flex items-center">
          <div className="container mx-auto px-6 py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-blue-200/80 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-4">contractorsmartsite.ai</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                SEO and AI-Optimized Websites for Contractors That Convert
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-blue-100/90 max-w-2xl">
                No contracts required • Results in 30 days
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <button onClick={handleScrollToConsult} className="inline-flex items-center justify-center rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-6 py-3 shadow-lg shadow-indigo-500/30 transition">
                  Schedule Free Consultation
                </button>
                <div className="text-blue-100/80 text-sm">
                  Trusted by contractors nationwide to grow their business
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/30 to-slate-900/80" />
    </section>
  )
}

export default Hero
