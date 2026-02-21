'use client';

import React, { useState } from 'react';
import Link from 'next/link';

/* ─── types ─── */
interface Round {
  title: string;
  desc: string;
}
interface Coordinator {
  name: string;
  contact: string;
  email?: string;
}
interface EventRulesPageProps {
  eventName: string;
  tagline: string;
  description: string;
  rounds: Round[];
  requirements: string[];
  coordinator?: Coordinator[];
  googleForm?: string;
  evaluationMetrics?: string[];
  metrics?: string[];
  prize?: { position: string; reward: string }[];
  duration?: string;
}

/* pre-computed star field */
const stars = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 13) % 100}%`,
  top: `${(i * 53 + 7) % 100}%`,
  delay: `${(i * 0.7) % 4}s`,
  size: i % 3 === 0 ? 2 : 1,
}));

/* pre-computed falling/shooting stars — 28 stars, repeating every ~5s with random stagger */
const fallingStars = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 11 + 3) % 55}%`,            // spread across left ~55% of screen
  top: `${(i * 7 + 1) % 30}%`,               // start within top ~30%
  delay: `${(i * 0.18) % 5}s`,               // stagger within each 5s cycle
  duration: `${1.5 + (i * 0.35) % 2}s`,      // 1.5s–3.5s travel
  height: 50 + (i * 11) % 60,                // 50–110px tail length
}));

/* ─── component ─── */
const EventRulesPage: React.FC<EventRulesPageProps> = ({
  eventName,
  tagline,
  description,
  rounds,
  requirements,
  coordinator,
  googleForm,
  evaluationMetrics,
  metrics,
  prize,
  duration,
}) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      {/* ── ambient glow ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-60 top-0 h-[700px] w-[700px] rounded-full opacity-[0.06]" style={{ background: 'radial-gradient(circle, #00F0FF 0%, transparent 70%)' }} />
        <div className="absolute -right-40 bottom-0 h-[550px] w-[550px] rounded-full opacity-[0.05]" style={{ background: 'radial-gradient(circle, #00F0FF 0%, transparent 70%)' }} />
      </div>

      {/* ── star field ── */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-25">
        {stars.map(s => (
          <div
            key={s.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{ left: s.left, top: s.top, animationDelay: s.delay, width: s.size, height: s.size }}
          />
        ))}
      </div>

      {/* ── falling stars ── */}
      <div className="pointer-events-none fixed inset-0 z-[3]">
        {fallingStars.map(s => (
          <div
            key={s.id}
            className="falling-star"
            style={{
              left: s.left,
              top: s.top,
              animationDelay: s.delay,
              animationDuration: s.duration,
              height: s.height,
            }}
          />
        ))}
      </div>

      {/* ── scan lines ── */}
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,240,255,0.015)_50%)] bg-[length:100%_4px]" />

      {/* ── HUD corners ── */}
      <div className="pointer-events-none fixed inset-0 z-[2]">
        <div className="absolute left-5 top-5 h-[50px] w-[50px] border-l border-t border-white/20" />
        <div className="absolute right-5 top-5 h-[50px] w-[50px] border-r border-t border-white/20" />
        <div className="absolute bottom-5 left-5 h-[50px] w-[50px] border-b border-l border-white/20" />
        <div className="absolute bottom-5 right-5 h-[50px] w-[50px] border-b border-r border-white/20" />
      </div>

      {/* ════════════════════════ CONTENT ════════════════════════ */}
      <div className="relative z-10 py-12 md:py-16">
        <div className="section-container mx-auto max-w-[1400px] px-8">

          {/* ── BACK BUTTON ── */}
          <Link
            href="/#events"
            scroll={false}
            onClick={(e) => { e.preventDefault(); sessionStorage.setItem('preloaderSeen', '1'); window.location.href = '/#events'; }}
            className="group relative mb-10 inline-flex items-center gap-3 bg-gradient-to-br from-white via-white to-white/95 px-6 py-3.5 font-heading text-[11px] tracking-[4px] text-black uppercase shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] sm:px-8 sm:py-4 sm:text-xs"
          >
            <span className="text-base text-black transition-transform duration-300 group-hover:-translate-x-1">←</span>
            <span className="font-bold text-black">Back To Events</span>
          <br></br>
          </Link>

          {/* ════════ EVENT HERO ════════ */}
          <header className="relative mb-16 border border-white/[0.07] bg-[#08080f]/60 p-8 sm:p-12 lg:p-16">
            {/* Frame corners */}
            <div className="absolute -left-[1px] -top-[1px] h-8 w-8 border-l-2 border-t-2 border-[#00F0FF]" />
            <div className="absolute -right-[1px] -top-[1px] h-8 w-8 border-r-2 border-t-2 border-[#00F0FF]" />
            <div className="absolute -bottom-[1px] -left-[1px] h-8 w-8 border-b-2 border-l-2 border-[#00F0FF]" />
            <div className="absolute -bottom-[1px] -right-[1px] h-8 w-8 border-b-2 border-r-2 border-[#00F0FF]" />

            <div className="text-center">
              {/* Pre-heading */}
              <p className="mb-4 font-mono text-[10px] tracking-[8px] text-[#00F0FF]/60 sm:text-[11px]">
                ⟨MISSION BRIEFING — KRANTI 2K26⟩
              </p>
              {/* Event name — Hero-grade typography */}
              <h1 className="font-title text-[clamp(24px,7vw,36px)] font-extrabold leading-[0.95] tracking-[4px] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/0 drop-shadow-[0_0_40px_rgba(0,240,255,0.4)] sm:text-[52px] sm:tracking-[10px] lg:text-[68px] lg:tracking-[16px]">
                {eventName}
              </h1>

              {/* Divider */}
              <div className="mx-auto mt-5 flex items-center justify-center gap-4">
                <div className="h-[3px] w-8 bg-gradient-to-r from-transparent to-[#00F0FF]/50 sm:w-14" />
                <div className="h-2 w-2 rotate-45 border border-[#00F0FF]/50" />
                <div className="h-[3px] w-8 bg-gradient-to-l from-transparent to-[#00F0FF]/50 sm:w-14" />
              </div>
              <br></br>

              {/* Tagline */}
              <p className="mt-4 font-accent text-sm italic tracking-[2px] text-white/65 sm:text-base sm:tracking-[3px]">
                &quot;{tagline}&quot;
              </p>

              {/* Quick stats */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                {duration && (
                  <span className="border border-[#00F0FF]/40 bg-[#00F0FF]/8 px-4 py-2 font-heading text-[10px] tracking-[3px] text-[#00F0FF] uppercase sm:text-[11px]">
                    {duration}
                  </span>
                )}
                <span className="border border-white/15 bg-white/[0.05] px-4 py-2 font-heading text-[10px] tracking-[3px] text-white/60 uppercase sm:text-[11px]">
                  {rounds.length} ROUND{rounds.length > 1 ? 'S' : ''}
                </span>
                {prize && prize.length > 0 && (
                  <span className="border border-[#00F0FF]/35 bg-[#00F0FF]/8 px-4 py-2 font-heading text-[10px] tracking-[3px] text-[#00F0FF]/90 uppercase sm:text-[11px]">
                    {prize.length} PRIZE{prize.length > 1 ? 'S' : ''}
                  </span>
                )}
              </div>
            </div>
          </header>

          {/* ════════ MISSION OVERVIEW ════════ */}
          <Panel label="SYS:// OVERVIEW" title="MISSION OVERVIEW">
            <p className="font-body text-[15px] leading-[2] text-[#c8d6e5] sm:text-base sm:leading-[2.1] lg:text-[17px] lg:leading-[2.2]">{description}</p>
          </Panel>

          {/* spacer */}
          <div className="h-8 sm:h-10 lg:h-12" />

          {/* ════════ ROUNDS / PHASES ════════ */}
          <Panel label="SYS:// PHASES" title="MISSION PHASES">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {rounds.map((round, i) => (
                <RoundCard key={i} round={round} index={i} />
              ))}
            </div>
          </Panel>

          <div className="h-8 sm:h-10 lg:h-12" />

          {/* ════════ REQUIREMENTS ════════ */}
          <Panel label="SYS:// REQS" title="REQUIREMENTS">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {requirements.map((req, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 border border-white/[0.06] bg-[#0c0c14] px-4 py-3"
                >
                  <span className="mt-0.5 font-mono text-[10px] text-[#00F0FF]/50">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-body text-[13px] leading-relaxed text-[#b0bec5] sm:text-sm">{req}</span>
                </div>
              ))}
            </div>
          </Panel>

          {/* spacer */}
          <div className="h-8 sm:h-10 lg:h-12" />

          {/* ════════ EVALUATION METRICS ════════ */}
          {evaluationMetrics && evaluationMetrics.length > 0 && (
            <Panel label="SYS:// EVAL" title="EVALUATION METRICS">
              <div className="flex flex-wrap gap-2.5">
                {evaluationMetrics.map((m, i) => (
                  <span key={i} className="border border-[#00F0FF]/25 bg-[#00F0FF]/5 px-4 py-2 font-heading text-[9px] tracking-[3px] text-[#00F0FF]/80 uppercase sm:text-[10px]">
                    {m}
                  </span>
                ))}
              </div>
            </Panel>
          )}

          {/* spacer */}
          <div className="h-8 sm:h-10 lg:h-12" />

          {/* ════════ ASSESSMENT METRICS ════════ */}
          {metrics && metrics.length > 0 && (
            <Panel label="SYS:// METRICS" title="ASSESSMENT METRICS">
              <div className="flex flex-wrap gap-2.5">
                {metrics.map((m, i) => (
                  <span key={i} className="border border-[#00F0FF]/25 bg-[#00F0FF]/5 px-4 py-2 font-heading text-[9px] tracking-[3px] text-[#00F0FF]/80 uppercase sm:text-[10px]">
                    {m}
                  </span>
                ))}
              </div>
            </Panel>
          )}

          {/* spacer */}
          <div className="h-8 sm:h-10 lg:h-12" />

          {/* ════════ PRIZES ════════ */}
          {prize && prize.length > 0 && (
            <Panel label="SYS:// REWARDS" title="PRIZE POOL">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {prize.map((p, i) => (
                  <div key={i} className="border border-white/[0.06] bg-[#0c0c14] p-5 text-center">
                    <p className="mb-1 font-heading text-[10px] tracking-[3px] text-white/40 uppercase">{p.position}</p>
                    <p className="font-title text-xl font-bold tracking-[2px] text-[#00F0FF] sm:text-2xl">{p.reward}</p>
                  </div>
                ))}
              </div>
            </Panel>
          )}

          {/* spacer */}
          <div className="h-8 sm:h-10 lg:h-12" />

          {/* ════════ COORDINATORS ════════ */}
          {coordinator && coordinator.length > 0 && (
            <Panel label="SYS:// TEAM" title="COORDINATORS">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {coordinator.map((person, i) => (
                  <div key={`${person.name}-${i}`} className="border border-white/[0.06] bg-[#0c0c14] p-4 text-center sm:p-5">
                    <p className="font-heading text-sm tracking-[3px] text-white uppercase sm:text-base">{person.name}</p>
                    <p className="mt-1 font-mono text-xs text-white/50">{person.contact}</p>
                    {person.email && <p className="mt-1 break-all font-mono text-xs text-[#00F0FF]/60">{person.email}</p>}
                  </div>
                ))}
              </div>
            </Panel>
          )}

          {/* spacer */}
          <div className="h-10 sm:h-14" />

          {/* ════════ REGISTRATION CTA ════════ */}
          <div className="relative border border-[#00F0FF]/20 bg-[#08080f]/60 p-8 text-center sm:p-12">
            {/* Frame corners */}
            <div className="absolute -left-[1px] -top-[1px] h-6 w-6 border-l-2 border-t-2 border-[#00F0FF]" />
            <div className="absolute -right-[1px] -top-[1px] h-6 w-6 border-r-2 border-t-2 border-[#00F0FF]" />
            <div className="absolute -bottom-[1px] -left-[1px] h-6 w-6 border-b-2 border-l-2 border-[#00F0FF]" />
            <div className="absolute -bottom-[1px] -right-[1px] h-6 w-6 border-b-2 border-r-2 border-[#00F0FF]" />

            <p className="mb-2 font-mono text-[9px] tracking-[5px] text-[#00F0FF]/35">⟨ ENLISTMENT PORTAL ⟩</p>
            <h2 className="font-title text-xl font-bold tracking-[3px] text-white sm:text-3xl sm:tracking-[8px]">
              JOIN THE MISSION
            </h2>
            <p className="mx-auto mt-3 max-w-[500px] font-body text-[13px] tracking-[1px] text-[#b0bec5] sm:text-sm">
              Secure your position in this sector. Registration is open.
            </p>

            {googleForm ? (
              <a
                href={googleForm}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-[#dc2626] via-[#ef4444] to-[#dc2626] px-10 py-4 font-heading text-[11px] tracking-[5px] text-white uppercase shadow-[0_0_35px_rgba(220,38,38,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_55px_rgba(220,38,38,0.6)] sm:px-12 sm:py-5 sm:text-xs"
              >
                {/* HUD corners */}
                <div className="absolute -left-[1px] -top-[1px] h-3 w-3 border-l-2 border-t-2 border-white/40" />
                <div className="absolute -right-[1px] -top-[1px] h-3 w-3 border-r-2 border-t-2 border-white/40" />
                <div className="absolute -bottom-[1px] -left-[1px] h-3 w-3 border-b-2 border-l-2 border-white/40" />
                <div className="absolute -bottom-[1px] -right-[1px] h-3 w-3 border-b-2 border-r-2 border-white/40" />
                {/* pulse ring */}
                <span className="absolute inset-0 animate-pulse rounded-none border-2 border-red-500/20" />
                <span className="font-bold">REGISTER NOW</span>
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">⟶</span>
              </a>
            ) : (
              <div className="group relative mt-8 inline-flex items-center gap-3 bg-[#dc2626] px-10 py-4 font-heading text-[11px] tracking-[5px] uppercase shadow-[0_0_30px_rgba(220,38,38,0.4)] sm:px-12 sm:py-5 sm:text-xs">
                <span className="animate-gold-shine font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d4a843] via-[#f5e6a3] to-[#d4a843] bg-[length:200%_100%]">REGISTRATION OPENING SOON</span>
              </div>
            )}
          </div>

          {/* ════════ FOOTER BAR ════════ */}
          <div className="mt-12 flex flex-col items-center gap-4 sm:mt-14">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-white/10 sm:w-16" />
              <div className="h-1.5 w-1.5 rotate-45 border border-white/15" />
              <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-white/10 sm:w-16" />
            </div>
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
              <span className="font-mono text-[8px] tracking-[5px] text-white/25 sm:text-[9px]">KRANTI 2K26</span>
              <span className="hidden h-3 w-[1px] bg-white/15 sm:block" />
              <span className="font-mono text-[8px] tracking-[4px] text-white/15 sm:text-[9px]">MSEC — DEPT OF CSE</span>
              <span className="hidden h-3 w-[1px] bg-white/15 sm:block" />
              <span className="font-mono text-[8px] tracking-[4px] text-[#00F0FF]/25 sm:text-[9px]">{eventName.toUpperCase()}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-white/10 sm:w-16" />
              <div className="h-1.5 w-1.5 rotate-45 border border-white/15" />
              <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-white/10 sm:w-16" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

/* ────────────────────────────────────────────────────
   RoundCard — expandable round card with Read More / Less
   ──────────────────────────────────────────────────── */
const TRUNCATE_LEN = 180;

function RoundCard({ round, index }: { round: Round; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const needsTruncation = round.desc.length > TRUNCATE_LEN;
  const displayText = !expanded && needsTruncation
    ? round.desc.slice(0, TRUNCATE_LEN).trimEnd() + '…'
    : round.desc;

  return (
    <div className="group relative border border-white/[0.06] bg-[#0c0c14] p-5 transition-all duration-400 hover:border-[#00F0FF]/30 sm:p-6">
      {/* phase number marker */}
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center border border-[#00F0FF]/40 bg-[#00F0FF]/10 font-mono text-[11px] font-bold text-[#00F0FF]">
          {String(index + 1).padStart(2, '0')}
        </div>
        <h3 className="font-heading text-sm tracking-[3px] text-white uppercase sm:text-base">{round.title}</h3>
      </div>
      <div className="h-1" />
      <p className="whitespace-pre-line font-body text-[13px] leading-[2] text-[#b0bec5] sm:text-sm sm:leading-[2.1] lg:text-[15px]">
        {displayText}
      </p>
      {needsTruncation && (
        <button
          onClick={() => setExpanded(prev => !prev)}
          className="mt-3 inline-flex items-center gap-1.5 font-heading text-[10px] tracking-[3px] text-[#00F0FF] uppercase transition-colors duration-200 hover:text-[#00F0FF]/70 sm:text-[11px]"
        >
          <span>{expanded ? '▴ Read Less' : '▾ Read More'}</span>
        </button>
      )}
      {/* bottom accent */}
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#00F0FF]/20 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
    </div>
  );
}

/* ────────────────────────────────────────────────────
   Panel — reusable section container matching site DNA
   ──────────────────────────────────────────────────── */
function Panel({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <section className="relative border border-white/[0.07] bg-[#08080f]/60 p-6 backdrop-blur-sm sm:p-8 lg:p-10">
      {/* Tiny top-left label */}
      <p className="mb-4 font-mono text-[8px] tracking-[4px] text-[#00F0FF]/30">{label}</p>
      <h2 className="mb-7 font-heading text-lg tracking-[4px] text-white uppercase sm:text-xl lg:text-[22px]">{title}</h2>
      {children}
    </section>
  );
}

export default EventRulesPage;
