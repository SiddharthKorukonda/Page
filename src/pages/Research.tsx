import PageShell from '../components/PageShell'
import Card, { CardBody, CardFooter } from '../components/Card'
import { ExternalLinkIcon } from '../components/icons'
import { useTheme } from '../context/ThemeContext'
import { research } from '../data/content'

export default function Research() {
  const { isRetro, isDark } = useTheme()

  return (
    <PageShell
      title="Research"
      subtitle="Academic contributions and ongoing investigations"
    >
      <div className="space-y-6">
        {research.map(paper => (
          <Card key={paper.id}>
            <CardBody>
              {/* Title and Year */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className={`
                  text-xl font-display
                  ${isRetro ? 'text-mario-brown' : isDark ? 'text-white' : 'text-gray-900'}
                `}>
                  {paper.title}
                </h2>
                <span className={`
                  px-3 py-1 rounded-full text-sm font-bold shrink-0
                  ${isRetro 
                    ? 'bg-mario-yellow text-mario-brown' 
                    : isDark
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-classic-accent/10 text-classic-accent'
                  }
                `}>
                  {paper.year}
                </span>
              </div>

              {/* Venue */}
              <p className={`
                text-sm font-medium mb-2
                ${paper.venue.includes('In Progress')
                  ? isRetro ? 'text-mario-orange' : isDark ? 'text-amber-400' : 'text-amber-600'
                  : isRetro ? 'text-pipe-dark' : isDark ? 'text-blue-400' : 'text-classic-accent'
                }
              `}>
                {paper.venue}
              </p>

              {/* Authors */}
              <p className={`
                text-sm mb-4
                ${isRetro ? 'text-mario-brown/60' : isDark ? 'text-gray-400' : 'text-gray-500'}
              `}>
                {paper.authors.join(', ')}
              </p>

              {/* My Role */}
              <div className="mb-4">
                <h3 className={`text-sm font-semibold mb-1 ${isRetro ? 'text-pipe-dark' : isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  My Role
                </h3>
                <p className={`text-sm ${isRetro ? 'text-mario-brown/80' : isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {paper.myRole}
                </p>
              </div>

              {/* Summary */}
              <div>
                <h3 className={`text-sm font-semibold mb-1 ${isRetro ? 'text-pipe-dark' : isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Summary
                </h3>
                <p className={`text-sm ${isRetro ? 'text-mario-brown/80' : isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {paper.summary}
                </p>
              </div>
            </CardBody>

            {paper.link && (
              <CardFooter className="flex justify-end">
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    inline-flex items-center gap-2 px-4 py-2 rounded-lg
                    text-sm font-medium transition-colors
                    ${isRetro 
                      ? 'bg-mario-green text-white hover:bg-pipe-dark' 
                      : 'bg-classic-accent text-white hover:bg-blue-600'
                    }
                  `}
                >
                  Read Paper
                  <ExternalLinkIcon size={16} />
                </a>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>

      {/* Coming soon state */}
      {research.length === 0 && (
        <div className={`
          text-center py-16 px-6 rounded-2xl
          ${isRetro 
            ? 'bg-mario-yellow/10 border-4 border-dashed border-mario-brown/30' 
            : isDark
              ? 'bg-gray-800 border-2 border-dashed border-gray-600'
              : 'bg-gray-50 border-2 border-dashed border-gray-300'
          }
        `}>
          <div className={`
            text-5xl mb-4
          `}>
            🔬
          </div>
          <h3 className={`
            text-2xl font-display mb-3
            ${isRetro ? 'text-mario-brown' : isDark ? 'text-white' : 'text-gray-800'}
          `}>
            Research in Progress
          </h3>
          <p className={`
            text-lg mb-2
            ${isRetro ? 'text-mario-brown/70' : isDark ? 'text-gray-300' : 'text-gray-600'}
          `}>
            Exciting publications are currently in the works!
          </p>
          <p className={`
            text-sm
            ${isRetro ? 'text-mario-brown/50' : isDark ? 'text-gray-400' : 'text-gray-500'}
          `}>
            Check back soon for updates on my latest research contributions.
          </p>
        </div>
      )}
    </PageShell>
  )
}
