import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-violet-800/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#7C3AED 1px, transparent 1px), linear-gradient(90deg, #7C3AED 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-violet-950/60 border border-violet-800/50 rounded-full px-4 py-1.5 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-xs text-violet-300 font-medium tracking-wide">Now with AI-powered anomaly detection</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
          Analytics your team
          <br />
          <span className="gradient-text">actually understands</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Metrik turns your raw data into real-time dashboards, AI insights, and
          alerts that help your team make faster, smarter decisions.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#"
            className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all duration-200 text-sm glow"
          >
            Start for free — no credit card
          </a>
          <a
            href="#"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-xl transition-all duration-200 text-sm"
          >
            See live demo
          </a>
        </div>

        {/* Social proof */}
        <p className="text-slate-500 text-sm mb-3">Trusted by teams at</p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
          {['Stripe', 'Vercel', 'Linear', 'Notion', 'Loom'].map((co) => (
            <span key={co} className="text-slate-300 font-semibold text-sm tracking-wide">{co}</span>
          ))}
        </div>

        {/* Dashboard mockup */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent z-10 pointer-events-none" />
          <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl overflow-hidden glow">
            {/* Mockup top bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E1E2E] bg-[#0D0D14]">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <div className="flex-1 mx-4 bg-[#1E1E2E] rounded-md h-5 text-center text-[10px] text-slate-600 flex items-center justify-center">
                app.metrik.io/dashboard
              </div>
            </div>

            {/* Mockup content */}
            <div className="p-6 grid grid-cols-4 gap-4">
              {/* Stat cards */}
              {[
                { label: 'Total Users', value: '84,291', change: '+12.4%', up: true },
                { label: 'MRR', value: '$24,810', change: '+8.1%', up: true },
                { label: 'Churn Rate', value: '2.3%', change: '-0.4%', up: false },
                { label: 'Avg Session', value: '4m 32s', change: '+0.8%', up: true },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#0D0D14] border border-[#1E1E2E] rounded-xl p-4">
                  <p className="text-xs text-slate-500 mb-2">{stat.label}</p>
                  <p className="text-xl font-bold text-white mb-1">{stat.value}</p>
                  <p className={`text-xs font-medium ${stat.up ? 'text-emerald-400' : 'text-red-400'}`}>{stat.change}</p>
                </div>
              ))}

              {/* Chart area */}
              <div className="col-span-3 bg-[#0D0D14] border border-[#1E1E2E] rounded-xl p-4">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-sm font-medium text-white">Revenue over time</p>
                  <div className="flex gap-2">
                    {['7d', '30d', '90d'].map((t) => (
                      <span key={t} className={`text-xs px-2 py-1 rounded ${t === '30d' ? 'bg-violet-600 text-white' : 'text-slate-500'}`}>{t}</span>
                    ))}
                  </div>
                </div>
                {/* Fake chart bars */}
                <div className="flex items-end gap-1 h-24">
                  {[40,55,45,60,75,65,80,70,85,72,90,88,76,95,82,88,92,78,85,96,82,90,88,95,100,92,98,94,88,96].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h}%`,
                        background: i >= 26 ? 'rgb(124,58,237)' : 'rgb(124,58,237,0.3)',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Mini pie */}
              <div className="bg-[#0D0D14] border border-[#1E1E2E] rounded-xl p-4">
                <p className="text-xs text-slate-500 mb-3">Traffic sources</p>
                <div className="flex flex-col gap-2">
                  {[
                    { label: 'Organic', pct: 48, color: 'bg-violet-500' },
                    { label: 'Paid', pct: 31, color: 'bg-violet-700' },
                    { label: 'Referral', pct: 21, color: 'bg-violet-900' },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                        <span>{s.label}</span><span>{s.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-[#1E1E2E] rounded-full">
                        <div className={`h-full rounded-full ${s.color}`} style={{ width: `${s.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
