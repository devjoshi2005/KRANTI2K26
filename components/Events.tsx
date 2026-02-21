'use client'

import { useMemo, useState, useRef } from 'react'
import Link from 'next/link'

/* ─── static data ─── */
type Event = {
  id: string
  category: 'tech' | 'nontech'
  title: string
  subtitle: string
  tagline: string
  blurb: string
  bgClass: string
  isFlagship?: boolean
}

const EVENTS: Event[] = [
  {
    id: 'coderid', category: 'tech', title: 'C0DE R∑D', subtitle: 'Cybersecurity Challenge',
    tagline: 'Hack, Defend & Dominate', bgClass: 'coderid-bg', isFlagship: true,
    blurb: 'Deep in the encrypted nebulae, a distress signal echoes. Breach firewalls through CTF puzzles, decode cryptographic relics, and survive a rapid-fire viva .',
  },
  {
    id: 'queryx', category: 'tech', title: 'QUERY X', subtitle: 'Algorithmic Problem Solving',
    tagline: 'Optimise, Query & Conquer', bgClass: 'harmonics-bg',
    blurb: 'The starship\'s database has scattered across dimensions. Crack a technical crossword in the first warp,then investigate a real-world database using SQL.',
  },
  {
    id: 'quantumveil', category: 'tech', title: 'QUANTUM VEIL', subtitle: 'Quantum Computing Workshop',
    tagline: 'Explore Quantum Algorithms', bgClass: 'paper-bg',
    blurb: 'Behind a veil of encrypted signals lies a hidden layer of logic. Decode patterns,reconstruct code,and execute across 2 rounds — Clue Nexus and Shadow Code.',
  },
  {
    id: 'logicrelay', category: 'tech', title: 'LOGIC RELAY', subtitle: 'Puzzle & Coding Relay',
    tagline: 'Solve, Code & Proceed', bgClass: 'escape-bg',
    blurb: 'A relay race across the logic hyperway — sprint through analytical puzzles in Round 1,and swap stations to debug programs under pressure in the Debug Dash.',
  },
  {
    id: 'novanataka', category: 'nontech', title: 'NOVA NATAKA', subtitle: 'Theatre & Performance',
    tagline: 'Storytelling & Stagecraft', bgClass: 'chronobid-bg',
    blurb: 'A supernova of expression erupts on stage. In Round 1, transmit the unsaid through actions and lip movements alone. Survive, and Stage Storm awaits.',
  },
  {
    id: 'logolock', category: 'nontech', title: 'LOGO LOCK', subtitle: 'Brand & Design Challenge',
    tagline: 'Identify, Redesign & Pitch', bgClass: 'lyric-bg',
    blurb: 'Galactic brands have scattered their insignias across star systems. Lock onto them in the Logo Reflex Challenge, then prove your design intuition',
  },
  {
    id: 'spectra', category: 'nontech', title: 'SPECTRA', subtitle: 'Visual Storytelling',
    tagline: 'Colours, Frames & Narratives', bgClass: 'pictoword-bg',
    blurb: 'The cosmos speaks in light and sound. Identify iconic visual frames before time collapses in Frame to Fame, then react to audio and seize the artifact',
  },
  {
    id: 'stellarmetaverse', category: 'nontech', title: 'STELLAR METAVERSE', subtitle: 'Immersive Experience',
    tagline: 'Design Worlds & Realities', bgClass: 'stellar-bg',
    blurb: 'Step beyond the event horizon into a realm where prediction meets creation. Decode visual anomalies in Virtual Vortex, then unleash rapid-fire originality.',
  },
]

const FILTERS = [
  { key: 'all'     as const, label: 'ALL SECTORS',    color: 'text-[#00F0FF]' },
  { key: 'tech'    as const, label: 'TECHNICAL',       color: 'text-[#00F0FF]' },
  { key: 'nontech' as const, label: 'NON-TECHNICAL',   color: 'text-[#a78bfa]' },
]

/* ─── component ─── */
export default function Events() {
  const [filter, setFilter] = useState<'all' | 'tech' | 'nontech'>('all')
  const sectionRef = useRef<HTMLElement>(null)

  const visible = useMemo(() => {
    if (filter === 'all') return EVENTS
    return EVENTS.filter(e => e.category === filter)
  }, [filter])

  return (
    <section
      ref={sectionRef}
      id="events"
      className="relative min-h-screen overflow-hidden py-12 md:py-16"
      style={{ background: 'linear-gradient(180deg, #050510 0%, #000 30%, #050510 100%)' }}
    >
      {/* ── backward compat anchor ── */}
      <div id="ops" className="absolute -top-28" aria-hidden="true" />

      {/* ── ambient glow orbs ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full opacity-[0.07]" style={{ background: 'radial-gradient(circle, #00F0FF 0%, transparent 70%)' }} />
        <div className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full opacity-[0.06]" style={{ background: 'radial-gradient(circle, #00F0FF 0%, transparent 70%)' }} />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.04]" style={{ background: 'radial-gradient(circle, #fff 0%, transparent 60%)' }} />
      </div>

      {/* ── scan-line overlay ── */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,240,255,0.015)_50%)] bg-[length:100%_4px]" />

      {/* ── content ── */}
      <div className="section-container relative z-10 mx-auto max-w-[1400px] px-8">

        {/* ════════ HEADER ════════ */}
        <header className="relative mb-12 text-center">
          {/* NAV decorations */}
          <div className="hidden xl:flex absolute left-0 top-1/2 -translate-y-1/2 items-center gap-2">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#00F0FF]/40" />
            <span className="font-mono text-[9px] tracking-[5px] text-[#00F0FF]/30">SYS:// 01</span>
          </div>
          <div className="hidden xl:flex absolute right-0 top-1/2 -translate-y-1/2 items-center gap-2">
            <span className="font-mono text-[9px] tracking-[5px] text-[#00F0FF]/30">SYS:// 08</span>
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#00F0FF]/40" />
          </div>

          {/* Pre-heading */}
          <p className="mb-5 font-mono text-[10px] tracking-[6px] text-[#00F0FF]/50 uppercase sm:text-xs">
            ⟨ KRANTI 2K26 — EVENT SECTORS ⟩
          </p>

          {/* Main heading — same DNA as Hero title */}
          <h2 className="font-title text-[clamp(28px,8vw,36px)] font-extrabold leading-[0.95] tracking-[3px] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/0 drop-shadow-[0_0_40px_rgba(0,240,255,0.4)] sm:text-[56px] sm:tracking-[12px] lg:text-[72px] lg:tracking-[18px]">
            MISSION EVENTS
          </h2>
        </header>
        {/* ── Divider accent ── */}
        <div className="mx-auto mb-8 flex items-center justify-center gap-4">
          <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#00F0FF]/60 sm:w-16" />
          <div className="h-2 w-2 rotate-45 border border-[#00F0FF]/60" />
          <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-[#00F0FF]/60 sm:w-16" />
        </div>
        <br></br>

        {/* ── Sub-text ── */}
        <p className="mb-10 text-center font-body text-[11px] tracking-[4px] text-white/40 uppercase sm:text-xs sm:tracking-[6px]">
          Select your sector &bull; Enter the arena
        </p>
        <br></br>

        {/* ════════ FILTER BAR ════════ */}
        <div className="mb-12 sm:mb-16 flex justify-center">
          <div className="relative inline-flex items-center gap-1.5 rounded-sm border border-white/15 bg-gradient-to-br from-white/10 via-white/[0.04] to-black/30 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-lg sm:gap-2.5 sm:p-2.5">

            {FILTERS.map(f => {
              const active = filter === f.key
              return (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`
                    relative w-[105px] h-[38px] sm:w-[145px] sm:h-[44px] flex items-center justify-center font-heading text-[10px] tracking-[3px] uppercase transition-all duration-400 sm:text-[11px] sm:tracking-[4px]
                    ${active
                      ? 'bg-white font-bold shadow-[0_0_25px_rgba(255,255,255,0.25),0_2px_8px_rgba(255,255,255,0.15)]'
                      : 'text-white/50 hover:text-white/80 hover:bg-white/[0.06] border border-transparent hover:border-white/10'
                    }
                  `}
                >
                  {/* Active top accent line */}
                  {active && <span className="absolute -top-[1px] left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent" />}
                  <span className={active ? 'animate-filter-shine' : ''}>{f.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        <br></br>

        {/* ════════ GRID FRAME ════════ */}
        <div className="relative border border-white/[0.07] bg-[#08080f]/60 p-4 backdrop-blur-sm sm:p-6 lg:p-8">
          {/* Frame corners */}
          <div className="absolute -left-[1px] -top-[1px] h-6 w-6 border-l-2 border-t-2 border-[#00F0FF]" />
          <div className="absolute -right-[1px] -top-[1px] h-6 w-6 border-r-2 border-t-2 border-[#00F0FF]" />
          <div className="absolute -bottom-[1px] -left-[1px] h-6 w-6 border-b-2 border-l-2 border-[#00F0FF]" />
          <div className="absolute -bottom-[1px] -right-[1px] h-6 w-6 border-b-2 border-r-2 border-[#00F0FF]" />

          {/* Top bar */}
          <div className="mb-8 flex items-center justify-between border-b border-white/[0.06] pb-4">
            <p className="font-mono text-[9px] tracking-[4px] text-[#00F0FF]/40">SECTOR GRID // ACTIVE</p>
            <p className="font-mono text-[9px] tracking-[4px] text-white/30">{visible.length} MODULE{visible.length !== 1 ? 'S' : ''} ONLINE</p>
          </div>
        <br></br>

          {/* ════════ CARDS ════════ */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 sm:gap-7 lg:gap-8">
            {visible.map((event) => (
              <Link
                key={event.id}
                href={`/${event.id}`}
                className="group relative flex min-h-[440px] flex-col overflow-hidden border border-white/[0.08] bg-[#0c0c14] transition-all duration-500 hover:border-[#00F0FF]/50 hover:shadow-[0_0_40px_rgba(0,240,255,0.12)] sm:min-h-[480px]"
              >
                {/* Top glow bar on hover */}
                <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10" />

                {/* ── IMAGE BANNER ── */}
                <div className={`relative h-44 sm:h-48 ${event.bgClass} bg-cover bg-center`}>
                  {/* gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c14] via-black/50 to-transparent" />
                  {/* scan line on image */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,240,255,0.03)_50%)] bg-[length:100%_4px]" />
                  {/* badges */}
                  <div className="absolute left-3 top-3 z-10 flex flex-col gap-1.5">
                    <span className={`
                      border px-2.5 py-1 font-heading text-[8px] tracking-[2px] uppercase backdrop-blur-sm
                      ${event.category === 'tech'
                        ? 'border-[#00F0FF]/40 bg-black/60 text-[#00F0FF]'
                        : 'border-[#a78bfa]/40 bg-black/60 text-[#a78bfa]'
                      }
                    `}>
                      {event.category === 'tech' ? 'TECHNICAL' : 'NON-TECHNICAL'}
                    </span>
                    {event.isFlagship && (
                      <span className="border border-[#facc15]/40 bg-black/60 px-2.5 py-1 font-heading text-[8px] tracking-[2px] text-[#facc15] uppercase backdrop-blur-sm">
                        ★ FLAGSHIP
                      </span>
                    )}
                  </div>
                </div>

                {/* ── Card text content ── */}
                <div className="relative flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6 sm:pb-8 sm:pt-6">
                  {/* Title */}
                  <h3 className="mb-3 font-title text-lg font-bold tracking-[15px] text-white transition-colors duration-300 group-hover:text-[#00F0FF] sm:text-xl sm:tracking-[12px]">
                    {event.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="mb-3 font-body text-[18px] leading-relaxed text-[#b0bec5] sm:text-sm">
                    {event.subtitle}
                  </p>

                  {/* Tagline */}
                  <p className="mb-3 font-mono text-[15px] italic tracking-[1.5px] text-[lightblue] ">
                    &quot;{event.tagline}&quot;
                  </p>
                  <br></br>
                  {/* Mission Blurb */}
                  <p className="mb-4 font-heading text-[8.5px] font-extrabold leading-[1.8] tracking-[0.5px] text-[#f0f0f0] line-clamp-5 sm:text-[9px]">
                    {event.blurb}
                  </p>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Bottom CTA strip */}
                  <div className="mt-5 flex items-center justify-center">
                    <span className="relative inline-flex items-center gap-2 bg-gradient-to-r from-white via-white/95 to-white/90 px-6 py-3 font-heading text-[10px] tracking-[4px] text-black uppercase transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.08)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] group-hover:from-white group-hover:to-white sm:px-7 sm:py-3.5 sm:text-[11px]">
                      INITIALIZE
                      <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">⟶</span>
                    </span>
                  </div>
                </div>

                {/* Bottom glow bar on hover */}
                <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#00F0FF]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>

        {/* ════════ BOTTOM DECORATION ════════ */}
        <div className="mt-14 flex items-center justify-center gap-4">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-white/10" />
          <p className="font-mono text-[8px] tracking-[5px] text-white/20">END TRANSMISSION</p>
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-white/10" />
        </div>
      </div>
    </section>
  )
}
