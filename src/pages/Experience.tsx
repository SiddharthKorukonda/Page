import PageShell from '../components/PageShell'
import Card, { CardBody } from '../components/Card'
import { useTheme } from '../context/ThemeContext'
import { experiences } from '../data/content'

export default function Experience() {
  const { isRetro, isDark } = useTheme()

  return (
    <PageShell
      title="Experience"
      subtitle="My professional journey and the impact I've made along the way"
    >
      {/* Experience Timeline */}
      <section className="mb-16">
        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.id}>
              <CardBody>
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h2 className={`
                      text-xl font-display
                      ${isRetro ? 'text-mario-brown' : isDark ? 'text-white' : 'text-gray-900'}
                    `}>
                      {exp.title}
                    </h2>
                    <p className={`
                      text-lg font-medium
                      ${isRetro ? 'text-pipe-dark' : isDark ? 'text-blue-400' : 'text-classic-accent'}
                    `}>
                      {exp.company}
                    </p>
                    <p className={`
                      text-sm
                      ${isRetro ? 'text-mario-brown/60' : isDark ? 'text-gray-400' : 'text-gray-500'}
                    `}>
                      {exp.location}
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
                    {exp.startDate} — {exp.endDate}
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 mb-4">
                  {exp.bullets.map((bullet, idx) => (
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
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
