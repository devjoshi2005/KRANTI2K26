'use client'

import { useState, useRef, useEffect } from 'react'

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        // Listen for play/pause events to sync state
        const handlePlay = () => setIsPlaying(true)
        const handlePause = () => setIsPlaying(false)

        audio.addEventListener('play', handlePlay)
        audio.addEventListener('pause', handlePause)

        return () => {
            audio.removeEventListener('play', handlePlay)
            audio.removeEventListener('pause', handlePause)
        }
    }, [])

    const toggleMusic = () => {
        if (!audioRef.current) return
        if (isPlaying) {
            audioRef.current.pause()
            setIsPlaying(false)
        } else {
            audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch((e) => console.log("Audio play blocked", e))
        }
    }

    return (
        <>
            <audio ref={audioRef} id="interstellar-audio" loop preload="auto">
                <source src="/interstellar.mp3" type="audio/mpeg" />
            </audio>

            <div
                className={`music-control fixed bottom-8 left-8 z-50 flex items-center gap-3 cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-300 ${isPlaying ? 'playing' : ''}`}
                onClick={toggleMusic}
                title={isPlaying ? "Mute Soundtrack" : "Play Soundtrack"}
            >
                <div className="music-icon flex items-end gap-[2px] h-[14px]">
                    <span className="bar bar-1 w-[2px] bg-white animate-music-bar h-[3px]"></span>
                    <span className="bar bar-2 w-[2px] bg-white animate-music-bar animation-delay-200 h-[6px]"></span>
                    <span className="bar bar-3 w-[2px] bg-white animate-music-bar animation-delay-400 h-[9px]"></span>
                </div>
                <span className="music-text font-heading text-xs tracking-[3px] text-white">
                    {isPlaying ? "UPLINK ACTIVE" : "MISSION SOUNDTRACK"}
                </span>
            </div>
        </>
    )
}
