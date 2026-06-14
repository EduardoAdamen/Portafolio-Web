import './Footer.css'

const groups = [
  {
    heading: 'Navegación',
    links: [
      { label: 'Sobre mí', href: '#about' },
      { label: 'Habilidades', href: '#skills' },
      { label: 'Proyectos', href: '#projects' },
      { label: 'Experiencia', href: '#experience' },
      { label: 'Contacto', href: '#contact' },
    ],
  },
  {
    heading: 'Proyectos',
    links: [
      { label: 'Ver todos los proyectos', href: '#projects' },
    ],
  },
  {
    heading: 'Redes',
    links: [
      { label: 'Correo', href: 'mailto:hello@cesar.dev' },
      { label: 'GitHub', href: '#' },
      { label: 'LinkedIn', href: '#' },
    ],
  },
  {
    heading: 'Contacto',
    links: [
      { label: 'hello@cesar.dev', href: 'mailto:hello@cesar.dev' },
      { label: 'Descargar CV', href: '#contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {groups.map((group) => (
          <div key={group.heading}>
            <h4 className="footer-group-heading">{group.heading}</h4>
            <ul className="footer-links">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Cesar. Hecho con React, TypeScript y Vite.
      </div>
    </footer>
  )
}
