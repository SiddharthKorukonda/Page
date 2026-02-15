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
      <section className="mb-16">
        <div className="space-y-6">
          {research.map((paper) => (
            <Card key={paper.id}>
              <CardBody>
                {/* Header: title + date pill (same as Experience) */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h2 className={`
                      text-xl font-display
                      ${isRetro ? 'text-mario-brown' : isDark ? 'text-white' : 'text-gray-900'}
                    `}>
                      {paper.title}
                    </h2>
                    <p className={`
                      text-lg font-medium
                      ${isRetro ? 'text-pipe-dark' : isDark ? 'text-blue-400' : 'text-classic-accent'}
                    `}>
                      {paper.venue}
                    </p>
                    <p className={`
                      text-sm
                      ${isRetro ? 'text-mario-brown/60' : isDark ? 'text-gray-400' : 'text-gray-500'}
                    `}>
                      {paper.authors.join(', ')}
                    </p>
                  </div>
                  <div className={`
                    px-4 py-2 rounded-lg text-sm font-medium shrink-0
                    ${isRetro 
                      ? 'bg-mario-yellow/20 text-mario-brown' 
                      : isDark
                        ? 'bg-gray-700 text-gray-300'
                        : 'bg-gray-100 text-gray-700'
                    }
                  `}>
                    {paper.date}
                  </div>
                </div>

                {/* Bullets (same style as Experience) */}
                {(paper.bullets && paper.bullets.length > 0) ? (
                  <ul className="space-y-3 mb-4">
                    {paper.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className={`
                          flex items-start gap-3 text-sm
                          ${isRetro ? 'text-mario-brown/80' : isDark ? 'text-gray-300' : 'text-gray-600'}
                        `}
                      >
                        <span className={`
                          mt-1.5 w-2 h-2 rounded-full shrink-0
                          ${isRetro ? 'bg-mario-green' : isDark ? 'bg-blue-400' : 'bg-classic-accent'}
                        `} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={`
                    text-sm mb-4
                    ${isRetro ? 'text-mario-brown/80' : isDark ? 'text-gray-300' : 'text-gray-600'}
                  `}>
                    {paper.summary}
                  </p>
                )}

                {/* Technologies (same as Experience) */}
                {paper.technologies && paper.technologies.length > 0 && (
                  <div className={`flex flex-wrap gap-2 pt-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-100'}`}>
                    {paper.technologies.map(tech => (
                      <span
                        key={tech}
                        className={`
                          px-2 py-1 rounded text-xs font-medium
                          ${isRetro 
                            ? 'bg-mario-green/10 text-pipe-dark' 
                            : isDark
                              ? 'bg-gray-700 text-gray-300'
                              : 'bg-gray-100 text-gray-700'
                          }
                        `}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
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
      </section>

      {/* Empty state */}
      {research.length === 0 && (
        <p className={`text-center py-12 ${isRetro ? 'text-mario-brown/60' : isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          No research listed yet. Check back soon!
        </p>
      )}
    </PageShell>
  )
}
