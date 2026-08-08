import { useState } from 'react'
// import GoogleTranslate from "./GoogleTranslate"; 


export default function LanguageSelector({ language, setLanguage, t, languages }) {
  const [open, setOpen] = useState(false)

  const handleSelect = (code) => {
    setLanguage(code)
    setOpen(false)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 font-body-md text-body-md text-white/70 hover:text-white transition-colors"
      >
        <span className="material-symbols-outlined text-base">language</span>
        {t('languages')}
      </button>

      {open ? (
        <div className="fixed inset-0 z-[90] bg-slate-950/60 p-4 backdrop-blur-sm">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-white text-slate-900 shadow-[0_24px_60px_rgba(15,23,42,0.24)]">
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-5">
              <div>
                <p className="text-xl font-semibold text-slate-900">{t('selectLanguage')}</p>
                <p className="mt-1 text-sm text-slate-600">{t('languageHelp')}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200"
              >
                {t('close') || 'Close'}
              </button>
            </div>
            <div className="overflow-x-auto px-6 pb-6 pt-4">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600">{t('languageColumn')}</th>
                    <th className="border-b border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600">{t('codeColumn')}</th>
                    <th className="border-b border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600">{t('actionColumn')}</th>
                  </tr>
                </thead>
                <tbody>
                  {languages.map((item) => (
                    <tr key={item.code} className={`transition-colors ${language === item.code ? 'bg-slate-50' : ''}`}>
                      <td className="border-b border-slate-200 px-4 py-4 text-sm text-slate-800">{item.name}</td>
                      <td className="border-b border-slate-200 px-4 py-4 text-sm text-slate-500">{item.code}</td>
                      <td className="border-b border-slate-200 px-4 py-4">
                        <button
                          type="button"
                          onClick={() => handleSelect(item.code)}
                          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                            language === item.code
                              ? 'bg-primary text-white'
                              : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {language === item.code ? t('selected') : t('choose')}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
