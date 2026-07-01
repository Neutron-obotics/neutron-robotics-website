import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLang } from '../i18n/LangContext'
import logo from '../assets/logo.png'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/', label: t.nav.home, end: true },
    { to: '/probleme-marche', label: t.nav.problem },
    { to: '/solution-produit', label: t.nav.solution },
    { to: '/equipe', label: t.nav.team },
    { to: '/contact', label: t.nav.contact },
  ]

  return (
    <header className="navbar">
      <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
        <img src={logo} alt="Neutron Robotics" />
        <span>NEUTRON ROBOTICS</span>
      </NavLink>

      <nav className="nav-links">
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => (isActive ? 'active' : '')}>
            {l.label}
          </NavLink>
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

      {open && (
        <nav className="mobile-menu">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
