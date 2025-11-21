import Hero from './components/Hero'
import Calculator from './components/Calculator'
import Features from './components/Features'
import Industries from './components/Industries'
import Process from './components/Process'
import CaseStudy from './components/CaseStudy'
import Demo from './components/Demo'
import Consult from './components/Consult'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/50 border-b border-white/10">
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="font-semibold tracking-tight">Contractor Smart Site</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <a href="#features" className="hover:text-white">Smart Websites</a>
            <a href="#industries" className="hover:text-white">Industries</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#consult" className="hover:text-white">Contact</a>
          </nav>
          <a href="#consult" className="inline-flex items-center justify-center rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-3 py-1.5 text-sm">Free Consultation</a>
        </div>
      </header>

      {/* Sections */}
      <Hero />
      <div id="features"><Features /></div>
      <Calculator />
      <Demo />
      <div id="industries"><Industries /></div>
      <div id="process"><Process /></div>
      <CaseStudy />
      <Consult />

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/10 py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-slate-300">
          <div>
            <div className="font-semibold text-white">Contractor Smart Site</div>
            <p className="text-sm mt-2">AI live chat, SMS forms, and SEO built to turn visitors into booked jobs.</p>
          </div>
          <div>
            <div className="font-semibold text-white mb-2">Pages</div>
            <ul className="space-y-1 text-sm">
              <li><a href="#">Home</a></li>
              <li><a href="#features">Smart Websites</a></li>
              <li><a href="#industries">Local SEO</a></li>
              <li><a href="#process">Google & Social Ads</a></li>
              <li><a href="#consult">Contact</a></li>
              <li><a href="/test" className="text-indigo-300">System Test</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white mb-2">Contact</div>
            <ul className="space-y-1 text-sm">
              <li>Phone: (555) 555-5555</li>
              <li>Email: hello@contractorsmartsite.ai</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
