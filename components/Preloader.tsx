'use client'

import { useState, useEffect } from 'react'

export default function Preloader({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0)
    const [currentTextIndex, setCurrentTextIndex] = useState(0)
    const [isAuthVisible, setIsAuthVisible] = useState(false)
    const [isLaunching, setIsLaunching] = useState(false)

    const loadingTexts = [
        "CALCULATING TRAJECTORY...",
        "SYNCING WITH GARGANTUA...",
        "AUTHORIZING PILOT..."
    ]

    useEffect(() => {
        // Start audio playback immediately when preloader mounts
        const audio = document.getElementById('interstellar-audio') as HTMLAudioElement
        if (audio) {
            audio.play().catch((err) => {
                console.log('Audio autoplay blocked, will retry on user interaction:', err)
                // If autoplay is blocked, try again on first user interaction
                const playOnInteraction = () => {
                    audio.play().catch(() => { })
                    document.removeEventListener('click', playOnInteraction)
                    document.removeEventListener('touchstart', playOnInteraction)
                }
                document.addEventListener('click', playOnInteraction)
                document.addEventListener('touchstart', playOnInteraction)
            })
        }

        let step = 0
        const totalSteps = loadingTexts.length

        // Recursive function to update progress
        const updateProgress = () => {
            if (step < totalSteps) {
                step++
                const newProgress = (step / totalSteps) * 100
                setProgress(newProgress)
                // Ensure index doesn't go out of bounds
                if (step <= totalSteps) {
                    setCurrentTextIndex(step - 1)
                }

                setTimeout(updateProgress, 1000 + Math.random() * 500)
            } else {
                // Finished
                setTimeout(() => setIsAuthVisible(true), 500)
            }
        }

        // Start slightly delayed
        const timer = setTimeout(updateProgress, 500)
        return () => clearTimeout(timer)
    }, [])

    const handleInitiate = () => {
        // Audio is already playing from preloader mount
        // Just handle the visual transition

        // 1. Flash
        document.body.classList.add('flash')
        setIsLaunching(true)

        // 2. Remove Preloader
        setTimeout(() => {
            document.body.classList.remove('flash')
            onComplete()
        }, 1500)
    }

    return (
        <div id="preloader" className={`fixed top-0 left-0 w-full h-[100dvh] bg-black z-[100000] flex items-center justify-center overflow-hidden transition-all duration-[1500ms] ease-[cubic-bezier(0.7,0,0.3,1)] ${isLaunching ? 'scale-[3] opacity-0 pointer-events-none' : ''}`}>
            <div className="preloader-background absolute top-0 left-0 w-full h-full -z-10">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover filter brightness-[0.6] contrast-[1.1]">
                    <source src="/preloader_video.mp4" type="video/mp4" />
                </video>
                <div className="stars-overlay absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_80%)]"></div>
            </div>

            <div className="preloader-inner relative z-50 text-center w-full px-5 max-w-full flex flex-col items-center">
                {/* Title */}
                <div className="logo-symbol-container relative flex flex-col items-center justify-center mb-12 w-full floating-element">
                    <div className="logo-symbol font-title text-[28px] xs:text-[50px] sm:text-[70px] md:text-[85px] leading-none font-extrabold tracking-[3px] xs:tracking-[5px] sm:tracking-[15px] text-white mb-1">
                        {"KRANTI".split('').map((char, i) => (
                            <span key={`k-${i}`} className="cinematic-char inline-block opacity-0 blur-[10px] transform translate-y-[30px] scale-125" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>{char}</span>
                        ))}
                    </div>
                    <div className="logo-year font-title text-[20px] xs:text-[40px] sm:text-[45px] md:text-[50px] leading-none font-bold tracking-[4px] xs:tracking-[6px] sm:tracking-[12px] text-white">
                        {"2K26".split('').map((char, i) => (
                            <span key={`y-${i}`} className="cinematic-char inline-block opacity-0 blur-[10px] transform translate-y-[30px] scale-125" style={{ animationDelay: `${0.8 + i * 0.1}s` }}>{char}</span>
                        ))}
                    </div>
                </div>

                {/* Authorization Button */}
                <div className={`authorization-container transition-all duration-[800ms] ease-out flex flex-col items-center ${isAuthVisible ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-90 invisible h-0 overflow-hidden'}`}>
                    <button
                        id="initiate-btn"
                        className="initiate-btn group relative bg-transparent border border-white text-white py-4 px-10 font-heading text-sm tracking-[5px] cursor-pointer overflow-hidden transition-all duration-[300ms] ease-[cubic-bezier(0.19,1,0.22,1)] hover:bg-white/10 hover:text-white hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:tracking-[8px] mb-5 floating-element"
                        onClick={handleInitiate}
                    >
                        <span className="btn-glitch absolute top-0 left-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:animate-glitch-skew"></span>
                        <span className="btn-text relative z-10">INITIATE TO VOYAGE</span>
                        <div className="btn-shimmer absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:left-[100%]"></div>
                    </button>
                    <div className="auth-status font-mono text-[9px] text-white tracking-[2px] opacity-80">WAITING FOR PILOT INPUT...</div>
                </div>

                {/* Loading Sequence */}
                {!isAuthVisible && (
                    <div className="loading-sequence h-5 relative mb-8 w-full flex justify-center">
                        {loadingTexts.map((text, index) => (
                            <div
                                key={index}
                                className={`loading-text absolute top-0  w-full text-center font-heading text-xs tracking-[6px] text-white/70 transition-all duration-500 transform ${index === currentTextIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                            >
                                {text}
                            </div>
                        ))}
                    </div>
                )}

                {!isAuthVisible && (
                    <div className="loading-bar w-[250px] h-[1px] bg-cyan-500/20 mx-auto overflow-hidden mt-8">
                        <div className="loading-bar-fill h-full bg-cyan-400 shadow-[0_0_10px_#00F0FF] transition-all duration-300" style={{ width: `${progress}%` }}></div>
                    </div>
                )}
            </div>
            <div className="intro-overlay absolute top-0 left-0 w-full h-full bg-white opacity-0 pointer-events-none z-10"></div>
        </div>
    )
}
