import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LangContext'
import logo from '../assets/logo-long.png'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('accueil')

  const links = [
    { to: 'accueil', label: t.nav.home },
    { to: 'produit', label: t.nav.product },
    { to: 'equipe', label: t.nav.team },
    { to: 'faq', label: t.nav.faq },
    { to: 'contact', label: t.nav.contact },
  ]

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.to))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          setActive(visible[0].target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <header className="navbar">
      <nav className="nav-links">
        {links.map((l) => (
          <a key={l.to} href={`#${l.to}`} className={active === l.to ? 'active' : ''}>
            {l.label}
          </a>
        ))}
      </nav>

      <div className="nav-right">
        <div className="lang-switch">
          <button className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')}>
            FR
          </button>
          <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>
            EN
          </button>
        </div>
        <button
          className="mobile-toggle"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <a href="#accueil" className="brand brand-long" onClick={() => setOpen(false)}>
        <img src={logo} alt="Neutron Robotics" />
      </a>

      {open && (
        <nav className="mobile-menu">
          {links.map((l) => (
            <a
              key={l.to}
              href={`#${l.to}`}
              className={active === l.to ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
