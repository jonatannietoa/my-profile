import { Download } from 'lucide-react'

/**
 * Triggers the browser print dialog with the dedicated @media print
 * stylesheet (A4, light, ATS-friendly). The user picks "Save as PDF".
 */
export function DownloadButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      data-print="hide"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary px-5 py-3 font-medium text-background shadow-lg shadow-primary/25 transition-transform hover:scale-105 active:scale-95"
      aria-label="Download CV as PDF"
    >
      <Download className="h-4 w-4" aria-hidden />
      Download PDF
    </button>
  )
}
