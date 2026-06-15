import { useInView } from '../hooks/useInView'
import './About.css'

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section className="about" id="about" ref={ref}>
      <div className={`about-content ${inView ? 'animate-in--visible' : 'animate-in'}`}>
        <div className="about-text">
          <h2 className="section-heading">Sobre mí</h2>
          <p>
            Soy un desarrollador full stack con experiencia creando aplicaciones
            de nivel productivo en todo el stack web. Desde diseño de bases de
            datos y arquitectura de APIs hasta frontends responsivos y despliegue
            en la nube, me enfoco en construir software mantenible, eficiente y
            fácil de usar.
          </p>
          <p>
            Mi enfoque combina fundamentos sólidos de ingeniería con pensamiento
            práctico de producto. Creo que los mejores sistemas se construyen
            cuando las decisiones técnicas están guiadas por necesidades reales
            de los usuarios y objetivos de negocio.
          </p>
        </div>
        <div className="about-manifesto">
          <span className="about-manifesto-label">Manifiesto</span>
          <blockquote>
            <p>
              El mejor código es el que se puede cambiar sin miedo,
              probar sin configuración, y desplegar sin intervención manual.
            </p>
          </blockquote>
          <cite className="about-manifesto-cite">— Eduardo Adame</cite>
        </div>
      </div>
    </section>
  )
}
