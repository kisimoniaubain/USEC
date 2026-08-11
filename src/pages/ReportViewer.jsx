import React, { useEffect } from 'react'
import footerlogo from '../assets/logo.png'

export default function ReportViewer() {
  const params = new URLSearchParams(window.location.search)

  const file = params.get('file')
  const title = params.get('title') || 'USEC Report'

  // Change the browser tab title
  useEffect(() => {
    document.title = `${title} | USEC`

    return () => {
      document.title = 'USEC.org'
    }
  }, [title])

  return (
    <div className="min-h-screen bg-slate-100">

      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="flex h-16 items-center justify-between bg-deep-navy px-5 text-white md:px-8">

        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center gap-1">

          <img
            src={footerlogo}
            alt="USEC logo"
            className="h-14 w-auto object-contain brightness-0 invert md:h-16"
          />

          <div className="mb-2 flex flex-col leading-none">

            <p className="text-xl font-extrabold tracking-tight md:text-2xl">
              USEC<span className="font-normal">.org</span>
            </p>

            <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.05em] md:text-[9px]">
              Community Based
            </p>

            <p className="text-[8px] font-semibold uppercase tracking-[0.05em] md:text-[9px]">
              Organisation
            </p>

          </div>

        </a>


        {/* Report Title */}
        <h1 className="mx-4 truncate text-center text-sm font-bold md:text-base">
          {title}
        </h1>


        {/* Download */}
        <a
          href={file}
          download
          className="shrink-0 rounded-md bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary transition-colors duration-300 hover:bg-vibrant-orange hover:text-white"
        >
          Download
        </a>

      </header>


      {/* =====================================================
          REPORT VIEWER
      ===================================================== */}
      <main className="h-[calc(100vh-4rem)] w-full">

        {file ? (
          <iframe
            src={file}
            title={title}
            className="h-full w-full border-0"
          />
        ) : (
          <div className="flex h-full items-center justify-center">

            <p className="text-red-600">
              Report could not be loaded.
            </p>

          </div>
        )}

      </main>

    </div>
  )
}