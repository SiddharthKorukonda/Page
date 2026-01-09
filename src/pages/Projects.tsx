import { useState, useMemo } from 'react'
import PageShell from '../components/PageShell'
import Card, { CardBody, CardFooter } from '../components/Card'
import TagFilter from '../components/TagFilter'
import SearchInput from '../components/SearchInput'
import { ExternalLinkIcon, GitHubIcon } from '../components/icons'
import { useTheme } from '../context/ThemeContext'
import { projects, getAllProjectTags } from '../data/content'

export default function Projects() {
  const { isRetro } = useTheme()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const allTags = useMemo(() => getAllProjectTags(), [])

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      // Filter by tag
      if (selectedTag && !project.tags.includes(selectedTag)) {
        return false
      }
      
      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        return (
          project.title.toLowerCase().includes(query) ||
          project.bullets.some(bullet => bullet.toLowerCase().includes(query)) ||
          project.techStack.some(tech => tech.toLowerCase().includes(query))
        )
      }
      
      return true
    })
  }, [searchQuery, selectedTag])

  return (
    <PageShell
      title="Projects"
      subtitle="A collection of things I've built with passion and purpose"
    >
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search projects..."
          />
        </div>
      </div>
      
      <div className="mb-8">
        <TagFilter
          tags={allTags}
          selectedTag={selectedTag}
          onSelectTag={setSelectedTag}
        />
      </div>

      {/* Results count */}
      <p className={`mb-6 text-sm ${isRetro ? 'text-mario-brown/70' : 'text-gray-500'}`}>
        Showing {filteredProjects.length} of {projects.length} projects
      </p>

      {/* Projects grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <Card key={project.id} className={`flex flex-col ${project.featured ? 'md:col-span-2' : ''}`}>
            <CardBody className="flex-1">
              {/* Title, date, and featured badge */}
              <div className="flex items-start justify-between gap-4 mb-2">
                <h2 className={`
                  text-xl font-display
                  ${isRetro ? 'text-mario-brown' : 'text-gray-900'}
                `}>
                  {project.title}
                </h2>
                {project.featured && (
                  <span className={`
                    px-3 py-1 rounded-full text-xs font-bold shrink-0
                    ${isRetro 
                      ? 'bg-mario-yellow text-mario-brown' 
                      : 'bg-classic-accent/10 text-classic-accent'
                    }
                  `}>
                    Featured
                  </span>
                )}
              </div>

              {/* Date */}
              <p className={`text-sm mb-4 ${isRetro ? 'text-mario-brown/60' : 'text-gray-500'}`}>
                {project.date}
              </p>

              {/* Bullet points */}
              <ul className="space-y-2 mb-4">
                {project.bullets.map((bullet, idx) => (
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

              {/* Tech Stack */}
              <div>
                <h3 className={`text-sm font-semibold mb-2 ${isRetro ? 'text-pipe-dark' : 'text-gray-700'}`}>
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
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
              </div>
            </CardBody>

            <CardFooter className="flex items-center justify-between">
              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="tag text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-2">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      p-2 rounded-lg transition-colors
                      ${isRetro 
                        ? 'text-mario-brown hover:bg-mario-green/10' 
                        : 'text-gray-600 hover:bg-gray-100'
                      }
                    `}
                    aria-label={`View ${project.title} demo (opens in new tab)`}
                  >
                    <ExternalLinkIcon size={18} />
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      p-2 rounded-lg transition-colors
                      ${isRetro 
                        ? 'text-mario-brown hover:bg-mario-green/10' 
                        : 'text-gray-600 hover:bg-gray-100'
                      }
                    `}
                    aria-label={`View ${project.title} source code (opens in new tab)`}
                  >
                    <GitHubIcon size={18} />
                  </a>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className={`
          text-center py-12
          ${isRetro ? 'text-mario-brown/60' : 'text-gray-500'}
        `}>
          <p className="text-lg">No projects found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchQuery('')
              setSelectedTag(null)
            }}
            className="mt-4 btn btn-secondary"
          >
            Clear filters
          </button>
        </div>
      )}
    </PageShell>
  )
}
