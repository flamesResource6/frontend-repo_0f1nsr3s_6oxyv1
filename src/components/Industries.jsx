const industries = [
  { name: 'Roofing' },
  { name: 'Plumbing' },
  { name: 'HVAC' },
  { name: 'Electricians' },
  { name: 'Remodeling' },
  { name: 'Solar' },
]

function Industries() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Industry-Specific Solutions</h2>
          <p className="text-slate-300 mt-2">Tailored playbooks and templates for your trade.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {industries.map((i) => (
            <a key={i.name} href="#consult" className="group rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-indigo-400/40 transition">
              <div className="text-white font-semibold text-lg">{i.name}</div>
              <div className="text-slate-300 text-sm mt-1 group-hover:text-indigo-200">See {i.name} Solutions →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
