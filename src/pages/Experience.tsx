import PageShell from '../components/PageShell'
import Card, { CardBody } from '../components/Card'
import { useTheme } from '../context/ThemeContext'
import { experiences, skills } from '../data/content'

export default function Experience() {
  const { isRetro } = useTheme()

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
                      ${isRetro ? 'text-mario-brown' : 'text-gray-900'}
                    `}>
                      {exp.title}
                    </h2>
                    <p className={`
                      text-lg font-medium
                      ${isRetro ? 'text-pipe-dark' : 'text-classic-accent'}
                    `}>
                      {exp.company}
                    </p>
                    <p className={`
                      text-sm
                      ${isRetro ? 'text-mario-brown/60' : 'text-gray-500'}
                    `}>
                      {exp.location}
                    </p>
                  </div>
                  <div className={`
                    px-4 py-2 rounded-lg text-sm font-medium shrink-0
                    ${isRetro 
                      ? 'bg-mario-yellow/20 text-mario-brown' 
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
                        ${isRetro ? 'text-mario-brown/80' : 'text-gray-600'}
                      `}
                    >
                      <span className={`
                        mt-1.5 w-2 h-2 rounded-full shrink-0
                        ${isRetro ? 'bg-mario-green' : 'bg-classic-accent'}
                      `} />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                {exp.technologies && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                    {exp.technologies.map(tech => (
                      <span
                        key={tech}
                        className={`
                          px-2 py-1 rounded text-xs font-medium
                          ${isRetro 
                            ? 'bg-mario-green/10 text-pipe-dark' 
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
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className={`
          text-2xl font-display mb-6
          ${isRetro ? 'text-mario-brown' : 'text-gray-900'}
        `}>
          Skills & Technologies
        </h2>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(category => (
            <Card key={category.category} hover={false}>
              <CardBody>
                <h3 className={`
                  text-lg font-display mb-4
                  ${isRetro ? 'text-pipe-dark' : 'text-classic-accent'}
                `}>
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
