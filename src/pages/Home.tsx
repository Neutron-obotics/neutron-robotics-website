import { lazy, Suspense } from 'react'
import Reveal from '../components/Reveal'
import { useLang } from '../i18n/LangContext'

const DroneScene = lazy(() => import('../components/DroneScene'))

export default function Home() {
  const { t } = useLang()

  return (
    <section id="accueil" className="hero">
      <Suspense fallback={null}>
        <DroneScene className="hero-canvas" />
      </Suspense>
      <div className="hero-inner">
        <div className="hero-content">
          <Reveal>
            <span className="kicker">{t.home.tag}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1>
              {t.home.title}
              <br />
              <span className="gradient-text">{t.home.highlight}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p>{t.home.subtitle}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                {t.home.cta1}
              </a>
              <span className="mono" style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                {t.home.badge}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="scroll-cue">
        <span>{t.home.scroll}</span>
        <span className="line" />
      </div>
    </section>
  )
}
