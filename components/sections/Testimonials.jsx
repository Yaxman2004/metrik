const testimonials = [
  {
    quote: "We replaced three separate tools with Metrik and cut our analytics spend by 60%. The AI alerts alone have saved us from two major incidents.",
    name: 'Sarah Chen',
    role: 'Head of Product',
    company: 'Harbour',
    initials: 'SC',
    color: 'bg-violet-600',
  },
  {
    quote: "I've used every analytics tool out there. Metrik is the first one my whole team actually opens every morning. The dashboards just make sense.",
    name: 'Marcus Webb',
    role: 'CTO',
    company: 'Draftly',
    initials: 'MW',
    color: 'bg-blue-600',
  },
  {
    quote: "The funnel analysis feature helped us find a drop-off we'd been missing for months. Fixed it in a day. Conversion went up 22% that week.",
    name: 'Priya Nair',
    role: 'Growth Lead',
    company: 'Fieldnotes',
    initials: 'PN',
    color: 'bg-emerald-600',
  },
  {
    quote: "Setup took 8 minutes. I connected Stripe and Postgres, built my first dashboard, and shared it with my team before my coffee was done.",
    name: 'Jake Torres',
    role: 'Founder',
    company: 'Paloma',
    initials: 'JT',
    color: 'bg-orange-600',
  },
  {
    quote: "Metrik's anomaly detection caught a payment processing bug at 2am before any customers complained. That's the kind of tool you don't turn off.",
    name: 'Elena Vasquez',
    role: 'Engineering Manager',
    company: 'Latchkey',
    initials: 'EV',
    color: 'bg-pink-600',
  },
  {
    quote: "Our investors now ask for our Metrik dashboard link instead of a slide deck. Real-time data builds more trust than any presentation ever could.",
    name: 'David Kim',
    role: 'CEO',
    company: 'Stackform',
    initials: 'DK',
    color: 'bg-teal-600',
  },
]

export default function Testimonials() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-violet-400 font-medium mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Loved by product teams
          </h2>
          <p className="text-slate-400 text-lg">Don't take our word for it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6 hover:border-violet-800/40 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-violet-400 text-xs">★</span>
                ))}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">"{t.quote}"</p>

              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
