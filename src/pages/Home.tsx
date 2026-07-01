import { lazy, Suspense } from 'react'
import Reveal from '../components/Reveal'
import { useLang } from '../i18n/LangContext'

const DroneScene = lazy(() => import('../components/DroneScene'))

export default function Home() {
  const { t } = useLang()

  return (
    <>
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
                <a href="#solution" className="btn btn-primary">
                  {t.home.cta1}
                </a>
                <a
                  href="https://guillaumeg22350.github.io/notice-drone/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  {t.home.cta2}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="scroll-cue">
          <span>{t.home.scroll}</span>
          <span className="line" />
        </div>
      </section>

      <section className="page">
        <Reveal>
          <div className="section-head" style={{ margin: '0 auto', textAlign: 'center' }}>
            <h2 className="gradient-text">{t.home.visionTitle}</h2>
            <p>{t.home.visionText}</p>
          </div>
        </Reveal>
      </section>
    </>
  )
}
