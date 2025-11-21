import { useState } from 'react'
import { Bot, Send, Phone } from 'lucide-react'

function Bubble({ role, text }) {
  const isAI = role === 'ai'
  return (
    <div className={`flex ${isAI ? '' : 'justify-end'}`}>
      <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${isAI ? 'bg-slate-800/80 text-slate-100' : 'bg-indigo-600 text-white'} `}>
        {text}
      </div>
    </div>
  )
}

function Demo() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [form, setForm] = useState({ name: '', phone: '', sample_intent: "Hi! I'm looking for a roofing contractor for a quote." })
  const [submitting, setSubmitting] = useState(false)
  const [transcript, setTranscript] = useState(null)
  const [error, setError] = useState(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch(`${baseUrl}/api/demo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, name: form.name.trim(), phone: form.phone.trim() }),
      })
      if (!res.ok) throw new Error('Failed to trigger demo')
      const data = await res.json()
      setTranscript(data.transcript)
    } catch (e) {
      setError(e.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="bg-slate-900 py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Demo Our AI Agent</h2>
            <p className="text-slate-300 mt-2">Enter your name and mobile number to see a live SMS-style conversation preview.</p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Name</label>
                  <input name="name" required value={form.name} onChange={onChange} className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400" placeholder="Jane Contractor" />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Mobile Phone</label>
                  <input name="phone" required value={form.phone} onChange={onChange} className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400" placeholder="(555) 123-4567" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Sample Message</label>
                <input name="sample_intent" value={form.sample_intent} onChange={onChange} className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400" />
              </div>
              <button disabled={submitting} className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-5 py-2.5 disabled:opacity-60">
                <Send size={16} /> {submitting ? 'Sending...' : 'Text Me a Demo'}
              </button>
              {error && <p className="text-red-300 text-sm">{error}</p>}
              <div className="text-slate-400 text-xs flex items-center gap-2"><Phone size={14}/> We’ll text a sample conversation. No spam.</div>
            </form>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-slate-200 mb-4">
              <div className="w-9 h-9 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center"><Bot size={18} /></div>
              <div className="font-semibold">Live Chat Preview</div>
            </div>
            <div className="space-y-3">
              {(transcript || [
                { role: 'visitor', text: form.sample_intent },
                { role: 'ai', text: "You're in the right place! I can help with that. May I have your address and a good time for an estimate?" },
                { role: 'visitor', text: 'Tomorrow afternoon works. 123 Main St.' },
                { role: 'ai', text: "Great. I've penciled you in for 2:30 PM. You'll get a confirmation by text." }
              ]).map((m, idx) => (
                <Bubble key={idx} role={m.role} text={m.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Demo
