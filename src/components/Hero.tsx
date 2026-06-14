import type { ReactNode } from 'react'
import './Hero.css'

const socials: { icon: ReactNode; label: string; href: string }[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/eduardo-adame',
    icon: (
      <svg viewBox="0 0 19 19" fill="none" aria-hidden="true">
        <path fill="currentColor" fillRule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clipRule="evenodd"/>
      </svg>
    ),
  },
  {
    label: 'X',
    href: '#',
    icon: (
      <svg viewBox="0 0 19 19" fill="none" aria-hidden="true">
        <path fill="currentColor" fillRule="evenodd" d="M1.893 1.98c.052.072 1.245 1.769 2.653 3.77l2.892 4.114c.183.261.333.48.333.486s-.068.089-.152.183l-.522.593-.765.867-3.597 4.087c-.375.426-.734.834-.798.905a1 1 0 0 0-.118.148c0 .01.236.017.664.017h.663l.729-.83c.4-.457.796-.906.879-.999a692 692 0 0 0 1.794-2.038c.034-.037.301-.34.594-.675l.551-.624.345-.392a7 7 0 0 1 .34-.374c.006 0 .93 1.306 2.052 2.903l2.084 2.965.045.063h2.275c1.87 0 2.273-.003 2.266-.021-.008-.02-1.098-1.572-3.894-5.547-2.013-2.862-2.28-3.246-2.273-3.266.008-.019.282-.332 2.085-2.38l2-2.274 1.567-1.782c.022-.028-.016-.03-.65-.03h-.674l-.3.342a871 871 0 0 1-1.782 2.025c-.067.075-.405.458-.75.852a100 100 0 0 1-.803.91c-.148.172-.299.344-.99 1.127-.304.343-.32.358-.345.327-.015-.019-.904-1.282-1.976-2.808L6.365 1.85H1.8zm1.782.91 8.078 11.294c.772 1.08 1.413 1.973 1.425 1.984.016.017.241.02 1.05.017l1.03-.004-2.694-3.766L7.796 5.75 5.722 2.852l-1.039-.004-1.039-.004z" clipRule="evenodd"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:hello@cesar.dev',
    icon: (
      <svg viewBox="0 0 19 19" fill="none" aria-hidden="true">
        <rect x="2" y="4.5" width="15" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M2 6l7.5 5L17 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-photo" aria-label="Foto de perfil de Eduardo Adame">
        <svg className="hero-photo-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="7" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 17l5-3 4 2 4-3 5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <p className="hero-greeting animate-in--visible">
        Hola, soy
      </p>
      <h1 className="hero-name animate-in--visible">
        Eduardo Adame
      </h1>
      <p className="hero-role animate-in--visible animate-in--delay-1">
        Full Stack Developer
      </p>
      <p className="hero-description animate-in--visible animate-in--delay-1">
        Diseño, construyo, despliego y mantengo aplicaciones web modernas
        que resuelven problemas reales con código limpio y confiable.
      </p>

      <div className="hero-socials animate-in--fade animate-in--delay-2">
        {socials.map((s) => (
          <a key={s.label} href={s.href} className="hero-social-link" aria-label={s.label} target="_blank" rel="noopener noreferrer">
            {s.icon}
          </a>
        ))}
      </div>

      <div className="hero-actions animate-in--fade animate-in--delay-3">
        <a href="#projects" className="btn-filled">
          Ver mi trabajo
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <a href="#contact" className="btn-ghost">Contactar</a>
      </div>
    </section>
  )
}
