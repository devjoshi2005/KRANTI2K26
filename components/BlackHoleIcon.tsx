'use client'

export default function BlackHoleIcon() {
    return (
        <div className="black-hole-container relative w-6 h-6 flex items-center justify-center">
            <style jsx>{`
                @keyframes jellyPulse {
                    0%, 100% {
                        transform: scale(1);
                        filter: blur(0.5px);
                    }
                    25% {
                        transform: scale(1.08, 0.92);
                    }
                    50% {
                        transform: scale(1.15, 0.85);
                    }
                    75% {
                        transform: scale(0.92, 1.08);
                    }
                }

                @keyframes starOrbit1 {
                    0% {
                        cx: 18;
                        cy: 6;
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.7;
                    }
                    100% {
                        cx: 12;
                        cy: 12;
                        opacity: 0;
                    }
                }

                @keyframes starOrbit2 {
                    0% {
                        cx: 6;
                        cy: 12;
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.7;
                    }
                    100% {
                        cx: 12;
                        cy: 12;
                        opacity: 0;
                    }
                }

                @keyframes starOrbit3 {
                    0% {
                        cx: 12;
                        cy: 18;
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.7;
                    }
                    100% {
                        cx: 12;
                        cy: 12;
                        opacity: 0;
                    }
                }

                @keyframes starOrbit4 {
                    0% {
                        cx: 18;
                        cy: 18;
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.7;
                    }
                    100% {
                        cx: 12;
                        cy: 12;
                        opacity: 0;
                    }
                }

                @keyframes glowPulse {
                    0%, 100% {
                        r: 8;
                        opacity: 0.3;
                    }
                    50% {
                        r: 10;
                        opacity: 0.5;
                    }
                }

                .black-hole-core {
                    animation: jellyPulse 3s ease-in-out infinite;
                    filter: drop-shadow(0 0 8px rgba(0, 240, 255, 0.6));
                }

                .black-hole-glow {
                    animation: glowPulse 2.5s ease-in-out infinite;
                }

                .star {
                    fill: #00F0FF;
                    filter: drop-shadow(0 0 3px rgba(0, 240, 255, 0.8));
                }

                .star-1 {
                    animation: starOrbit1 2.5s infinite;
                }

                .star-2 {
                    animation: starOrbit2 2.5s 0.6s infinite;
                }

                .star-3 {
                    animation: starOrbit3 2.5s 1.2s infinite;
                }

                .star-4 {
                    animation: starOrbit4 2.5s 1.8s infinite;
                }
            `}</style>

            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="black-hole-svg"
            >
                {/* Outer glow effect */}
                <circle
                    cx="12"
                    cy="12"
                    className="black-hole-glow"
                    fill="none"
                    stroke="rgba(0, 240, 255, 0.2)"
                    strokeWidth="1"
                />

                {/* Event horizon */}
                <circle
                    cx="12"
                    cy="12"
                    r="6"
                    fill="rgba(0, 240, 255, 0.15)"
                    stroke="rgba(0, 240, 255, 0.7)"
                    strokeWidth="1.5"
                />

                {/* Black hole core */}
                <circle
                    cx="12"
                    cy="12"
                    r="3"
                    fill="rgba(10, 10, 15, 0.95)"
                    stroke="rgba(0, 240, 255, 0.9)"
                    strokeWidth="0.5"
                    className="black-hole-core"
                />

                {/* Inner glow */}
                <circle
                    cx="12"
                    cy="12"
                    r="3"
                    fill="none"
                    stroke="rgba(0, 240, 255, 0.4)"
                    strokeWidth="0.8"
                    opacity="0.6"
                />

                {/* Incoming stars */}
                <circle cx="18" cy="6" r="1.2" className="star star-1" />
                <circle cx="6" cy="12" r="1.2" className="star star-2" />
                <circle cx="12" cy="18" r="1.2" className="star star-3" />
                <circle cx="18" cy="18" r="1.2" className="star star-4" />

                {/* Accent rings for depth */}
                <circle
                    cx="12"
                    cy="12"
                    r="5"
                    fill="none"
                    stroke="rgba(0, 240, 255, 0.2)"
                    strokeWidth="0.5"
                    strokeDasharray="2,2"
                    opacity="0.5"
                />
            </svg>
        </div>
    )
}
