import { useInView } from '../hooks/useInView'
import './Skills.css'

const domains = [
  {
    name: 'Frontend',
    items: ['React', 'TypeScript', 'HTML/CSS', 'Next.js', 'Tailwind CSS', 'JavaScript'],
  },
  {
    name: 'Backend',
    items: ['Express', 'Python', 'REST APIs', 'Spring Boot', 'Laravel', 'Java'],
  },
  {
    name: 'Bases de Datos',
    items: ['PostgreSQL', 'MongoDB', 'SQL', 'SQLITE'],
  },
  {
    name: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'CI/CD', 'Linux', 'Nginx', 'Google Cloud'],
  },
  {
    name: 'Herramientas',
    items: ['Git', 'VS Code', 'Figma'],
  },
]

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section className="skills" id="skills" ref={ref}>
      <h2 className={`section-heading ${inView ? 'animate-in--fade' : 'animate-in'}`}>Skills</h2>
      <div className="skills-grid">
        {domains.map((domain, i) => (
          <div
            key={domain.name}
            className={`domain${inView ? ' domain--visible' : ''}`}
            style={{ '--domain-index': i } as React.CSSProperties}
          >
            <h3 className="domain-label">{domain.name}</h3>
            <div className="domain-underline" />
            <div className="domain-pills">
              {domain.items.map((item) => (
                <span key={item} className="domain-pill">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
