import { useMemo } from 'react'
import PageShell from '../components/PageShell'
import Card, { CardBody } from '../components/Card'
import Star from '../components/svg/Star'
import Diamond from '../components/svg/Diamond'
import { useTheme } from '../context/ThemeContext'
import { getSortedAwards, Award } from '../data/content'

export default function Awards() {
  const { isRetro, isDark } = useTheme()
  const sortedAwards = useMemo(() => getSortedAwards(), [])
  
  // Group awards by year (extracted from date string)
  const awardsByYear = useMemo(() => {
    const grouped = new Map<string, Award[]>()
    sortedAwards.forEach(award => {
      const year = award.date.split(' ').pop() || '' // Get last word (year)
      const existing = grouped.get(year) || []
      grouped.set(year, [...existing, award])
    })
    return grouped
  }, [sortedAwards])

  return (
    <PageShell
      title="Distinctions"
      subtitle="Honors, awards, and certifications along my journey"
    >
      <div className="space-y-10">
        {Array.from(awardsByYear.entries()).map(([year, yearAwards]) => (
          <section key={year}>
            {/* Year header */}
            <div className="flex items-center gap-4 mb-6">
              <h2 className={`
                text-2xl font-display
                ${isRetro ? 'text-mario-brown' : isDark ? 'text-white' : 'text-gray-900'}
              `}>
                {year}
              </h2>
              <div className={`
                flex-1 h-px
                ${isRetro ? 'bg-mario-brown/20' : isDark ? 'bg-gray-700' : 'bg-gray-200'}
              `} />
            </div>

            {/* Awards list for this year */}
            <div className="space-y-4">
              {yearAwards.map((award, index) => (
                <Card key={award.id}>
                  <CardBody className="flex items-start gap-4">
                    {/* Trophy/Star icon */}
                    {isRetro && (
                      <div className="shrink-0 mt-1">
                        {(award.id === 'cert-jpmc-swe' || award.id === 'cert-jpmc-quant') ? (
                          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-500/90">
                            <Diamond size={20} color="#BFDBFE" />
                          </div>
                        ) : award.id === 'award-aime-2022' ? (
                          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-600/90">
                            <Star size={20} color="#FECDD3" />
                          </div>
                        ) : (
                          <div className={`
                            w-10 h-10 rounded-full flex items-center justify-center
                            ${index <= 1 
                              ? 'bg-mario-yellow' 
                              : 'bg-mario-orange/60'
                            }
                          `}>
                            <Star size={20} color={index <= 1 ? '#8B4513' : '#fff'} />
                          </div>
                        )}
                      </div>
                    )}

                    <div className="flex-1">
                      {/* Award name and date */}
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <h3 className={`
                          text-lg font-display
                          ${isRetro ? 'text-mario-brown' : isDark ? 'text-white' : 'text-gray-900'}
                        `}>
                          {award.name}
                        </h3>
                        <span className={`
                          text-sm font-medium shrink-0
                          ${isRetro ? 'text-mario-brown/60' : isDark ? 'text-gray-400' : 'text-gray-500'}
                        `}>
                          {award.date}
                        </span>
                      </div>

                      {/* Organization */}
                      <p className={`
                        text-sm font-medium mb-2
                        ${isRetro ? 'text-pipe-dark' : isDark ? 'text-blue-400' : 'text-classic-accent'}
                      `}>
                        {award.organization}
                      </p>

                      {/* Description */}
                      <p className={`
                        text-sm whitespace-pre-line
                        ${isRetro ? 'text-mario-brown/70' : isDark ? 'text-gray-300' : 'text-gray-600'}
                      `}>
                        {award.description}
                      </p>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Empty state */}
      {sortedAwards.length === 0 && (
        <div className={`
          text-center py-12
          ${isRetro ? 'text-mario-brown/60' : isDark ? 'text-gray-400' : 'text-gray-500'}
        `}>
          <p className="text-lg">No distinctions listed yet. Check back soon!</p>
        </div>
      )}
    </PageShell>
  )
}
