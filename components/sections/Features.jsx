const features = [
  {
    icon: '▲',
    title: 'Real-time dashboards',
    description: 'See your data update live — no refreshing, no delays. Every metric streams in as it happens so your team is always working with the freshest numbers.',
  },
  {
    icon: '◆',
    title: 'AI anomaly detection',
    description: 'Metrik watches your data 24/7 and alerts you the moment something unusual happens — before your customers notice and before it becomes a crisis.',
  },
  {
    icon: '●',
    title: 'Custom dashboards',
    description: 'Drag, drop, and arrange the metrics that matter to your team. Build unlimited dashboards for different teams, clients, or use cases in minutes.',
  },
  {
    icon: '■',
    title: 'Funnel analysis',
    description: 'See exactly where users drop off in your product flows. Identify friction points and test improvements with built-in A/B split reporting.',
  },
  {
    icon: '▼',
    title: 'Team collaboration',
    description: 'Share dashboards, leave comments on data points, and set up alerts for your whole team. Everyone stays aligned without a single status meeting.',
  },
  {
    icon: '◉',
    title: 'One-click integrations',
    description: 'Connect Stripe, Segment, Postgres, Mixpanel, and 40+ other tools in one click. Your data lives in one place — no more tab switching.',
  },
]

export default function Features() {
  return (
    <section className="py-32 px-6" id="features">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-violet-400 font-medium mb-4">Everything you need</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Built for teams who move fast
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Every feature in Metrik was designed to reduce the time between
            "something happened" and "we understand what happened."
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6 hover:border-violet-800/50 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-950 border border-violet-800/40 flex items-center justify-center mb-4 text-violet-400 text-sm group-hover:bg-violet-900/50 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
