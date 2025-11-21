import { Target, Handshake, CalendarDays } from 'lucide-react'

function Step({ icon: Icon, title, desc }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full">
      <div className="w-10 h-10 rounded-lg bg-indigo-500/15 text-indigo-300 flex items-center justify-center mb-4">
        <Icon size={22} />
      </div>
      <h3 className="text-white font-semibold text-lg">{title}</h3>
      <p className="text-slate-300 mt-1 text-sm">{desc}</p>
    </div>
  )
}

function Process() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">From First Click to Signed Contract in 3 Steps</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <Step icon={Target} title="Attract" desc="Drive traffic via local SEO & Google Ads." />
          <Step icon={Handshake} title="Engage" desc="AI connects with leads via chat, SMS, and phone." />
          <Step icon={CalendarDays} title="Convert" desc="Automated nurturing books estimates and jobs." />
        </div>
      </div>
    </section>
  )
}

export default Process
