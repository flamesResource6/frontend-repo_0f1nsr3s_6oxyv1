import { useMemo, useState } from 'react'

const formatCurrency = (n) => n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

function Calculator() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [values, setValues] = useState({
    monthly_inquiries: 150,
    connection_rate: 45,
    close_rate: 25,
    lifetime_value: 2200,
  })
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (key) => (e) => {
    const v = Number(e.target.value)
    setValues((s) => ({ ...s, [key]: v }))
  }

  const calcLocally = useMemo(() => {
    const curr_conn = values.monthly_inquiries * (values.connection_rate / 100)
    const curr_close = curr_conn * (values.close_rate / 100)
    const curr_rev = curr_close * values.lifetime_value
    const smart_conn_rate = Math.min(95, values.connection_rate + 20)
    const smart_close_rate = Math.min(85, values.close_rate + 5)
    const smart_conn = values.monthly_inquiries * (smart_conn_rate / 100)
    const smart_close = smart_conn * (smart_close_rate / 100)
    const smart_rev = smart_close * values.lifetime_value
    return {
      current_revenue: curr_rev,
      smart_revenue: smart_rev,
      lift: smart_rev - curr_rev,
    }
  }, [values])

  const onCalculate = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${baseUrl}/api/calculate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('Failed to calculate')
      const data = await res.json()
      setResult(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative bg-slate-900 py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Calculate Your Monthly Revenue Opportunity</h2>
            <p className="text-slate-300 mt-2">Adjust the sliders to see your current performance vs the Smart Site AI boost.</p>

            <div className="mt-8 space-y-6 bg-white/5 border border-white/10 rounded-2xl p-6">
              <div>
                <div className="flex justify-between text-sm text-slate-200 mb-2">
                  <span>Monthly Inbound Inquiries</span>
                  <span className="font-semibold">{values.monthly_inquiries}</span>
                </div>
                <input type="range" min="0" max="1000" value={values.monthly_inquiries} onChange={handleChange('monthly_inquiries')} className="w-full" />
              </div>
              <div>
                <div className="flex justify-between text-sm text-slate-200 mb-2">
                  <span>Current Connection Rate</span>
                  <span className="font-semibold">{values.connection_rate}%</span>
                </div>
                <input type="range" min="0" max="100" value={values.connection_rate} onChange={handleChange('connection_rate')} className="w-full" />
              </div>
              <div>
                <div className="flex justify-between text-sm text-slate-200 mb-2">
                  <span>Close Rate</span>
                  <span className="font-semibold">{values.close_rate}%</span>
                </div>
                <input type="range" min="0" max="100" value={values.close_rate} onChange={handleChange('close_rate')} className="w-full" />
              </div>
              <div>
                <div className="flex justify-between text-sm text-slate-200 mb-2">
                  <span>Customer Lifetime Value</span>
                  <span className="font-semibold">{formatCurrency(values.lifetime_value)}</span>
                </div>
                <input type="range" min="100" max="10000" step="50" value={values.lifetime_value} onChange={handleChange('lifetime_value')} className="w-full" />
              </div>

              <button onClick={onCalculate} disabled={loading} className="mt-2 inline-flex items-center justify-center rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-5 py-2.5 disabled:opacity-60">
                {loading ? 'Calculating...' : 'Calculate'}
              </button>
              {error && <p className="text-red-300 text-sm">{error}</p>}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Results</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="rounded-xl bg-slate-800/60 p-4">
                <div className="text-slate-300 text-sm">Current Monthly</div>
                <div className="text-2xl font-bold text-white mt-1">{formatCurrency(calcLocally.current_revenue)}</div>
              </div>
              <div className="rounded-xl bg-slate-800/60 p-4">
                <div className="text-slate-300 text-sm">With Smart Site AI</div>
                <div className="text-2xl font-bold text-white mt-1">{formatCurrency(calcLocally.smart_revenue)}</div>
              </div>
              <div className="rounded-xl bg-emerald-900/40 ring-1 ring-emerald-500/20 p-4">
                <div className="text-emerald-200 text-sm">Missed Revenue</div>
                <div className="text-2xl font-bold text-emerald-100 mt-1">{formatCurrency(calcLocally.lift)}</div>
              </div>
            </div>
            {result && (
              <div className="mt-6 text-slate-200 text-sm">
                <div>Server-simulated connection rate: <span className="font-semibold">{result.assumptions.smart_connection_rate}%</span></div>
                <div>Server-simulated close rate: <span className="font-semibold">{result.assumptions.smart_close_rate}%</span></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Calculator
