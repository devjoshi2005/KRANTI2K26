'use client'

import { useState, useEffect } from 'react'
import Preloader from '@/components/Preloader'
import AudioPlayer from '@/components/AudioPlayer'
import Navbar from '@/components/Navbar'
import Events from '@/components/Events'
import { Hero, About, AboutUs, Department, Timeline, Footer } from '@/components/Sections'
import MapBox from '@/components/MapBox'

// We import globals.css in layout, so style.css content is available globally.

export default function Home() {
  // null = haven't checked yet, false = show preloader, true = skip preloader
  const [loadingComplete, setLoadingComplete] = useState<boolean | null>(null)

  // Check sessionStorage before rendering anything
  useEffect(() => {
    const shouldSkip = sessionStorage.getItem('preloaderSeen') === '1'
    if (shouldSkip) {
      setLoadingComplete(true)
      // Scroll to events section if hash is present
      if (window.location.hash === '#events') {
        requestAnimationFrame(() => {
          document.getElementById('events')?.scrollIntoView({ behavior: 'auto' })
        })
      }
    } else {
      setLoadingComplete(false)
    }
  }, [])

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('preloaderSeen', '1')
    setLoadingComplete(true)
  }

  // While checking sessionStorage, show black screen (not the preloader)
  if (loadingComplete === null) {
    return <main className="min-h-screen bg-black" />
  }

  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden selection:bg-cyan-500 selection:text-white">
      {/* BackgroundSlideshow moved into Hero to limit video to hero section only */}
      <AudioPlayer />

      {!loadingComplete && <Preloader onComplete={handlePreloaderComplete} />}

      <div className={`relative z-10 transition-opacity duration-1000 ${loadingComplete ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <Hero />
        <About />
        <AboutUs />
        <Department />
        <Events />
        <Timeline />
        <MapBox />
        <Footer />

        {/* REALM INDICATOR from HTML */}
        <div id="realm-indicator" className="fixed bottom-8 left-8 z-50 flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300">
          <span className="realm-label font-body text-[10px] tracking-[4px] text-white/40">SECTOR:</span>
          <span className="realm-name font-heading text-xs tracking-[3px] text-gold transition-all duration-500">EVENT HORIZON</span>
        </div>

        {/* SCI-FI UI ELEMENTS from HTML */}
        <div className="scanner-overlay fixed top-0 left-0 w-full h-full pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,240,255,0.02)_50%)] bg-[length:100%_4px] z-[2]"></div>
        <div className="hud-corner hud-tl fixed top-0 left-0 w-[50px] h-[50px] border-t border-l border-white/20 m-5 pointer-events-none z-[100]"></div>
        <div className="hud-corner hud-tr fixed top-0 right-0 w-[50px] h-[50px] border-t border-r border-white/20 m-5 pointer-events-none z-[100]"></div>
        <div className="hud-corner hud-bl fixed bottom-0 left-0 w-[50px] h-[50px] border-b border-l border-white/20 m-5 pointer-events-none z-[100]"></div>
        <div className="hud-corner hud-br fixed bottom-0 right-0 w-[50px] h-[50px] border-b border-r border-white/20 m-5 pointer-events-none z-[100]"></div>
      </div>
    </main>
  )
}
