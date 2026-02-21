'use client'

import { useEffect, useState } from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Helper to merge classes
function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs))
}

const targetDate = new Date("2026-03-18T03:00:00Z").getTime() // March 18, 2026, 8:30:00 AM IST (3:00 AM UTC)

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
    const [hasMounted, setHasMounted] = useState(false)

    function calculateTimeLeft() {
        // We need to handle server-side rendering mismatch, so initially return 0 or calculate if client
        if (typeof window === 'undefined') {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }

        // Get current time in IST (UTC+5:30)
        const now = new Date()
        const utcTime = now.getTime() + (now.getTimezoneOffset() * 60 * 1000)
        const istTime = utcTime + (5.5 * 60 * 60 * 1000) // IST offset: 5 hours 30 minutes
        const difference = targetDate - istTime

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            }
        } else {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }
    }

    useEffect(() => {
        setHasMounted(true)
        // Initial calculation on mount to avoid hydration mismatch
        setTimeLeft(calculateTimeLeft())

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    if (!hasMounted) return null

    return (
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-12 perspective-[1000px] select-none">
            <HolographicUnit value={timeLeft.days} label="DAYS" type="heavy" />
            <HolographicUnit value={timeLeft.hours} label="HOURS" type="medium" />
            <HolographicUnit value={timeLeft.minutes} label="MINUTES" type="light" />
            <HolographicUnit value={timeLeft.seconds} label="SECONDS" type="fast" />
        </div>
    )
}

function HolographicUnit({ value, label, type }: { value: number; label: string; type: 'heavy' | 'medium' | 'light' | 'fast' }) {
    const formattedValue = value < 10 ? `0${value}` : value.toString()

    // Determine animation class based on type
    const sphereAnim = {
        heavy: 'sphere-heavy',
        medium: 'sphere-medium',
        light: 'sphere-light',
        fast: 'sphere-fast'
    }[type]

    return (
        <div className="flex flex-col items-center gap-3 sm:gap-6 group">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 flex items-center justify-center preserve-3d">

                {/* Core Sphere (Rotating) */}
                <div className={cn("absolute inset-0 rounded-full border border-cyan-500/30 shadow-[0_0_15px_rgba(0,240,255,0.2)]", sphereAnim)}>
                    {/* Inner wireframe lines for 3D effect */}
                    <div className="absolute inset-0 rounded-full border-t border-b border-cyan-400/20" style={{ transform: 'rotateX(45deg)' }}></div>
                    <div className="absolute inset-0 rounded-full border-l border-r border-cyan-400/20" style={{ transform: 'rotateY(45deg)' }}></div>
                </div>

                {/* Outer Static Shell (Glow) */}
                <div className="absolute inset-[-3px] sm:inset-[-5px] rounded-full border border-cyan-500/10 shadow-[0_0_15px_rgba(0,240,255,0.1)] group-hover:shadow-[0_0_50px_rgba(0,240,255,0.3)] transition-all duration-500"></div>

                {/* Orbital Ring */}
                <div className="absolute inset-[-10px] sm:inset-[-15px] rounded-full border border-cyan-500/10 opacity-60 orbit-ring" style={{ borderTopColor: 'transparent', borderBottomColor: 'transparent' }}></div>

                {/* Floating Particles */}
                <div className="absolute top-0 left-1/2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-cyan-400 rounded-full shadow-[0_0_5px_#00F0FF] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-0 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full shadow-[0_0_5px_#FFF] animate-pulse delay-75"></div>

                {/* The Number Display (Flat facing user) */}
                <div className="relative z-10 flex items-center justify-center w-full h-full backdrop-blur-[2px] rounded-full bg-black/20">
                    <span key={formattedValue} className="text-2xl sm:text-4xl md:text-5xl font-mono font-bold text-white drop-shadow-[0_0_10px_rgba(0,240,255,0.8)] animate-in slide-in-from-bottom-2 fade-in duration-300 animate-glow-burst">
                        {formattedValue}
                    </span>
                </div>

                {/* Ripple Effect Container */}
                <div key={`ripple-${formattedValue}`} className="absolute inset-0 rounded-full border border-cyan-500 animate-ripple"></div>
            </div>

            <span className="text-[8px] sm:text-[10px] md:text-xs tracking-[2px] sm:tracking-[4px] text-cyan-400/80 font-heading font-bold shadow-black drop-shadow-md">
                {label}
            </span>
        </div>

    )
}
