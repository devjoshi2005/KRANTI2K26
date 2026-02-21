'use client'

import { useEffect, useRef } from 'react'

export default function BackgroundSlideshow() {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        const video = videoRef.current
        if (video) {
            video.play().catch(err => {
                console.error('Video autoplay failed:', err)
            })
        }
    }, [])

    return (
        <div
            className="absolute inset-0 bg-black pointer-events-none"
            style={{ zIndex: 0 }}
        >
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                style={{
                    filter: 'brightness(0.6) contrast(1.1)',
                    position: 'absolute',
                    top: 0,
                    left: 0
                }}
                loop
                muted
                playsInline
                preload="auto"
            >
                <source src="/preloader_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}
