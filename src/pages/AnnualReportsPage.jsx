import SiteNavbar from '../components/SiteNavbar'
import useWhoWeAreReveal from '../hooks/useWhoWeAreReveal'

function AnnualReportsPage() {
  useWhoWeAreReveal()

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      <SiteNavbar />

      <main className="pt-20">
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-cream border-b border-surface-variant/40">
          <div className="max-w-container-max mx-auto">
            <span className="font-label-md text-label-md text-vibrant-orange tracking-widest uppercase mb-4 block">Transparency</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-deep-navy mb-6">Annual Reports</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">Browse USEC annual performance summaries, funding breakdowns, and field impact outcomes across our global programs.</p>
          </div>
        </section>

        <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { year: '2024', impact: '12M+ lives reached', summary: 'Expanded sanitation, education, and emergency response operations in 45 active regions.' },
              { year: '2023', impact: '8.7M lives reached', summary: 'Scaled reforestation and climate resilience hubs with stronger local partnerships.' },
              { year: '2022', impact: '6.4M lives reached', summary: 'Strengthened community-led recovery initiatives in high-risk zones.' },
            ].map((report) => (
              <article key={report.year} className="bg-white border border-outline-variant p-8 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(3,51,71,0.08)] transition-all">
                <span className="font-label-md text-label-md text-vibrant-orange uppercase tracking-widest">{report.year}</span>
                <h2 className="font-headline-sm text-headline-sm text-deep-navy mt-4 mb-3">Impact Report</h2>
                <p className="font-label-md text-label-md text-deep-navy mb-4">{report.impact}</p>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">{report.summary}</p>
                <button className="inline-flex items-center gap-2 font-label-md text-label-md text-deep-navy hover:text-vibrant-orange transition-colors" type="button">
                  Read Report <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default AnnualReportsPage

