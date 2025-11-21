function Stat({ label, value }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
      <div className="text-3xl font-extrabold text-white">{value}</div>
      <div className="text-slate-300 text-xs mt-1">{label}</div>
    </div>
  )
}

function CaseStudy() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-indigo-300">Case Study</h3>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">How AI-Powered Lead Management Transformed a Solar Contractor</h2>
            <p className="text-slate-300 mt-4">In 5 months, our Smart Site AI helped Self Solar drive more qualified leads, slash cost per lead, and book more jobs than ever before.</p>
            <ul className="mt-4 space-y-2 text-slate-200 text-sm list-disc pl-5">
              <li>Automated lead intake across chat, SMS, and phone</li>
              <li>AI follow-up and nurturing to increase close rates</li>
              <li>SEO + Ads to fuel high-intent traffic</li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Stat label="Reduction in CPL" value="77%" />
            <Stat label="Appointments Booked" value="700+" />
            <Stat label="Avg. Response Time" value="< 60s" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy
