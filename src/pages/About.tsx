import PageShell from '../components/PageShell'
import Card, { CardBody } from '../components/Card'
import { EmailIcon, LinkedInIcon, GitHubIcon } from '../components/icons'
import { useTheme } from '../context/ThemeContext'
import { about, siteConfig } from '../data/content'

export default function About() {
  const { isRetro, isDark } = useTheme()

  const tagPillClassName = `
    px-4 py-2 rounded-full text-sm font-medium
    ${isRetro 
      ? 'bg-mario-green/10 text-pipe-dark border-2 border-mario-green/20' 
      : isDark
        ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
        : 'bg-classic-accent/10 text-classic-accent'
    }
  `

  return (
    <PageShell
      title="About Me"
      subtitle="The person behind the code"
    >
      {/* Bio Section */}
      <section className="mb-12">
        <div className={`
          prose max-w-none
          ${isRetro ? 'prose-brown' : isDark ? 'prose-invert' : 'prose-gray'}
        `}>
          {about.bio.split('\n\n').map((paragraph, idx) => (
            <p
              key={idx}
              className={`
                text-lg leading-relaxed mb-4
                ${isRetro ? 'text-mario-brown/90' : isDark ? 'text-gray-300' : 'text-gray-700'}
              `}
            >
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="mb-12">
        <h2 className={`
          text-2xl font-display mb-6
          ${isRetro ? 'text-mario-brown' : isDark ? 'text-white' : 'text-gray-900'}
        `}>
          Quick Stats
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {about.highlights.map((highlight, index) => (
            <Card key={index} hover={false}>
              <CardBody className="text-center py-6">
                <div className={`
                  text-3xl sm:text-4xl font-display mb-2
                  ${isRetro ? 'text-mario-green' : isDark ? 'text-blue-400' : 'text-classic-accent'}
                `}>
                  {highlight.value}
                </div>
                <div className={`
                  text-sm
                  ${isRetro ? 'text-mario-brown/70' : isDark ? 'text-gray-300' : 'text-gray-600'}
                `}>
                  {highlight.label}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className={`
          text-2xl font-display mb-6
          ${isRetro ? 'text-mario-brown' : isDark ? 'text-white' : 'text-gray-900'}
        `}>
          Education
        </h2>
        
        <div className="space-y-4">
          {about.education.map((edu, index) => (
            <Card key={index} hover={false}>
              <CardBody className="flex items-center justify-between">
                <div>
                  <h3 className={`
                    text-lg font-display
                    ${isRetro ? 'text-mario-brown' : isDark ? 'text-white' : 'text-gray-900'}
                  `}>
                    {edu.degree}
                  </h3>
                  <p className={`
                    ${isRetro ? 'text-pipe-dark' : isDark ? 'text-blue-400' : 'text-classic-accent'}
                  `}>
                    {edu.school}
                  </p>
                </div>
                <span className={`
                  px-4 py-2 rounded-lg text-sm font-medium
                  ${isRetro 
                    ? 'bg-mario-yellow/20 text-mario-brown' 
                    : isDark
                      ? 'bg-gray-700 text-gray-300'
                      : 'bg-gray-100 text-gray-700'
                  }
                `}>
                  {edu.year}
                </span>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* Related Coursework */}
      <section className="mb-12">
        <h2 className={`
          text-2xl font-display mb-6
          ${isRetro ? 'text-mario-brown' : isDark ? 'text-white' : 'text-gray-900'}
        `}>
          Related Coursework
        </h2>
        
        <div className="flex flex-wrap gap-3">
          {about.coursework.map((course, index) => (
            <span
              key={index}
              className={tagPillClassName}
            >
              {course}
            </span>
          ))}
        </div>
      </section>

      {/* Technical skills — same pill style as Related Coursework */}
      <section className="mb-12">
        <h2 className={`
          text-2xl font-display mb-6
          ${isRetro ? 'text-mario-brown' : isDark ? 'text-white' : 'text-gray-900'}
        `}>
          Technical Skills
        </h2>

        <div className="space-y-8">
          {about.technicalSkills.map((group) => (
            <div key={group.category}>
              <h3 className={`
                text-lg font-medium mb-3
                ${isRetro ? 'text-mario-brown' : isDark ? 'text-white' : 'text-gray-900'}
              `}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item, index) => (
                  <span
                    key={`${group.category}-${item}-${index}`}
                    className={tagPillClassName}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className={`
          text-2xl font-display mb-6
          ${isRetro ? 'text-mario-brown' : isDark ? 'text-white' : 'text-gray-900'}
        `}>
          Get In Touch
        </h2>
        
        <Card hover={false}>
          <CardBody>
            <p className={`
              mb-6
              ${isRetro ? 'text-mario-brown/80' : isDark ? 'text-gray-300' : 'text-gray-600'}
            `}>
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. Feel free to reach out!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className={`
                  inline-flex items-center gap-2 px-6 py-3 rounded-lg
                  font-medium transition-all duration-200
                  ${isRetro 
                    ? 'bg-mario-green text-white hover:bg-pipe-dark' 
                    : 'bg-classic-accent text-white hover:bg-blue-600'
                  }
                `}
              >
                <EmailIcon size={20} />
                Send Email
              </a>
              
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  inline-flex items-center gap-2 px-6 py-3 rounded-lg
                  font-medium transition-all duration-200
                  ${isRetro 
                    ? 'bg-mario-blue text-white hover:bg-blue-700' 
                    : 'bg-[#0077B5] text-white hover:bg-[#005885]'
                  }
                `}
              >
                <LinkedInIcon size={20} />
                LinkedIn
              </a>
              
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  inline-flex items-center gap-2 px-6 py-3 rounded-lg
                  font-medium transition-all duration-200
                  ${isRetro 
                    ? 'bg-mario-brown text-white hover:bg-amber-900' 
                    : 'bg-gray-800 text-white hover:bg-gray-900'
                  }
                `}
              >
                <GitHubIcon size={20} />
                GitHub
              </a>
            </div>
          </CardBody>
        </Card>
      </section>
    </PageShell>
  )
}
