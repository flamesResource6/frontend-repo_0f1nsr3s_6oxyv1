import { useState } from 'react'
import { Calendar } from 'lucide-react'

function Consult() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [form, setForm] = useState({ name: '', phone: '', email: '', industry: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${baseUrl}/api/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'consultation' }),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('Thanks! We will reach out shortly to schedule your consultation.')
      setForm({ name: '', phone: '', email: '', industry: '' })
    } catch (e) {
      setStatus(`Error: ${e.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="consult" className="bg-slate-900 py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Schedule a Free Consultation</h2>
            <p className="text-slate-300 mt-2">See how a Smart Site can turn your traffic into booked jobs in 30 days.</p>
            <div className="mt-6 text-slate-300 text-sm flex items-center gap-2"><Calendar size={16}/> No contracts. Cancel anytime.</div>
          </div>
          <form onSubmit={onSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Name</label>
                <input name="name" required value={form.name} onChange={onChange} className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-3 py-2 text-white" placeholder="Jane Contractor" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Mobile Phone</label>
                <input name="phone" required value={form.phone} onChange={onChange} className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-3 py-2 text-white" placeholder="(555) 123-4567" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={onChange} className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-3 py-2 text-white" placeholder="you@company.com" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Industry</label>
              <select name="industry" value={form.industry} onChange={onChange} className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-3 py-2 text-white">
                <option value="">Select your trade</option>
                <option>Roofing</option>
                <option>Plumbing</option>
                <option>HVAC</option>
                <option>Electricians</option>
                <option>Remodeling</option>
                <option>Solar</option>
              </select>
            </div>
            <button disabled={loading} className="inline-flex items-center justify-center rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-5 py-2.5 disabled:opacity-60">
              {loading ? 'Submitting...' : 'Book My Free Consultation'}
            </button>
            {status && <p className="text-slate-200 text-sm">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Consult
