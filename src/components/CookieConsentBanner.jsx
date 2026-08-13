import { useEffect, useState } from 'react'

const STORAGE_KEY = 'usec_cookie_consent'
const PREFERENCES_KEY = 'usec_cookie_preferences'

const defaultPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
}

function CookieConsentBanner() {
  const [visible, setVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState(defaultPreferences)

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    const savedPreferences = window.localStorage.getItem(PREFERENCES_KEY)

    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences)
        setPreferences({ ...defaultPreferences, ...parsed, necessary: true })
      } catch {
        setPreferences(defaultPreferences)
      }
    }

    if (!saved) {
      setVisible(true)
    }
  }, [])

  const savePreferences = (choice, nextPreferences) => {
    window.localStorage.setItem(STORAGE_KEY, choice)
    window.localStorage.setItem(PREFERENCES_KEY, JSON.stringify(nextPreferences))
    setVisible(false)
    setShowPreferences(false)
  }

  const handleChoice = (choice) => {
    if (choice === 'accept') {
      savePreferences('accept', { necessary: true, analytics: true, marketing: true })
      return
    }

    if (choice === 'reject') {
      savePreferences('reject', { necessary: true, analytics: false, marketing: false })
      return
    }

    setShowPreferences(true)
  }

  const handleToggle = (key) => {
    if (key === 'necessary') {
      return
    }

    setPreferences((previous) => ({
      ...previous,
      [key]: !previous[key],
    }))
  }

  const handleSaveCustom = () => {
    savePreferences('custom', { ...preferences, necessary: true })
  }

  return (
    <>
      {visible ? (
        <div className="fixed bottom-4 left-1/2 z-[70] w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 rounded-xl border border-surface-variant/60 bg-white/95 p-4 shadow-[0_16px_42px_rgba(3,51,71,0.18)] backdrop-blur-sm">
          <p className="mb-3 text-sm font-medium text-deep-navy md:text-base">
            We value your privacy. We use cookies to improve your experience and analyze traffic.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => handleChoice('manage')}
              className="rounded-lg border border-outline-variant px-4 py-2 text-sm font-semibold text-deep-navy transition-colors hover:bg-surface-cream"
            >
              Manage preferences
            </button>
            <button
              type="button"
              onClick={() => handleChoice('reject')}
              className="rounded-lg border border-outline-variant px-4 py-2 text-sm font-semibold text-deep-navy transition-colors hover:bg-surface-cream"
            >
              Reject all
            </button>
            <button
              type="button"
              onClick={() => handleChoice('accept')}
              className="rounded-lg bg-vibrant-orange px-4 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              Accept all
            </button>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setShowPreferences(true)}
        aria-label="Customize Consent Preferences"
        title="Customize Consent Preferences"
        className="fixed bottom-6 right-6 z-[85] inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-white text-deep-navy shadow-[0_10px_28px_rgba(3,51,71,0.2)] transition-all hover:-translate-y-0.5 hover:text-white hover:border-vibrant-orange hover:bg-vibrant-orange"
      >
        <span className="material-symbols-outlined">cookie</span>
      </button>

      {showPreferences ? (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-deep-navy/55 p-4 backdrop-blur-[2px]">
          <div className="w-full max-w-xl rounded-xl border border-surface-variant/50 bg-white p-6 shadow-[0_22px_55px_rgba(3,51,71,0.3)]">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="font-headline-sm text-headline-sm text-deep-navy">Customize Consent Preferences</h2>
                <p className="mt-2 text-sm text-on-surface-variant">Choose which cookies you want enabled. Necessary cookies are always active.</p>
              </div>
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant text-deep-navy hover:bg-surface-cream"
                aria-label="Close preferences"
              >
                <span className="material-symbols-outlined text-base">close</span>
              </button>
            </div>

            <div className="space-y-3">
              {[
                { key: 'necessary', label: 'Necessary', description: 'Required for core site functionality.' },
                { key: 'analytics', label: 'Analytics', description: 'Helps us understand usage and improve performance.' },
                { key: 'marketing', label: 'Marketing', description: 'Allows personalized campaigns and outreach.' },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between rounded-lg border border-outline-variant/60 p-3">
                  <div>
                    <p className="font-semibold text-deep-navy">{item.label}</p>
                    <p className="text-xs text-on-surface-variant">{item.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleToggle(item.key)}
                    disabled={item.key === 'necessary'}
                    className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${preferences[item.key] ? 'bg-deep-navy' : 'bg-surface-container-high'} ${item.key === 'necessary' ? 'cursor-not-allowed opacity-80' : ''}`}
                    aria-label={`Toggle ${item.label}`}
                  >
                    <span
                      className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${preferences[item.key] ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => handleChoice('reject')}
                className="rounded-lg border border-outline-variant px-4 py-2 text-sm font-semibold text-deep-navy transition-colors hover:bg-surface-cream"
              >
                Reject all
              </button>
              <button
                type="button"
                onClick={handleSaveCustom}
                className="rounded-lg border border-outline-variant px-4 py-2 text-sm font-semibold text-deep-navy transition-colors hover:bg-surface-cream"
              >
                Save preferences
              </button>
              <button
                type="button"
                onClick={() => handleChoice('accept')}
                className="rounded-lg bg-vibrant-orange px-4 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default CookieConsentBanner
