'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const cursor = cursorRef.current
        if (!cursor) return

        let targetX = 0, targetY = 0
        let curX = 0, curY = 0
        const lerp = 0.15

        const updateTarget = (e: MouseEvent) => {
            targetX = e.clientX
            targetY = e.clientY
        }

        const updateCursor = () => {
            curX += (targetX - curX) * lerp
            curY += (targetY - curY) * lerp
            if (cursor) {
                cursor.style.left = `${curX}px`
                cursor.style.top = `${curY}px`
            }
            requestAnimationFrame(updateCursor)
        }

        window.addEventListener('mousemove', updateTarget)
        const animId = requestAnimationFrame(updateCursor)

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.closest('a, button, [role="button"], .event-card, .btn-primary, .btn-secondary, .nav-link, input, textarea')) {
                document.body.classList.add('cursor-hover')
            }
        }
        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.closest('a, button, [role="button"], .event-card, .btn-primary, .btn-secondary, .nav-link, input, textarea')) {
                document.body.classList.remove('cursor-hover')
            }
        }

        document.addEventListener('mouseover', handleMouseOver)
        document.addEventListener('mouseout', handleMouseOut)

        return () => {
            window.removeEventListener('mousemove', updateTarget)
            cancelAnimationFrame(animId)
            document.removeEventListener('mouseover', handleMouseOver)
            document.removeEventListener('mouseout', handleMouseOut)
        }
    }, [])

    return <div id="custom-cursor" ref={cursorRef} />
}
