import { useState } from 'react'
import PageShell from '../components/PageShell'
import { useTheme } from '../context/ThemeContext'
import { ResumeIcon, ExternalLinkIcon } from '../components/icons'

// Path to your resume PDF in the public folder
// Make sure the filename matches exactly what's in your public folder
const RESUME_PATH = './Resume - 4_27_26.pdf'

export default function Resume() {
  const { isRetro, isDark } = useTheme()
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = RESUME_PATH
    link.download = 'resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleOpenInNewTab = () => {
    window.open(RESUME_PATH, '_blank')
  }

  return (
    <PageShell
      title="Resume"
      subtitle="View or download my resume"
    >
      {/* Action buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button
          onClick={handleDownload}
          className={`
            inline-flex items-center gap-2 px-6 py-3 rounded-lg
            font-medium transition-all duration-200
            ${isRetro 
              ? 'bg-mario-green text-white hover:bg-pipe-dark' 
              : 'bg-classic-accent text-white hover:bg-blue-600'
            }
          `}
        >
          <ResumeIcon size={20} />
          Download PDF
        </button>
        
        <button
          onClick={handleOpenInNewTab}
          className={`
            inline-flex items-center gap-2 px-6 py-3 rounded-lg
            font-medium transition-all duration-200
            ${isRetro 
              ? 'bg-mario-yellow text-mario-brown hover:bg-yellow-400' 
              : isDark
                ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }
          `}
        >
          <ExternalLinkIcon size={20} />
          Open in New Tab
        </button>
      </div>

      {/* PDF Viewer */}
      <div className={`
        relative rounded-xl overflow-hidden
        ${isRetro 
          ? 'border-4 border-mario-brown shadow-[4px_4px_0_rgba(139,69,19,0.3)]' 
          : isDark
            ? 'border border-gray-700 shadow-lg bg-gray-800'
            : 'border border-gray-200 shadow-lg'
        }
      `}>
        {/* Loading state */}
        {isLoading && !hasError && (
          <div className={`
            absolute inset-0 flex items-center justify-center
            ${isRetro ? 'bg-mario-yellow/10' : isDark ? 'bg-gray-800' : 'bg-gray-50'}
          `}>
            <div className="text-center">
              <div className={`
                w-12 h-12 border-4 rounded-full animate-spin mx-auto mb-4
                ${isRetro 
                  ? 'border-mario-green border-t-transparent' 
                  : 'border-classic-accent border-t-transparent'
                }
              `} />
              <p className={isRetro ? 'text-mario-brown' : isDark ? 'text-gray-300' : 'text-gray-600'}>
                Loading resume...
              </p>
            </div>
          </div>
        )}

        {/* Error state */}
        {hasError && (
          <div className={`
            p-12 text-center
            ${isRetro ? 'bg-mario-red/10' : isDark ? 'bg-gray-800' : 'bg-red-50'}
          `}>
            <p className={`text-lg mb-4 ${isRetro ? 'text-mario-brown' : isDark ? 'text-gray-200' : 'text-gray-700'}`}>
              Unable to load the PDF viewer.
            </p>
            <p className={`mb-6 ${isRetro ? 'text-mario-brown/70' : isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Please use the buttons above to download or view in a new tab.
            </p>
            <button
              onClick={handleOpenInNewTab}
              className={`
                inline-flex items-center gap-2 px-6 py-3 rounded-lg
                font-medium transition-all duration-200
                ${isRetro 
                  ? 'bg-mario-green text-white hover:bg-pipe-dark' 
                  : 'bg-classic-accent text-white hover:bg-blue-600'
                }
              `}
            >
              <ExternalLinkIcon size={20} />
              Open in New Tab
            </button>
          </div>
        )}

        {/* PDF iframe */}
        <iframe
          src={RESUME_PATH}
          title="Resume PDF Viewer"
          className={`w-full ${hasError ? 'hidden' : ''}`}
          style={{ height: '80vh', minHeight: '600px' }}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
          }}
        />
      </div>

      {/* Instructions note */}
      <p className={`
        mt-6 text-sm text-center
        ${isRetro ? 'text-mario-brown/60' : isDark ? 'text-gray-400' : 'text-gray-500'}
      `}>
        Having trouble viewing? Try downloading the PDF or opening in a new tab.
      </p>
    </PageShell>
  )
}
