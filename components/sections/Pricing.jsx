'use client'

import { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for side projects and early-stage products.',
    features: [
      '3 dashboards',
      'Up to 10k events/mo',
      '7-day data retention',
      '2 team members',
      'Email support',
    ],
    cta: 'Get started free',
    highlighted: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 49,
    yearlyPrice: 39,
    description: 'For growing teams who need more power and flexibility.',
    features: [
      'Unlimited dashboards',
      'Up to 1M events/mo',
      '12-month data retention',
      'Unlimited team members',
      'AI anomaly detection',
      'Funnel analysis',
      'Priority support',
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    yearlyPrice: null,
    description: 'Custom solutions for large-scale and compliance-heavy teams.',
    features: [
      'Unlimited everything',
      'Custom data retention',
      'SSO / SAML',
      'SLA guarantee',
      'Dedicated success manager',
      'Custom integrations',
    ],
    cta: 'Talk to sales',
    highlighted: false,
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(true)

  return (
    <section className="py-32 px-6 bg-[#0D0D14]" id="pricing">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-violet-400 font-medium mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-400 text-lg mb-8">Start free. Upgrade when you're ready.</p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-[#111118] border border-[#1E1E2E] rounded-xl p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                !yearly ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                yearly ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Yearly
              <span className={`text-xs px-1.5 py-0.5 rounded-md font-semibold ${yearly ? 'bg-violet-500 text-white' : 'bg-emerald-900 text-emerald-400'}`}>
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 flex flex-col ${
                plan.highlighted
                  ? 'bg-violet-950/40 border-2 border-violet-600 glow'
                  : 'bg-[#111118] border border-[#1E1E2E]'
              }`}
            >
              {plan.highlighted && (
                <div className="text-center mb-4">
                  <span className="text-xs bg-violet-600 text-white px-3 py-1 rounded-full font-medium tracking-wide">
                    Most popular
                  </span>
                </div>
              )}

              <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
              <p className="text-slate-500 text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                {plan.monthlyPrice === null ? (
                  <p className="text-4xl font-bold text-white">Custom</p>
                ) : plan.monthlyPrice === 0 ? (
                  <p className="text-4xl font-bold text-white">Free</p>
                ) : (
                  <div className="flex items-end gap-1">
                    <p className="text-4xl font-bold text-white">
                      ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </p>
                    <p className="text-slate-500 text-sm mb-1.5">/mo</p>
                  </div>
                )}
                {plan.monthlyPrice !== null && plan.monthlyPrice !== 0 && yearly && (
                  <p className="text-xs text-slate-500 mt-1">Billed annually</p>
                )}
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <span className="text-violet-400 text-xs flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-violet-600 hover:bg-violet-500 text-white'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
