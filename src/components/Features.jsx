import { Bot, MessageSquare, PhoneCall, Search, LineChart, Sparkles } from 'lucide-react'

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <div className="w-10 h-10 rounded-lg bg-indigo-500/15 text-indigo-300 flex items-center justify-center mb-4">
        <Icon size={22} />
      </div>
      <h3 className="text-white font-semibold text-lg">{title}</h3>
      <p className="text-slate-300 mt-1 text-sm">{desc}</p>
    </div>
  )
}

function Features() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Your AI-Powered Contractor Growth Engine</h2>
          <p className="text-slate-300 mt-2">Engage every visitor, follow up instantly, and turn clicks into booked jobs.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <Feature icon={Bot} title="AI Live Chat" desc="24/7 conversation that captures details and books appointments automatically." />
          <Feature icon={MessageSquare} title="Smart SMS Forms" desc="Form submissions trigger AI-powered texting that nurtures and qualifies leads." />
          <Feature icon={PhoneCall} title="AI Receptionist" desc="Handles intake via phone, answers FAQs, and routes calls to your team." />
          <Feature icon={Search} title="Local SEO & Ads" desc="Get found in your service area with proven SEO and precision ad campaigns." />
        </div>
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-fuchsia-500/10 border border-white/10 p-6">
          <div className="flex items-center gap-3 text-slate-200">
            <Sparkles size={18} className="text-indigo-300" />
            <span className="text-sm">Built for home service pros: Roofing • Plumbing • HVAC • Electric • Remodeling • Solar</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
