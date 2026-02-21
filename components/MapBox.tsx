'use client'

import { useState } from 'react'

export default function MapBox() {
  const [open, setOpen] = useState(false)
  const query = encodeURIComponent('Meenakshi Sundararajan Engineering College Arcot Road Kodambakkam Chennai 600024')
  const embedSrc = `https://www.google.com/maps?q=${query}&output=embed`
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`

  return (
    <>
      <div className="map-box w-full px-4 mb-12 relative z-20 flex justify-center">
        <div className="map-inner w-full rounded-lg overflow-hidden" style={{ maxWidth: 'min(1100px, calc(100% - 64px))', background: 'black' }}>
          <h3 className="font-heading text-xl text-gold mb-4 text-center pt-4">Locate Us</h3>

          <div
            role="button"
            tabIndex={0}
            onClick={() => setOpen(true)}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setOpen(true)}
            className="map-preview relative w-full rounded-lg overflow-hidden border border-gold/10 cursor-pointer shadow-lg"
          >
            {/* Solid black backdrop to block background video */}
            <div className="absolute inset-0 bg-black z-0" />

            <iframe
              src={embedSrc}
              className="w-full h-[28vh] sm:h-[34vh] md:h-[44vh] lg:h-[52vh] relative z-10"
              style={{ background: 'black' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kranti - Map preview"
            ></iframe>

            <div className="map-overlay absolute inset-0 flex items-end justify-end p-3 z-20">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-black px-3 py-1 text-xs font-heading rounded"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          <p className="text-xs text-white/50 mt-2 text-center pb-4">Meenakshi Sundararajan Engineering College — 24 Arcot Road, Kodambakkam, Chennai - 600024</p>
        </div>
      </div>

      {open && (
        <div className="map-modal fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="modal-content relative w-full max-w-4xl h-[80vh] bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-20 bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded"
            >
              Close
            </button>

            <iframe
              src={embedSrc}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kranti - Map large"
            ></iframe>
          </div>
        </div>
      )}
    </>
  )
}
