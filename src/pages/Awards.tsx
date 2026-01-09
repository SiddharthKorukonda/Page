import { useMemo } from 'react'
import PageShell from '../components/PageShell'
import Card, { CardBody } from '../components/Card'
import Star from '../components/svg/Star'
import { useTheme } from '../context/ThemeContext'
import { getAwardsByYear } from '../data/content'

export default function Awards() {
  const { isRetro } = useTheme()
  const awardsByYear = useMemo(() => getAwardsByYear(), [])

  return (
    <PageShell
      title="Distinctions"
      subtitle="Honors, awards, and certifications along my journey"
    >
      <div className="space-y-12">
        {Array.from(awardsByYear.entries()).map(([year, yearAwards]) => (
          <section key={year}>
            {/* Year header */}
            <div className="flex items-center gap-4 mb-6">
              <h2 className={`
                text-2xl font-display
                ${isRetro ? 'text-mario-brown' : 'text-gray-900'}
              `}>
                {year}
              </h2>
              <div className={`
                flex-1 h-px
                ${isRetro ? 'bg-mario-brown/20' : 'bg-gray-200'}
              `} />
              {isRetro && (
                <div className="flex gap-1">
                  {[...Array(Math.min(yearAwards.length, 5))].map((_, i) => (
                    <Star key={i} size={20} className="animate-bounce-subtle" />
                  ))}
                </div>
              )}
            </div>

            {/* Awards list */}
            <div className="space-y-4">
              {yearAwards.map((award, index) => (
                <Card key={award.id}>
                  <CardBody className="flex items-start gap-4">
                    {/* Trophy/Star icon */}
                    {isRetro && (
                      <div className="shrink-0 mt-1">
                        <div className={`
                          w-10 h-10 rounded-full flex items-center justify-center
                          ${index === 0 
                            ? 'bg-mario-yellow' 
                            : index === 1 
                              ? 'bg-gray-300' 
                              : 'bg-mario-orange/60'
                          }
                        `}>
                          <Star size={20} color={index === 0 ? '#8B4513' : index === 1 ? '#666' : '#fff'} />
                        </div>
                      </div>
                    )}

                    <div className="flex-1">
                      {/* Award name */}
                      <h3 className={`
                        text-lg font-display mb-1
                        ${isRetro ? 'text-mario-brown' : 'text-gray-900'}
                      `}>
                        {award.name}
                      </h3>

                      {/* Organization */}
                      <p className={`
                        text-sm font-medium mb-2
                        ${isRetro ? 'text-pipe-dark' : 'text-classic-accent'}
                      `}>
                        {award.organization}
                      </p>

                      {/* Description */}
                      <p className={`
                        text-sm
                        ${isRetro ? 'text-mario-brown/70' : 'text-gray-600'}
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
      {awardsByYear.size === 0 && (
        <div className={`
          text-center py-12
          ${isRetro ? 'text-mario-brown/60' : 'text-gray-500'}
        `}>
          <p className="text-lg">No awards listed yet. Check back soon!</p>
        </div>
      )}
    </PageShell>
  )
}
