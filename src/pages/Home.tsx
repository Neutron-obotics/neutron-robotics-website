import Reveal from '../components/Reveal'
import { useLang } from '../i18n/LangContext'

export default function Home() {
  const { t } = useLang()

  return (
    <section id="accueil" className="hero">
      <svg
        className="hero-decor"
        viewBox="0 0 700 700"
        width="560"
        height="560"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="m 191.59924,186.81651 a 225.3506,225.3506 0 0 1 113.75138,-30.81649 225.3506,225.3506 0 0 1 225.3506,225.3506 v 0 A 225.3506,225.3506 0 0 1 305.35062,606.70122 225.3506,225.3506 0 0 1 80.000015,381.35062 225.3506,225.3506 0 0 1 144.50223,223.51941"
          stroke="#202CAC"
          strokeWidth="2.5"
        />
        <path
          d="m 424.83582,345.88259 a 124.63825,124.63825 0 0 1 5.15305,35.46803 v 0 A 124.63825,124.63825 0 0 1 305.35062,505.98887 124.63825,124.63825 0 0 1 180.71236,381.35062 124.63825,124.63825 0 0 1 305.35062,256.71236 a 124.63825,124.63825 0 0 1 89.46371,37.85728"
          stroke="#202CAC"
          strokeWidth="2.5"
        />
        <circle r="9" cy="319.35065" cx="411.35059" fill="#FF0454" />
        <circle r="9" cy="204.6008" cx="167.6008" fill="#202CAC" />
      </svg>
      <div className="hero-inner">
        <div className="hero-content">
          <Reveal>
            <div className="hero-badge">
              <span className="dot" />
              {t.home.tag}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1>
              {t.home.title}
              <br />
              {t.home.highlight}
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
              <span className="tag">{t.home.badge}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
