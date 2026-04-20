export default function Footer() {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Status'],
    Developers: ['Documentation', 'API Reference', 'SDKs', 'Integrations', 'Open source'],
    Company: ['About', 'Blog', 'Careers', 'Press kit', 'Contact'],
    Legal: ['Privacy', 'Terms', 'Security', 'GDPR', 'Cookies'],
  }

  return (
    <>
      {/* CTA Section */}
      <section className="py-32 px-6 bg-[#0D0D14]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-violet-600/10 rounded-3xl blur-3xl" />
            <div className="relative bg-[#111118] border border-violet-800/30 rounded-3xl px-8 py-16">
              <p className="text-xs tracking-[0.3em] uppercase text-violet-400 font-medium mb-4">Get started today</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
                Know your product.<br />Grow with confidence.
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                Join thousands of teams using Metrik to understand their data and ship better products, faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  Talk to sales
                </a>
              </div>
              <p className="text-slate-600 text-xs mt-6">Free plan available · Setup in under 10 minutes · Cancel anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1E1E2E] px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">

            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-sm bg-white opacity-90" />
                </div>
                <span className="text-white font-semibold text-lg tracking-tight">Metrik</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Analytics for modern product teams.
              </p>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white text-sm font-medium mb-4">{category}</h4>
                <ul className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-slate-500 text-sm hover:text-slate-300 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-[#1E1E2E] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-xs">© {new Date().getFullYear()} Metrik, Inc. All rights reserved.</p>
            <p className="text-slate-700 text-xs">
              Designed & built by{' '}
              <a href="#" className="text-slate-500 hover:text-violet-400 transition-colors">your name here</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
