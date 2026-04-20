'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Features', 'Pricing', 'Changelog', 'Docs']

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0A0A0F]/90 backdrop-blur-md border-b border-[#1E1E2E]' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex items-center justify-between h-16 w-full">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center">
              <div className="w-3 h-3 rounded-sm bg-white opacity-90" />
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">Metrik</span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {links.map((l) => (
              <a key={l} href="#" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                {l}
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-1.5">
              Sign in
            </a>
            <a href="#" className="text-sm bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium">
              Get started free
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-slate-400 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-slate-400 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-slate-400 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[#0A0A0F]/98 border-t border-[#1E1E2E] px-6 pb-6 flex flex-col gap-4 pt-4">
          {links.map((l) => (
            <a key={l} href="#" className="text-sm text-slate-400 hover:text-white transition-colors py-1">
              {l}
            </a>
          ))}
          <a href="#" className="mt-2 text-sm bg-violet-600 text-white px-4 py-3 rounded-lg text-center font-medium">
            Get started free
          </a>
        </div>
      </div>
    </nav>
  )
}
